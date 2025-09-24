Meal Planner PWA (packed)
-------------------------

Files included:
- index.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png

How to use:
1) Upload these files to any static web host (GitHub Pages, Netlify, Vercel) OR
   run them locally using a simple static server (for example: `python -m http.server` in this folder)
   NOTE: service worker and install features require serving over HTTPS or localhost.

2) Open the app in Safari on iPhone (or Chrome on Android).
   - iPhone: open in Safari -> tap Share -> "Add to Home Screen" to install.
   - Android: you may see an install prompt (or use the browser menu -> Add to Home screen).

3) The app starts the week containing 2025-09-23. Add photos and notes per meal. Use "Daily Summary" for aggregated view.

Offline:
- The service worker caches core files so the app will load offline after first visit.
- Images are stored in your browser's localStorage and are available offline on that device.

Backup:
- Use Export to save JSON backups. Import is available in the web UI (via the original app). Keep backups if you add many photos.

