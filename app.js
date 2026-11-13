const summaryData = [
  {
    title: 'Inbox',
    value: '12',
    icon: '✉',
    trend: '+3 new today',
    color: '#61dafb'
  },
  {
    title: 'Tasks',
    value: '05',
    icon: '✓',
    trend: '2 due soon',
    color: '#7c8cff'
  },
  {
    title: 'Meetings',
    value: '03',
    icon: '🗓',
    trend: '1 focus block',
    color: '#58d68d'
  },
  {
    title: 'AI notes',
    value: '09',
    icon: 'AI',
    trend: '3 auto-sorted',
    color: '#f4c95d'
  }
];

const tasks = [
  { title: 'Build launch plan', meta: 'Marketing / 10:30', done: false, priority: 'High' },
  { title: 'Reply to project thread', meta: 'Inbox / 11:00', done: false, priority: 'Medium' },
  { title: 'Review design mockups', meta: 'Product / 13:00', done: true, priority: 'Low' },
  { title: 'Plan week goals', meta: 'Life / 16:00', done: false, priority: 'High' }
];

const emails = [
  { title: 'Weekly team updates', sender: 'team@company.com', meta: '2 min ago', badge: 'Urgent', badgeClass: 'red' },
  { title: 'Client review notes', sender: 'maria@studio.net', meta: '19 min ago', badge: 'Action', badgeClass: 'amber' },
  { title: 'Travel confirmation', sender: 'booking@flysafe.io', meta: '1 hour ago', badge: 'Info', badgeClass: 'green' }
];

const calendarEvents = [
  { title: 'Deep work sprint', time: '09:00 - 10:30', meta: 'Focus time', badge: 'Design' },
  { title: '1:1 with Alex', time: '12:00 - 12:30', meta: 'Leadership', badge: 'People' },
  { title: 'Gym + recovery', time: '18:30 - 19:30', meta: 'Personal', badge: 'Health' }
];

const notes = [
  { title: 'Launch checklist', meta: 'Saved 8:18 AM' },
  { title: 'Ideas for life dashboard', meta: 'Saved yesterday' },
  { title: 'Weekly personal wins', meta: 'Saved Monday' }
];

const integrations = [
  { name: 'Gmail', status: 'Connected', meta: 'Inbox + labels', logo: 'G' },
  { name: 'Calendar', status: 'Connected', meta: 'Meetings + time blocks', logo: 'C' },
  { name: 'Notion', status: 'Setup', meta: 'Notes + tasks', logo: 'N' },
  { name: 'Slack', status: 'Connect', meta: 'Team messages', logo: 'S' }
];

function renderSummary() {
  const container = document.getElementById('summaryGrid');
  container.innerHTML = summaryData
    .map(
      (item) => `
        <article class="metric-card">
          <div class="metric-top">
            <div class="metric-icon" style="color: ${item.color}; border: 1px solid ${item.color}22;">${item.icon}</div>
          </div>
          <p class="metric-title">${item.title}</p>
          <p class="metric-value">${item.value}</p>
          <div class="metric-trend">${item.trend}</div>
        </article>
      `
    )
    .join('');
}

function renderTasks() {
  const container = document.getElementById('taskList');
  container.innerHTML = tasks
    .map(
      (task) => `
        <div class="task-item ${task.done ? 'done' : ''}">
          <div class="task-row">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="task-check"></div>
              <div class="task-title">${task.title}</div>
            </div>
            <span class="badge ${task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'amber' : 'green'}">${task.priority}</span>
          </div>
          <div class="task-meta">${task.meta}</div>
        </div>
      `
    )
    .join('');
}

function renderMail() {
  const container = document.getElementById('mailList');
  container.innerHTML = emails
    .map(
      (mail) => `
        <div class="mail-item">
          <div class="mail-row">
            <strong class="mail-title">${mail.title}</strong>
            <span class="badge ${mail.badgeClass}">${mail.badge}</span>
          </div>
          <div class="mail-meta">${mail.sender}</div>
          <div class="mail-meta">${mail.meta}</div>
        </div>
      `
    )
    .join('');
}

function renderCalendar() {
  const container = document.getElementById('calendarList');
  container.innerHTML = calendarEvents
    .map(
      (event) => `
        <div class="event-item">
          <div class="event-row">
            <div class="event-time">${event.time}</div>
            <span class="badge green">${event.badge}</span>
          </div>
          <strong>${event.title}</strong>
          <div class="event-meta">${event.meta}</div>
        </div>
      `
    )
    .join('');
}

function renderNotes() {
  const container = document.getElementById('notesList');
  container.innerHTML = notes
    .map(
      (note) => `
        <div class="note-item">
          <div class="note-title">${note.title}</div>
          <div class="note-meta">${note.meta}</div>
        </div>
      `
    )
    .join('');
}

function renderIntegrations() {
  const container = document.getElementById('integrationsList');
  container.innerHTML = integrations
    .map(
      (item) => `
        <div class="integration-item">
          <div class="integration-brand">
            <div class="integration-logo">${item.logo}</div>
            <span class="integration-status">${item.status}</span>
          </div>
          <strong>${item.name}</strong>
          <div class="integration-meta">${item.meta}</div>
          <button class="connect-button" type="button">${item.status === 'Connect' ? 'Connect' : 'Manage'}</button>
        </div>
      `
    )
    .join('');
}

renderSummary();
renderTasks();
renderMail();
renderCalendar();
renderNotes();
renderIntegrations();
