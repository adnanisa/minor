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



  Object.assign(I18N.ar, {
    assetsProperties:'إدارة واستثمار العقارات', assetsTitle:'إدارة واستثمار العقارات', assetsIntro:'إدارة الملكيات والعقارات والوحدات والعقود والتحصيل والتوزيع المالي من شاشة مترابطة.',
    propertyDashboard:'لوحة العقارات', propertyRegister:'تسجيل عقار جديد', propertyPortfolio:'سجل العقارات', propertyUnits:'الوحدات', propertyLeases:'العقود الإيجارية', propertyCollections:'التحصيل والفواتير', propertyDistribution:'توزيع الإيرادات', propertyTree:'شجرة العقارات',
    totalProperties:'إجمالي العقارات', totalUnits:'إجمالي الوحدات', leasedUnits:'الوحدات المؤجرة', vacantUnits:'الوحدات الشاغرة', occupancyRate:'نسبة الإشغال', expiringLeases:'عقود تنتهي قريباً',
    totalDue:'إجمالي المستحق', totalCollected:'إجمالي المحصل', totalArrears:'المتبقي / المتأخرات', totalDistributed:'الموزع على المستفيدين', totalHeld:'المبالغ المعلقة',
    operationalAlerts:'التنبيهات العقارية', expiredNotClosed:'عقود منتهية ولم يتم الإخلاء/التجديد', expires30:'عقود تنتهي خلال 30 يوماً', expires60:'عقود تنتهي خلال 60 يوماً', expires90:'عقود تنتهي خلال 90 يوماً', overdue30:'متأخرات 30 يوماً', overdue60:'متأخرات 60 يوماً', overdue90:'متأخرات 90+ يوماً',
    propertyCode:'كود العقار', propertyName:'اسم العقار', propertyType:'نوع العقار', propertyStatus:'حالة العقار', ownershipType:'نوع الملكية', owners:'الملاك / الملفات', ownerShare:'نسبة الملكية', deedNo:'رقم الصك / الوثيقة', deedDate:'تاريخ الصك', issuingAuthority:'جهة الإصدار', ownershipNature:'طبيعة الملكية', planNo:'رقم المخطط', parcelNo:'رقم القطعة', surveyRef:'مرجع الرفع المساحي', address:'العنوان', gps:'إحداثيات GPS', attachments:'المرفقات',
    residential:'سكني', commercial:'تجاري', administrative:'إداري', industrial:'صناعي', land:'أرض', available:'متاح', fullyLeased:'مؤجر كلياً', partiallyLeased:'مؤجر جزئياً', maintenance:'تحت الصيانة', closedProperty:'مغلق', estateProperty:'عقار تركة / ملف', administrationProperty:'عقار الإدارة العامة', sharedProperty:'ملكية مشتركة',
    advancedSearch:'البحث المتقدم', searchPropertyPlaceholder:'ابحث باسم العقار أو الملف أو الصك أو المستأجر...', allPropertyStatuses:'كل حالات العقار', allOwnershipTypes:'كل أنواع الملكية', allPropertyTypes:'كل أنواع العقار', rentFrom:'الإيجار من', rentTo:'الإيجار إلى', clearFilters:'مسح التصفية',
    unitCode:'كود الوحدة', unitNumber:'رقم الوحدة', floor:'الدور', usageType:'نوع الاستخدام', rooms:'عدد الغرف', area:'المساحة', unitStatus:'حالة الوحدة', electricityMeter:'عداد الكهرباء', waterMeter:'عداد الماء', vacant:'شاغرة', leased:'مؤجرة', adminHold:'حجز إداري',
    tenant:'المستأجر', tenantId:'هوية / سجل المستأجر', tenantContact:'بيانات التواصل', guarantor:'الضامن', contractNo:'رقم العقد', paymentCycle:'دورة الدفع', monthly:'شهري', quarterly:'ربع سنوي', semiAnnual:'نصف سنوي', annual:'سنوي', leaseStart:'بداية العقد', leaseEnd:'نهاية العقد', annualRent:'الإيجار السنوي', monthlyRent:'الإيجار الشهري', securityDeposit:'التأمين', serviceFees:'رسوم الخدمات', autoRenew:'تجديد تلقائي', leaseStatus:'حالة العقد', activeLease:'عقد فعال', expiredLease:'منتهي', terminatedLease:'منهى مبكراً', renewal:'تجديد العقد', terminate:'إنهاء مبكر', relet:'إعادة التأجير',
    invoiceNo:'رقم الفاتورة', invoicePeriod:'فترة الاستحقاق', dueDate:'تاريخ الاستحقاق', invoiceAmount:'قيمة الفاتورة', paidAmount:'المسدد', remainingAmount:'المتبقي', paid:'مسددة', partial:'مسددة جزئياً', overdue:'متأخرة', openInvoice:'مستحقة', recordCollection:'تسجيل تحصيل', paymentMethod:'طريقة السداد', cash:'نقدي', bankTransfer:'تحويل بنكي', cheque:'شيك', electronic:'دفع إلكتروني', receiptNo:'سند القبض',
    tenantSubledger:'الحساب المساعد للمستأجر', tenantStatement:'كشف حساب المستأجر', receivableBalance:'رصيد الذمم المدينة', paymentSchedule:'جدول الاستحقاقات', viewLease:'عرض تفاصيل العقد', viewUnit:'عرض تفاصيل الوحدة', viewProperty:'عرض بطاقة العقار',
    distributionRegister:'سجل التوزيع المعتمد', grossCollected:'الإيراد المحصل', deductions:'المصاريف المخصومة', netDistribution:'صافي مبلغ التوزيع', beneficiary:'المستفيد', approvedShare:'النسبة المعتمدة', distributedAmount:'المبلغ الموزع', heldAmount:'مبلغ معلق', distributionStatus:'حالة التوزيع', posted:'مرحّل', held:'معلق للقاصر',
    propertyProfile:'بطاقة العقار', ownership:'الملكية', leases:'العقود', collections:'التحصيلات', maintenanceHistory:'سجل الصيانة', financialCenter:'المركز المالي', currentLease:'العقد الحالي', previousLeases:'العقود السابقة', propertyDocuments:'وثائق العقار', mapLocation:'الموقع على الخريطة', noCurrentLease:'لا يوجد عقد فعال على الوحدة.',
    registerPropertyHint:'معالج تسجيل العقار: الملكية ← الوثيقة ← بيانات العقار ← الوحدات ← المرفقات ← المراجعة.', stepOwnership:'الملكية', stepDeed:'الوثيقة / الصك', stepProperty:'بيانات العقار', stepUnits:'تقسيم الوحدات', stepAttachments:'المرفقات', addOwner:'إضافة مالك / ملف', addUnit:'إضافة وحدة', addAttachment:'إضافة مرفق', createProperty:'إنشاء العقار', ownerReference:'مرجع المالك / رقم الملف', ownerName:'اسم المالك / الملف', ownerType:'صفة المالك', percentage:'النسبة %', sharesTotal:'إجمالي نسب الملكية',
    propertyCreated:'تم إنشاء العقار التجريبي وربطه بسجل العقارات.', paymentRecorded:'تم تسجيل التحصيل وتحديث الذمم.', leaseRenewed:'تم تجديد العقد التجريبي سنة إضافية.', leaseTerminated:'تم إنهاء العقد وتحويل الوحدة إلى شاغرة.', prototypeMap:'عرض تجريبي للموقع الجغرافي',
    propertyFinancialOverview:'البيان المالي الموحد للعقارات', rentalReceivables:'الذمم الإيجارية', distributedToHeirs:'الموزع على الورثة / المستفيدين', suspendedMinorShares:'حصص القُصّر المعلقة', openProfile:'فتح البطاقة', propertyLinkedFiles:'العقارات المرتبطة بالملف',
    treeFile:'الملف', treeProperty:'العقار', treeUnit:'الوحدة', treeContract:'العقد الحالي', allUnits:'كل الوحدات', allTenants:'كل المستأجرين', arrearsBand:'فئة التأخير', current:'غير متأخر', days:'يوم',
    propertyReport:'تقرير المحفظة العقارية', collectionReport:'تقرير التحصيل والمتأخرات', distributionReport:'تقرير توزيع الإيرادات'
  });
  Object.assign(I18N.en, {
    assetsProperties:'Property Management & Investment', assetsTitle:'Property Management & Investment', assetsIntro:'Manage ownership, properties, units, leases, collections and revenue distribution in one connected module.',
    propertyDashboard:'Property Dashboard', propertyRegister:'Register New Property', propertyPortfolio:'Property Portfolio', propertyUnits:'Units', propertyLeases:'Leases', propertyCollections:'Collections & Invoices', propertyDistribution:'Revenue Distribution', propertyTree:'Property Tree',
    totalProperties:'Total Properties', totalUnits:'Total Units', leasedUnits:'Leased Units', vacantUnits:'Vacant Units', occupancyRate:'Occupancy Rate', expiringLeases:'Expiring Leases',
    totalDue:'Total Due', totalCollected:'Total Collected', totalArrears:'Outstanding / Arrears', totalDistributed:'Distributed to Beneficiaries', totalHeld:'Held Amounts',
    operationalAlerts:'Property Alerts', expiredNotClosed:'Expired leases not renewed/vacated', expires30:'Leases expiring within 30 days', expires60:'Leases expiring within 60 days', expires90:'Leases expiring within 90 days', overdue30:'30-day arrears', overdue60:'60-day arrears', overdue90:'90+ day arrears',
    propertyCode:'Property Code', propertyName:'Property Name', propertyType:'Property Type', propertyStatus:'Property Status', ownershipType:'Ownership Type', owners:'Owners / Files', ownerShare:'Ownership Share', deedNo:'Deed / Title No.', deedDate:'Deed Date', issuingAuthority:'Issuing Authority', ownershipNature:'Ownership Nature', planNo:'Plan No.', parcelNo:'Parcel No.', surveyRef:'Survey Reference', address:'Address', gps:'GPS Coordinates', attachments:'Attachments',
    residential:'Residential', commercial:'Commercial', administrative:'Administrative', industrial:'Industrial', land:'Land', available:'Available', fullyLeased:'Fully Leased', partiallyLeased:'Partially Leased', maintenance:'Under Maintenance', closedProperty:'Closed', estateProperty:'Estate / File Property', administrationProperty:'Administration Property', sharedProperty:'Shared Ownership',
    advancedSearch:'Advanced Search', searchPropertyPlaceholder:'Search property, file, deed or tenant...', allPropertyStatuses:'All Property Statuses', allOwnershipTypes:'All Ownership Types', allPropertyTypes:'All Property Types', rentFrom:'Rent From', rentTo:'Rent To', clearFilters:'Clear Filters',
    unitCode:'Unit Code', unitNumber:'Unit No.', floor:'Floor', usageType:'Usage', rooms:'Rooms', area:'Area', unitStatus:'Unit Status', electricityMeter:'Electricity Meter', waterMeter:'Water Meter', vacant:'Vacant', leased:'Leased', adminHold:'Administrative Hold',
    tenant:'Tenant', tenantId:'Tenant ID / CR', tenantContact:'Contact Details', guarantor:'Guarantor', contractNo:'Contract No.', paymentCycle:'Payment Cycle', monthly:'Monthly', quarterly:'Quarterly', semiAnnual:'Semi-Annual', annual:'Annual', leaseStart:'Lease Start', leaseEnd:'Lease End', annualRent:'Annual Rent', monthlyRent:'Monthly Rent', securityDeposit:'Security Deposit', serviceFees:'Service Fees', autoRenew:'Auto Renewal', leaseStatus:'Lease Status', activeLease:'Active', expiredLease:'Expired', terminatedLease:'Terminated', renewal:'Renew Lease', terminate:'Early Termination', relet:'Re-let',
    invoiceNo:'Invoice No.', invoicePeriod:'Billing Period', dueDate:'Due Date', invoiceAmount:'Invoice Amount', paidAmount:'Paid', remainingAmount:'Outstanding', paid:'Paid', partial:'Partially Paid', overdue:'Overdue', openInvoice:'Due', recordCollection:'Record Collection', paymentMethod:'Payment Method', cash:'Cash', bankTransfer:'Bank Transfer', cheque:'Cheque', electronic:'Electronic Payment', receiptNo:'Receipt No.',
    tenantSubledger:'Tenant Sub-ledger', tenantStatement:'Tenant Account Statement', receivableBalance:'Receivables Balance', paymentSchedule:'Payment Schedule', viewLease:'View Lease Details', viewUnit:'View Unit Details', viewProperty:'View Property Profile',
    distributionRegister:'Approved Distribution Register', grossCollected:'Collected Revenue', deductions:'Deductions', netDistribution:'Net Distribution', beneficiary:'Beneficiary', approvedShare:'Approved Share', distributedAmount:'Distributed Amount', heldAmount:'Held Amount', distributionStatus:'Distribution Status', posted:'Posted', held:'Held for Minor',
    propertyProfile:'Property Profile', ownership:'Ownership', leases:'Leases', collections:'Collections', maintenanceHistory:'Maintenance History', financialCenter:'Financial Position', currentLease:'Current Lease', previousLeases:'Previous Leases', propertyDocuments:'Property Documents', mapLocation:'Map Location', noCurrentLease:'No active lease for this unit.',
    registerPropertyHint:'Property registration wizard: ownership → deed → property → units → attachments → review.', stepOwnership:'Ownership', stepDeed:'Deed / Title', stepProperty:'Property Details', stepUnits:'Units', stepAttachments:'Attachments', addOwner:'Add Owner / File', addUnit:'Add Unit', addAttachment:'Add Attachment', createProperty:'Create Property', ownerReference:'Owner / File Reference', ownerName:'Owner / File Name', ownerType:'Owner Type', percentage:'Share %', sharesTotal:'Total Ownership Shares',
    propertyCreated:'Prototype property created and added to the portfolio.', paymentRecorded:'Collection recorded and receivables updated.', leaseRenewed:'Prototype lease renewed for one additional year.', leaseTerminated:'Lease terminated and unit changed to vacant.', prototypeMap:'Prototype map location',
    propertyFinancialOverview:'Consolidated Property Financial Overview', rentalReceivables:'Rental Receivables', distributedToHeirs:'Distributed to Heirs / Beneficiaries', suspendedMinorShares:'Held Minor Shares', openProfile:'Open Profile', propertyLinkedFiles:'Properties Linked to File',
    treeFile:'File', treeProperty:'Property', treeUnit:'Unit', treeContract:'Current Lease', allUnits:'All Units', allTenants:'All Tenants', arrearsBand:'Arrears Band', current:'Current', days:'days',
    propertyReport:'Property Portfolio Report', collectionReport:'Collection & Arrears Report', distributionReport:'Revenue Distribution Report'
  });

  let lang = localStorage.getItem('mf_lang') || 'ar';
  let currentPage = 'dashboard';
  let wizardStep = 0;
  const wizardState = { type:'estate', name:'', id:'', date:'', parties:[], assets:[], officer:'Fatima Ali', priority:'normal', notes:'' };
  let propertyTab = 'overview';
  let propertyWizardStep = 0;
  const propertyWizardState = {ownershipType:'estate', owners:[], deedNo:'', deedDate:'', issuer:'', ownershipNature:'', planNo:'', parcelNo:'', surveyRef:'', name:'', type:'commercial', address:'', gps:'', status:'available', units:[], attachments:[]};

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


  const propertyPortfolio = [
    {
      id:'PR-TR-001', code:'PROP-000124-02', name:{ar:'مجمع الهاشمي التجاري',en:'Al Hashimi Commercial Complex'}, type:'commercial', status:'fullyLeased', ownershipType:'estate',
      address:{ar:'المنامة – شارع الحكومة – مجمع 316',en:'Manama – Government Avenue – Block 316'}, gps:'26.2285, 50.5860', value:260550,
      owners:[{kind:'file',ref:'TR-2024-00124',name:{ar:'تركة أحمد يوسف عبدالله الهاشمي',en:'Estate of Ahmed Yousif Abdullah Al Hashimi'},share:100}],
      deed:{no:'DEED-2024-88421',date:'2024-02-11',issuer:{ar:'جهاز المساحة والتسجيل العقاري',en:'Survey & Land Registration Bureau'},nature:{ar:'ملك حر',en:'Freehold'},plan:'PL-316-882',parcel:'PAR-1442',survey:'SUR-2024-1882'},
      attachments:[{name:{ar:'نسخة الصك',en:'Title Deed Copy'},type:'PDF'},{name:{ar:'ترخيص البناء',en:'Building Permit'},type:'PDF'},{name:{ar:'صور العقار',en:'Property Photos'},type:'JPG'}],
      units:[
        {id:'PR1-U01',code:'U-001',number:'محل 1',floor:'أرضي',usage:'commercial',rooms:0,area:42,status:'leased',electricity:'E-771201',water:'W-331201',lease:{id:'LS-26001',contractNo:'LEASE-2026-001',tenant:{name:{ar:'مؤسسة الواحة للتجارة',en:'Al Waha Trading Est.'},id:'CR-102201',contact:'37770011',guarantor:{ar:'لا يوجد',en:'None'}},cycle:'monthly',start:'2026-01-01',end:'2026-12-31',annualRent:2400,deposit:200,service:0,autoRenew:true,status:'active',account:'TEN-PR1-01'}},
        {id:'PR1-U02',code:'U-002',number:'محل 2',floor:'أرضي',usage:'commercial',rooms:0,area:39,status:'leased',electricity:'E-771202',water:'W-331202',lease:{id:'LS-26002',contractNo:'LEASE-2026-002',tenant:{name:{ar:'مخبز النخيل',en:'Al Nakheel Bakery'},id:'CR-102202',contact:'37770022',guarantor:{ar:'حسن يوسف',en:'Hassan Yousif'}},cycle:'monthly',start:'2026-02-01',end:'2027-01-31',annualRent:2400,deposit:200,service:0,autoRenew:false,status:'active',account:'TEN-PR1-02'}},
        {id:'PR1-U03',code:'U-003',number:'محل 3',floor:'أرضي',usage:'commercial',rooms:0,area:40,status:'leased',electricity:'E-771203',water:'W-331203',lease:{id:'LS-26003',contractNo:'LEASE-2026-003',tenant:{name:{ar:'الخليج للخدمات',en:'Gulf Services'},id:'CR-102203',contact:'37770033',guarantor:{ar:'لا يوجد',en:'None'}},cycle:'monthly',start:'2025-09-01',end:'2026-08-31',annualRent:2400,deposit:200,service:0,autoRenew:false,status:'active',account:'TEN-PR1-03'}},
        {id:'PR1-U04',code:'U-004',number:'محل 4',floor:'أرضي',usage:'commercial',rooms:0,area:41,status:'leased',electricity:'E-771204',water:'W-331204',lease:{id:'LS-26004',contractNo:'LEASE-2026-004',tenant:{name:{ar:'المنار للإلكترونيات',en:'Al Manar Electronics'},id:'CR-102204',contact:'37770044',guarantor:{ar:'عبدالله محمد',en:'Abdullah Mohammed'}},cycle:'monthly',start:'2026-03-01',end:'2027-02-28',annualRent:2400,deposit:200,service:0,autoRenew:true,status:'active',account:'TEN-PR1-04'}}
      ],
      maintenance:[{date:'2026-05-18',desc:{ar:'صيانة لوحة الكهرباء الرئيسية',en:'Main electrical panel maintenance'},cost:80,status:{ar:'مكتملة',en:'Completed'}}]
    },
    {
      id:'PR-ADM-002', code:'PROP-ADM-0007', name:{ar:'مبنى استثمار الإدارة – السيف',en:'Administration Investment Building – Seef'}, type:'administrative', status:'partiallyLeased', ownershipType:'administration',
      address:{ar:'ضاحية السيف – مجمع 428',en:'Seef District – Block 428'}, gps:'26.2388, 50.5415', value:920000,
      owners:[{kind:'administration',ref:'MOJ-ADM',name:{ar:'إدارة شئون وأموال القاصرين',en:'Minors Affairs & Funds Administration'},share:100}],
      deed:{no:'DEED-ADM-7781',date:'2022-06-18',issuer:{ar:'جهاز المساحة والتسجيل العقاري',en:'Survey & Land Registration Bureau'},nature:{ar:'ملك حكومي استثماري',en:'Government Investment Property'},plan:'PL-428-119',parcel:'PAR-802',survey:'SUR-2022-451'},
      attachments:[{name:{ar:'أصل الوثيقة',en:'Original Deed'},type:'PDF'},{name:{ar:'شهادة الإتمام',en:'Completion Certificate'},type:'PDF'}],
      units:[
        {id:'PR2-U01',code:'A-101',number:'مكتب 101',floor:'1',usage:'administrative',rooms:4,area:118,status:'leased',electricity:'E-882101',water:'W-442101',lease:{id:'LS-25011',contractNo:'LEASE-2025-011',tenant:{name:{ar:'شركة المدار للاستشارات',en:'Al Madar Consulting W.L.L.'},id:'CR-115901',contact:'39990011',guarantor:{ar:'لا يوجد',en:'None'}},cycle:'quarterly',start:'2025-10-01',end:'2026-09-30',annualRent:9600,deposit:800,service:600,autoRenew:false,status:'active',account:'TEN-PR2-01'}},
        {id:'PR2-U02',code:'A-102',number:'مكتب 102',floor:'1',usage:'administrative',rooms:3,area:94,status:'vacant',electricity:'E-882102',water:'W-442102',lease:null},
        {id:'PR2-U03',code:'A-201',number:'مكتب 201',floor:'2',usage:'administrative',rooms:5,area:132,status:'maintenance',electricity:'E-882201',water:'W-442201',lease:null},
        {id:'PR2-U04',code:'A-202',number:'مكتب 202',floor:'2',usage:'administrative',rooms:4,area:110,status:'leased',electricity:'E-882202',water:'W-442202',lease:{id:'LS-24092',contractNo:'LEASE-2024-092',tenant:{name:{ar:'شركة الشرق للتقنية',en:'Al Sharq Technology Co.'},id:'CR-115902',contact:'39990022',guarantor:{ar:'يوسف أحمد',en:'Yousif Ahmed'}},cycle:'monthly',start:'2024-09-01',end:'2026-07-31',annualRent:8400,deposit:700,service:480,autoRenew:false,status:'expired',account:'TEN-PR2-02'}}
      ],
      maintenance:[{date:'2026-07-22',desc:{ar:'صيانة تكييف الوحدة A-201',en:'A-201 air-conditioning maintenance'},cost:260,status:{ar:'قيد التنفيذ',en:'In Progress'}}]
    },
    {
      id:'PR-SH-003', code:'PROP-SH-0041', name:{ar:'مبنى اللؤلؤة المشترك',en:'Pearl Shared Building'}, type:'residential', status:'partiallyLeased', ownershipType:'shared',
      address:{ar:'المحرق – مجمع 206',en:'Muharraq – Block 206'}, gps:'26.2575, 50.6112', value:510000,
      owners:[
        {kind:'file',ref:'TR-2025-00876',name:{ar:'تركة يوسف محمود حسن',en:'Estate of Yousif Mahmood Hassan'},share:60},
        {kind:'administration',ref:'MOJ-ADM',name:{ar:'إدارة شئون وأموال القاصرين',en:'Minors Affairs & Funds Administration'},share:40}
      ],
      deed:{no:'DEED-SH-44021',date:'2025-12-03',issuer:{ar:'جهاز المساحة والتسجيل العقاري',en:'Survey & Land Registration Bureau'},nature:{ar:'ملكية مشتركة',en:'Shared Ownership'},plan:'PL-206-778',parcel:'PAR-226',survey:'SUR-2025-719'},
      attachments:[{name:{ar:'وثيقة الملكية المشتركة',en:'Shared Ownership Deed'},type:'PDF'}],
      units:[
        {id:'PR3-U01',code:'F-01',number:'شقة 1',floor:'1',usage:'residential',rooms:3,area:125,status:'leased',electricity:'E-993101',water:'W-553101',lease:{id:'LS-25051',contractNo:'LEASE-2025-051',tenant:{name:{ar:'محمد جاسم علي',en:'Mohammed Jassim Ali'},id:'870123456',contact:'36660011',guarantor:{ar:'جاسم علي',en:'Jassim Ali'}},cycle:'monthly',start:'2025-01-01',end:'2026-12-31',annualRent:5400,deposit:450,service:0,autoRenew:true,status:'active',account:'TEN-PR3-01'}},
        {id:'PR3-U02',code:'F-02',number:'شقة 2',floor:'1',usage:'residential',rooms:3,area:122,status:'leased',electricity:'E-993102',water:'W-553102',lease:{id:'LS-24055',contractNo:'LEASE-2024-055',tenant:{name:{ar:'سلمان عبدالرحمن',en:'Salman Abdulrahman'},id:'880654321',contact:'36660022',guarantor:{ar:'لا يوجد',en:'None'}},cycle:'monthly',start:'2024-01-01',end:'2026-12-31',annualRent:5400,deposit:450,service:0,autoRenew:false,status:'active',account:'TEN-PR3-02'}},
        {id:'PR3-U03',code:'F-03',number:'شقة 3',floor:'2',usage:'residential',rooms:4,area:142,status:'vacant',electricity:'E-993201',water:'W-553201',lease:null}
      ],
      maintenance:[]
    }
  ];

  const rentalInvoices = [
    {id:'INV-260801',property:'PR-TR-001',unit:'PR1-U01',lease:'LS-26001',period:'2026-08',due:'2026-08-01',amount:200,paid:200,paidDate:'2026-08-01',receipt:'RC-260801-01'},
    {id:'INV-260802',property:'PR-TR-001',unit:'PR1-U02',lease:'LS-26002',period:'2026-08',due:'2026-08-01',amount:200,paid:200,paidDate:'2026-08-03',receipt:'RC-260803-02'},
    {id:'INV-260803',property:'PR-TR-001',unit:'PR1-U03',lease:'LS-26003',period:'2026-08',due:'2026-08-01',amount:200,paid:200,paidDate:'2026-08-05',receipt:'RC-260805-03'},
    {id:'INV-260804',property:'PR-TR-001',unit:'PR1-U04',lease:'LS-26004',period:'2026-08',due:'2026-08-01',amount:200,paid:0,paidDate:'',receipt:''},
    {id:'INV-260710',property:'PR-ADM-002',unit:'PR2-U01',lease:'LS-25011',period:'2026-Q3',due:'2026-07-01',amount:2550,paid:1800,paidDate:'2026-07-05',receipt:'RC-260705-10'},
    {id:'INV-260621',property:'PR-SH-003',unit:'PR3-U01',lease:'LS-25051',period:'2026-06',due:'2026-06-01',amount:450,paid:450,paidDate:'2026-06-01',receipt:'RC-260601-21'},
    {id:'INV-260622',property:'PR-SH-003',unit:'PR3-U02',lease:'LS-24055',period:'2026-06',due:'2026-06-01',amount:450,paid:0,paidDate:'',receipt:''},
    {id:'INV-260722',property:'PR-SH-003',unit:'PR3-U02',lease:'LS-24055',period:'2026-07',due:'2026-07-01',amount:450,paid:0,paidDate:'',receipt:''},
    {id:'INV-260822',property:'PR-SH-003',unit:'PR3-U02',lease:'LS-24055',period:'2026-08',due:'2026-08-01',amount:450,paid:150,paidDate:'2026-08-04',receipt:'RC-260804-22'}
  ];

  const tenantAccounts = [
    {id:'TEN-PR1-01',lease:'LS-26001',property:'PR-TR-001',unit:'PR1-U01',owner:{ar:'مؤسسة الواحة للتجارة',en:'Al Waha Trading Est.'},opening:0},
    {id:'TEN-PR1-02',lease:'LS-26002',property:'PR-TR-001',unit:'PR1-U02',owner:{ar:'مخبز النخيل',en:'Al Nakheel Bakery'},opening:0},
    {id:'TEN-PR1-03',lease:'LS-26003',property:'PR-TR-001',unit:'PR1-U03',owner:{ar:'الخليج للخدمات',en:'Gulf Services'},opening:0},
    {id:'TEN-PR1-04',lease:'LS-26004',property:'PR-TR-001',unit:'PR1-U04',owner:{ar:'المنار للإلكترونيات',en:'Al Manar Electronics'},opening:0},
    {id:'TEN-PR2-01',lease:'LS-25011',property:'PR-ADM-002',unit:'PR2-U01',owner:{ar:'شركة المدار للاستشارات',en:'Al Madar Consulting W.L.L.'},opening:0},
    {id:'TEN-PR2-02',lease:'LS-24092',property:'PR-ADM-002',unit:'PR2-U04',owner:{ar:'شركة الشرق للتقنية',en:'Al Sharq Technology Co.'},opening:0},
    {id:'TEN-PR3-01',lease:'LS-25051',property:'PR-SH-003',unit:'PR3-U01',owner:{ar:'محمد جاسم علي',en:'Mohammed Jassim Ali'},opening:0},
    {id:'TEN-PR3-02',lease:'LS-24055',property:'PR-SH-003',unit:'PR3-U02',owner:{ar:'سلمان عبدالرحمن',en:'Salman Abdulrahman'},opening:0}
  ];

  const tenantTransactions = {};
  tenantAccounts.forEach(a => tenantTransactions[a.id] = []);
  rentalInvoices.forEach(inv => {
    const found = findLease(inv.lease);
    if(!found || !found.lease.account) return;
    tenantTransactions[found.lease.account].push({date:inv.due,ref:inv.id,desc:{ar:`استحقاق إيجار ${inv.period}`,en:`Rent charge ${inv.period}`},debit:inv.amount,credit:0});
    if(inv.paid>0) tenantTransactions[found.lease.account].push({date:inv.paidDate||inv.due,ref:inv.receipt||`RC-${inv.id}`,desc:{ar:`تحصيل إيجار ${inv.period}`,en:`Rent collection ${inv.period}`},debit:0,credit:inv.paid});
  });

  const distributionEntries = [
    {property:'PR-TR-001',receipt:'RC-DIST-260805',gross:800,deductions:80,net:720,beneficiary:'EST-AH-01',share:20,amount:144,status:'posted'},
    {property:'PR-TR-001',receipt:'RC-DIST-260805',gross:800,deductions:80,net:720,beneficiary:'EST-AH-02',share:20,amount:144,status:'posted'},
    {property:'PR-TR-001',receipt:'RC-DIST-260805',gross:800,deductions:80,net:720,beneficiary:'EST-AH-03',share:20,amount:144,status:'posted'},
    {property:'PR-TR-001',receipt:'RC-DIST-260805',gross:800,deductions:80,net:720,beneficiary:'EST-AH-04',share:20,amount:144,status:'held'},
    {property:'PR-TR-001',receipt:'RC-DIST-260805',gross:800,deductions:80,net:720,beneficiary:'EST-AH-05',share:20,amount:144,status:'held'}
  ];

  function findProperty(id){ return propertyPortfolio.find(p=>p.id===id); }
  function allPropertyUnits(){ return propertyPortfolio.flatMap(p=>p.units.map(u=>({property:p,unit:u}))); }
  function allLeases(){ return allPropertyUnits().filter(x=>x.unit.lease).map(x=>({property:x.property,unit:x.unit,lease:x.unit.lease})); }
  function findUnit(id){ return allPropertyUnits().find(x=>x.unit.id===id); }
  function findLease(id){ return allLeases().find(x=>x.lease.id===id); }

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

  function propertyStatusLabel(v){ return t({available:'available',fullyLeased:'fullyLeased',partiallyLeased:'partiallyLeased',maintenance:'maintenance',closed:'closedProperty'}[v]||'available'); }
  function unitStatusLabel(v){ return t({vacant:'vacant',leased:'leased',maintenance:'maintenance',adminHold:'adminHold'}[v]||'vacant'); }
  function ownershipLabel(v){ return t({estate:'estateProperty',administration:'administrationProperty',shared:'sharedProperty'}[v]||'estateProperty'); }
  function propertyTypeLabel(v){ return t({residential:'residential',commercial:'commercial',administrative:'administrative',industrial:'industrial',land:'land'}[v]||'commercial'); }
  function cycleLabel(v){ return t({monthly:'monthly',quarterly:'quarterly',semiAnnual:'semiAnnual',annual:'annual'}[v]||'monthly'); }
  function invoiceState(inv){ const bal=Math.max(0,inv.amount-inv.paid); if(bal===0)return 'paid'; if(inv.paid>0)return 'partial'; return new Date(inv.due)<new Date('2026-08-09')?'overdue':'openInvoice'; }
  function invoiceStateHtml(inv){ const st=invoiceState(inv); return `<span class="status ${st==='paid'?'active':st==='partial'?'review':st==='overdue'?'closed':'new'}">${t(st)}</span>`; }
  function propertyStats(){
    const units=allPropertyUnits(), leased=units.filter(x=>x.unit.status==='leased').length, vacant=units.filter(x=>x.unit.status==='vacant').length;
    const due=rentalInvoices.reduce((s,x)=>s+x.amount,0), collected=rentalInvoices.reduce((s,x)=>s+x.paid,0), arrears=due-collected;
    const distributed=distributionEntries.filter(x=>x.status==='posted').reduce((s,x)=>s+x.amount,0), held=distributionEntries.filter(x=>x.status==='held').reduce((s,x)=>s+x.amount,0);
    const today=new Date('2026-08-09'); const expiring=allLeases().filter(x=>{const d=(new Date(x.lease.end)-today)/86400000;return d>=0&&d<=90;}).length;
    return {properties:propertyPortfolio.length,units:units.length,leased,vacant,occupancy:units.length?Math.round(leased/units.length*100):0,due,collected,arrears,distributed,held,expiring};
  }
  function arrearsDays(inv){ const bal=inv.amount-inv.paid;if(bal<=0)return 0;return Math.max(0,Math.floor((new Date('2026-08-09')-new Date(inv.due))/86400000)); }
  function propertyAlertsSummary(){
    const today=new Date('2026-08-09'), leases=allLeases();
    return [
      {kind:'critical',icon:'⛔',title:'expiredNotClosed',value:leases.filter(x=>new Date(x.lease.end)<today&&x.unit.status==='leased').length},
      {kind:'warning',icon:'30',title:'expires30',value:leases.filter(x=>{const d=(new Date(x.lease.end)-today)/86400000;return d>=0&&d<=30;}).length},
      {kind:'info',icon:'60',title:'expires60',value:leases.filter(x=>{const d=(new Date(x.lease.end)-today)/86400000;return d>30&&d<=60;}).length},
      {kind:'info',icon:'90',title:'expires90',value:leases.filter(x=>{const d=(new Date(x.lease.end)-today)/86400000;return d>60&&d<=90;}).length},
      {kind:'warning',icon:'₿',title:'overdue30',value:rentalInvoices.filter(x=>arrearsDays(x)>=30&&arrearsDays(x)<60).reduce((s,x)=>s+(x.amount-x.paid),0),money:true},
      {kind:'critical',icon:'₿',title:'overdue60',value:rentalInvoices.filter(x=>arrearsDays(x)>=60&&arrearsDays(x)<90).reduce((s,x)=>s+(x.amount-x.paid),0),money:true},
      {kind:'critical',icon:'₿',title:'overdue90',value:rentalInvoices.filter(x=>arrearsDays(x)>=90).reduce((s,x)=>s+(x.amount-x.paid),0),money:true}
    ];
  }
  function propertyTabs(){ const items=[['overview','propertyDashboard','▦'],['properties','propertyPortfolio','🏢'],['units','propertyUnits','▤'],['leases','propertyLeases','📝'],['collections','propertyCollections','💳'],['distribution','propertyDistribution','⇄'],['tree','propertyTree','⌘']];return `<div class="module-tabs">${items.map(x=>`<button class="module-tab ${propertyTab===x[0]?'active':''}" data-property-tab="${x[0]}"><span>${x[2]}</span><b>${t(x[1])}</b></button>`).join('')}</div>`; }
  function renderPropertyOverview(){
    const s=propertyStats(); const alertsP=propertyAlertsSummary();
    return `<section class="property-kpis">
      <article class="metric-card"><span>${t('totalProperties')}</span><strong>${s.properties}</strong><small>${t('propertyPortfolio')}</small></article>
      <article class="metric-card"><span>${t('totalUnits')}</span><strong>${s.units}</strong><small>${s.leased} ${t('leasedUnits')} · ${s.vacant} ${t('vacantUnits')}</small></article>
      <article class="metric-card accent"><span>${t('occupancyRate')}</span><strong>${s.occupancy}%</strong><div class="mini-progress"><i style="width:${s.occupancy}%"></i></div></article>
      <article class="metric-card"><span>${t('expiringLeases')}</span><strong>${s.expiring}</strong><small>30 / 60 / 90 ${t('days')}</small></article>
    </section>
    <section class="panel property-financial-panel"><div class="panel-head"><div><h3>${t('propertyFinancialOverview')}</h3><p>${t('assetsIntro')}</p></div></div><div class="panel-body"><div class="finance-overview property-finance-grid">
      <div class="finance-card"><span>${t('totalDue')}</span><strong>${money(s.due)} BHD</strong><small>${t('rentalReceivables')}</small></div>
      <div class="finance-card"><span>${t('totalCollected')}</span><strong>${money(s.collected)} BHD</strong><small>${Math.round(s.collected/s.due*100)||0}%</small></div>
      <div class="finance-card danger-soft"><span>${t('totalArrears')}</span><strong>${money(s.arrears)} BHD</strong><small>${rentalInvoices.filter(x=>x.amount>x.paid).length} ${t('invoiceNo')}</small></div>
      <div class="finance-card"><span>${t('totalDistributed')}</span><strong>${money(s.distributed)} BHD</strong><small>${t('distributedToHeirs')}</small></div>
      <div class="finance-card warning-soft"><span>${t('totalHeld')}</span><strong>${money(s.held)} BHD</strong><small>${t('suspendedMinorShares')}</small></div>
    </div></div></section>
    <section class="property-overview-grid">
      <div class="panel"><div class="panel-head"><div><h3>${t('operationalAlerts')}</h3><p>30 / 60 / 90</p></div></div><div class="panel-body"><div class="property-alert-grid">${alertsP.map(a=>`<button class="property-alert ${a.kind}" data-property-tab="${a.money?'collections':'leases'}"><span class="property-alert-icon">${a.icon}</span><span><b>${t(a.title)}</b><small>${a.money?`${money(a.value)} BHD`:a.value}</small></span><span>›</span></button>`).join('')}</div></div></div>
      <div class="panel"><div class="panel-head"><div><h3>${t('propertyPortfolio')}</h3><p>${t('occupancyRate')}</p></div><button class="panel-link property-tab-jump" data-property-tab="properties">${t('viewAll')}</button></div><div class="panel-body"><div class="portfolio-mini-list">${propertyPortfolio.map(p=>{const leased=p.units.filter(u=>u.status==='leased').length;const rate=p.units.length?Math.round(leased/p.units.length*100):0;return `<button class="portfolio-mini view-property" data-property="${p.id}"><span><b>${esc(loc(p.name))}</b><small>${p.code} · ${ownershipLabel(p.ownershipType)}</small></span><span class="rate-ring"><b>${rate}%</b><small>${p.units.length} ${t('units')}</small></span></button>`}).join('')}</div></div></div>
    </section>`;
  }
  function propertyOwnersText(p){ return p.owners.map(o=>`${loc(o.name)} (${o.share}%)`).join(' · '); }
  function propertyRows(list=propertyPortfolio){ return list.map(p=>{const leased=p.units.filter(u=>u.status==='leased').length;const rent=p.units.reduce((s,u)=>s+(u.lease?u.lease.annualRent:0),0);return [p.code,`<div class="case-name">${esc(loc(p.name))}</div><div class="case-sub">${esc(loc(p.address))}</div>`,propertyTypeLabel(p.type),ownershipLabel(p.ownershipType),`<div class="case-sub owner-cell">${esc(propertyOwnersText(p))}</div>`,`${leased}/${p.units.length}`,`${money(rent)} BHD`,`<span class="status ${p.status==='fullyLeased'?'active':p.status==='maintenance'?'review':'new'}">${propertyStatusLabel(p.status)}</span>`,`<button class="btn btn-sm view-property" data-property="${p.id}">${t('viewProperty')}</button>`];}); }
  function renderPropertyPortfolio(){
    return `<div class="panel"><div class="panel-head"><div><h3>${t('advancedSearch')}</h3><p>${t('searchPropertyPlaceholder')}</p></div></div><div class="panel-body"><div class="property-filter-grid">
      <label class="search-control span-search"><input id="propSearch" placeholder="${t('searchPropertyPlaceholder')}"></label>
      <select id="propStatusFilter" class="filter-control"><option value="">${t('allPropertyStatuses')}</option>${['available','fullyLeased','partiallyLeased','maintenance','closed'].map(x=>`<option value="${x}">${propertyStatusLabel(x)}</option>`).join('')}</select>
      <select id="propOwnershipFilter" class="filter-control"><option value="">${t('allOwnershipTypes')}</option>${['estate','administration','shared'].map(x=>`<option value="${x}">${ownershipLabel(x)}</option>`).join('')}</select>
      <select id="propTypeFilter" class="filter-control"><option value="">${t('allPropertyTypes')}</option>${['residential','commercial','administrative','industrial','land'].map(x=>`<option value="${x}">${propertyTypeLabel(x)}</option>`).join('')}</select>
      <button id="clearPropertyFilters" class="btn">${t('clearFilters')}</button>
    </div></div></div><div class="panel" style="margin-top:14px"><div class="panel-body flush" id="propertyResults">${table([t('propertyCode'),t('propertyName'),t('propertyType'),t('ownershipType'),t('owners'),t('units'),t('annualRent'),t('propertyStatus'),t('action')],propertyRows())}</div></div>`;
  }
  function renderPropertyUnits(){
    const rows=allPropertyUnits().map(({property:p,unit:u})=>[p.code,`<b>${esc(loc(p.name))}</b>`,u.code,esc(u.number),esc(String(u.floor)),t(u.usage)||propertyTypeLabel(u.usage),`${u.area} m²`,`<span class="status ${u.status==='leased'?'active':u.status==='maintenance'?'review':'new'}">${unitStatusLabel(u.status)}</span>`,u.lease?esc(loc(u.lease.tenant.name)):'—',u.lease?`${money(u.lease.annualRent/12)} BHD`:'—',`<button class="btn btn-sm view-unit" data-unit="${u.id}">${t('viewUnit')}</button>`]);
    return `<div class="panel"><div class="panel-body"><div class="table-tools"><div class="search-control"><input id="unitSearch" placeholder="${t('searchPropertyPlaceholder')}"></div><select id="unitStatusFilter" class="filter-control"><option value="">${t('allUnits')}</option><option value="leased">${t('leased')}</option><option value="vacant">${t('vacant')}</option><option value="maintenance">${t('maintenance')}</option><option value="adminHold">${t('adminHold')}</option></select></div><div id="unitsResults">${table([t('propertyCode'),t('propertyName'),t('unitCode'),t('unitNumber'),t('floor'),t('usageType'),t('area'),t('unitStatus'),t('tenant'),t('monthlyRent'),t('action')],rows)}</div></div></div>`;
  }
  function renderPropertyLeases(){
    const rows=allLeases().map(({property:p,unit:u,lease:l})=>[l.contractNo,esc(loc(l.tenant.name)),`${p.code} / ${u.code}`,cycleLabel(l.cycle),dateFmt(l.start),dateFmt(l.end),`${money(l.annualRent)} BHD`,`<span class="status ${l.status==='active'?'active':l.status==='expired'?'closed':'review'}">${l.status==='active'?t('activeLease'):l.status==='expired'?t('expiredLease'):t('terminatedLease')}</span>`,l.account,`<button class="btn btn-sm view-lease" data-lease="${l.id}">${t('viewLease')}</button>`]);
    return `<div class="panel"><div class="panel-body"><div class="table-tools"><div class="search-control"><input id="leaseSearch" placeholder="${t('allTenants')}"></div><select id="leaseStatusFilter" class="filter-control"><option value="">${t('leaseStatus')}</option><option value="active">${t('activeLease')}</option><option value="expired">${t('expiredLease')}</option><option value="terminated">${t('terminatedLease')}</option></select></div>${table([t('contractNo'),t('tenant'),t('property')+' / '+t('unitCode'),t('paymentCycle'),t('leaseStart'),t('leaseEnd'),t('annualRent'),t('leaseStatus'),t('tenantSubledger'),t('action')],rows)}</div></div>`;
  }
  function renderCollections(){
    const s=propertyStats();const rows=rentalInvoices.map(inv=>{const f=findUnit(inv.unit), bal=inv.amount-inv.paid, days=arrearsDays(inv);return [inv.id,inv.period,esc(loc(f?.unit.lease?.tenant.name||'')),`${f?.property.code||''} / ${f?.unit.code||''}`,dateFmt(inv.due),`${money(inv.amount)} BHD`,`${money(inv.paid)} BHD`,`<strong class="${bal?'balance-negative':'balance-positive'}">${money(bal)} BHD</strong>`,days?`${days} ${t('days')}`:t('current'),invoiceStateHtml(inv),bal>0?`<button class="btn btn-sm btn-primary record-payment" data-invoice="${inv.id}">${t('recordCollection')}</button>`:`<button class="btn btn-sm tenant-statement" data-account="${f?.unit.lease?.account||''}">${t('tenantStatement')}</button>`];});
    return `<div class="finance-overview property-finance-grid"><div class="finance-card"><span>${t('totalDue')}</span><strong>${money(s.due)} BHD</strong></div><div class="finance-card"><span>${t('totalCollected')}</span><strong>${money(s.collected)} BHD</strong></div><div class="finance-card danger-soft"><span>${t('totalArrears')}</span><strong>${money(s.arrears)} BHD</strong></div></div><div class="panel" style="margin-top:14px"><div class="panel-body"><div class="table-tools"><select id="arrearsFilter" class="filter-control"><option value="">${t('arrearsBand')}</option><option value="30">30+</option><option value="60">60+</option><option value="90">90+</option></select></div>${table([t('invoiceNo'),t('invoicePeriod'),t('tenant'),t('property')+' / '+t('unitCode'),t('dueDate'),t('invoiceAmount'),t('paidAmount'),t('remainingAmount'),t('arrearsBand'),t('status'),t('action')],rows)}</div></div>`;
  }
  function renderDistribution(){
    const rows=distributionEntries.map(d=>{const a=subsidiaryAccounts.find(x=>x.id===d.beneficiary);return [findProperty(d.property)?.code||d.property,d.receipt,`${money(d.gross)} BHD`,`${money(d.deductions)} BHD`,`${money(d.net)} BHD`,esc(loc(a?.owner||d.beneficiary)),`${d.share}%`,`${money(d.amount)} BHD`,`<span class="status ${d.status==='posted'?'active':'review'}">${t(d.status)}</span>`,`<button class="btn btn-sm balance-details" data-account="${d.beneficiary}">${t('balanceDetails')}</button>`]});
    return `<div class="notice">${t('sampleDistributionNote')}</div><div class="panel"><div class="panel-head"><div><h3>${t('distributionRegister')}</h3><p>${t('grossCollected')} → ${t('deductions')} → ${t('netDistribution')}</p></div></div><div class="panel-body flush">${table([t('propertyCode'),t('receiptNo'),t('grossCollected'),t('deductions'),t('netDistribution'),t('beneficiary'),t('approvedShare'),t('distributedAmount'),t('distributionStatus'),t('action')],rows)}</div></div>`;
  }
  function renderPropertyTree(){
    const byOwner={}; propertyPortfolio.forEach(p=>p.owners.forEach(o=>{const key=o.ref; if(!byOwner[key])byOwner[key]={owner:o,properties:[]}; if(!byOwner[key].properties.includes(p))byOwner[key].properties.push(p);}));
    return `<div class="property-tree">${Object.values(byOwner).map(g=>`<article class="tree-file"><div class="tree-node file-node"><span class="tree-icon">🗂</span><span><b>${t('treeFile')}: ${esc(loc(g.owner.name))}</b><small>${g.owner.ref}</small></span></div><div class="tree-children">${g.properties.map(p=>`<div class="tree-property"><button class="tree-node property-node view-property" data-property="${p.id}"><span class="tree-icon">🏢</span><span><b>${esc(loc(p.name))}</b><small>${p.code} · ${g.owner.share}%</small></span></button><div class="tree-children">${p.units.map(u=>`<button class="tree-node unit-node view-unit" data-unit="${u.id}"><span class="tree-icon">▤</span><span><b>${t('treeUnit')}: ${esc(u.code)} / ${esc(u.number)}</b><small>${unitStatusLabel(u.status)}${u.lease?` · ${t('treeContract')}: ${esc(u.lease.contractNo)} · ${esc(loc(u.lease.tenant.name))}`:''}</small></span></button>`).join('')}</div></div>`).join('')}</div></article>`).join('')}</div>`;
  }
  function renderPropertyTab(){ return ({overview:renderPropertyOverview,properties:renderPropertyPortfolio,units:renderPropertyUnits,leases:renderPropertyLeases,collections:renderCollections,distribution:renderDistribution,tree:renderPropertyTree}[propertyTab]||renderPropertyOverview)(); }
  function renderAssets(){
    return `${pageHeader(t('assetsTitle'),t('assetsIntro'),`<button class="btn" id="propertyReportBtn">⇩ ${t('propertyReport')}</button><button class="btn btn-primary" id="newPropertyBtn">＋ ${t('propertyRegister')}</button>`)}${propertyTabs()}<div class="property-tab-content">${renderPropertyTab()}</div>`;
  }

  function filterPropertyResults(){
    const q=($('#propSearch')?.value||'').trim().toLowerCase(),st=$('#propStatusFilter')?.value||'',own=$('#propOwnershipFilter')?.value||'',ty=$('#propTypeFilter')?.value||'';
    const list=propertyPortfolio.filter(p=>(!st||p.status===st)&&(!own||p.ownershipType===own)&&(!ty||p.type===ty)&&(!q||[p.code,loc(p.name),p.deed.no,loc(p.address),...p.owners.map(o=>`${o.ref} ${loc(o.name)}`),...p.units.map(u=>u.lease?loc(u.lease.tenant.name):'')].join(' ').toLowerCase().includes(q)));
    const el=$('#propertyResults');if(el)el.innerHTML=table([t('propertyCode'),t('propertyName'),t('propertyType'),t('ownershipType'),t('owners'),t('units'),t('annualRent'),t('propertyStatus'),t('action')],propertyRows(list));
    $$('.view-property',el||document).forEach(b=>b.onclick=()=>openProperty(b.dataset.property));
  }

  function openProperty(id){
    const p=findProperty(id);if(!p)return;const leases=p.units.filter(u=>u.lease), invs=rentalInvoices.filter(i=>i.property===id), dists=distributionEntries.filter(d=>d.property===id);
    const due=invs.reduce((s,x)=>s+x.amount,0),col=invs.reduce((s,x)=>s+x.paid,0),arr=due-col;
    $('#drawerTitle').textContent=`${t('propertyProfile')} — ${p.code}`;$('#drawerSubtitle').textContent=`${loc(p.name)} · ${propertyStatusLabel(p.status)}`;
    const ownerRows=p.owners.map(o=>[esc(loc(o.name)),o.ref,`${o.share}%`,ownershipLabel(p.ownershipType)]);
    const unitRows=p.units.map(u=>[u.code,esc(u.number),esc(String(u.floor)),propertyTypeLabel(u.usage),`${u.area} m²`,unitStatusLabel(u.status),u.lease?esc(loc(u.lease.tenant.name)):'—',`<button class="btn btn-sm view-unit" data-unit="${u.id}">${t('viewUnit')}</button>`]);
    const leaseRows=leases.map(u=>[u.lease.contractNo,esc(loc(u.lease.tenant.name)),u.code,dateFmt(u.lease.start),dateFmt(u.lease.end),`${money(u.lease.annualRent)} BHD`,`<button class="btn btn-sm view-lease" data-lease="${u.lease.id}">${t('viewLease')}</button>`]);
    $('#drawerBody').innerHTML=`<div class="summary-grid"><div class="summary-box"><span>${t('propertyStatus')}</span><strong>${propertyStatusLabel(p.status)}</strong></div><div class="summary-box"><span>${t('ownershipType')}</span><strong>${ownershipLabel(p.ownershipType)}</strong></div><div class="summary-box"><span>${t('units')}</span><strong>${p.units.length}</strong></div><div class="summary-box"><span>${t('annualRent')}</span><strong>${money(leases.reduce((s,u)=>s+u.lease.annualRent,0))} BHD</strong></div></div>
    <div class="tabs"><button class="tab-btn active" data-tab="overview">${t('overview')}</button><button class="tab-btn" data-tab="ownership">${t('ownership')}</button><button class="tab-btn" data-tab="units">${t('units')}</button><button class="tab-btn" data-tab="leases">${t('leases')}</button><button class="tab-btn" data-tab="finance">${t('financialCenter')}</button><button class="tab-btn" data-tab="maintenance">${t('maintenanceHistory')}</button><button class="tab-btn" data-tab="documents">${t('propertyDocuments')}</button></div>
    <section class="detail-section active" data-section="overview"><div class="detail-grid"><div class="detail-card"><h4>${t('propertyName')}</h4><div class="data-list"><div class="data-row"><span>${t('propertyCode')}</span><strong>${p.code}</strong></div><div class="data-row"><span>${t('propertyName')}</span><strong>${esc(loc(p.name))}</strong></div><div class="data-row"><span>${t('propertyType')}</span><strong>${propertyTypeLabel(p.type)}</strong></div><div class="data-row"><span>${t('address')}</span><strong>${esc(loc(p.address))}</strong></div></div></div><div class="detail-card"><h4>${t('deedNo')}</h4><div class="data-list"><div class="data-row"><span>${t('deedNo')}</span><strong>${p.deed.no}</strong></div><div class="data-row"><span>${t('deedDate')}</span><strong>${dateFmt(p.deed.date)}</strong></div><div class="data-row"><span>${t('planNo')}</span><strong>${p.deed.plan}</strong></div><div class="data-row"><span>${t('parcelNo')}</span><strong>${p.deed.parcel}</strong></div></div></div><div class="detail-card"><h4>${t('mapLocation')}</h4><div class="prototype-map"><span>📍</span><b>${p.gps}</b><small>${t('prototypeMap')}</small></div></div></div></section>
    <section class="detail-section" data-section="ownership">${table([t('ownerName'),t('ownerReference'),t('ownerShare'),t('ownershipType')],ownerRows)}</section>
    <section class="detail-section" data-section="units">${table([t('unitCode'),t('unitNumber'),t('floor'),t('usageType'),t('area'),t('unitStatus'),t('tenant'),t('action')],unitRows)}</section>
    <section class="detail-section" data-section="leases">${leases.length?table([t('contractNo'),t('tenant'),t('unitCode'),t('leaseStart'),t('leaseEnd'),t('annualRent'),t('action')],leaseRows):`<div class="empty-state"><p>${t('noCurrentLease')}</p></div>`}</section>
    <section class="detail-section" data-section="finance"><div class="statement-summary"><div><span>${t('totalDue')}</span><strong>${money(due)} BHD</strong></div><div><span>${t('totalCollected')}</span><strong>${money(col)} BHD</strong></div><div><span>${t('totalArrears')}</span><strong>${money(arr)} BHD</strong></div><div><span>${t('totalDistributed')}</span><strong>${money(dists.filter(x=>x.status==='posted').reduce((s,x)=>s+x.amount,0))} BHD</strong></div></div>${table([t('invoiceNo'),t('invoicePeriod'),t('tenant'),t('invoiceAmount'),t('paidAmount'),t('remainingAmount'),t('status')],invs.map(i=>{const u=findUnit(i.unit);return[i.id,i.period,esc(loc(u?.unit.lease?.tenant.name||'')),`${money(i.amount)} BHD`,`${money(i.paid)} BHD`,`${money(i.amount-i.paid)} BHD`,invoiceStateHtml(i)]}))}</section>
    <section class="detail-section" data-section="maintenance">${p.maintenance.length?table([t('date'),t('description'),t('value'),t('status')],p.maintenance.map(m=>[dateFmt(m.date),esc(loc(m.desc)),`${money(m.cost)} BHD`,esc(loc(m.status))])):`<div class="empty-state"><p>—</p></div>`}</section>
    <section class="detail-section" data-section="documents">${table([t('description'),t('assetType')],p.attachments.map(a=>[esc(loc(a.name)),a.type]))}</section>`;
    openDrawer();
    $$('.tab-btn',$('#drawerBody')).forEach(b=>b.onclick=()=>{$$('.tab-btn',$('#drawerBody')).forEach(x=>x.classList.toggle('active',x===b));$$('.detail-section',$('#drawerBody')).forEach(sec=>sec.classList.toggle('active',sec.dataset.section===b.dataset.tab));});
    $$('.view-unit',$('#drawerBody')).forEach(b=>b.onclick=()=>openUnit(b.dataset.unit));$$('.view-lease',$('#drawerBody')).forEach(b=>b.onclick=()=>openLease(b.dataset.lease));
  }

  function openUnit(id){
    const f=findUnit(id);if(!f)return;const {property:p,unit:u}=f;$('#drawerTitle').textContent=`${t('viewUnit')} — ${u.code}`;$('#drawerSubtitle').textContent=`${loc(p.name)} · ${unitStatusLabel(u.status)}`;
    $('#drawerBody').innerHTML=`<div class="detail-grid"><div class="detail-card"><h4>${t('unitCode')}</h4><div class="data-list"><div class="data-row"><span>${t('propertyName')}</span><strong>${esc(loc(p.name))}</strong></div><div class="data-row"><span>${t('unitCode')}</span><strong>${u.code}</strong></div><div class="data-row"><span>${t('unitNumber')}</span><strong>${esc(u.number)}</strong></div><div class="data-row"><span>${t('floor')}</span><strong>${esc(String(u.floor))}</strong></div><div class="data-row"><span>${t('area')}</span><strong>${u.area} m²</strong></div><div class="data-row"><span>${t('unitStatus')}</span><strong>${unitStatusLabel(u.status)}</strong></div></div></div><div class="detail-card"><h4>${t('attachments')}</h4><div class="data-list"><div class="data-row"><span>${t('electricityMeter')}</span><strong>${u.electricity}</strong></div><div class="data-row"><span>${t('waterMeter')}</span><strong>${u.water}</strong></div></div></div></div>${u.lease?`<div class="panel" style="margin-top:14px"><div class="panel-head"><div><h3>${t('currentLease')}</h3><p>${esc(loc(u.lease.tenant.name))}</p></div><button class="btn btn-sm view-lease" data-lease="${u.lease.id}">${t('viewLease')}</button></div><div class="panel-body"><div class="statement-summary"><div><span>${t('contractNo')}</span><strong>${u.lease.contractNo}</strong></div><div><span>${t('monthlyRent')}</span><strong>${money(u.lease.annualRent/12)} BHD</strong></div><div><span>${t('leaseEnd')}</span><strong>${dateFmt(u.lease.end)}</strong></div><div><span>${t('receivableBalance')}</span><strong>${money(rentalInvoices.filter(i=>i.unit===u.id).reduce((s,i)=>s+(i.amount-i.paid),0))} BHD</strong></div></div><button class="btn tenant-statement" data-account="${u.lease.account}">${t('tenantStatement')}</button></div></div>`:`<div class="empty-state"><p>${t('noCurrentLease')}</p></div>`}`;
    openDrawer();$('.view-lease',$('#drawerBody'))?.addEventListener('click',e=>openLease(e.currentTarget.dataset.lease));$('.tenant-statement',$('#drawerBody'))?.addEventListener('click',e=>openTenantStatement(e.currentTarget.dataset.account));
  }

  function openLease(id){
    const f=findLease(id);if(!f)return;const {property:p,unit:u,lease:l}=f;const invs=rentalInvoices.filter(i=>i.lease===id);const receivable=invs.reduce((s,i)=>s+(i.amount-i.paid),0);
    $('#modalTitle').textContent=`${t('viewLease')} — ${l.contractNo}`;$('#modalSubtitle').textContent=`${loc(l.tenant.name)} · ${p.code} / ${u.code}`;
    $('#modalBody').innerHTML=`<div class="detail-grid"><div class="detail-card"><h4>${t('tenant')}</h4><div class="data-list"><div class="data-row"><span>${t('tenant')}</span><strong>${esc(loc(l.tenant.name))}</strong></div><div class="data-row"><span>${t('tenantId')}</span><strong>${l.tenant.id}</strong></div><div class="data-row"><span>${t('tenantContact')}</span><strong>${l.tenant.contact}</strong></div><div class="data-row"><span>${t('guarantor')}</span><strong>${esc(loc(l.tenant.guarantor))}</strong></div></div></div><div class="detail-card"><h4>${t('contractNo')}</h4><div class="data-list"><div class="data-row"><span>${t('paymentCycle')}</span><strong>${cycleLabel(l.cycle)}</strong></div><div class="data-row"><span>${t('leaseStart')}</span><strong>${dateFmt(l.start)}</strong></div><div class="data-row"><span>${t('leaseEnd')}</span><strong>${dateFmt(l.end)}</strong></div><div class="data-row"><span>${t('annualRent')}</span><strong>${money(l.annualRent)} BHD</strong></div><div class="data-row"><span>${t('securityDeposit')}</span><strong>${money(l.deposit)} BHD</strong></div><div class="data-row"><span>${t('serviceFees')}</span><strong>${money(l.service)} BHD</strong></div></div></div></div><div class="statement-summary"><div><span>${t('tenantSubledger')}</span><strong>${l.account}</strong></div><div><span>${t('receivableBalance')}</span><strong>${money(receivable)} BHD</strong></div><div><span>${t('invoiceNo')}</span><strong>${invs.length}</strong></div><div><span>${t('leaseStatus')}</span><strong>${l.status==='active'?t('activeLease'):l.status==='expired'?t('expiredLease'):t('terminatedLease')}</strong></div></div><div class="page-actions lease-actions"><button class="btn tenant-statement" data-account="${l.account}">${t('tenantStatement')}</button><button class="btn renew-lease" data-lease="${l.id}">${t('renewal')}</button><button class="btn btn-danger terminate-lease" data-lease="${l.id}">${t('terminate')}</button></div><div class="panel"><div class="panel-head"><div><h3>${t('paymentSchedule')}</h3></div></div><div class="panel-body flush">${table([t('invoiceNo'),t('invoicePeriod'),t('dueDate'),t('invoiceAmount'),t('paidAmount'),t('remainingAmount'),t('status')],invs.map(i=>[i.id,i.period,dateFmt(i.due),`${money(i.amount)} BHD`,`${money(i.paid)} BHD`,`${money(i.amount-i.paid)} BHD`,invoiceStateHtml(i)]))}</div></div>`;openModal();
    $('.tenant-statement',$('#modalBody'))?.addEventListener('click',e=>openTenantStatement(e.currentTarget.dataset.account));$('.renew-lease',$('#modalBody'))?.addEventListener('click',e=>renewLease(e.currentTarget.dataset.lease));$('.terminate-lease',$('#modalBody'))?.addEventListener('click',e=>terminateLease(e.currentTarget.dataset.lease));
  }

  function openTenantStatement(id){
    const a=tenantAccounts.find(x=>x.id===id);if(!a)return;const tx=(tenantTransactions[id]||[]).slice().sort((a,b)=>a.date.localeCompare(b.date));let run=a.opening;const debit=tx.reduce((s,x)=>s+x.debit,0),credit=tx.reduce((s,x)=>s+x.credit,0);const rows=tx.map(x=>{run+=x.debit-x.credit;return[dateFmt(x.date),esc(x.ref),esc(loc(x.desc)),x.debit?`${money(x.debit)} BHD`:'—',x.credit?`${money(x.credit)} BHD`:'—',`<strong>${money(run)} BHD</strong>`]});$('#modalTitle').textContent=`${t('tenantStatement')} — ${id}`;$('#modalSubtitle').textContent=loc(a.owner);$('#modalBody').innerHTML=`<div class="statement-summary"><div><span>${t('openingBalance')}</span><strong>${money(a.opening)} BHD</strong></div><div><span>${t('totalDebit')}</span><strong>${money(debit)} BHD</strong></div><div><span>${t('totalCredit')}</span><strong>${money(credit)} BHD</strong></div><div><span>${t('closingBalance')}</span><strong>${money(a.opening+debit-credit)} BHD</strong></div></div><div class="panel"><div class="panel-body flush">${rows.length?table([t('date'),t('reference'),t('description'),t('debit'),t('credit'),t('runningBalance')],rows):`<div class="empty-state"><p>${t('noTransactions')}</p></div>`}</div></div>`;openModal();
  }

  function recordPayment(id){
    const inv=rentalInvoices.find(x=>x.id===id);if(!inv)return;const bal=inv.amount-inv.paid,found=findUnit(inv.unit);$('#modalTitle').textContent=`${t('recordCollection')} — ${id}`;$('#modalSubtitle').textContent=`${loc(found?.unit.lease?.tenant.name||'')} · ${found?.property.code||''}/${found?.unit.code||''}`;$('#modalBody').innerHTML=`<form id="collectionForm" class="form-grid"><label class="field"><span>${t('remainingAmount')}</span><input value="${money(bal)} BHD" disabled></label><label class="field"><span>${t('value')}</span><input id="collectionAmount" type="number" step="0.001" min="0.001" max="${bal}" value="${bal}"></label><label class="field"><span>${t('paymentMethod')}</span><select id="collectionMethod"><option>${t('bankTransfer')}</option><option>${t('cash')}</option><option>${t('cheque')}</option><option>${t('electronic')}</option></select></label><label class="field"><span>${t('receiptNo')}</span><input id="collectionReceipt" value="RC-${Date.now().toString().slice(-7)}"></label><div class="span-2 page-actions"><button class="btn" type="button" id="collectionCancel">${t('cancel')}</button><button class="btn btn-primary" type="submit">${t('recordCollection')}</button></div></form>`;openModal();$('#collectionCancel').onclick=closeModal;$('#collectionForm').onsubmit=e=>{e.preventDefault();const amt=Math.min(bal,Math.max(0,Number($('#collectionAmount').value||0)));if(!amt)return;inv.paid+=amt;inv.paidDate='2026-08-09';inv.receipt=$('#collectionReceipt').value;const account=found?.unit.lease?.account;if(account)tenantTransactions[account].push({date:'2026-08-09',ref:inv.receipt,desc:{ar:`تحصيل على الفاتورة ${inv.id}`,en:`Collection against invoice ${inv.id}`},debit:0,credit:amt});closeModal();toast(t('paymentRecorded'));renderPage('assets');propertyTab='collections';renderPage('assets');};
  }
  function renewLease(id){const f=findLease(id);if(!f)return;const d=new Date(f.lease.end);d.setFullYear(d.getFullYear()+1);f.lease.end=d.toISOString().slice(0,10);f.lease.status='active';closeModal();toast(t('leaseRenewed'));propertyTab='leases';renderPage('assets');}
  function terminateLease(id){const f=findLease(id);if(!f)return;f.lease.status='terminated';f.lease.end='2026-08-09';f.unit.status='vacant';closeModal();toast(t('leaseTerminated'));propertyTab='units';renderPage('assets');}

  function openPropertyWizard(){ propertyWizardStep=0;Object.assign(propertyWizardState,{ownershipType:'estate',owners:[],deedNo:'',deedDate:'',issuer:'',ownershipNature:'',planNo:'',parcelNo:'',surveyRef:'',name:'',type:'commercial',address:'',gps:'',status:'available',units:[],attachments:[]});$('#modalTitle').textContent=t('propertyRegister');$('#modalSubtitle').textContent=t('registerPropertyHint');renderPropertyWizard();openModal(); }
  function renderPropertyWizard(){const steps=['stepOwnership','stepDeed','stepProperty','stepUnits','stepAttachments','stepReview'];$('#modalBody').innerHTML=`<div class="wizard-progress property-wizard-progress">${steps.map((x,i)=>`<div class="wizard-step ${i===propertyWizardStep?'active':i<propertyWizardStep?'done':''}">${i+1}. ${t(x)}</div>`).join('')}</div><div>${propertyWizardPanel()}</div><div class="wizard-actions"><button class="btn" id="propWizPrev" ${propertyWizardStep===0?'disabled':''}>${t('previous')}</button><div class="page-actions"><button class="btn" id="propWizCancel">${t('cancel')}</button>${propertyWizardStep<5?`<button class="btn btn-primary" id="propWizNext">${t('next')}</button>`:`<button class="btn btn-primary" id="propWizCreate">${t('createProperty')}</button>`}</div></div>`;bindPropertyWizard();}
  function propertyWizardPanel(){
    if(propertyWizardStep===0)return `<div class="form-grid"><label class="field span-2"><span>${t('ownershipType')}</span><select id="pwOwnership"><option value="estate">${t('estateProperty')}</option><option value="administration">${t('administrationProperty')}</option><option value="shared">${t('sharedProperty')}</option></select></label><label class="field"><span>${t('ownerReference')}</span><input id="pwOwnerRef" placeholder="TR-2024-00124 / MOJ-ADM"></label><label class="field"><span>${t('ownerName')}</span><input id="pwOwnerName"></label><label class="field"><span>${t('percentage')}</span><input id="pwOwnerShare" type="number" min="0" max="100" value="100"></label><div class="field"><span>&nbsp;</span><button type="button" class="btn" id="pwAddOwner">＋ ${t('addOwner')}</button></div><div class="span-2"><div class="share-meter"><span>${t('sharesTotal')}</span><b>${propertyWizardState.owners.reduce((s,o)=>s+o.share,0)}%</b></div><div class="mini-list">${propertyWizardState.owners.map((o,i)=>`<div class="mini-item"><span>${esc(o.ref)} · ${esc(o.name)} · ${o.share}%</span><button class="text-btn pw-remove-owner" data-i="${i}">×</button></div>`).join('')||'<span class="muted">—</span>'}</div></div></div>`;
    if(propertyWizardStep===1)return `<div class="form-grid"><label class="field"><span>${t('deedNo')}</span><input id="pwDeedNo" value="${esc(propertyWizardState.deedNo)}"></label><label class="field"><span>${t('deedDate')}</span><input id="pwDeedDate" type="date" value="${esc(propertyWizardState.deedDate)}"></label><label class="field"><span>${t('issuingAuthority')}</span><input id="pwIssuer" value="${esc(propertyWizardState.issuer)}"></label><label class="field"><span>${t('ownershipNature')}</span><input id="pwNature" value="${esc(propertyWizardState.ownershipNature)}"></label><label class="field"><span>${t('planNo')}</span><input id="pwPlan" value="${esc(propertyWizardState.planNo)}"></label><label class="field"><span>${t('parcelNo')}</span><input id="pwParcel" value="${esc(propertyWizardState.parcelNo)}"></label><label class="field span-2"><span>${t('surveyRef')}</span><input id="pwSurvey" value="${esc(propertyWizardState.surveyRef)}"></label></div>`;
    if(propertyWizardStep===2)return `<div class="form-grid"><label class="field"><span>${t('propertyName')}</span><input id="pwName" value="${esc(propertyWizardState.name)}"></label><label class="field"><span>${t('propertyType')}</span><select id="pwType">${['residential','commercial','administrative','industrial','land'].map(x=>`<option value="${x}" ${propertyWizardState.type===x?'selected':''}>${propertyTypeLabel(x)}</option>`).join('')}</select></label><label class="field span-2"><span>${t('address')}</span><input id="pwAddress" value="${esc(propertyWizardState.address)}"></label><label class="field"><span>${t('gps')}</span><input id="pwGps" value="${esc(propertyWizardState.gps)}" placeholder="26.0000, 50.0000"></label><label class="field"><span>${t('propertyStatus')}</span><select id="pwStatus"><option value="available">${t('available')}</option><option value="maintenance">${t('maintenance')}</option><option value="closed">${t('closedProperty')}</option></select></label></div>`;
    if(propertyWizardStep===3)return `<div class="form-grid"><label class="field"><span>${t('unitCode')}</span><input id="pwUnitCode"></label><label class="field"><span>${t('unitNumber')}</span><input id="pwUnitNo"></label><label class="field"><span>${t('floor')}</span><input id="pwFloor"></label><label class="field"><span>${t('usageType')}</span><select id="pwUsage"><option value="residential">${t('residential')}</option><option value="commercial">${t('commercial')}</option><option value="administrative">${t('administrative')}</option></select></label><label class="field"><span>${t('area')}</span><input id="pwArea" type="number"></label><label class="field"><span>${t('unitStatus')}</span><select id="pwUnitStatus"><option value="vacant">${t('vacant')}</option><option value="maintenance">${t('maintenance')}</option><option value="adminHold">${t('adminHold')}</option></select></label><div class="span-2"><button class="btn" id="pwAddUnit">＋ ${t('addUnit')}</button></div><div class="span-2 mini-list">${propertyWizardState.units.map((u,i)=>`<div class="mini-item"><span>${esc(u.code)} · ${esc(u.number)} · ${u.area} m²</span><button class="text-btn pw-remove-unit" data-i="${i}">×</button></div>`).join('')||'<span class="muted">—</span>'}</div></div>`;
    if(propertyWizardStep===4)return `<div class="form-grid"><label class="field"><span>${t('description')}</span><input id="pwAttachName"></label><label class="field"><span>${t('assetType')}</span><select id="pwAttachType"><option>PDF</option><option>JPG</option><option>PNG</option></select></label><div class="span-2"><button class="btn" id="pwAddAttachment">＋ ${t('addAttachment')}</button></div><div class="span-2 mini-list">${propertyWizardState.attachments.map((a,i)=>`<div class="mini-item"><span>${esc(a.name)} · ${a.type}</span><button class="text-btn pw-remove-attach" data-i="${i}">×</button></div>`).join('')||'<span class="muted">—</span>'}</div></div>`;
    return `<div class="summary-grid"><div class="summary-box"><span>${t('ownershipType')}</span><strong>${ownershipLabel(propertyWizardState.ownershipType)}</strong></div><div class="summary-box"><span>${t('owners')}</span><strong>${propertyWizardState.owners.length}</strong></div><div class="summary-box"><span>${t('propertyName')}</span><strong>${esc(propertyWizardState.name||'—')}</strong></div><div class="summary-box"><span>${t('units')}</span><strong>${propertyWizardState.units.length}</strong></div></div><div class="notice">${t('registerPropertyHint')}</div>`;
  }
  function savePropertyWizard(){if(propertyWizardStep===0)propertyWizardState.ownershipType=$('#pwOwnership')?.value||propertyWizardState.ownershipType;if(propertyWizardStep===1){propertyWizardState.deedNo=$('#pwDeedNo')?.value||'';propertyWizardState.deedDate=$('#pwDeedDate')?.value||'';propertyWizardState.issuer=$('#pwIssuer')?.value||'';propertyWizardState.ownershipNature=$('#pwNature')?.value||'';propertyWizardState.planNo=$('#pwPlan')?.value||'';propertyWizardState.parcelNo=$('#pwParcel')?.value||'';propertyWizardState.surveyRef=$('#pwSurvey')?.value||'';}if(propertyWizardStep===2){propertyWizardState.name=$('#pwName')?.value||'';propertyWizardState.type=$('#pwType')?.value||'commercial';propertyWizardState.address=$('#pwAddress')?.value||'';propertyWizardState.gps=$('#pwGps')?.value||'';propertyWizardState.status=$('#pwStatus')?.value||'available';}}
  function bindPropertyWizard(){
    $('#propWizPrev')?.addEventListener('click',()=>{savePropertyWizard();propertyWizardStep=Math.max(0,propertyWizardStep-1);renderPropertyWizard();});$('#propWizNext')?.addEventListener('click',()=>{savePropertyWizard();propertyWizardStep=Math.min(5,propertyWizardStep+1);renderPropertyWizard();});$('#propWizCancel')?.addEventListener('click',closeModal);
    $('#pwAddOwner')?.addEventListener('click',()=>{const ref=$('#pwOwnerRef').value.trim(),name=$('#pwOwnerName').value.trim(),share=Number($('#pwOwnerShare').value||0);if(ref&&name&&share>0){propertyWizardState.ownershipType=$('#pwOwnership').value;propertyWizardState.owners.push({kind:ref==='MOJ-ADM'?'administration':'file',ref,name:{ar:name,en:name},share});renderPropertyWizard();}});$$('.pw-remove-owner').forEach(b=>b.onclick=()=>{propertyWizardState.owners.splice(Number(b.dataset.i),1);renderPropertyWizard();});
    $('#pwAddUnit')?.addEventListener('click',()=>{const code=$('#pwUnitCode').value.trim(),number=$('#pwUnitNo').value.trim();if(code&&number){propertyWizardState.units.push({id:`NEW-U-${Date.now()}`,code,number,floor:$('#pwFloor').value.trim(),usage:$('#pwUsage').value,rooms:0,area:Number($('#pwArea').value||0),status:$('#pwUnitStatus').value,electricity:'—',water:'—',lease:null});renderPropertyWizard();}});$$('.pw-remove-unit').forEach(b=>b.onclick=()=>{propertyWizardState.units.splice(Number(b.dataset.i),1);renderPropertyWizard();});
    $('#pwAddAttachment')?.addEventListener('click',()=>{const name=$('#pwAttachName').value.trim();if(name){propertyWizardState.attachments.push({name:{ar:name,en:name},type:$('#pwAttachType').value});renderPropertyWizard();}});$$('.pw-remove-attach').forEach(b=>b.onclick=()=>{propertyWizardState.attachments.splice(Number(b.dataset.i),1);renderPropertyWizard();});
    $('#propWizCreate')?.addEventListener('click',()=>{const n=propertyPortfolio.length+1;propertyPortfolio.push({id:`PR-NEW-${n}`,code:`PROP-2026-${String(n).padStart(4,'0')}`,name:{ar:propertyWizardState.name||'عقار تجريبي جديد',en:propertyWizardState.name||'New Prototype Property'},type:propertyWizardState.type,status:propertyWizardState.units.some(u=>u.status==='leased')?'partiallyLeased':propertyWizardState.status,ownershipType:propertyWizardState.ownershipType,address:{ar:propertyWizardState.address||'—',en:propertyWizardState.address||'—'},gps:propertyWizardState.gps||'—',value:0,owners:propertyWizardState.owners.length?propertyWizardState.owners:[{kind:'administration',ref:'MOJ-ADM',name:{ar:'إدارة شئون وأموال القاصرين',en:'Minors Affairs & Funds Administration'},share:100}],deed:{no:propertyWizardState.deedNo||'—',date:propertyWizardState.deedDate||'2026-08-09',issuer:{ar:propertyWizardState.issuer||'—',en:propertyWizardState.issuer||'—'},nature:{ar:propertyWizardState.ownershipNature||'—',en:propertyWizardState.ownershipNature||'—'},plan:propertyWizardState.planNo||'—',parcel:propertyWizardState.parcelNo||'—',survey:propertyWizardState.surveyRef||'—'},attachments:propertyWizardState.attachments,units:propertyWizardState.units,maintenance:[]});closeModal();toast(t('propertyCreated'));propertyTab='properties';renderPage('assets');});
  }

  function filePropertiesHtml(fileId){const list=propertyPortfolio.filter(p=>p.owners.some(o=>o.ref===fileId));if(!list.length)return'';return `<div class="panel" style="margin-top:14px"><div class="panel-head"><div><h3>${t('propertyLinkedFiles')}</h3></div></div><div class="panel-body flush">${table([t('propertyCode'),t('propertyName'),t('ownershipType'),t('ownerShare'),t('units'),t('propertyStatus'),t('action')],list.map(p=>{const o=p.owners.find(x=>x.ref===fileId);return[p.code,esc(loc(p.name)),ownershipLabel(p.ownershipType),`${o?.share||0}%`,p.units.length,propertyStatusLabel(p.status),`<button class="btn btn-sm view-property" data-property="${p.id}">${t('viewProperty')}</button>`]}))}</div></div>`;}

  function renderApprovals(){
    return `${pageHeader(t('approvalsTitle'),t('approvalsIntro'))}<div class="cards-grid">${approvals.map(a=>`<article class="approval-card"><h4>${esc(loc(a.title))}</h4><p>${a.file} · ${esc(loc(a.owner))}</p><div class="approval-meta"><span class="chip gold">${money(a.amount)} BHD</span><span class="chip">${esc(loc(a.age))}</span></div><div class="page-actions"><button class="btn btn-sm">${t('review')}</button><button class="btn btn-sm">${t('returnComplete')}</button><button class="btn btn-sm btn-primary">${t('approve')}</button></div></article>`).join('')}</div>`;
  }

  function renderReports(){
    const items=[['📁','reportFiles'],['💳','reportFinancial'],['🎓','reportMaturity'],['🏢','propertyReport'],['🧾','collectionReport'],['⇄','distributionReport'],['🧾','reportAudit'],['🔔','reportAlerts']];
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

    $$('.module-tab[data-property-tab],.property-tab-jump,.property-alert[data-property-tab]').forEach(b=>b.onclick=()=>{propertyTab=b.dataset.propertyTab;renderPage('assets');});
    $$('.view-property').forEach(b=>b.onclick=()=>openProperty(b.dataset.property));
    $$('.view-unit').forEach(b=>b.onclick=()=>openUnit(b.dataset.unit));
    $$('.view-lease').forEach(b=>b.onclick=()=>openLease(b.dataset.lease));
    $$('.tenant-statement').forEach(b=>b.onclick=()=>openTenantStatement(b.dataset.account));
    $$('.record-payment').forEach(b=>b.onclick=()=>recordPayment(b.dataset.invoice));
    $('#newPropertyBtn')?.addEventListener('click',openPropertyWizard);
    $('#propertyReportBtn')?.addEventListener('click',()=>toast(t('propertyReport')));
    const propInputs=['#propSearch','#propStatusFilter','#propOwnershipFilter','#propTypeFilter'];propInputs.forEach(sel=>{const el=$(sel);if(el)el.addEventListener(el.tagName==='INPUT'?'input':'change',filterPropertyResults);});
    $('#clearPropertyFilters')?.addEventListener('click',()=>{['#propSearch','#propStatusFilter','#propOwnershipFilter','#propTypeFilter'].forEach(sel=>{const el=$(sel);if(el)el.value='';});filterPropertyResults();});
    const unitSearch=$('#unitSearch'),unitStatus=$('#unitStatusFilter');
    const filterUnits=()=>{const q=(unitSearch?.value||'').toLowerCase(),st=unitStatus?.value||'';const rows=allPropertyUnits().filter(({property:p,unit:u})=>(!st||u.status===st)&&(!q||[p.code,loc(p.name),u.code,u.number,loc(u.lease?.tenant?.name||'')].join(' ').toLowerCase().includes(q))).map(({property:p,unit:u})=>[p.code,`<b>${esc(loc(p.name))}</b>`,u.code,esc(u.number),esc(String(u.floor)),t(u.usage)||propertyTypeLabel(u.usage),`${u.area} m²`,`<span class="status ${u.status==='leased'?'active':u.status==='maintenance'?'review':'new'}">${unitStatusLabel(u.status)}</span>`,u.lease?esc(loc(u.lease.tenant.name)):'—',u.lease?`${money(u.lease.annualRent/12)} BHD`:'—',`<button class="btn btn-sm view-unit" data-unit="${u.id}">${t('viewUnit')}</button>`]);const wrap=$('#unitsResults');if(wrap)wrap.innerHTML=table([t('propertyCode'),t('propertyName'),t('unitCode'),t('unitNumber'),t('floor'),t('usageType'),t('area'),t('unitStatus'),t('tenant'),t('monthlyRent'),t('action')],rows);$$('.view-unit',wrap||document).forEach(b=>b.onclick=()=>openUnit(b.dataset.unit));};
    unitSearch?.addEventListener('input',filterUnits);unitStatus?.addEventListener('change',filterUnits);
    const leaseSearch=$('#leaseSearch'),leaseStatus=$('#leaseStatusFilter');
    const filterLeases=()=>{const q=(leaseSearch?.value||'').toLowerCase(),st=leaseStatus?.value||'';const rows=allLeases().filter(({lease:l,property:p,unit:u})=>(!st||l.status===st)&&(!q||[l.contractNo,loc(l.tenant.name),p.code,u.code].join(' ').toLowerCase().includes(q))).map(({property:p,unit:u,lease:l})=>[l.contractNo,esc(loc(l.tenant.name)),`${p.code} / ${u.code}`,cycleLabel(l.cycle),dateFmt(l.start),dateFmt(l.end),`${money(l.annualRent)} BHD`,`<span class="status ${l.status==='active'?'active':l.status==='expired'?'closed':'review'}">${l.status==='active'?t('activeLease'):l.status==='expired'?t('expiredLease'):t('terminatedLease')}</span>`,l.account,`<button class="btn btn-sm view-lease" data-lease="${l.id}">${t('viewLease')}</button>`]);const panel=$('#leaseSearch')?.closest('.panel');const oldTable=panel?.querySelector('.table-wrap');if(oldTable){oldTable.outerHTML=table([t('contractNo'),t('tenant'),t('property')+' / '+t('unitCode'),t('paymentCycle'),t('leaseStart'),t('leaseEnd'),t('annualRent'),t('leaseStatus'),t('tenantSubledger'),t('action')],rows);$$('.view-lease',panel).forEach(b=>b.onclick=()=>openLease(b.dataset.lease));}};
    leaseSearch?.addEventListener('input',filterLeases);leaseStatus?.addEventListener('change',filterLeases);
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
      <section class="detail-section" data-section="assets">${table([t('assetType'),t('assetDetail'),t('value'),t('allocation'),t('monthlyIncome'),t('yearlyIncome')],assetRows)}${filePropertiesHtml(id)}</section>
      <section class="detail-section" data-section="finance">${financeRows.length?table([t('accountCode'),t('accountOwner'),t('parentAccount'),t('currentBalance'),t('action')],financeRows):`<div class="empty-state"><div class="empty-icon">💳</div><p>${t('noSubAccount')}</p></div>`}</section>
      <section class="detail-section" data-section="requests">${table([t('reference'),t('description'),t('status'),t('date')],[[`REQ-${f.id.slice(-4)}`,lang==='ar'?'طلب متابعة على الملف':'File follow-up request',statusLabel('review'),dateFmt('2026-08-07')]])}</section>
      <section class="detail-section" data-section="documents">${table([t('description'),t('status'),t('date')],[[lang==='ar'?'المستند الأساسي للملف':'Primary file document',statusLabel('active'),dateFmt(f.opened)]])}</section>
      <section class="detail-section" data-section="audit">${table([t('date'),t('description'),t('officer')],[[dateFmt(f.opened),lang==='ar'?'إنشاء الملف':'File created',esc(loc(f.officer))],[dateFmt('2026-08-08'),lang==='ar'?'مراجعة بيانات الملف':'File data reviewed',esc(loc(f.officer))]])}</section>`;
    openDrawer();
    $$('.tab-btn',$('#drawerBody')).forEach(b=>b.onclick=()=>{$$('.tab-btn',$('#drawerBody')).forEach(x=>x.classList.toggle('active',x===b));$$('.detail-section',$('#drawerBody')).forEach(s=>s.classList.toggle('active',s.dataset.section===b.dataset.tab));});
    $$('.balance-details',$('#drawerBody')).forEach(b=>b.onclick=()=>openStatement(b.dataset.account));
    $$('.view-property',$('#drawerBody')).forEach(b=>b.onclick=()=>openProperty(b.dataset.property));
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
