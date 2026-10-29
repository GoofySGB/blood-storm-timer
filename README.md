# Blood Storm Timer

An unofficial browser-based Division 2 weather timer. No build step or dependencies required.

## Cycle

- **Light Fog / downtime:** 16 minutes.
- **Rain period:** 8 minutes total: **6 minutes Heavy Storm**, then **2 minutes Blood Storm / Red Rain**.
- The complete **24-minute loop** repeats automatically.

The main clock counts downtime and then the full rain period. The phase display counts Heavy Storm and Blood Storm only during rain.

## Run

Open `index.html` in a browser, or serve this folder with any static web server:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Controls

- **Start:** begin a new session in Light Fog, or continue after Stop.
- **Stop:** freeze countdowns.
- **Reset:** clear synchronization.
- **Rain period started now:** synchronize to the start of Heavy Storm.
- **Rain period ended now:** synchronize to the start of Light Fog.
- Edit **Time between rain** and **Rain period** in Cycle Settings. Rain edits preserve the 6:2 Heavy / Blood proportion and restart the current phase.

Settings and progress are saved in the current browser on this device. Optional sound and notification alerts require the page open and device awake. Browser restrictions may prevent or delay alerts. Approximate 10-second visual fades are included within phase timing.

## Files

- `index.html`: layout and controls.
- `style.css`: appearance.
- `app.js`: timer logic.
- `install.js`: visibility refresh and retirement of earlier offline caches.
- Icons, manifest, and `sw.js`: retained assets from the earlier installable version; the website does not register the service worker.

This manual timer uses user-provided timings and does not read game state. Not affiliated with Ubisoft.
