# Pocket Ledger v3 — iPhone finance tracker

Offline-capable, privacy-first budgeting app with manual income/expense entry. No bank integration, logins, subscriptions or servers for financial data.

## What is new in v3
- Pie/doughnut chart of **actual spending** by category, including split category purchases.
- Side-by-side bar charts for the **last 12 months** and **last 5 calendar years**, showing recorded income and spending separately.
- Recurring expenses (weekly, every two weeks, monthly, quarterly, yearly), subscriptions and recurring paycheck schedules. Log an actual payment separately.
- **Set-aside budget** for active quarterly and yearly bills. Shows amount per month and approximate biweekly paycheck allocation. Quarterly cost/3 and annual cost/12, rounded up to a cent. These are *targets only* and do not move money or track an actual savings fund. First upcoming bill may require accelerated savings if you have not already set money aside.
- Existing features: income and expenses, categories and split transactions, transaction editing, search, subscription totals, JSON backup/restore.

## Updating your existing GitHub Pages site
1. In the iPhone app open Settings > Export backup and save the JSON in iCloud Drive. Verify it appears in Files. Do not upload financial backup files to your public GitHub repository.
2. Unzip `pocket-ledger-v3.zip` on your Windows computer.
3. Open the existing `jimmy2shanks/pocket-ledger` GitHub repo. From its root choose **Add file > Upload files**.
4. Drag **the seven extracted files individually from INSIDE the `pocket-ledger-v3` folder**, not the folder or ZIP. `index.html` must be in repository root.
5. GitHub will prompt to replace conflicting files. Commit the changes to `main`. Keep Pages set to `main` and `/(root)`.
6. After Pages completes deployment, load https://jimmy2shanks.github.io/pocket-ledger/ while online. Close and reopen the installed iPhone web app to pick up the updated version. If cached content lingers, retry while online; do NOT delete/reinstall the app or clear Safari website data without a verified backup.
7. Add a fake quarterly water bill and yearly car insurance bill in the Recurring tab; view their monthly saving targets. Check the overview charts with test transactions. Test airplane mode again.

The existing local-storage key and schema are retained so updating the code **should not overwrite existing transactions**. Backup export is v3; v1/v2/v3 exports can be restored. Because iPhone web app/browser storage is device-local and subject to deletion, always export to a private iCloud Drive location before updates or after substantial data entry.

### Important accounting details
The spending charts count *recorded expenses*, not scheduled recurring obligations or recommended set-asides. Logging a recurring payment adds it to actual expenses. The set-aside suggestion is informational only, not a dedicated funded account; it does not subtract from take-home pay. The recurring cash-flow forecast is approximate and may overlap if you also manually record future bills.

### Development
Run `python -m http.server 8000` in the unzipped directory and open `http://localhost:8000`. The service worker caches files after you first load them successfully on HTTPS. No external JS dependencies, no telemetry.
