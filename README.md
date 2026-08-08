# Minors Funds Internal Staff Portal — Prototype

Static interactive prototype for the internal staff portal of إدارة شئون وأموال القاصرين.

## Files
- `login.html` — Login page with primary eKey-style SSO entry and staff fallback.
- `index.html` — Internal dashboard and Oracle APEX-oriented shell.
- `styles.css` — Shared RTL design system and responsive layout.
- `app.js` — Sidebar, tree navigation, tabs, search, and prototype interactions.

## Run
Open `login.html` directly in a modern browser. Internet access is only needed for the Google Font import; the UI falls back to system fonts if unavailable.

## Oracle APEX mapping
- Header -> Universal Theme Header Bar
- Sidebar -> Navigation Tree
- Breadcrumb -> Breadcrumb Region
- KPI cards -> Cards Region
- Main case table -> Interactive Grid placeholder
- Tabs -> Region Display Selector / tabs pattern
- CSS variables -> Theme Roller / custom CSS variables

## Branding note
The circular scales icon is a temporary placeholder. Replace it with the officially approved Bahrain/Ministry emblem asset before production deployment.


## إضافات النسخة الحالية
- Wizard موحد لفتح جميع أنواع الملفات من خمس خطوات، ويتغير تلقائيًا حسب النوع: ملف تركة، ملف قاصر مرتبط بتركة، ملف قاصر مستقل، ملف محجور عليه، وملف تحويل وتسوية حسابات الرشد.
- شاشة «عرض تفاصيل الملف» شاملة بتبويبات للبيانات الرئيسية، الأطراف، الأصول والعقارات، الحسابات والحركات، الطلبات والموافقات، المستندات، وسجل الإجراءات.
- يمكن فتح تفاصيل الملف من زر «عرض تفاصيل الملف» أو بالنقر المزدوج على صف الملف.
- المكونات منظمة بأسلوب يسهل تحويله إلى Oracle APEX Regions / Cards / Interactive Grids / Wizard Pages.
