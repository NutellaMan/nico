# Daylight — personal dashboard

A responsive, visual personal dashboard for school and everyday life. It includes a weekly activity chart, interactive tasks, a daily agenda, and a Google Classroom-inspired assignments panel.

## Run locally

Open `index.html` in a browser, or serve this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## What works now

- Add tasks, mark them complete, and show/hide completed tasks.
- Search the demo task list and rotate the encouragement card.
- Responsive desktop and mobile layouts.
- Axios is available as a configured `/api` client for future backend requests.

## Demo data and integrations

All tasks, calendar events, classroom assignments, counts, and app labels are sample UI data. The dashboard is **not connected** to Gmail, Google Calendar, Google Classroom, or any other account. Buttons explain the demo state rather than pretending an account is linked.

Real Google connections require a Google Cloud project, OAuth consent configuration, user authorization, and a secure server to store tokens and call Google APIs. Google Classroom access is subject to Google's API scopes and the user's school account permissions. Do not put OAuth client secrets or access tokens in `app.js` or other browser files. The Axios instance is only a frontend API client; there is no backend configured yet.
