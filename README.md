# Life OS Dashboard

A clean, modern personal productivity dashboard for tasks, inbox, meetings, notes, and connected accounts.

## Run locally

Open `index.html` directly in a browser, or serve the folder with a simple web server:

```bash
cd /path/to/this/project
python3 -m http.server 8000
```

Then visit: http://localhost:8000

## Notes

- This is a polished frontend prototype.
- It includes mock data for Gmail, Calendar, Tasks, Notes, and account connections.
- Real OAuth and external integrations should be added with secure server-side token handling.
- The dashboard is intentionally simple and easy to extend.

## Future upgrade ideas

- Google OAuth for Gmail and Calendar
- Secure backend with token storage and refresh logic
- AI summaries and action suggestions
- Search and filters across all sources
- Real task sync with Todoist, Notion, or Google Tasks
