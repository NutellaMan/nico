const tasks = [
  { title: 'Finish biology lab report', detail: 'School · Today', category: 'School', completed: false },
  { title: 'Reply to Maya about Saturday', detail: 'Personal · Today', category: 'Personal', completed: false },
  { title: 'Review history chapter 6', detail: 'School · Tomorrow', category: 'School', completed: false },
  { title: 'Tidy up my desk', detail: 'Personal · This week', category: 'Personal', completed: true }
];

const quotes = [
  ['You don’t have to see the whole staircase,', 'just take the first step.', '— MARTIN LUTHER KING JR.'],
  ['You are allowed to be both', 'a masterpiece and a work in progress.', '— SOPHIA BUSH'],
  ['Almost everything will work again', 'if you unplug it for a few minutes.', '— ANNE LAMOTT']
];
let showCompleted = false;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function renderTasks() {
  const visible = tasks.filter((task) => showCompleted || !task.completed);
  document.getElementById('taskList').innerHTML = visible.map((task) => {
    const index = tasks.indexOf(task);
    const categoryClass = task.category === 'School' ? 'tag-school' : 'tag-personal';
    return `<div class="task-item ${task.completed ? 'completed' : ''}">
      <button class="task-toggle" type="button" data-task-index="${index}" aria-label="${task.completed ? 'Mark incomplete' : 'Complete'}: ${escapeHtml(task.title)}">${task.completed ? '✓' : ''}</button>
      <div class="task-copy"><strong>${escapeHtml(task.title)}</strong><span>${escapeHtml(task.detail)}</span></div>
      <span class="task-tag ${categoryClass}">${escapeHtml(task.category)}</span>
    </div>`;
  }).join('');
  const remaining = tasks.filter((task) => !task.completed).length;
  const done = tasks.length - remaining;
  document.getElementById('taskCount').textContent = remaining;
  document.getElementById('headingCount').textContent = remaining;
  document.getElementById('progressText').textContent = `${done} of ${tasks.length} done`;
  document.getElementById('taskProgress').style.width = `${tasks.length ? (done / tasks.length) * 100 : 0}%`;
  document.getElementById('showTasksButton').innerHTML = `${showCompleted ? 'Hide' : 'Show'} completed (${done}) <span>${showCompleted ? '↑' : '↓'}</span>`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function addTask(title) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  tasks.unshift({ title: cleanTitle, detail: 'Personal · Today', category: 'Personal', completed: false });
  showCompleted = false;
  renderTasks();
  showToast('Task added to your day. One step at a time!');
}

document.getElementById('taskList').addEventListener('click', (event) => {
  const button = event.target.closest('[data-task-index]');
  if (!button) return;
  const task = tasks[Number(button.dataset.taskIndex)];
  task.completed = !task.completed;
  renderTasks();
  showToast(task.completed ? 'Nice work — that’s one thing done.' : 'Task moved back to your list.');
});

document.getElementById('addTaskButton').addEventListener('click', () => {
  const dialog = document.getElementById('taskDialog');
  dialog.showModal();
  document.getElementById('taskInput').focus();
});

document.getElementById('taskForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('taskInput');
  addTask(input.value);
  input.value = '';
  document.getElementById('taskDialog').close();
});

document.getElementById('showTasksButton').addEventListener('click', () => {
  showCompleted = !showCompleted;
  renderTasks();
});

document.getElementById('classroomLink').addEventListener('click', () => {
  showToast('These are sample assignments. Google Classroom sync needs account authorization first.');
});

document.getElementById('searchButton').addEventListener('click', () => {
  const query = window.prompt('What are you looking for?');
  if (query && query.trim()) {
    const match = tasks.find((task) => task.title.toLowerCase().includes(query.trim().toLowerCase()));
    showToast(match ? `Found a task: ${match.title}` : 'No matching task in this demo yet.');
  }
});

document.getElementById('profileButton').addEventListener('click', () => showToast('Your personal space is ready to customize.'));
document.querySelector('.top-avatar').addEventListener('click', () => showToast('Your personal space is ready to customize.'));
document.querySelector('.round-arrow[aria-label="Next week"]').addEventListener('click', () => showToast('Weekly activity is sample data for now.'));
document.querySelector('.round-arrow[aria-label="Open calendar"]').addEventListener('click', () => showToast('Connect Google Calendar to see your real schedule.'));

document.getElementById('newQuoteButton').addEventListener('click', () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector('.quote-card p').innerHTML = `${escapeHtml(quote[0])}<br />${escapeHtml(quote[1])}`;
  document.querySelector('.quote-card>span').textContent = quote[2];
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// Axios is loaded for the eventual backend integration. Never put OAuth tokens or
// provider secrets in this browser app; authenticated integrations need a server.
const api = window.axios ? window.axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { Accept: 'application/json' }
}) : null;
window.daylightApi = api;

renderTasks();
