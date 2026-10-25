# Pocket Ledger v1

A private manual-entry budget tracker designed for iPhone as a Progressive Web App (PWA). No bank access, accounts, backend, analytics, or subscriptions.

## Features
- Record income and expenses; edit entries
- Split one expense across multiple categories (split amounts must equal total)
- Monthly income, expenses, net cash flow, and category breakdown
- Search and filter transactions
- Export/import JSON backups
- Local browser storage and offline app shell via service worker

## Test on Windows
1. Unzip the package.
2. Open a terminal in the `pocket-ledger` folder.
3. Run `python -m http.server 8000` (Python required).
4. Visit `http://localhost:8000` in a browser.

To test actual offline installation, publish on HTTPS. Opening `index.html` directly may not enable offline caching.

## Publish once so your iPhone does not depend on your PC
1. Create or sign in to a GitHub account at https://github.com.
2. Make a new public repository, e.g. `pocket-ledger`.
3. Upload the FILES *inside* this folder (`index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`) to the repository root. Do not upload the ZIP in place of its contents.
4. Under your repository **Settings > Pages**, set **Source: Deploy from a branch**, branch **main**, folder **/(root)**, and save.
5. GitHub will show the published site URL, usually `https://YOUR-USERNAME.github.io/pocket-ledger/`.
6. On iPhone, open that HTTPS URL in **Safari**, then Share > Add to Home Screen, enable **Open as Web App**, and tap Add.
7. Launch the installed app at least once while connected. Then try airplane mode to confirm that it starts offline. Your PC can be turned off throughout.

**Privacy**: On GitHub Free, repository SOURCE CODE is public. No financial records are put in the repo, and the app has no server-side storage. Transaction records remain in the browser storage of the device used. Do not upload JSON backups to the public repository.

**Backups**: In the installed app, go to Settings > Export backup and save the JSON file somewhere private using the iPhone share/download flow. Repeat regularly, especially before app upgrades or changing phones. Deleting the web app, clearing website data or iOS storage cleanup can erase records. Imported backups replace existing entries.

**Note**: Records entered in PC and iPhone browser/app are not automatically synchronized. An installed iPhone web app may use storage separate from Safari; enter your real records in the installed app and keep backups.

## Updating the app
Replace the published code files and bump the `CACHE` value in `sw.js` (for example, `pocket-ledger-app-v2`) for the new app shell. The device may need an online reload for updates. Always export a backup first.

## Known boundaries
- Monthly summary only includes recorded transactions; it does not know a bank balance.
- Recurring bills, receipt scanning, item-by-item scanner recognition, and syncing are not implemented yet.
- Only one device's data at a time; local storage may be cleared by the OS/browser.
- No encryption at rest beyond any security afforded by the phone/device itself.
