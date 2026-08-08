(() => {
  'use strict';

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const isPortal = !!document.querySelector('.portal-body');
  const isLogin = !!document.querySelector('.login-body');

  const I18N = {
    ar: {
      kingdom:'مملكة البحرين', ministry:'وزارة العدل والشئون الإسلامية والأوقاف', ministryShort:'وزارة العدل', internalPortal:'البوابة الداخلية للموظفين',
      systemName:'نظام إدارة شئون وأموال القاصرين', shortSystemName:'شئون وأموال القاصرين', loginIntro:'منصة موحدة لإدارة الملفات والأطراف والأصول والحسابات والمراجعة والاعتماد والرقابة المالية.',
      featureFiles:'إدارة موحدة لجميع أنواع الملفات', featureLedger:'أستاذ عام وحسابات مساعدة مترابطة', featureAudit:'تنبيهات وسجل تدقيق ورقابة تشغيلية', prototypeOnly:'نموذج تجريبي للاستخدام الفني الداخلي فقط',
      signIn:'تسجيل الدخول', signInHint:'اختر اللغة ثم طريقة الدخول المناسبة.', ekeyLogin:'الدخول الموحد عبر eKey Bahrain', ekeyHint:'المسار الرئيسي للدخول الحكومي الموحد', orStaff:'أو الدخول بحساب الموظف',
      username:'اسم المستخدم', usernamePlaceholder:'مثال: n.almo', password:'كلمة المرور', rememberMe:'تذكرني على هذا الجهاز', forgotPassword:'نسيت كلمة المرور؟', enterSystem:'الدخول للنظام',
      main:'الرئيسية', dashboard:'لوحة التحكم', allFiles:'جميع الملفات', workAlerts:'تنبيهات العمل', operations:'العمليات', estateFiles:'ملفات التركات', minorFiles:'ملفات القاصرين', interdictedFiles:'ملفات المحجور عليهم', assetsProperties:'الأصول والعقارات', generalLedger:'حسابات الأستاذ العام', reviewApproval:'المراجعة والاعتماد', reports:'التقارير', administration:'الإدارة', usersPermissions:'المستخدمون والصلاحيات', settings:'الإعدادات', logout:'تسجيل الخروج', userName:'نواف محمد', systemAdmin:'مسؤول النظام',
      dashboardTitle:'لوحة التحكم التشغيلية', dashboardIntro:'ملخص موحد لحالة الملفات والتنبيهات والحسابات والعمليات التي تتطلب متابعة.', openNewFile:'فتح ملف جديد', exportFiles:'تصدير قائمة الملفات',
      newFiles:'ملفات جديدة', underReview:'قيد المراجعة', activeFiles:'ملفات فعالة', maturityPending:'مبالغ رشد غير مصروفة', last7Days:'+6 ملفات خلال آخر 7 أيام', needAction:'5 ملفات تحتاج إجراء اليوم', activePercent:'74% من إجمالي الملفات', maturityCases:'59 حساب رشد بانتظار التسوية',
      recentFiles:'أحدث الملفات', recentFilesHint:'آخر الملفات التي تم فتحها أو تحديثها', viewAll:'عرض الكل', alertsSummary:'أهم تنبيهات العمل', alertsSummaryHint:'التنبيهات التي تتطلب متابعة',
      fileNo:'رقم الملف', fileType:'نوع الملف', subject:'صاحب الملف / المتوفى', status:'الحالة', officer:'الموظف المختص', balanceAssets:'الرصيد / الأصول', action:'الإجراء', viewFileDetails:'عرض تفاصيل الملف',
      typeEstate:'ملف تركة', typeMinorLinked:'ملف قاصر مرتبط بتركة', typeMinorIndependent:'ملف قاصر مستقل', typeInterdicted:'ملف محجور عليه', typeMaturity:'تحويل وتسوية حسابات الرشد',
      statusActive:'فعال', statusReview:'قيد المراجعة', statusNew:'جديد', statusMaturity:'تسوية رشد', statusClosed:'مغلق',
      alertsTitle:'تنبيهات العمل', alertsIntro:'مركز موحد للتنبيهات التشغيلية والمالية والقضائية المتعلقة بالملفات.', allAlerts:'جميع التنبيهات', critical:'عاجل', warning:'متابعة', information:'معلومة', openRelated:'فتح التفاصيل',
      alertNoFile:'متوفون لديهم قُصّر ولم يتم فتح ملف لهم', alertNoFileDesc:'حالات واردة من مصدر البيانات وتحتاج فتح ملف تركة وربط القُصّر.', alertDeceasedMinor:'قُصّر متوفون', alertDeceasedMinorDesc:'توجد ملفات قُصّر مسجلة لديهم حالة وفاة وتحتاج مراجعة الإجراءات اللاحقة.', alertCases:'قضايا مرتبطة بالقُصّر أو أصحاب الملفات', alertCasesDesc:'قضايا جديدة أو محدثة تحتاج ربطها بملفاتها ومراجعة أثرها.', alertMaturity:'مبالغ الرشد غير المصروفة', alertMaturityDesc:'إجمالي أرصدة مستحقة لأصحاب حسابات الرشد ولم يتم صرفها بعد.', alertOverdue:'إيرادات عقارية متأخرة', alertOverdueDesc:'دفعات إيجار مستحقة تجاوزت تاريخ التحصيل المحدد.', alertDocs:'مستندات ناقصة أو منتهية', alertDocsDesc:'ملفات تحتاج استكمال مستندات أساسية أو تحديث مستندات منتهية.',
      filesTitle:'مركز الملفات', filesIntro:'البحث والتصفية والوصول إلى جميع أنواع الملفات من شاشة موحدة.', searchFiles:'ابحث برقم الملف أو الاسم أو الرقم الشخصي...', filterType:'كل أنواع الملفات', filterStatus:'كل الحالات', filterOfficer:'كل الموظفين',
      ledgerTitle:'حسابات الأستاذ العام', ledgerIntro:'نظرة مالية على الحسابات العامة والحسابات المساعدة المرتبطة بالملفات والأطراف.', chartOfAccounts:'دليل حسابات الأستاذ العام', subsidiaryAccounts:'الحسابات المساعدة', accountCode:'رمز الحساب', accountName:'اسم الحساب', category:'التصنيف', nature:'الطبيعة', currentBalance:'الرصيد الحالي', linkedFile:'الملف المرتبط', accountOwner:'صاحب الحساب', parentAccount:'حساب الأستاذ العام', balanceDetails:'تفاصيل الرصيد', debit:'مدين', credit:'دائن',
      totalBanks:'البنوك', totalCash:'الكاش / الصندوق', totalMinors:'حساب القُصّر العام', totalMaturity:'حساب الرشد العام',
      accountStatement:'كشف حركة الحساب', statementHint:'جميع حركات المدين والدائن والرصيد الجاري للحساب المساعد.', openingBalance:'الرصيد الافتتاحي', totalDebit:'إجمالي المدين', totalCredit:'إجمالي الدائن', closingBalance:'الرصيد الختامي', date:'التاريخ', reference:'المرجع', description:'وصف الحركة', runningBalance:'الرصيد بعد الحركة', noTransactions:'لا توجد حركات ضمن الفترة المحددة.',
      fileDetails:'تفاصيل الملف', overview:'نظرة عامة', parties:'الأطراف', assets:'الأصول', finance:'الحسابات والحركات', requests:'الطلبات', documents:'المستندات', audit:'سجل التدقيق',
      basicFileData:'البيانات الأساسية للملف', identityData:'بيانات الشخص / المتوفى', caseTracking:'مسؤولية ومتابعة الملف', openedDate:'تاريخ فتح الملف', personalId:'الرقم الشخصي', nationality:'الجنسية', primaryDate:'التاريخ الأساسي', courtRef:'القضية / المرجع', completeness:'نسبة اكتمال الملف', lastReview:'آخر مراجعة',
      name:'الاسم', role:'الصفة', relation:'صلة القرابة', partyBalance:'الرصيد الحالي', noSubAccount:'لا يوجد حساب مساعد', assetType:'نوع الأصل', assetDetail:'التفاصيل', value:'القيمة', allocation:'آلية التوزيع', monthlyIncome:'الدخل الشهري', yearlyIncome:'الدخل السنوي',
      sampleDistributionNote:'ملاحظة: التقسيم بالتساوي في هذا النموذج افتراضي لأغراض العرض فقط ولا يمثل القسمة الشرعية؛ الأنصبة الفعلية تخضع لحصر الورثة والفريضة الشرعية.',
      approvalsTitle:'المراجعة والاعتماد', approvalsIntro:'المعاملات والطلبات التي تنتظر المراجعة أو الاعتماد بحسب الصلاحيات.', approve:'اعتماد', returnComplete:'إعادة للاستكمال', review:'مراجعة',
      reportsTitle:'التقارير', reportsIntro:'تقارير تشغيلية ومالية ورقابية قابلة للتصفية حسب الفترة والملف والحساب.', runReport:'تشغيل التقرير', reportFiles:'تقرير حالة الملفات', reportFinancial:'التقرير المالي المجمع', reportMaturity:'تقرير حسابات الرشد', reportProperty:'تقرير إيرادات العقارات', reportAudit:'تقرير التدقيق والإجراءات', reportAlerts:'تقرير التنبيهات المتأخرة',
      usersTitle:'المستخدمون والصلاحيات', usersIntro:'إدارة المستخدمين والأدوار والصلاحيات ومستويات الوصول.', settingsTitle:'إعدادات النظام', settingsIntro:'إعدادات عامة للنظام والتنبيهات والترقيم واللغة والتكاملات.', placeholderModule:'هذه الشاشة جزء من النموذج الأولي وسيتم ربط بياناتها وإجراءاتها الفعلية في مرحلة Oracle APEX.',
      assetsTitle:'الأصول والعقارات', assetsIntro:'إدارة العقارات والوحدات والأصول المالية وربطها بالملفات والمستفيدين.', property:'العقار', units:'الوحدات', income:'الإيراد', occupancy:'الإشغال',
      newFileTitle:'فتح ملف جديد', newFileHint:'معالج مرن يغيّر البيانات المطلوبة بحسب نوع الملف.', stepBasic:'نوع الملف والبيانات الرئيسية', stepParties:'الأطراف', stepAssets:'الأصول', stepDocs:'المستندات والتكليف', stepReview:'المراجعة', next:'التالي', previous:'السابق', createFile:'إنشاء الملف', cancel:'إلغاء', chooseFileType:'اختر نوع الملف', fullName:'الاسم الكامل', deceasedName:'اسم المتوفى', minorName:'اسم القاصر', interdictedName:'اسم المحجور عليه', dateOfDeath:'تاريخ الوفاة', birthDate:'تاريخ الميلاد', startDate:'تاريخ بداية التولي', maritalStatus:'الحالة الاجتماعية', bahraini:'بحريني', addParty:'إضافة طرف', addAsset:'إضافة أصل', assignedOfficer:'الموظف المختص', priority:'الأولوية', notes:'ملاحظات', normal:'عادية', high:'عالية', urgent:'عاجلة',
      savedLanguage:'تم تغيير لغة النظام.', loginSuccess:'تم تسجيل الدخول إلى النموذج التجريبي.', forgotPrototype:'سيتم ربط استعادة كلمة المرور بخدمة الهوية في بيئة الإنتاج.', exported:'تم تجهيز قائمة الملفات للتصدير في النموذج التجريبي.', fileCreated:'تم إنشاء ملف تجريبي وإضافته إلى القائمة.', logoutDone:'تم تسجيل الخروج.',
      estatesTitle:'ملفات التركات', minorsTitle:'ملفات القاصرين', interdictedTitle:'ملفات المحجور عليهم', filteredIntro:'عرض الملفات المصنفة ضمن هذا النوع مع الوصول المباشر إلى التفاصيل والحسابات.'
    },
    en: {
      kingdom:'Kingdom of Bahrain', ministry:'Ministry of Justice, Islamic Affairs & Waqf', ministryShort:'Ministry of Justice', internalPortal:'Internal Staff Portal',
      systemName:'Minors Affairs & Funds Management System', shortSystemName:'Minors Affairs & Funds', loginIntro:'A unified platform for case files, parties, assets, accounts, review, approvals and financial oversight.',
      featureFiles:'Unified management for all file types', featureLedger:'Integrated general ledger and subsidiary accounts', featureAudit:'Alerts, audit trail and operational oversight', prototypeOnly:'Prototype for internal technical evaluation only',
      signIn:'Sign in', signInHint:'Choose your language and sign-in method.', ekeyLogin:'Sign in with eKey Bahrain', ekeyHint:'Primary government unified sign-in path', orStaff:'or use staff credentials',
      username:'Username', usernamePlaceholder:'Example: n.almo', password:'Password', rememberMe:'Remember me on this device', forgotPassword:'Forgot password?', enterSystem:'Enter system',
      main:'Home', dashboard:'Dashboard', allFiles:'All Files', workAlerts:'Work Alerts', operations:'Operations', estateFiles:'Estate Files', minorFiles:'Minor Files', interdictedFiles:'Interdicted Person Files', assetsProperties:'Assets & Properties', generalLedger:'General Ledger Accounts', reviewApproval:'Review & Approval', reports:'Reports', administration:'Administration', usersPermissions:'Users & Permissions', settings:'Settings', logout:'Sign out', userName:'Nawaf Mohammed', systemAdmin:'System Administrator',
      dashboardTitle:'Operational Dashboard', dashboardIntro:'A unified summary of file status, alerts, accounts and items requiring action.', openNewFile:'Open New File', exportFiles:'Export File List',
      newFiles:'New Files', underReview:'Under Review', activeFiles:'Active Files', maturityPending:'Unpaid Maturity Funds', last7Days:'+6 files in the last 7 days', needAction:'5 files require action today', activePercent:'74% of all files', maturityCases:'59 maturity accounts awaiting settlement',
      recentFiles:'Recent Files', recentFilesHint:'Latest files opened or updated', viewAll:'View All', alertsSummary:'Priority Work Alerts', alertsSummaryHint:'Alerts requiring follow-up',
      fileNo:'File No.', fileType:'File Type', subject:'File Owner / Deceased', status:'Status', officer:'Assigned Officer', balanceAssets:'Balance / Assets', action:'Action', viewFileDetails:'View File Details',
      typeEstate:'Estate File', typeMinorLinked:'Minor File Linked to Estate', typeMinorIndependent:'Independent Minor File', typeInterdicted:'Interdicted Person File', typeMaturity:'Maturity Account Settlement',
      statusActive:'Active', statusReview:'Under Review', statusNew:'New', statusMaturity:'Maturity Settlement', statusClosed:'Closed',
      alertsTitle:'Work Alerts', alertsIntro:'Unified center for operational, financial and judicial alerts related to files.', allAlerts:'All Alerts', critical:'Critical', warning:'Follow-up', information:'Information', openRelated:'Open Details',
      alertNoFile:'Deceased persons with minors and no file opened', alertNoFileDesc:'Incoming cases require opening an estate file and linking the minors.', alertDeceasedMinor:'Deceased minors', alertDeceasedMinorDesc:'Minor files marked as deceased require review of subsequent procedures.', alertCases:'Cases related to minors or file owners', alertCasesDesc:'New or updated court cases require linkage and impact review.', alertMaturity:'Unpaid maturity balances', alertMaturityDesc:'Total balances due to maturity-account owners that have not yet been paid.', alertOverdue:'Overdue property income', alertOverdueDesc:'Rental payments have passed their due collection dates.', alertDocs:'Missing or expired documents', alertDocsDesc:'Files require missing core documents or replacement of expired documents.',
      filesTitle:'File Center', filesIntro:'Search, filter and access all file types from one unified screen.', searchFiles:'Search by file number, name or personal ID...', filterType:'All File Types', filterStatus:'All Statuses', filterOfficer:'All Officers',
      ledgerTitle:'General Ledger Accounts', ledgerIntro:'Financial overview of general ledger and subsidiary accounts linked to files and parties.', chartOfAccounts:'General Ledger Chart of Accounts', subsidiaryAccounts:'Subsidiary Accounts', accountCode:'Account Code', accountName:'Account Name', category:'Category', nature:'Nature', currentBalance:'Current Balance', linkedFile:'Linked File', accountOwner:'Account Owner', parentAccount:'General Ledger Account', balanceDetails:'Balance Details', debit:'Debit', credit:'Credit',
      totalBanks:'Banks', totalCash:'Cash', totalMinors:'General Minors Account', totalMaturity:'General Maturity Account',
      accountStatement:'Account Statement', statementHint:'All debit/credit movements and running balance for the subsidiary account.', openingBalance:'Opening Balance', totalDebit:'Total Debit', totalCredit:'Total Credit', closingBalance:'Closing Balance', date:'Date', reference:'Reference', description:'Transaction Description', runningBalance:'Running Balance', noTransactions:'No transactions within the selected period.',
      fileDetails:'File Details', overview:'Overview', parties:'Parties', assets:'Assets', finance:'Accounts & Movements', requests:'Requests', documents:'Documents', audit:'Audit Trail',
      basicFileData:'Basic File Information', identityData:'Person / Deceased Information', caseTracking:'File Responsibility & Tracking', openedDate:'File Opened', personalId:'Personal ID', nationality:'Nationality', primaryDate:'Primary Date', courtRef:'Case / Reference', completeness:'File Completeness', lastReview:'Last Review',
      name:'Name', role:'Role', relation:'Relationship', partyBalance:'Current Balance', noSubAccount:'No subsidiary account', assetType:'Asset Type', assetDetail:'Details', value:'Value', allocation:'Allocation Method', monthlyIncome:'Monthly Income', yearlyIncome:'Annual Income',
      sampleDistributionNote:'Note: Equal distribution in this prototype is for demonstration only and does not represent legal or Sharia inheritance shares. Actual shares are determined by the formal heir inventory and applicable inheritance ruling.',
      approvalsTitle:'Review & Approval', approvalsIntro:'Transactions and requests awaiting review or approval based on assigned permissions.', approve:'Approve', returnComplete:'Return for Completion', review:'Review',
      reportsTitle:'Reports', reportsIntro:'Operational, financial and oversight reports filterable by period, file and account.', runReport:'Run Report', reportFiles:'File Status Report', reportFinancial:'Consolidated Financial Report', reportMaturity:'Maturity Accounts Report', reportProperty:'Property Income Report', reportAudit:'Audit & Actions Report', reportAlerts:'Overdue Alerts Report',
      usersTitle:'Users & Permissions', usersIntro:'Manage users, roles, permissions and access levels.', settingsTitle:'System Settings', settingsIntro:'General settings for alerts, numbering, language and integrations.', placeholderModule:'This module is part of the prototype and will be connected to production data and Oracle APEX workflows in the implementation phase.',
      assetsTitle:'Assets & Properties', assetsIntro:'Manage properties, units and financial assets and link them to files and beneficiaries.', property:'Property', units:'Units', income:'Income', occupancy:'Occupancy',
      newFileTitle:'Open New File', newFileHint:'A flexible wizard that changes required information by file type.', stepBasic:'File Type & Main Information', stepParties:'Parties', stepAssets:'Assets', stepDocs:'Documents & Assignment', stepReview:'Review', next:'Next', previous:'Previous', createFile:'Create File', cancel:'Cancel', chooseFileType:'Choose File Type', fullName:'Full Name', deceasedName:'Deceased Name', minorName:'Minor Name', interdictedName:'Interdicted Person Name', dateOfDeath:'Date of Death', birthDate:'Date of Birth', startDate:'Start of Administration', maritalStatus:'Marital Status', bahraini:'Bahraini', addParty:'Add Party', addAsset:'Add Asset', assignedOfficer:'Assigned Officer', priority:'Priority', notes:'Notes', normal:'Normal', high:'High', urgent:'Urgent',
      savedLanguage:'System language changed.', loginSuccess:'Signed in to the prototype.', forgotPrototype:'Password recovery will be linked to the identity service in production.', exported:'File list prepared for export in the prototype.', fileCreated:'Prototype file created and added to the list.', logoutDone:'Signed out.',
      estatesTitle:'Estate Files', minorsTitle:'Minor Files', interdictedTitle:'Interdicted Person Files', filteredIntro:'Files classified under this type with direct access to details and financial accounts.'
    }
  };

  let lang = localStorage.getItem('mf_lang') || 'ar';
  let currentPage = 'dashboard';
  let wizardStep = 0;
  const wizardState = { type:'estate', name:'', id:'', date:'', parties:[], assets:[], officer:'Fatima Ali', priority:'normal', notes:'' };

  const files = [
    {id:'TR-2024-00124', type:'estate', status:'active', name:{ar:'أحمد يوسف عبدالله الهاشمي',en:'Ahmed Yousif Abdullah Al Hashimi'}, pid:'750123456', officer:{ar:'فاطمة علي',en:'Fatima Ali'}, opened:'2024-01-04', balance:721350, caseNo:'EST-2024-124', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2024-01-01', completeness:94},
    {id:'HJ-2020-00031', type:'interdicted', status:'active', name:{ar:'خالد عبدالرحمن محمد البنعلي',en:'Khalid Abdulrahman Mohammed Al Bin Ali'}, pid:'650789012', officer:{ar:'أحمد سلمان',en:'Ahmed Salman'}, opened:'2020-01-01', balance:70000, caseNo:'HJ-2020-31', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2020-01-01', completeness:97},
    {id:'MN-2026-01933', type:'minorLinked', status:'review', name:{ar:'محمد علي حسن',en:'Mohammed Ali Hassan'}, pid:'140987654', officer:{ar:'ليلى حسن',en:'Laila Hassan'}, opened:'2026-08-02', balance:42850.5, caseNo:'MN-2026-1933', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2014-06-15', completeness:82},
    {id:'MI-2026-00041', type:'minorIndependent', status:'new', name:{ar:'سلمان يوسف علي',en:'Salman Yousif Ali'}, pid:'150456789', officer:{ar:'فاطمة علي',en:'Fatima Ali'}, opened:'2026-08-08', balance:27300, caseNo:'MI-2026-41', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2015-02-11', completeness:61},
    {id:'AD-2026-01104', type:'maturity', status:'maturity', name:{ar:'فاطمة حسن علي',en:'Fatima Hassan Ali'}, pid:'080567890', officer:{ar:'يوسف محمد',en:'Yousif Mohammed'}, opened:'2026-07-12', balance:61125, caseNo:'AD-2026-1104', nationality:{ar:'بحرينية',en:'Bahraini'}, primaryDate:'2008-01-17', completeness:100},
    {id:'TR-2025-00876', type:'estate', status:'review', name:{ar:'يوسف محمود حسن',en:'Yousif Mahmood Hassan'}, pid:'690334455', officer:{ar:'ليلى حسن',en:'Laila Hassan'}, opened:'2025-11-21', balance:310220.75, caseNo:'EST-2025-876', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2025-11-14', completeness:88},
    {id:'HJ-2026-00204', type:'interdicted', status:'active', name:{ar:'علي جاسم محمد',en:'Ali Jassim Mohammed'}, pid:'670112233', officer:{ar:'أحمد سلمان',en:'Ahmed Salman'}, opened:'2026-04-10', balance:19600, caseNo:'HJ-2026-204', nationality:{ar:'بحريني',en:'Bahraini'}, primaryDate:'2026-04-10', completeness:91}
  ];

  const estateParties = [
    {name:{ar:'مريم حسن علي الهاشمي',en:'Maryam Hassan Ali Al Hashimi'}, role:{ar:'الزوجة',en:'Wife'}, relation:{ar:'زوجة',en:'Spouse'}, pid:'780234567', account:'EST-AH-01'},
    {name:{ar:'يوسف أحمد يوسف الهاشمي',en:'Yousif Ahmed Yousif Al Hashimi'}, role:{ar:'ابن',en:'Son'}, relation:{ar:'ابن',en:'Son'}, pid:'010345678', account:'EST-AH-02'},
    {name:{ar:'عبدالله أحمد يوسف الهاشمي',en:'Abdullah Ahmed Yousif Al Hashimi'}, role:{ar:'ابن',en:'Son'}, relation:{ar:'ابن',en:'Son'}, pid:'050456789', account:'EST-AH-03'},
    {name:{ar:'فاطمة أحمد يوسف الهاشمي',en:'Fatima Ahmed Yousif Al Hashimi'}, role:{ar:'ابنة',en:'Daughter'}, relation:{ar:'ابنة',en:'Daughter'}, pid:'080567890', account:'EST-AH-04'},
    {name:{ar:'زينب أحمد يوسف الهاشمي',en:'Zainab Ahmed Yousif Al Hashimi'}, role:{ar:'ابنة',en:'Daughter'}, relation:{ar:'ابنة',en:'Daughter'}, pid:'120678901', account:'EST-AH-05'}
  ];

  const interdictedParties = [
    {name:{ar:'نورة إبراهيم حسن البنعلي',en:'Noora Ibrahim Hassan Al Bin Ali'}, role:{ar:'القائمة على شؤونه',en:'Person in Charge'}, relation:{ar:'الزوجة',en:'Wife'}, pid:'700890123', account:'HJ-KH-01'}
  ];

  const assetsByFile = {
    'TR-2024-00124': [
      {type:{ar:'عقار سكني',en:'Residential Property'}, detail:{ar:'منزل سكني مملوك للمتوفى',en:'Residential house owned by the deceased'}, value:460000, allocation:{ar:'مقسم بالتساوي افتراضياً بين الورثة الخمسة',en:'Prototype equal split among five heirs'}},
      {type:{ar:'عقار تجاري',en:'Commercial Property'}, detail:{ar:'مبنى يضم أربعة محلات تجارية',en:'Building with four commercial shops'}, value:260550, allocation:{ar:'مقسم بالتساوي افتراضياً بين الورثة الخمسة',en:'Prototype equal split among five heirs'}, monthly:800, yearly:9600}
    ],
    'HJ-2020-00031': [
      {type:{ar:'رصيد مالي',en:'Financial Balance'}, detail:{ar:'الرصيد المالي عند إعداد النموذج',en:'Financial balance at prototype date'}, value:70000, allocation:{ar:'مملوك لصاحب الملف',en:'Owned by file holder'}}
    ]
  };

  const generalAccounts = [
    {code:'110100', name:{ar:'حسابات البنوك',en:'Bank Accounts'}, category:{ar:'أصول نقدية',en:'Cash Assets'}, nature:'debit', balance:1284500},
    {code:'110200', name:{ar:'الكاش / الصندوق',en:'Cash / Treasury'}, category:{ar:'أصول نقدية',en:'Cash Assets'}, nature:'debit', balance:46250},
    {code:'210100', name:{ar:'حساب القُصّر العام',en:'General Minors Account'}, category:{ar:'حسابات أمانات',en:'Trust Accounts'}, nature:'credit', balance:563480.5},
    {code:'210200', name:{ar:'حساب الرشد العام',en:'General Maturity Account'}, category:{ar:'حسابات أمانات',en:'Trust Accounts'}, nature:'credit', balance:184750},
    {code:'210300', name:{ar:'حساب المحجور عليهم العام',en:'General Interdicted Persons Account'}, category:{ar:'حسابات أمانات',en:'Trust Accounts'}, nature:'credit', balance:206000},
    {code:'210400', name:{ar:'حساب التركات العام',en:'General Estates Account'}, category:{ar:'حسابات أمانات',en:'Trust Accounts'}, nature:'credit', balance:721350},
    {code:'410100', name:{ar:'إيرادات العقارات',en:'Property Income'}, category:{ar:'إيرادات',en:'Revenue'}, nature:'credit', balance:93600},
    {code:'510100', name:{ar:'مصروفات الملفات',en:'File Expenses'}, category:{ar:'مصروفات',en:'Expenses'}, nature:'debit', balance:28400}
  ];

  const subsidiaryAccounts = [
    {id:'EST-AH-01', parent:'210400', file:'TR-2024-00124', owner:estateParties[0].name, role:estateParties[0].role, opening:0, balance:160},
    {id:'EST-AH-02', parent:'210400', file:'TR-2024-00124', owner:estateParties[1].name, role:estateParties[1].role, opening:0, balance:160},
    {id:'EST-AH-03', parent:'210400', file:'TR-2024-00124', owner:estateParties[2].name, role:estateParties[2].role, opening:0, balance:160},
    {id:'EST-AH-04', parent:'210400', file:'TR-2024-00124', owner:estateParties[3].name, role:estateParties[3].role, opening:0, balance:160},
    {id:'EST-AH-05', parent:'210400', file:'TR-2024-00124', owner:estateParties[4].name, role:estateParties[4].role, opening:0, balance:160},
    {id:'HJ-KH-01', parent:'210300', file:'HJ-2020-00031', owner:{ar:'خالد عبدالرحمن محمد البنعلي',en:'Khalid Abdulrahman Mohammed Al Bin Ali'}, role:{ar:'صاحب ملف محجور عليه',en:'Interdicted File Owner'}, opening:68900, balance:70000},
    {id:'MN-MH-01', parent:'210100', file:'MN-2026-01933', owner:{ar:'محمد علي حسن',en:'Mohammed Ali Hassan'}, role:{ar:'قاصر',en:'Minor'}, opening:42850.5, balance:42850.5},
    {id:'MN-SL-01', parent:'210100', file:'MI-2026-00041', owner:{ar:'سلمان يوسف علي',en:'Salman Yousif Ali'}, role:{ar:'قاصر',en:'Minor'}, opening:27300, balance:27300},
    {id:'AD-FT-01', parent:'210200', file:'AD-2026-01104', owner:{ar:'فاطمة حسن علي',en:'Fatima Hassan Ali'}, role:{ar:'صاحب حساب رشد',en:'Maturity Account Owner'}, opening:61125, balance:61125}
  ];

  const transactions = {
    'EST-AH-01': [{date:'2026-07-31',ref:'JR-2026-07131-01',desc:{ar:'حصة افتراضية من إيراد العقار التجاري – يوليو',en:'Prototype share of commercial property income – July'},debit:0,credit:160}],
    'EST-AH-02': [{date:'2026-07-31',ref:'JR-2026-07131-02',desc:{ar:'حصة افتراضية من إيراد العقار التجاري – يوليو',en:'Prototype share of commercial property income – July'},debit:0,credit:160}],
    'EST-AH-03': [{date:'2026-07-31',ref:'JR-2026-07131-03',desc:{ar:'حصة افتراضية من إيراد العقار التجاري – يوليو',en:'Prototype share of commercial property income – July'},debit:0,credit:160}],
    'EST-AH-04': [{date:'2026-07-31',ref:'JR-2026-07131-04',desc:{ar:'حصة افتراضية من إيراد العقار التجاري – يوليو',en:'Prototype share of commercial property income – July'},debit:0,credit:160}],
    'EST-AH-05': [{date:'2026-07-31',ref:'JR-2026-07131-05',desc:{ar:'حصة افتراضية من إيراد العقار التجاري – يوليو',en:'Prototype share of commercial property income – July'},debit:0,credit:160}],
    'HJ-KH-01': [
      {date:'2026-07-25',ref:'RC-2026-0725',desc:{ar:'إيداع المعاش التقاعدي الشهري',en:'Monthly pension deposit'},debit:0,credit:2000},
      {date:'2026-07-28',ref:'PV-2026-0728',desc:{ar:'صرف النفقة الشهرية المعتمدة',en:'Approved monthly allowance payment'},debit:900,credit:0}
    ],
    'MN-MH-01':[], 'MN-SL-01':[], 'AD-FT-01':[]
  };

  const alerts = [
    {kind:'critical',icon:'⚠',title:'alertNoFile',desc:'alertNoFileDesc',value:'12',unit:{ar:'حالة',en:'cases'}},
    {kind:'critical',icon:'✝',title:'alertDeceasedMinor',desc:'alertDeceasedMinorDesc',value:'3',unit:{ar:'ملفات',en:'files'}},
    {kind:'warning',icon:'⚖',title:'alertCases',desc:'alertCasesDesc',value:'9',unit:{ar:'قضايا',en:'cases'}},
    {kind:'critical',icon:'💰',title:'alertMaturity',desc:'alertMaturityDesc',value:'184,750',unit:{ar:'د.ب',en:'BHD'}},
    {kind:'warning',icon:'🏠',title:'alertOverdue',desc:'alertOverdueDesc',value:'7',unit:{ar:'دفعات',en:'payments'}},
    {kind:'info',icon:'📄',title:'alertDocs',desc:'alertDocsDesc',value:'21',unit:{ar:'ملف',en:'files'}}
  ];

  const approvals = [
    {title:{ar:'طلب صرف نفقة شهرية',en:'Monthly Allowance Payment Request'},file:'HJ-2020-00031',owner:{ar:'خالد عبدالرحمن محمد البنعلي',en:'Khalid Abdulrahman Mohammed Al Bin Ali'},amount:900,age:{ar:'منذ ساعتين',en:'2 hours ago'}},
    {title:{ar:'اعتماد إيراد عقار تجاري',en:'Commercial Property Income Approval'},file:'TR-2024-00124',owner:{ar:'تركة أحمد الهاشمي',en:'Estate of Ahmed Al Hashimi'},amount:800,age:{ar:'منذ 4 ساعات',en:'4 hours ago'}},
    {title:{ar:'طلب تسوية حساب رشد',en:'Maturity Account Settlement Request'},file:'AD-2026-01104',owner:{ar:'فاطمة حسن علي',en:'Fatima Hassan Ali'},amount:61125,age:{ar:'منذ يوم',en:'1 day ago'}}
  ];

  const properties = [
    {file:'TR-2024-00124',name:{ar:'العقار الأول',en:'Property 1'},type:{ar:'سكني',en:'Residential'},units:1,income:0,occupancy:'100%'},
    {file:'TR-2024-00124',name:{ar:'العقار الثاني',en:'Property 2'},type:{ar:'تجاري',en:'Commercial'},units:4,income:800,occupancy:'100%'},
    {file:'TR-2025-00876',name:{ar:'مبنى استثماري',en:'Investment Building'},type:{ar:'تجاري',en:'Commercial'},units:8,income:3250,occupancy:'88%'}
  ];

  function t(key){ return I18N[lang][key] ?? key; }
  function loc(v){ return v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.ar ?? v.en ?? '') : (v ?? ''); }
  function money(v){ return new Intl.NumberFormat(lang === 'ar' ? 'ar-BH' : 'en-BH',{minimumFractionDigits:3,maximumFractionDigits:3}).format(Number(v||0)); }
  function dateFmt(v){ if(!v) return '—'; try{return new Intl.DateTimeFormat(lang === 'ar'?'ar-BH':'en-GB',{year:'numeric',month:'short',day:'numeric'}).format(new Date(v));}catch{return v;} }
  function typeLabel(type){ return t({estate:'typeEstate',minorLinked:'typeMinorLinked',minorIndependent:'typeMinorIndependent',interdicted:'typeInterdicted',maturity:'typeMaturity'}[type]); }
  function statusLabel(status){ return t({active:'statusActive',review:'statusReview',new:'statusNew',maturity:'statusMaturity',closed:'statusClosed'}[status]); }
  function statusHtml(status){ return `<span class="status ${status}">${statusLabel(status)}</span>`; }
  function esc(s){ return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

  function applyLanguage(newLang, rerender=true){
    lang = newLang === 'en' ? 'en' : 'ar';
    localStorage.setItem('mf_lang',lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    $$('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
    $$('.lang-btn').forEach(btn => btn.classList.toggle('active',btn.dataset.lang===lang));
    if(isLogin) document.title = `${t('signIn')} | ${t('shortSystemName')}`;
    if(isPortal){ document.title = `${t('dashboard')} | ${t('shortSystemName')}`; if(rerender) renderPage(currentPage); }
  }

  function toast(msg){
    const el=$('#toast'); if(!el) return; el.textContent=msg; el.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.remove('show'),2300);
  }

  function table(headers, rows, cls='responsive-table'){
    return `<div class="table-wrap"><table class="data-table ${cls}"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td data-label="${esc(headers[i])}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function pageHeader(title, intro, actions=''){
    return `<section class="page-header"><div><h1>${title}</h1><p>${intro}</p></div><div class="page-actions">${actions}</div></section>`;
  }

  function filesRows(list=files){
    return list.map(f=>[
      `<div class="case-name">${esc(f.id)}</div><div class="case-sub">${esc(f.caseNo)}</div>`,
      typeLabel(f.type),
      `<div class="case-name">${esc(loc(f.name))}</div><div class="case-sub">${esc(f.pid)}</div>`,
      statusHtml(f.status),
      esc(loc(f.officer)),
      `<span class="amount">${money(f.balance)} BHD</span>`,
      `<button class="btn btn-sm view-file" data-file="${f.id}">${t('viewFileDetails')}</button>`
    ]);
  }

  function alertsHtml(items=alerts){
    return `<div class="alert-stack">${items.map((a,i)=>`<article class="alert-card ${a.kind}"><div class="alert-icon">${a.icon}</div><div class="alert-copy"><strong>${t(a.title)}</strong><span>${t(a.desc)}</span></div><div class="alert-value"><strong>${a.value}</strong><small>${loc(a.unit)}</small><div><button class="panel-link open-alert" data-alert="${i}">${t('openRelated')}</button></div></div></article>`).join('')}</div>`;
  }

  function renderDashboard(){
    return `${pageHeader(t('dashboardTitle'),t('dashboardIntro'),`<button class="btn" id="exportBtn">⇩ ${t('exportFiles')}</button><button class="btn btn-primary" id="newFileBtn">＋ ${t('openNewFile')}</button>`)}
      <section class="kpi-grid">
        <article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${t('newFiles')}</span><span class="kpi-icon">📁</span></div><div class="kpi-number">24</div><div class="kpi-foot"><strong>${t('last7Days')}</strong></div></article>
        <article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${t('underReview')}</span><span class="kpi-icon">⌛</span></div><div class="kpi-number">17</div><div class="kpi-foot">${t('needAction')}</div></article>
        <article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${t('activeFiles')}</span><span class="kpi-icon">✓</span></div><div class="kpi-number">286</div><div class="kpi-foot">${t('activePercent')}</div></article>
        <article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${t('maturityPending')}</span><span class="kpi-icon">💰</span></div><div class="kpi-number">${money(184750)}</div><div class="kpi-foot">${t('maturityCases')}</div></article>
      </section>
      <section class="dashboard-grid">
        <div class="panel"><div class="panel-head"><div><h3>${t('recentFiles')}</h3><p>${t('recentFilesHint')}</p></div><button class="panel-link goto-page" data-page="files">${t('viewAll')}</button></div><div class="panel-body flush">${table([t('fileNo'),t('fileType'),t('subject'),t('status'),t('officer'),t('balanceAssets'),t('action')],filesRows(files.slice(0,5)))}</div></div>
        <div class="panel"><div class="panel-head"><div><h3>${t('alertsSummary')}</h3><p>${t('alertsSummaryHint')}</p></div><button class="panel-link goto-page" data-page="alerts">${t('viewAll')}</button></div><div class="panel-body">${alertsHtml(alerts.slice(0,4))}</div></div>
      </section>
      <section style="margin-top:18px" class="panel"><div class="panel-head"><div><h3>${t('ledgerTitle')}</h3><p>${t('ledgerIntro')}</p></div><button class="panel-link goto-page" data-page="ledger">${t('viewAll')}</button></div><div class="panel-body"><div class="finance-overview">${[
        [t('totalBanks'),1284500,'110100'],[t('totalCash'),46250,'110200'],[t('totalMinors'),563480.5,'210100'],[t('totalMaturity'),184750,'210200']
      ].map(x=>`<div class="finance-card"><span>${x[0]}</span><strong>${money(x[1])} BHD</strong><small>${x[2]}</small></div>`).join('')}</div></div></section>`;
  }

  function renderFiles(filterType=''){
    const title = filterType==='estate'?t('estatesTitle'):filterType==='interdicted'?t('interdictedTitle'):filterType==='minor'?t('minorsTitle'):t('filesTitle');
    const intro = filterType?t('filteredIntro'):t('filesIntro');
    const list = filterType==='estate'?files.filter(f=>f.type==='estate'):filterType==='interdicted'?files.filter(f=>f.type==='interdicted'):filterType==='minor'?files.filter(f=>['minorLinked','minorIndependent','maturity'].includes(f.type)):files;
    return `${pageHeader(title,intro,`<button class="btn btn-primary" id="newFileBtn">＋ ${t('openNewFile')}</button>`)}
      <div class="panel"><div class="panel-body"><div class="table-tools"><div class="search-control"><input id="fileSearch" placeholder="${t('searchFiles')}"></div><select id="typeFilter" class="filter-control"><option value="">${t('filterType')}</option><option value="estate">${t('typeEstate')}</option><option value="minorLinked">${t('typeMinorLinked')}</option><option value="minorIndependent">${t('typeMinorIndependent')}</option><option value="interdicted">${t('typeInterdicted')}</option><option value="maturity">${t('typeMaturity')}</option></select><select id="statusFilter" class="filter-control"><option value="">${t('filterStatus')}</option><option value="active">${t('statusActive')}</option><option value="review">${t('statusReview')}</option><option value="new">${t('statusNew')}</option><option value="maturity">${t('statusMaturity')}</option></select></div><div id="filesTable">${table([t('fileNo'),t('fileType'),t('subject'),t('status'),t('officer'),t('balanceAssets'),t('action')],filesRows(list))}</div></div></div>`;
  }

  function renderAlerts(){
    return `${pageHeader(t('alertsTitle'),t('alertsIntro'))}<div class="panel"><div class="panel-body">${alertsHtml()}</div></div>`;
  }

  function renderLedger(){
    const glRows=generalAccounts.map(a=>[a.code,esc(loc(a.name)),esc(loc(a.category)),a.nature==='debit'?t('debit'):t('credit'),`<span class="amount">${money(a.balance)} BHD</span>`]);
    const subRows=subsidiaryAccounts.map(a=>[a.id,esc(loc(a.owner)),a.file,esc(loc(generalAccounts.find(g=>g.code===a.parent)?.name||a.parent)),`<span class="amount">${money(a.balance)} BHD</span>`,`<button class="btn btn-sm balance-details" data-account="${a.id}">${t('balanceDetails')}</button>`]);
    return `${pageHeader(t('ledgerTitle'),t('ledgerIntro'))}
      <section class="finance-overview">${[
        [t('totalBanks'),1284500,'110100'],[t('totalCash'),46250,'110200'],[t('totalMinors'),563480.5,'210100'],[t('totalMaturity'),184750,'210200']
      ].map(x=>`<div class="finance-card"><span>${x[0]}</span><strong>${money(x[1])} BHD</strong><small>${x[2]}</small></div>`).join('')}</section>
      <section style="margin-top:18px" class="panel"><div class="panel-head"><div><h3>${t('chartOfAccounts')}</h3></div></div><div class="panel-body flush">${table([t('accountCode'),t('accountName'),t('category'),t('nature'),t('currentBalance')],glRows)}</div></section>
      <section style="margin-top:18px" class="panel"><div class="panel-head"><div><h3>${t('subsidiaryAccounts')}</h3></div></div><div class="panel-body flush">${table([t('accountCode'),t('accountOwner'),t('linkedFile'),t('parentAccount'),t('currentBalance'),t('action')],subRows)}</div></section>`;
  }

  function renderAssets(){
    return `${pageHeader(t('assetsTitle'),t('assetsIntro'))}<div class="panel"><div class="panel-body flush">${table([t('linkedFile'),t('property'),t('assetType'),t('units'),t('income'),t('occupancy')],properties.map(p=>[p.file,esc(loc(p.name)),esc(loc(p.type)),p.units,`${money(p.income)} BHD`,p.occupancy]))}</div></div>`;
  }

  function renderApprovals(){
    return `${pageHeader(t('approvalsTitle'),t('approvalsIntro'))}<div class="cards-grid">${approvals.map(a=>`<article class="approval-card"><h4>${esc(loc(a.title))}</h4><p>${a.file} · ${esc(loc(a.owner))}</p><div class="approval-meta"><span class="chip gold">${money(a.amount)} BHD</span><span class="chip">${esc(loc(a.age))}</span></div><div class="page-actions"><button class="btn btn-sm">${t('review')}</button><button class="btn btn-sm">${t('returnComplete')}</button><button class="btn btn-sm btn-primary">${t('approve')}</button></div></article>`).join('')}</div>`;
  }

  function renderReports(){
    const items=[['📁','reportFiles'],['💳','reportFinancial'],['🎓','reportMaturity'],['🏠','reportProperty'],['🧾','reportAudit'],['🔔','reportAlerts']];
    return `${pageHeader(t('reportsTitle'),t('reportsIntro'))}<div class="cards-grid">${items.map(i=>`<article class="report-card"><div style="font-size:25px">${i[0]}</div><h4>${t(i[1])}</h4><p>${t('reportsIntro')}</p><button class="btn full">${t('runReport')}</button></article>`).join('')}</div>`;
  }

  function renderPlaceholder(kind){
    const title=kind==='users'?t('usersTitle'):t('settingsTitle');
    const intro=kind==='users'?t('usersIntro'):t('settingsIntro');
    return `${pageHeader(title,intro)}<div class="panel"><div class="empty-state"><div class="empty-icon">${kind==='users'?'👥':'⚙'}</div><h3>${title}</h3><p>${t('placeholderModule')}</p></div></div>`;
  }

  function renderPage(page){
    currentPage=page;
    const content=$('#pageContent'); if(!content) return;
    const map={dashboard:()=>renderDashboard(),files:()=>renderFiles(),alerts:()=>renderAlerts(),estates:()=>renderFiles('estate'),minors:()=>renderFiles('minor'),interdicted:()=>renderFiles('interdicted'),assets:()=>renderAssets(),ledger:()=>renderLedger(),approvals:()=>renderApprovals(),reports:()=>renderReports(),users:()=>renderPlaceholder('users'),settings:()=>renderPlaceholder('settings')};
    content.innerHTML=(map[page]||map.dashboard)();
    const nav=$(`.nav-link[data-page="${page}"]`); $$('.nav-link[data-page]').forEach(n=>n.classList.toggle('active',n===nav));
    const titleKey={dashboard:'dashboard',files:'allFiles',alerts:'workAlerts',estates:'estateFiles',minors:'minorFiles',interdicted:'interdictedFiles',assets:'assetsProperties',ledger:'generalLedger',approvals:'reviewApproval',reports:'reports',users:'usersPermissions',settings:'settings'}[page]||'dashboard';
    $('#breadcrumbTitle').textContent=t(titleKey);
    bindPageEvents();
    window.scrollTo({top:0,behavior:'instant'});
  }

  function bindPageEvents(){
    $$('.goto-page').forEach(b=>b.onclick=()=>renderPage(b.dataset.page));
    $$('.view-file').forEach(b=>b.onclick=()=>openFile(b.dataset.file));
    $$('.balance-details').forEach(b=>b.onclick=()=>openStatement(b.dataset.account));
    $$('.open-alert').forEach(b=>b.onclick=()=>openAlert(Number(b.dataset.alert)));
    const newBtn=$('#newFileBtn'); if(newBtn)newBtn.onclick=openWizard;
    const exportBtn=$('#exportBtn'); if(exportBtn)exportBtn.onclick=()=>toast(t('exported'));
    const fileSearch=$('#fileSearch'), typeFilter=$('#typeFilter'), statusFilter=$('#statusFilter');
    if(fileSearch || typeFilter || statusFilter){ const run=()=>filterFiles(); if(fileSearch)fileSearch.oninput=run;if(typeFilter)typeFilter.onchange=run;if(statusFilter)statusFilter.onchange=run; }
  }

  function filterFiles(){
    const q=($('#fileSearch')?.value||'').trim().toLowerCase(); const type=$('#typeFilter')?.value||''; const status=$('#statusFilter')?.value||'';
    const list=files.filter(f=>(!type||f.type===type)&&(!status||f.status===status)&&(!q||[f.id,loc(f.name),f.pid,f.caseNo,loc(f.officer)].join(' ').toLowerCase().includes(q)));
    $('#filesTable').innerHTML=table([t('fileNo'),t('fileType'),t('subject'),t('status'),t('officer'),t('balanceAssets'),t('action')],filesRows(list));
    $$('.view-file').forEach(b=>b.onclick=()=>openFile(b.dataset.file));
  }

  function getParties(file){
    if(file.id==='TR-2024-00124') return estateParties;
    if(file.id==='HJ-2020-00031') return interdictedParties;
    const account=subsidiaryAccounts.find(a=>a.file===file.id);
    return [{name:file.name,role:{ar:'صاحب الملف',en:'File Owner'},relation:{ar:'—',en:'—'},pid:file.pid,account:account?.id||''}];
  }

  function openFile(id){
    const f=files.find(x=>x.id===id); if(!f) return;
    const parties=getParties(f); const assets=assetsByFile[id]||[];
    $('#drawerTitle').textContent=`${t('fileDetails')} — ${id}`; $('#drawerSubtitle').textContent=`${typeLabel(f.type)} · ${loc(f.name)}`;
    const partiesRows=parties.map(p=>{const acct=subsidiaryAccounts.find(a=>a.id===p.account);return [esc(loc(p.name)),esc(loc(p.role)),esc(loc(p.relation)),esc(p.pid),acct?`${money(acct.balance)} BHD`:'—',acct?`<button class="btn btn-sm balance-details" data-account="${acct.id}">${t('balanceDetails')}</button>`:`<span class="muted">${t('noSubAccount')}</span>`]});
    const assetRows=assets.length?assets.map(a=>[esc(loc(a.type)),esc(loc(a.detail)),`${money(a.value)} BHD`,esc(loc(a.allocation)),a.monthly?`${money(a.monthly)} BHD`:'—',a.yearly?`${money(a.yearly)} BHD`:'—']):[[t('assets'),t('balanceAssets'),`${money(f.balance)} BHD`,'—','—','—']];
    const subAccounts=subsidiaryAccounts.filter(a=>a.file===id);
    const financeRows=subAccounts.map(a=>[a.id,esc(loc(a.owner)),esc(loc(generalAccounts.find(g=>g.code===a.parent)?.name||a.parent)),`${money(a.balance)} BHD`,`<button class="btn btn-sm balance-details" data-account="${a.id}">${t('balanceDetails')}</button>`]);
    $('#drawerBody').innerHTML=`
      <div class="summary-grid"><div class="summary-box"><span>${t('status')}</span><strong>${statusLabel(f.status)}</strong></div><div class="summary-box"><span>${t('balanceAssets')}</span><strong>${money(f.balance)} BHD</strong></div><div class="summary-box"><span>${t('officer')}</span><strong>${esc(loc(f.officer))}</strong></div><div class="summary-box"><span>${t('completeness')}</span><strong>${f.completeness}%</strong></div></div>
      <div class="tabs"><button class="tab-btn active" data-tab="overview">${t('overview')}</button><button class="tab-btn" data-tab="parties">${t('parties')}</button><button class="tab-btn" data-tab="assets">${t('assets')}</button><button class="tab-btn" data-tab="finance">${t('finance')}</button><button class="tab-btn" data-tab="requests">${t('requests')}</button><button class="tab-btn" data-tab="documents">${t('documents')}</button><button class="tab-btn" data-tab="audit">${t('audit')}</button></div>
      <section class="detail-section active" data-section="overview"><div class="detail-grid"><div class="detail-card"><h4>${t('basicFileData')}</h4><div class="data-list"><div class="data-row"><span>${t('fileNo')}</span><strong>${f.id}</strong></div><div class="data-row"><span>${t('fileType')}</span><strong>${typeLabel(f.type)}</strong></div><div class="data-row"><span>${t('openedDate')}</span><strong>${dateFmt(f.opened)}</strong></div><div class="data-row"><span>${t('status')}</span><strong>${statusLabel(f.status)}</strong></div></div></div><div class="detail-card"><h4>${t('identityData')}</h4><div class="data-list"><div class="data-row"><span>${t('name')}</span><strong>${esc(loc(f.name))}</strong></div><div class="data-row"><span>${t('personalId')}</span><strong>${f.pid}</strong></div><div class="data-row"><span>${t('nationality')}</span><strong>${esc(loc(f.nationality))}</strong></div><div class="data-row"><span>${t('primaryDate')}</span><strong>${dateFmt(f.primaryDate)}</strong></div></div></div><div class="detail-card"><h4>${t('caseTracking')}</h4><div class="data-list"><div class="data-row"><span>${t('officer')}</span><strong>${esc(loc(f.officer))}</strong></div><div class="data-row"><span>${t('courtRef')}</span><strong>${f.caseNo}</strong></div><div class="data-row"><span>${t('completeness')}</span><strong>${f.completeness}%</strong></div><div class="data-row"><span>${t('lastReview')}</span><strong>${dateFmt('2026-08-08')}</strong></div></div></div></div>${id==='TR-2024-00124'?`<div class="notice">${t('sampleDistributionNote')}</div>`:''}</section>
      <section class="detail-section" data-section="parties">${table([t('name'),t('role'),t('relation'),t('personalId'),t('partyBalance'),t('action')],partiesRows)}</section>
      <section class="detail-section" data-section="assets">${table([t('assetType'),t('assetDetail'),t('value'),t('allocation'),t('monthlyIncome'),t('yearlyIncome')],assetRows)}</section>
      <section class="detail-section" data-section="finance">${financeRows.length?table([t('accountCode'),t('accountOwner'),t('parentAccount'),t('currentBalance'),t('action')],financeRows):`<div class="empty-state"><div class="empty-icon">💳</div><p>${t('noSubAccount')}</p></div>`}</section>
      <section class="detail-section" data-section="requests">${table([t('reference'),t('description'),t('status'),t('date')],[[`REQ-${f.id.slice(-4)}`,lang==='ar'?'طلب متابعة على الملف':'File follow-up request',statusLabel('review'),dateFmt('2026-08-07')]])}</section>
      <section class="detail-section" data-section="documents">${table([t('description'),t('status'),t('date')],[[lang==='ar'?'المستند الأساسي للملف':'Primary file document',statusLabel('active'),dateFmt(f.opened)]])}</section>
      <section class="detail-section" data-section="audit">${table([t('date'),t('description'),t('officer')],[[dateFmt(f.opened),lang==='ar'?'إنشاء الملف':'File created',esc(loc(f.officer))],[dateFmt('2026-08-08'),lang==='ar'?'مراجعة بيانات الملف':'File data reviewed',esc(loc(f.officer))]])}</section>`;
    openDrawer();
    $$('.tab-btn',$('#drawerBody')).forEach(b=>b.onclick=()=>{$$('.tab-btn',$('#drawerBody')).forEach(x=>x.classList.toggle('active',x===b));$$('.detail-section',$('#drawerBody')).forEach(s=>s.classList.toggle('active',s.dataset.section===b.dataset.tab));});
    $$('.balance-details',$('#drawerBody')).forEach(b=>b.onclick=()=>openStatement(b.dataset.account));
  }

  function openStatement(id){
    const a=subsidiaryAccounts.find(x=>x.id===id); if(!a)return; const tx=transactions[id]||[]; let run=a.opening; const debit=tx.reduce((s,x)=>s+x.debit,0), credit=tx.reduce((s,x)=>s+x.credit,0);
    const rows=tx.map(x=>{run+=x.credit-x.debit;return [dateFmt(x.date),esc(x.ref),esc(loc(x.desc)),x.debit?`${money(x.debit)} BHD`:'—',x.credit?`${money(x.credit)} BHD`:'—',`<strong>${money(run)} BHD</strong>`]});
    $('#modalTitle').textContent=`${t('accountStatement')} — ${id}`; $('#modalSubtitle').textContent=`${loc(a.owner)} · ${a.file}`;
    $('#modalBody').innerHTML=`<div class="statement-summary"><div><span>${t('openingBalance')}</span><strong>${money(a.opening)} BHD</strong></div><div><span>${t('totalDebit')}</span><strong>${money(debit)} BHD</strong></div><div><span>${t('totalCredit')}</span><strong>${money(credit)} BHD</strong></div><div><span>${t('closingBalance')}</span><strong class="balance-positive">${money(a.opening+credit-debit)} BHD</strong></div></div><div class="panel"><div class="panel-head"><div><h3>${t('accountStatement')}</h3><p>${t('statementHint')}</p></div></div><div class="panel-body flush">${rows.length?table([t('date'),t('reference'),t('description'),t('debit'),t('credit'),t('runningBalance')],rows):`<div class="empty-state"><p>${t('noTransactions')}</p></div>`}</div></div>`;
    openModal();
  }

  function openAlert(i){
    const a=alerts[i]; if(!a)return; $('#drawerTitle').textContent=t(a.title); $('#drawerSubtitle').textContent=t('alertsTitle'); $('#drawerBody').innerHTML=`<article class="alert-card ${a.kind}" style="margin-bottom:14px"><div class="alert-icon">${a.icon}</div><div class="alert-copy"><strong>${t(a.title)}</strong><span>${t(a.desc)}</span></div><div class="alert-value"><strong>${a.value}</strong><small>${loc(a.unit)}</small></div></article><div class="panel"><div class="panel-body">${table([t('fileNo'),t('subject'),t('status'),t('action')],files.slice(0,Math.min(5,files.length)).map(f=>[f.id,esc(loc(f.name)),statusHtml(f.status),`<button class="btn btn-sm view-file" data-file="${f.id}">${t('viewFileDetails')}</button>`]))}</div></div>`; openDrawer(); $$('.view-file',$('#drawerBody')).forEach(b=>b.onclick=()=>openFile(b.dataset.file));
  }

  function openDrawer(){ $('#drawer').classList.add('open'); $('#drawerBackdrop').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); }
  function closeDrawer(){ $('#drawer')?.classList.remove('open'); $('#drawerBackdrop')?.classList.remove('open'); $('#drawer')?.setAttribute('aria-hidden','true'); }
  function openModal(){ $('#modal').classList.add('open'); $('#modal').setAttribute('aria-hidden','false'); }
  function closeModal(){ $('#modal')?.classList.remove('open'); $('#modal')?.setAttribute('aria-hidden','true'); }

  function openWizard(){
    wizardStep=0; Object.assign(wizardState,{type:'estate',name:'',id:'',date:'',parties:[],assets:[],officer:lang==='ar'?'فاطمة علي':'Fatima Ali',priority:'normal',notes:''});
    $('#modalTitle').textContent=t('newFileTitle'); $('#modalSubtitle').textContent=t('newFileHint'); renderWizard(); openModal();
  }
  function renderWizard(){
    const steps=['stepBasic','stepParties','stepAssets','stepDocs','stepReview'];
    $('#modalBody').innerHTML=`<div class="wizard-progress">${steps.map((s,i)=>`<div class="wizard-step ${i===wizardStep?'active':i<wizardStep?'done':''}">${i+1}. ${t(s)}</div>`).join('')}</div><div id="wizardContent">${wizardPanel()}</div><div class="wizard-actions"><button class="btn" id="wizPrev" ${wizardStep===0?'disabled':''}>${t('previous')}</button><div style="display:flex;gap:8px"><button class="btn" id="wizCancel">${t('cancel')}</button>${wizardStep<4?`<button class="btn btn-primary" id="wizNext">${t('next')}</button>`:`<button class="btn btn-primary" id="wizCreate">${t('createFile')}</button>`}</div></div>`;
    bindWizard();
  }
  function wizardPanel(){
    if(wizardStep===0){const nameLabel=wizardState.type==='estate'?t('deceasedName'):wizardState.type==='interdicted'?t('interdictedName'):t('minorName'); const dateLabel=wizardState.type==='estate'?t('dateOfDeath'):wizardState.type==='interdicted'?t('startDate'):t('birthDate'); return `<div class="form-grid"><label class="field span-2"><span>${t('fileType')}</span><select id="wizType"><option value="estate" ${wizardState.type==='estate'?'selected':''}>${t('typeEstate')}</option><option value="minorLinked" ${wizardState.type==='minorLinked'?'selected':''}>${t('typeMinorLinked')}</option><option value="minorIndependent" ${wizardState.type==='minorIndependent'?'selected':''}>${t('typeMinorIndependent')}</option><option value="interdicted" ${wizardState.type==='interdicted'?'selected':''}>${t('typeInterdicted')}</option><option value="maturity" ${wizardState.type==='maturity'?'selected':''}>${t('typeMaturity')}</option></select></label><label class="field"><span>${nameLabel}</span><input id="wizName" value="${esc(wizardState.name)}"></label><label class="field"><span>${t('personalId')}</span><input id="wizId" value="${esc(wizardState.id)}"></label><label class="field"><span>${dateLabel}</span><input id="wizDate" type="date" value="${esc(wizardState.date)}"></label><label class="field"><span>${t('nationality')}</span><input value="${t('bahraini')}" disabled></label></div>`;}
    if(wizardStep===1)return `<div class="form-grid"><label class="field"><span>${t('name')}</span><input id="partyName"></label><label class="field"><span>${t('role')}</span><input id="partyRole"></label><div class="span-2"><button class="btn" id="addPartyBtn">＋ ${t('addParty')}</button></div><div class="span-2 mini-list">${wizardState.parties.map((p,i)=>`<div class="mini-item"><span>${esc(p.name)} · ${esc(p.role)}</span><button class="text-btn remove-party" data-i="${i}">×</button></div>`).join('')||`<div class="muted">${lang==='ar'?'لم تتم إضافة أطراف بعد.':'No parties added yet.'}</div>`}</div></div>`;
    if(wizardStep===2)return `<div class="form-grid"><label class="field"><span>${t('assetType')}</span><input id="assetType"></label><label class="field"><span>${t('value')}</span><input id="assetValue" type="number" step="0.001"></label><div class="span-2"><button class="btn" id="addAssetBtn">＋ ${t('addAsset')}</button></div><div class="span-2 mini-list">${wizardState.assets.map((a,i)=>`<div class="mini-item"><span>${esc(a.type)} · ${money(a.value)} BHD</span><button class="text-btn remove-asset" data-i="${i}">×</button></div>`).join('')||`<div class="muted">${lang==='ar'?'لم تتم إضافة أصول بعد.':'No assets added yet.'}</div>`}</div></div>`;
    if(wizardStep===3)return `<div class="form-grid"><label class="field"><span>${t('assignedOfficer')}</span><select id="wizOfficer"><option>${lang==='ar'?'فاطمة علي':'Fatima Ali'}</option><option>${lang==='ar'?'أحمد سلمان':'Ahmed Salman'}</option><option>${lang==='ar'?'ليلى حسن':'Laila Hassan'}</option></select></label><label class="field"><span>${t('priority')}</span><select id="wizPriority"><option value="normal">${t('normal')}</option><option value="high">${t('high')}</option><option value="urgent">${t('urgent')}</option></select></label><label class="field span-2"><span>${t('notes')}</span><textarea id="wizNotes" rows="4">${esc(wizardState.notes)}</textarea></label></div>`;
    return `<div class="summary-grid"><div class="summary-box"><span>${t('fileType')}</span><strong>${typeLabel(wizardState.type)}</strong></div><div class="summary-box"><span>${t('name')}</span><strong>${esc(wizardState.name||'—')}</strong></div><div class="summary-box"><span>${t('parties')}</span><strong>${wizardState.parties.length}</strong></div><div class="summary-box"><span>${t('assets')}</span><strong>${money(wizardState.assets.reduce((s,a)=>s+Number(a.value||0),0))} BHD</strong></div></div><div class="notice">${lang==='ar'?'راجع المعلومات قبل إنشاء الملف التجريبي.':'Review the information before creating the prototype file.'}</div>`;
  }
  function saveWizardFields(){
    if(wizardStep===0){wizardState.type=$('#wizType')?.value||wizardState.type;wizardState.name=$('#wizName')?.value||wizardState.name;wizardState.id=$('#wizId')?.value||wizardState.id;wizardState.date=$('#wizDate')?.value||wizardState.date;}
    if(wizardStep===3){wizardState.officer=$('#wizOfficer')?.value||wizardState.officer;wizardState.priority=$('#wizPriority')?.value||wizardState.priority;wizardState.notes=$('#wizNotes')?.value||wizardState.notes;}
  }
  function bindWizard(){
    $('#wizType')?.addEventListener('change',e=>{wizardState.type=e.target.value;saveWizardFields();renderWizard();});
    $('#wizPrev')?.addEventListener('click',()=>{saveWizardFields();wizardStep=Math.max(0,wizardStep-1);renderWizard();});
    $('#wizNext')?.addEventListener('click',()=>{saveWizardFields();wizardStep=Math.min(4,wizardStep+1);renderWizard();});
    $('#wizCancel')?.addEventListener('click',closeModal);
    $('#addPartyBtn')?.addEventListener('click',()=>{const n=$('#partyName').value.trim(),r=$('#partyRole').value.trim();if(n){wizardState.parties.push({name:n,role:r||'—'});renderWizard();}});
    $$('.remove-party').forEach(b=>b.onclick=()=>{wizardState.parties.splice(Number(b.dataset.i),1);renderWizard();});
    $('#addAssetBtn')?.addEventListener('click',()=>{const ty=$('#assetType').value.trim(),v=Number($('#assetValue').value||0);if(ty){wizardState.assets.push({type:ty,value:v});renderWizard();}});
    $$('.remove-asset').forEach(b=>b.onclick=()=>{wizardState.assets.splice(Number(b.dataset.i),1);renderWizard();});
    $('#wizCreate')?.addEventListener('click',()=>{const prefix={estate:'TR',minorLinked:'MN',minorIndependent:'MI',interdicted:'HJ',maturity:'AD'}[wizardState.type];const id=`${prefix}-2026-${String(2000+files.length).padStart(5,'0')}`;files.unshift({id,type:wizardState.type,status:'new',name:{ar:wizardState.name||'ملف تجريبي جديد',en:wizardState.name||'New Prototype File'},pid:wizardState.id||'—',officer:{ar:wizardState.officer,en:wizardState.officer},opened:new Date().toISOString().slice(0,10),balance:wizardState.assets.reduce((s,a)=>s+Number(a.value||0),0),caseNo:`${prefix}-REF-${Date.now().toString().slice(-5)}`,nationality:{ar:'بحريني',en:'Bahraini'},primaryDate:wizardState.date||new Date().toISOString().slice(0,10),completeness:55});closeModal();toast(t('fileCreated'));renderPage('files');});
  }

  function bindGlobal(){
    $$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>{applyLanguage(btn.dataset.lang,true);toast(t('savedLanguage'));}));
    if(isLogin){
      $('#staffLogin')?.addEventListener('submit',e=>{e.preventDefault();sessionStorage.setItem('mf_demo_login','1');location.href='portal.html';});
      $('#ekeyBtn')?.addEventListener('click',()=>{sessionStorage.setItem('mf_demo_login','1');location.href='portal.html';});
      $('#forgotBtn')?.addEventListener('click',()=>toast(t('forgotPrototype')));
      $('#togglePassword')?.addEventListener('click',()=>{const p=$('#password');p.type=p.type==='password'?'text':'password';});
    }
    if(isPortal){
      $('#navToggle')?.addEventListener('click',()=>{if(innerWidth<=820){$('#sidebar').classList.toggle('mobile-open');$('#sidebarBackdrop').classList.toggle('open');}else document.body.classList.toggle('nav-collapsed');});
      $('#sidebarBackdrop')?.addEventListener('click',()=>{$('#sidebar').classList.remove('mobile-open');$('#sidebarBackdrop').classList.remove('open');});
      $$('.nav-link[data-page]').forEach(b=>b.addEventListener('click',()=>{renderPage(b.dataset.page);if(innerWidth<=820){$('#sidebar').classList.remove('mobile-open');$('#sidebarBackdrop').classList.remove('open');}}));
      $('#notificationsButton')?.addEventListener('click',()=>renderPage('alerts'));
      $('#userButton')?.addEventListener('click',()=>toast(`${t('userName')} · ${t('systemAdmin')}`));
      $('#logoutBtn')?.addEventListener('click',()=>{sessionStorage.removeItem('mf_demo_login');location.href='index.html';});
      $('#drawerClose')?.addEventListener('click',closeDrawer); $('#drawerBackdrop')?.addEventListener('click',closeDrawer); $('#modalClose')?.addEventListener('click',closeModal); $('#modal')?.addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
      document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal();}});
    }
  }

  applyLanguage(lang,false);
  bindGlobal();
  if(isPortal) renderPage('dashboard');
})();
