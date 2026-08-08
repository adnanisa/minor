# Minors Affairs & Funds — Bilingual Interactive Prototype

Files:
- `index.html` — login screen and the project entry point.
- `portal.html` — internal staff portal.
- `login.html` — backward-compatible redirect to `index.html`.
- `styles.css` — responsive design system for desktop/tablet/mobile.
- `app.js` — bilingual UI, navigation, file details, wizard, alerts, general ledger and account statements.

## Login
Open `index.html` in a browser. For this prototype, pressing **Enter System / الدخول للنظام** always opens `portal.html`; credentials are not validated. The eKey prototype button also opens the portal.

## Language
Choose Arabic or English on the login screen. The selection is saved in `localStorage` (`mf_lang`) and applied to the portal automatically. The portal also includes a language switch in the header. Arabic uses RTL and English uses LTR.

## Included prototype modules
- Dashboard
- All file types: Estate, Minor linked to estate, Independent minor, Interdicted person, Maturity settlement
- Full file details with parties, assets, finance, requests, documents and audit tabs
- Work alerts
- General ledger and subsidiary accounts
- Party-level and account-level current balances
- Balance Details / Account Statement with debit, credit and running balance
- Responsive mobile card layouts
- New file wizard
- Review & approval
- Reports

All names and identification numbers are fictional prototype data.
