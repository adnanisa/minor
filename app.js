(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const isLogin = document.body.classList.contains('login-body');
  const isPortal = document.body.classList.contains('portal-body');

  const I18N = {
    ar: {
      kingdom:'مملكة البحرين', ministry:'وزارة العدل والشئون الإسلامية والأوقاف', ministryShort:'وزارة العدل', internalPortal:'البوابة الداخلية للموظفين',
      systemName:'نظام إدارة شئون وأموال القاصرين', shortSystemName:'شئون وأموال القاصرين', loginIntro:'منصة موحدة لإدارة الملفات والأطراف والأصول والحسابات والتنبيهات ومسارات العمل والرقابة المالية.',
      feature1:'مركز ملفات موحد وبحث عبر علاقات الأشخاص', feature2:'سجل مركزي للأصول وحسابات أستاذ عام مترابطة', feature3:'صندوق عمل موحد وتنبيهات ذات دورة حياة واضحة', prototypeOnly:'نموذج تجريبي للاستخدام الفني الداخلي فقط',
      signIn:'تسجيل الدخول', signInHint:'اختر اللغة ثم طريقة الدخول المناسبة.', ekeyLogin:'الدخول الموحد عبر eKey Bahrain', ekeyHint:'المسار الرئيسي للدخول الحكومي الموحد', orStaff:'أو الدخول بحساب الموظف', username:'اسم المستخدم', usernamePlaceholder:'مثال: n.almo', password:'كلمة المرور', rememberMe:'تذكرني على هذا الجهاز', forgotPassword:'نسيت كلمة المرور؟', enterSystem:'الدخول للنظام', loginRequired:'يرجى إدخال اسم المستخدم وكلمة المرور.',
      main:'الرئيسية', dashboard:'الرئيسية', fileCenter:'مركز الملفات', workInbox:'صندوق العمل الموحد', workAlerts:'تنبيهات العمل', operations:'الوحدات', assetCenter:'مركز الأصول', propertyManagement:'إدارة واستثمار العقارات', generalLedger:'حسابات الأستاذ العام', reportsMonitoring:'التقارير والمتابعة', administration:'الإدارة', usersPermissions:'المستخدمون والصلاحيات', settingsIntegrations:'الإعدادات والتكاملات', logout:'تسجيل الخروج', userName:'نواف محمد', systemAdmin:'مسؤول النظام', globalSearch:'بحث موحد بالملف أو الشخص أو الأصل...',
      homeTitle:'بوابة العمل الموحدة', homeIntro:'مدخل موحد للوحدات، مهام الموظف، التنبيهات التشغيلية، ومؤشرات المتابعة دون خلط حالة الملف بالإجراءات المالية.', openNewFile:'فتح ملف جديد', viewInbox:'عرض صندوق العمل',
      moduleFiles:'الملفات', moduleFilesHint:'البحث والإنشاء وعلاقات الأشخاص', moduleAssets:'الأصول', moduleAssetsHint:'السجل المركزي وتصنيف الأصول', moduleProperties:'العقارات', modulePropertiesHint:'الوحدات والعقود والتحصيل', moduleLedger:'الحسابات', moduleLedgerHint:'الأستاذ العام والحسابات المساعدة', moduleInbox:'المهام', moduleInboxHint:'أعمال تنتظر إجراء منك', moduleReports:'التقارير', moduleReportsHint:'تقارير ومتابعة مجمعة',
      activeFiles:'ملفات فعالة', awaitingApproval:'بانتظار الاعتماد', openWorkItems:'أعمال مفتوحة', unreadReplies:'ردود تعاميم جديدة', legalOperational:'المؤشرات التشغيلية', financialMonitoring:'المتابعة المالية', recentWork:'أحدث الأعمال', priorityAlerts:'تنبيهات تتطلب إجراء', maturityUnpaid:'مبالغ رشد غير مصروفة', unverifiedAccounts:'حسابات بانتظار التحقق', propertyArrears:'متأخرات إيجارية', operationalNote:'القيم المالية هنا للمتابعة فقط وليست حالات قانونية للملف.',
      filesTitle:'مركز الملفات الموحد', filesIntro:'بحث موحد يعتمد على الملف والشخص وعلاقاته، مع فلاتر محفوظة بدلاً من تكرار شاشات الأنواع في القائمة الجانبية.', searchFiles:'ابحث برقم الملف أو الرقم الشخصي أو اسم صاحب الملف أو أي طرف مرتبط...', allTypes:'كل أنواع الملفات', allStatuses:'كل الحالات القانونية', allOperational:'كل الحالات التشغيلية', savedAll:'كل الملفات', savedApproval:'بانتظار الاعتماد', savedEstates:'التركات', savedMyDept:'ملفات إدارتي', serverSideNote:'يعرض النموذج سلوك البحث والترقيم الجانبي المخطط تنفيذه Server-side في Oracle APEX.',
      fileNo:'رقم الملف', fileType:'نوع الملف', subjectOwner:'صاحب الملف / المتوفى', personalId:'الرقم الشخصي', legalStatus:'الحالة القانونية', operationalStatus:'الحالة التشغيلية', assignment:'التكليف', completeness:'نسبة الاكتمال', action:'الإجراء', viewFileDetails:'عرض تفاصيل الملف', noResults:'لا توجد نتائج مطابقة.', previous:'السابق', next:'التالي', results:'نتيجة', page:'صفحة',
      estateMuslim:'ملف تركة مسلم', estateNonMuslim:'ملف تركة غير مسلم', minorLinked:'ملف قاصر مرتبط بتركة', minorIndependent:'ملف قاصر مستقل', interdicted:'ملف محجور عليه', prisoner:'ملف مسجون', absent:'ملف غائب',
      typeEstateMuslimHint:'مرتبط بفريضة شرعية وبيانات ورثة مسترجعة من المصدر', typeEstateNonMuslimHint:'تركة تستند إلى مستند أو حكم قانوني معتمد', typeMinorLinkedHint:'سجل قاصر فرعي مرتبط بملف تركة', typeMinorIndependentHint:'ملف قاصر غير مرتبط بتركة قائمة', typeInterdictedHint:'ملف شخص خاضع لحكم حجر أو ولاية', typePrisonerHint:'ملف شخص مسجون تدير الإدارة أمواله وشؤونه', typeAbsentHint:'ملف غائب وفق قرار أو حكم معتمد',
      draft:'مسودة', legalAwaitingApproval:'بانتظار الاعتماد', legalActive:'فعال', legalSuspended:'موقوف', legalClosed:'مغلق', dataCollection:'استكمال البيانات', circularStage:'إصدار ومتابعة التعاميم', assetStage:'حصر وتسجيل الأصول', activeManagement:'إدارة نشطة', periodicFollowup:'متابعة دورية', deptQueue:'قائمة عمل القسم', unassigned:'غير مكلف',
      newFileTitle:'فتح ملف جديد', newFileHint:'معالج يعتمد على نوع الملف ومصدر البيانات. لا يتم إدخال الأصول أثناء إنشاء الملف.', stepTypeSource:'النوع والمصدر', stepLegalData:'البيانات القانونية والشخصية', stepParties:'الأطراف والعلاقات', stepDocuments:'المستندات', stepReview:'المراجعة والإنشاء', chooseType:'اختر نوع الملف', sourceReference:'مرجع المصدر', faraidNo:'رقم الفريضة الشرعية', legalDocumentNo:'رقم الحكم / المستند القانوني', courtDecisionNo:'رقم قرار / حكم المحكمة', prisonerNo:'رقم السجين', absenceDecisionNo:'رقم قرار الغياب', retrieveSource:'استرجاع البيانات من المصدر', sourceVerified:'تم الاسترجاع من المصدر التجريبي', sourcePending:'بانتظار الاسترجاع من المصدر', dataSource:'مصدر البيانات', igaSource:'هيئة المعلومات والحكومة الإلكترونية', faraidSource:'نظام الفريضة الشرعية', courtSource:'نظام المحاكم', prisonSource:'نظام المؤسسات الإصلاحية', manualException:'إدخال يدوي استثنائي', enableManual:'تفعيل الإدخال اليدوي الاستثنائي', overrideReason:'مبرر الإدخال اليدوي', duplicateCheck:'فحص التكرار', noDuplicate:'لا يوجد ملف قائم مطابق وفق القاعدة الحالية.', duplicateFound:'تم العثور على ملف قائم أو سابق لنفس الشخص والنوع.', openExisting:'فتح الملف القائم', fullName:'الاسم الكامل', nationality:'الجنسية', dateOfDeath:'تاريخ الوفاة', birthDate:'تاريخ الميلاد', guardianshipStart:'تاريخ بداية التولي', decisionDate:'تاريخ الحكم / القرار', prisonStart:'تاريخ بدء السجن', prisonEnd:'تاريخ نهاية السجن', absenceDate:'تاريخ ثبوت الغياب', maritalStatus:'الحالة الاجتماعية', address:'العنوان', mobile:'رقم التواصل', email:'البريد الإلكتروني', fieldFromSource:'حقل مسترجع من المصدر', fieldManual:'حقل مدخل يدوياً', invalidCpr:'يجب أن يتكون الرقم الشخصي من 9 أرقام.', futureDateError:'لا يمكن اختيار تاريخ مستقبلي لهذا الحقل.', lookupFirst:'يرجى استرجاع البيانات والتحقق من المصدر أولاً.',
      heirs:'الورثة', relatedParties:'الأطراف ذوو العلاقة', appointedParties:'الأطراف المعيّنون', role:'الصفة', relation:'صلة القرابة', age:'العمر', personRecord:'سجل الشخص الموحد', contactData:'بيانات التواصل', addParty:'إضافة طرف', lookupPerson:'البحث بالرقم الشخصي', partySource:'مصدر بيانات الطرف', currentBalance:'الرصيد الحالي', balanceDetails:'تفاصيل الرصيد',
      requiredDocuments:'المستندات المطلوبة', documentName:'اسم المستند', documentStatus:'الحالة', documentSource:'مصدر المستند', verified:'متحقق', missing:'ناقص', uploaded:'مرفوع', uploadPrototype:'رفع مستند تجريبي', faraidDocument:'الفريضة الشرعية', deathCertificate:'شهادة الوفاة', identificationPapers:'الأوراق الثبوتية', fileOpeningForm:'استمارة فتح الملف', courtOrder:'الحكم / القرار القضائي', proofOfImprisonment:'إفادة السجن', proofOfAbsence:'حكم أو قرار الغياب', reviewAllData:'مراجعة شاملة لكل البيانات المؤثرة قبل إنشاء الملف.', assetsAddedLater:'لا توجد خطوة أصول هنا؛ تُسجل الأصول بعد تثبيت الملف وإصدار التعاميم وورود الردود.', createDraft:'إنشاء الملف كمسودة', cancel:'إلغاء', close:'إغلاق', confirmCancelWizard:'سيتم فقد البيانات المدخلة في المعالج. هل تريد الإلغاء؟', fileCreated:'تم إنشاء الملف كمسودة وإضافته إلى مركز الملفات.',
      fileDetails:'تفاصيل الملف', overview:'نظرة عامة', parties:'الأطراف', legalEvents:'الأحداث والتواريخ', documents:'المستندات', circulars:'التعاميم والردود', assets:'الأصول', accounts:'الحسابات والحركات', requestsWork:'الطلبات والأعمال', auditTrail:'سجل التدقيق', approveAssign:'اعتماد وتكليف', addAsset:'تسجيل أصل', issueCircular:'إصدار تعميم', printSummary:'طباعة ملخص الملف', legalReference:'المرجع القانوني', openedDate:'تاريخ فتح الملف', responsibleUnit:'الوحدة المسؤولة', assignedOfficer:'الموظف المكلف', priority:'الأولوية', normal:'عادية', high:'عالية', urgent:'عاجلة', notes:'ملاحظات', fileApproval:'اعتماد الملف', bankCircularApproval:'اعتماد مخاطبة البنوك والشركات المالية', assignmentMode:'أسلوب التكليف', assignToDepartment:'إسناد إلى قائمة عمل القسم', assignToEmployee:'تكليف موظف محدد', department:'القسم', employee:'الموظف', approvalNotes:'ملاحظات الاعتماد', confirmApprove:'تنفيذ الاعتماد والتكليف', approvedAssigned:'تم اعتماد الملف وتسجيل التكليف في سجل التدقيق.', completenessMethod:'طريقة احتساب نسبة الاكتمال', calculatedMetric:'قيمة مشتقة تُحسب من البيانات عند العرض وليست قيمة ثابتة مخزنة.',
      alertsTitle:'تنبيهات العمل', alertsIntro:'أحداث فعلية تتطلب إجراء، ولكل تنبيه مصدر وقاعدة ظهور واستبعاد ومستلم وSLA ودورة حياة مستقلة.', alertSearch:'ابحث في التنبيهات...', allPriorities:'كل الأولويات', allAlertStatuses:'كل حالات التنبيه', allAlertTypes:'كل أنواع التنبيهات', critical:'عاجل', warning:'متابعة', information:'معلومة', alertOpen:'مفتوح', alertInProgress:'قيد المعالجة', alertResolved:'تمت المعالجة', source:'المصدر', triggerRule:'قاعدة الظهور', exclusionRule:'شروط الاستبعاد', recipient:'الجهة المستلمة', dedupKey:'مفتاح منع التكرار', createdAt:'تاريخ الإنشاء', sla:'المهلة', lifecycle:'دورة حياة التنبيه', resolveAlert:'إغلاق التنبيه كمُعالج', startHandling:'بدء المعالجة', openRelated:'فتح السجل المرتبط', alertResolvedToast:'تم تحديث حالة التنبيه.',
      inboxTitle:'صندوق العمل الموحد', inboxIntro:'نقطة موحدة لعرض عناصر العمل فقط؛ تبقى قواعد القرار ومسار الاعتماد داخل الوحدة الأصلية.', itemType:'نوع العمل', sourceModule:'الوحدة المصدر', currentStage:'المرحلة الحالية', requiredAction:'الإجراء المطلوب', dueTime:'المهلة المتبقية', openItem:'فتح عنصر العمل', noInbox:'لا توجد عناصر عمل مطابقة.',
      assetsTitle:'مركز الأصول المركزي', assetsIntro:'سجل واحد لكل أصل يمثل مصدر الحقيقة، ويغطي العقارات والمنقولات والأصول المالية والتجارية وغيرها.', registerAsset:'تسجيل أصل جديد', assetCategories:'تصنيفات الأصول المعتمدة', realEstateAssets:'الأصول العقارية', movableAssets:'الأصول المنقولة', financialAssets:'الأصول المالية', commercialAssets:'الأصول التجارية', otherAssets:'أصول أخرى', realEstateExamples:'أرض، شقة، بيت، بناية، مجمع، ملكية زمنية', movableExamples:'سيارات، دراجات، سفن، مقتنيات، رخص، لوحات، معدات، أجهزة', financialExamples:'حسابات، ودائع، محافظ، أسهم، سندات، صكوك، نقد، مستحقات', commercialExamples:'سجلات تجارية', otherExamples:'أنواع أصول تُعتمد مستقبلاً', allCategories:'كل التصنيفات', assetSearch:'ابحث برقم الأصل أو الملف أو التفاصيل...', assetNo:'رقم الأصل', registrationDate:'تاريخ التسجيل', mainClassification:'التصنيف الرئيسي للأصل', subClassification:'نوع الأصل التفصيلي', managementEntity:'جهة إدارة الأصل', guardianshipCapacity:'صفة ولاية الأصل', assetRights:'حقوق الأصل', ownershipType:'نوع الملكية', ownershipPercentage:'نسبة الملكية', estimatedValue:'القيمة التقديرية', assetStatus:'حالة الأصل', relatedParty:'الطرف المرتبط بالأصل', assetDocuments:'المستندات المرتبطة بالأصل', confidenceLevel:'درجة الموثوقية', hasRevenue:'وجود إيراد', hasExpenses:'وجود مصروفات', dataProvenance:'مصدر تسجيل الأصل', fieldSourceMap:'خريطة مصدر الحقول', required:'إلزامي', editable:'قابل للتعديل', yes:'نعم', no:'لا', fixed:'غير قابل للتعديل', active:'نشط', underProcedure:'تحت الإجراء', disposed:'تم التصرف فيه', highConfidence:'مثبت بمستند رسمي', mediumConfidence:'مثبت بإفادة', lowConfidence:'غير مثبت / قيد التحقق', singleSourceNote:'تظهر هذه البيانات في جميع الوحدات من سجل الأصل المركزي نفسه.', cannotAddAsset:'لا يمكن تسجيل أصل قبل اعتماد الملف وورود رد مؤكد من جهة ذات علاقة.', addFromCircular:'تسجيل أصل من رد تعميم', assetCreated:'تم إنشاء سجل أصل مركزي تجريبي.', viewAsset:'عرض بطاقة الأصل', revenueRecords:'سجلات الإيراد', expenseRecords:'سجلات المصروف', linkedAlertsRequests:'الطلبات والتنبيهات المرتبطة',
      propertyTitle:'إدارة واستثمار العقارات', propertyIntro:'الوحدات والعقود والتحصيلات والتوزيعات؛ الإيراد سجل مالي متغير ونسبة الإشغال مؤشر مشتق من الوحدات والعقود للفترة.', propertyDashboard:'لوحة العقارات', portfolio:'محفظة العقارات', units:'الوحدات', leases:'العقود', collections:'التحصيلات', distributions:'التوزيعات', propertyTree:'شجرة الملكيات', propertiesCount:'العقارات', totalUnits:'إجمالي الوحدات', occupiedUnits:'وحدات مؤجرة', vacantUnits:'وحدات شاغرة', occupancyRate:'نسبة الإشغال المشتقة', dueRent:'إجمالي المستحق', collectedRent:'إجمالي المحصل', arrears:'المتبقي والمتأخرات', propertyCode:'كود العقار', propertyName:'اسم العقار', unitCode:'كود الوحدة', tenant:'المستأجر', contractNo:'رقم العقد', startDate:'تاريخ البداية', endDate:'تاريخ النهاية', annualRent:'الإيجار السنوي', invoiceNo:'رقم الفاتورة', dueDate:'تاريخ الاستحقاق', paidAmount:'المسدد', remaining:'المتبقي', recordCollection:'تسجيل تحصيل', viewProperty:'عرض بطاقة العقار', viewLease:'عرض تفاصيل العقد', occupancySource:'محسوبة من حالة الوحدات والعقود للفترة المحددة.', revenueSource:'محسوب من الفواتير وسندات القبض، وليس حقلاً ثابتاً في العقار.',
      ledgerTitle:'حسابات الأستاذ العام', ledgerIntro:'الحسابات العامة والحسابات المساعدة المرتبطة بالملفات والأطراف مع كشف مدين ودائن ورصيد جارٍ.', chartOfAccounts:'دليل الأستاذ العام', subsidiaryAccounts:'الحسابات المساعدة', accountCode:'رمز الحساب', accountName:'اسم الحساب', accountType:'نوع الحساب', parentAccount:'حساب الأستاذ العام', accountOwner:'صاحب الحساب', linkedFile:'الملف المرتبط', debit:'مدين', credit:'دائن', accountStatement:'كشف حركة الحساب', openingBalance:'الرصيد الافتتاحي', totalDebit:'إجمالي المدين', totalCredit:'إجمالي الدائن', closingBalance:'الرصيد الختامي', transactionDate:'التاريخ', reference:'المرجع', description:'وصف الحركة', runningBalance:'الرصيد بعد الحركة', entryDetails:'تفاصيل القيد', journalEntry:'القيد المحاسبي', journalLines:'سطور القيد', noTransactions:'لا توجد حركات في الفترة.', banks:'البنوك', cash:'الكاش / الصندوق', minorsGeneral:'حساب القُصّر العام', maturityGeneral:'حساب الرشد العام', interdictedGeneral:'حساب المحجور عليهم العام', estatesGeneral:'حساب التركات العام',
      reportsTitle:'التقارير والمتابعة', reportsIntro:'فصل واضح بين التنبيه الحدثي والتقارير والقوائم التجميعية، مع فلاتر ومخرجات قابلة للتشغيل.', runReport:'تشغيل التقرير', exportCsv:'تصدير CSV', reportFileStatus:'حالة الملفات واكتمالها', reportAlertsLifecycle:'دورة حياة التنبيهات وSLA', reportMaturity:'مبالغ الرشد غير المصروفة', reportAssets:'حصر الأصول وموثوقية البيانات', reportProperty:'إيرادات وإشغال العقارات', reportCirculars:'التعاميم والردود', reportInbox:'أداء صندوق العمل', reportAudit:'التدقيق وإعادة التكليف', reportResult:'نتيجة التقرير التجريبية', fromDate:'من تاريخ', toDate:'إلى تاريخ', run:'تشغيل',
      usersTitle:'المستخدمون والصلاحيات', usersIntro:'أدوار وصلاحيات وفصل مهام وتحديد الجهات المخولة بالاعتماد والتكليف.', settingsTitle:'الإعدادات والتكاملات', settingsIntro:'قواعد أنواع الملفات، مصادر البيانات، التكاملات، الترقيم، التنبيهات، ونماذج احتساب الاكتمال.', prototypeModule:'هذه شاشة تجريبية تُظهر الهيكل المقترح تمهيداً لنقلها إلى Oracle APEX Universal Theme.',
      save:'حفظ', confirm:'تأكيد', statement:'كشف الحساب', balance:'الرصيد', view:'عرض', details:'التفاصيل', noData:'لا توجد بيانات', BHD:'د.ب', month:'شهرياً', year:'سنوياً', equalDistributionNote:'التقسيم بالتساوي في بيانات النموذج افتراضي لأغراض العرض فقط ولا يمثل القسمة الشرعية؛ الأنصبة الفعلية تخضع لحصر الورثة والفريضة الشرعية.',
      languageChanged:'تم تغيير لغة النظام.', forgotPrototype:'سيتم ربط استعادة كلمة المرور بخدمة الهوية في بيئة الإنتاج.', loggedOut:'تم تسجيل الخروج.', genericSaved:'تم حفظ الإجراء في النموذج التجريبي.',
      muslim:'مسلم', nonMuslim:'غير مسلم', married:'متزوج', bahraini:'بحريني', bahrainiFemale:'بحرينية', wife:'الزوجة', son:'ابن', daughter:'ابنة', caretaker:'القائمة على شؤونه', spouse:'الزوجة', monthlyPension:'المعاش التقاعدي الشهري', modelBalance:'الرصيد المالي عند إعداد النموذج', monthlyAllowance:'النفقة الشهرية المصروفة', monthlySurplus:'الفائض الشهري من المعاش', annualPension:'إجمالي المعاش السنوي', annualAllowance:'إجمالي النفقة السنوية', annualSurplus:'صافي الفائض السنوي', monthlyIncome:'إجمالي الدخل الشهري', annualIncome:'إجمالي الدخل السنوي', shareMonthly:'حصة كل وارث شهرياً', shareAnnual:'حصة كل وارث سنوياً'
    },
    en: {
      kingdom:'Kingdom of Bahrain', ministry:'Ministry of Justice, Islamic Affairs & Waqf', ministryShort:'Ministry of Justice', internalPortal:'Internal Staff Portal',
      systemName:'Minors Affairs & Funds Management System', shortSystemName:'Minors Affairs & Funds', loginIntro:'A unified platform for files, parties, assets, accounts, alerts, workflows and financial oversight.',
      feature1:'Unified file center and relationship-based person search', feature2:'Central asset registry with integrated ledger accounts', feature3:'Unified work inbox and lifecycle-based alerts', prototypeOnly:'Prototype for internal technical evaluation only',
      signIn:'Sign in', signInHint:'Choose the language and the appropriate sign-in method.', ekeyLogin:'Sign in with eKey Bahrain', ekeyHint:'Primary government unified sign-in route', orStaff:'or use staff credentials', username:'Username', usernamePlaceholder:'Example: n.almo', password:'Password', rememberMe:'Remember me on this device', forgotPassword:'Forgot password?', enterSystem:'Enter system', loginRequired:'Enter a username and password.',
      main:'Home', dashboard:'Home', fileCenter:'File Center', workInbox:'Unified Work Inbox', workAlerts:'Work Alerts', operations:'Modules', assetCenter:'Asset Center', propertyManagement:'Property Management & Investment', generalLedger:'General Ledger Accounts', reportsMonitoring:'Reports & Monitoring', administration:'Administration', usersPermissions:'Users & Permissions', settingsIntegrations:'Settings & Integrations', logout:'Sign out', userName:'Nawaf Mohammed', systemAdmin:'System Administrator', globalSearch:'Search file, person or asset...',
      homeTitle:'Unified Work Portal', homeIntro:'A single entry point for modules, user tasks, operational alerts and monitoring indicators without mixing file status with financial actions.', openNewFile:'Open New File', viewInbox:'View Work Inbox',
      moduleFiles:'Files', moduleFilesHint:'Search, create and person relationships', moduleAssets:'Assets', moduleAssetsHint:'Central registry and classifications', moduleProperties:'Properties', modulePropertiesHint:'Units, leases and collections', moduleLedger:'Accounts', moduleLedgerHint:'General and subsidiary ledgers', moduleInbox:'Tasks', moduleInboxHint:'Items awaiting your action', moduleReports:'Reports', moduleReportsHint:'Aggregated reports and monitoring',
      activeFiles:'Active Files', awaitingApproval:'Awaiting Approval', openWorkItems:'Open Work Items', unreadReplies:'New Circular Replies', legalOperational:'Operational Indicators', financialMonitoring:'Financial Monitoring', recentWork:'Recent Work', priorityAlerts:'Alerts Requiring Action', maturityUnpaid:'Unpaid Maturity Funds', unverifiedAccounts:'Accounts Awaiting Verification', propertyArrears:'Property Arrears', operationalNote:'Financial values are monitoring indicators and not legal file statuses.',
      filesTitle:'Unified File Center', filesIntro:'Unified search across files, persons and relationships, with saved filters instead of repeated type-specific navigation pages.', searchFiles:'Search by file number, personal ID, file subject or any related party...', allTypes:'All File Types', allStatuses:'All Legal Statuses', allOperational:'All Operational Statuses', savedAll:'All Files', savedApproval:'Awaiting Approval', savedEstates:'Estates', savedMyDept:'My Department Files', serverSideNote:'The prototype demonstrates the server-side search and pagination pattern planned for Oracle APEX.',
      fileNo:'File Number', fileType:'File Type', subjectOwner:'File Subject / Deceased', personalId:'Personal ID', legalStatus:'Legal Status', operationalStatus:'Operational Status', assignment:'Assignment', completeness:'Completeness', action:'Action', viewFileDetails:'View File Details', noResults:'No matching results.', previous:'Previous', next:'Next', results:'results', page:'Page',
      estateMuslim:'Muslim Estate File', estateNonMuslim:'Non-Muslim Estate File', minorLinked:'Minor File Linked to Estate', minorIndependent:'Independent Minor File', interdicted:'Interdicted Person File', prisoner:'Prisoner File', absent:'Absent Person File',
      typeEstateMuslimHint:'Linked to an Islamic inheritance certificate and source-based heirs', typeEstateNonMuslimHint:'Estate based on an approved legal judgment or instrument', typeMinorLinkedHint:'Child record linked to an existing estate file', typeMinorIndependentHint:'Minor file not linked to an existing estate', typeInterdictedHint:'Person subject to an interdiction or guardianship ruling', typePrisonerHint:'Prisoner whose affairs and funds are administered', typeAbsentHint:'Absent person under an approved decision or judgment',
      draft:'Draft', legalAwaitingApproval:'Awaiting Approval', legalActive:'Active', legalSuspended:'Suspended', legalClosed:'Closed', dataCollection:'Data Completion', circularStage:'Circular Issuance & Follow-up', assetStage:'Asset Identification & Registration', activeManagement:'Active Management', periodicFollowup:'Periodic Follow-up', deptQueue:'Department Work Queue', unassigned:'Unassigned',
      newFileTitle:'Open New File', newFileHint:'A file-type and source-driven wizard. Assets are not entered during file creation.', stepTypeSource:'Type & Source', stepLegalData:'Legal & Person Data', stepParties:'Parties & Relationships', stepDocuments:'Documents', stepReview:'Review & Create', chooseType:'Choose File Type', sourceReference:'Source Reference', faraidNo:'Islamic Inheritance Certificate Number', legalDocumentNo:'Judgment / Legal Instrument Number', courtDecisionNo:'Court Ruling / Decision Number', prisonerNo:'Prisoner Number', absenceDecisionNo:'Absence Decision Number', retrieveSource:'Retrieve Source Data', sourceVerified:'Retrieved from the prototype source', sourcePending:'Awaiting source retrieval', dataSource:'Data Source', igaSource:'Information & eGovernment Authority', faraidSource:'Inheritance Certificate System', courtSource:'Court System', prisonSource:'Correctional Institution System', manualException:'Exceptional Manual Entry', enableManual:'Enable Exceptional Manual Entry', overrideReason:'Manual Entry Justification', duplicateCheck:'Duplicate Check', noDuplicate:'No matching existing file under the current rule.', duplicateFound:'An existing or historical file was found for the same person and type.', openExisting:'Open Existing File', fullName:'Full Name', nationality:'Nationality', dateOfDeath:'Date of Death', birthDate:'Date of Birth', guardianshipStart:'Guardianship Start Date', decisionDate:'Judgment / Decision Date', prisonStart:'Imprisonment Start Date', prisonEnd:'Imprisonment End Date', absenceDate:'Date Absence Established', maritalStatus:'Marital Status', address:'Address', mobile:'Contact Number', email:'Email', fieldFromSource:'Field retrieved from source', fieldManual:'Manually entered field', invalidCpr:'Personal ID must contain 9 digits.', futureDateError:'A future date is not allowed for this field.', lookupFirst:'Retrieve and verify source data first.',
      heirs:'Heirs', relatedParties:'Related Parties', appointedParties:'Appointed Parties', role:'Capacity', relation:'Relationship', age:'Age', personRecord:'Unified Person Record', contactData:'Contact Details', addParty:'Add Party', lookupPerson:'Search by Personal ID', partySource:'Party Data Source', currentBalance:'Current Balance', balanceDetails:'Balance Details',
      requiredDocuments:'Required Documents', documentName:'Document Name', documentStatus:'Status', documentSource:'Document Source', verified:'Verified', missing:'Missing', uploaded:'Uploaded', uploadPrototype:'Upload Prototype Document', faraidDocument:'Inheritance Certificate', deathCertificate:'Death Certificate', identificationPapers:'Identification Papers', fileOpeningForm:'File Opening Form', courtOrder:'Court Judgment / Decision', proofOfImprisonment:'Prison Confirmation', proofOfAbsence:'Absence Judgment / Decision', reviewAllData:'Full review of all material information before creating the file.', assetsAddedLater:'There is no asset step here; assets are registered after file establishment, circular issuance and confirmed replies.', createDraft:'Create File as Draft', cancel:'Cancel', close:'Close', confirmCancelWizard:'Entered wizard data will be lost. Cancel the process?', fileCreated:'The file was created as a draft and added to the File Center.',
      fileDetails:'File Details', overview:'Overview', parties:'Parties', legalEvents:'Events & Dates', documents:'Documents', circulars:'Circulars & Replies', assets:'Assets', accounts:'Accounts & Transactions', requestsWork:'Requests & Work', auditTrail:'Audit Trail', approveAssign:'Approve & Assign', addAsset:'Register Asset', issueCircular:'Issue Circular', printSummary:'Print File Summary', legalReference:'Legal Reference', openedDate:'File Opened Date', responsibleUnit:'Responsible Unit', assignedOfficer:'Assigned Officer', priority:'Priority', normal:'Normal', high:'High', urgent:'Urgent', notes:'Notes', fileApproval:'File Approval', bankCircularApproval:'Approve Circulars to Banks & Financial Companies', assignmentMode:'Assignment Method', assignToDepartment:'Assign to Department Work Queue', assignToEmployee:'Assign to Specific Employee', department:'Department', employee:'Employee', approvalNotes:'Approval Notes', confirmApprove:'Confirm Approval & Assignment', approvedAssigned:'The file was approved and the assignment was written to the audit trail.', completenessMethod:'Completeness Calculation Method', calculatedMetric:'A derived metric calculated from current data, not a stored fixed value.',
      alertsTitle:'Work Alerts', alertsIntro:'Actionable events with a defined source, trigger, exclusion, recipient, SLA and independent lifecycle.', alertSearch:'Search alerts...', allPriorities:'All Priorities', allAlertStatuses:'All Alert Statuses', allAlertTypes:'All Alert Types', critical:'Critical', warning:'Follow-up', information:'Information', alertOpen:'Open', alertInProgress:'In Progress', alertResolved:'Resolved', source:'Source', triggerRule:'Trigger Rule', exclusionRule:'Exclusion Rule', recipient:'Recipient', dedupKey:'Deduplication Key', createdAt:'Created At', sla:'SLA', lifecycle:'Alert Lifecycle', resolveAlert:'Mark as Resolved', startHandling:'Start Handling', openRelated:'Open Related Record', alertResolvedToast:'Alert status updated.',
      inboxTitle:'Unified Work Inbox', inboxIntro:'A unified display point for work items; decision rules and approval workflows remain within each source module.', itemType:'Work Item Type', sourceModule:'Source Module', currentStage:'Current Stage', requiredAction:'Required Action', dueTime:'Time Remaining', openItem:'Open Work Item', noInbox:'No matching work items.',
      assetsTitle:'Central Asset Center', assetsIntro:'One source-of-truth record per asset, covering real estate, movable, financial, commercial and other assets.', registerAsset:'Register New Asset', assetCategories:'Approved Asset Classifications', realEstateAssets:'Real Estate Assets', movableAssets:'Movable Assets', financialAssets:'Financial Assets', commercialAssets:'Commercial Assets', otherAssets:'Other Assets', realEstateExamples:'Land, apartment, house, building, complex, timeshare', movableExamples:'Cars, motorcycles, ships, collectibles, licences, plates, equipment, devices', financialExamples:'Accounts, deposits, portfolios, shares, bonds, sukuk, cash, receivables', commercialExamples:'Commercial registrations', otherExamples:'Future approved asset types', allCategories:'All Classifications', assetSearch:'Search by asset number, file or details...', assetNo:'Asset Number', registrationDate:'Registration Date', mainClassification:'Main Asset Classification', subClassification:'Detailed Asset Type', managementEntity:'Asset Management Entity', guardianshipCapacity:'Asset Guardianship Capacity', assetRights:'Asset Rights', ownershipType:'Ownership Type', ownershipPercentage:'Ownership Percentage', estimatedValue:'Estimated Value', assetStatus:'Asset Status', relatedParty:'Related Party', assetDocuments:'Asset Documents', confidenceLevel:'Confidence Level', hasRevenue:'Has Revenue', hasExpenses:'Has Expenses', dataProvenance:'Asset Registration Source', fieldSourceMap:'Field-to-Source Map', required:'Required', editable:'Editable', yes:'Yes', no:'No', fixed:'Not Editable', active:'Active', underProcedure:'Under Procedure', disposed:'Disposed', highConfidence:'Official-document verified', mediumConfidence:'Statement-supported', lowConfidence:'Unverified / Pending Verification', singleSourceNote:'All modules read these values from the same central asset record.', cannotAddAsset:'An asset cannot be registered before file approval and a confirmed reply from a relevant entity.', addFromCircular:'Register Asset from Circular Reply', assetCreated:'A central prototype asset record was created.', viewAsset:'View Asset Profile', revenueRecords:'Revenue Records', expenseRecords:'Expense Records', linkedAlertsRequests:'Linked Requests & Alerts',
      propertyTitle:'Property Management & Investment', propertyIntro:'Units, leases, collections and distributions; revenue is a time-based financial record and occupancy is derived from units and leases for the selected period.', propertyDashboard:'Property Dashboard', portfolio:'Property Portfolio', units:'Units', leases:'Leases', collections:'Collections', distributions:'Distributions', propertyTree:'Ownership Tree', propertiesCount:'Properties', totalUnits:'Total Units', occupiedUnits:'Leased Units', vacantUnits:'Vacant Units', occupancyRate:'Derived Occupancy Rate', dueRent:'Total Due', collectedRent:'Total Collected', arrears:'Outstanding / Arrears', propertyCode:'Property Code', propertyName:'Property Name', unitCode:'Unit Code', tenant:'Tenant', contractNo:'Contract Number', startDate:'Start Date', endDate:'End Date', annualRent:'Annual Rent', invoiceNo:'Invoice Number', dueDate:'Due Date', paidAmount:'Paid', remaining:'Remaining', recordCollection:'Record Collection', viewProperty:'View Property Profile', viewLease:'View Lease Details', occupancySource:'Calculated from unit and lease status for the selected period.', revenueSource:'Calculated from invoices and receipts, not stored as a fixed property field.',
      ledgerTitle:'General Ledger Accounts', ledgerIntro:'General and subsidiary accounts linked to files and parties, with debit, credit and running-balance statements.', chartOfAccounts:'Chart of General Accounts', subsidiaryAccounts:'Subsidiary Accounts', accountCode:'Account Code', accountName:'Account Name', accountType:'Account Type', parentAccount:'General Ledger Account', accountOwner:'Account Owner', linkedFile:'Linked File', debit:'Debit', credit:'Credit', accountStatement:'Account Statement', openingBalance:'Opening Balance', totalDebit:'Total Debit', totalCredit:'Total Credit', closingBalance:'Closing Balance', transactionDate:'Date', reference:'Reference', description:'Transaction Description', runningBalance:'Balance After Transaction', entryDetails:'Entry Details', journalEntry:'Journal Entry', journalLines:'Journal Lines', noTransactions:'No transactions in the period.', banks:'Banks', cash:'Cash / Treasury', minorsGeneral:'General Minors Account', maturityGeneral:'General Maturity Account', interdictedGeneral:'General Interdicted Account', estatesGeneral:'General Estates Account',
      reportsTitle:'Reports & Monitoring', reportsIntro:'A clear separation between event alerts and aggregated reports, with working filters and outputs.', runReport:'Run Report', exportCsv:'Export CSV', reportFileStatus:'File Status & Completeness', reportAlertsLifecycle:'Alert Lifecycle & SLA', reportMaturity:'Unpaid Maturity Funds', reportAssets:'Asset Inventory & Data Confidence', reportProperty:'Property Revenue & Occupancy', reportCirculars:'Circulars & Replies', reportInbox:'Work Inbox Performance', reportAudit:'Audit & Reassignment', reportResult:'Prototype Report Result', fromDate:'From Date', toDate:'To Date', run:'Run',
      usersTitle:'Users & Permissions', usersIntro:'Roles, permissions, segregation of duties and authorities for approval and assignment.', settingsTitle:'Settings & Integrations', settingsIntro:'File-type rules, source systems, integrations, numbering, alerts and completeness models.', prototypeModule:'This prototype screen demonstrates the proposed structure for migration to Oracle APEX Universal Theme.',
      save:'Save', confirm:'Confirm', statement:'Statement', balance:'Balance', view:'View', details:'Details', noData:'No Data', BHD:'BHD', month:'Monthly', year:'Annual', equalDistributionNote:'Equal distribution in this prototype is for demonstration only and does not represent Sharia distribution; actual shares depend on heir determination and the approved inheritance certificate.',
      languageChanged:'System language changed.', forgotPrototype:'Password recovery will be connected to the identity service in production.', loggedOut:'Signed out.', genericSaved:'The prototype action was saved.',
      muslim:'Muslim', nonMuslim:'Non-Muslim', married:'Married', bahraini:'Bahraini', bahrainiFemale:'Bahraini', wife:'Wife', son:'Son', daughter:'Daughter', caretaker:'Person Managing His Affairs', spouse:'Spouse', monthlyPension:'Monthly Pension', modelBalance:'Balance at Prototype Date', monthlyAllowance:'Monthly Allowance Paid', monthlySurplus:'Monthly Pension Surplus', annualPension:'Annual Pension Total', annualAllowance:'Annual Allowance Total', annualSurplus:'Annual Net Surplus', monthlyIncome:'Total Monthly Income', annualIncome:'Total Annual Income', shareMonthly:'Monthly Share per Heir', shareAnnual:'Annual Share per Heir'
    }
  };

  let lang = localStorage.getItem('ma_lang') || 'ar';
  const t = key => I18N[lang]?.[key] ?? I18N.ar[key] ?? key;
  const loc = value => value && typeof value === 'object' && !Array.isArray(value) ? (value[lang] ?? value.ar ?? value.en ?? '') : (value ?? '');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const today = '2026-08-11';

  const arDigits = '٠١٢٣٤٥٦٧٨٩';
  const enDigits = '0123456789';
  function convertDigits(value, targetLang = lang) {
    let s = String(value ?? '');
    for (let i = 0; i < 10; i++) s = s.replaceAll(arDigits[i], enDigits[i]);
    if (targetLang === 'ar') for (let i = 0; i < 10; i++) s = s.replaceAll(enDigits[i], arDigits[i]);
    return s;
  }
  function numberFmt(value, options = {}) {
    const n = Number(value || 0);
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-BH-u-nu-arab' : 'en-GB-u-nu-latn', {numberingSystem:lang === 'ar' ? 'arab' : 'latn', ...options}).format(n);
  }
  const money = value => `${numberFmt(value,{minimumFractionDigits:3,maximumFractionDigits:3})} ${t('BHD')}`;
  function dateFmt(value) {
    if (!value) return '—';
    try { return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-BH-u-nu-arab' : 'en-GB-u-nu-latn',{numberingSystem:lang === 'ar'?'arab':'latn',year:'numeric',month:'long',day:'numeric'}).format(new Date(`${value}T00:00:00`)); }
    catch { return convertDigits(value); }
  }
  function localizeNumbersInDom(root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode(node){
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('script,style,input,textarea,select,option')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { node.nodeValue = convertDigits(node.nodeValue, lang); });
  }

  function applyLanguage(newLang, rerender = true) {
    lang = newLang === 'en' ? 'en' : 'ar';
    localStorage.setItem('ma_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $$('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    if (isLogin) document.title = `${t('signIn')} | ${t('shortSystemName')}`;
    if (isPortal && rerender) renderPage(currentPage);
    localizeNumbersInDom(document.body);
  }

  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 2500);
  }

  function initLogin() {
    applyLanguage(lang, false);
    const form = $('#loginForm');
    const goPortal = () => {
      const user = $('#username');
      const pass = $('#password');
      if (form && (!user.value.trim() || !pass.value.trim())) { $('#loginMessage').textContent = t('loginRequired'); return; }
      sessionStorage.setItem('ma_demo_auth','1');
      window.location.href = 'portal.html';
    };
    form?.addEventListener('submit', e => { e.preventDefault(); goPortal(); });
    $('#ekeyLogin')?.addEventListener('click', () => { sessionStorage.setItem('ma_demo_auth','1'); window.location.href = 'portal.html'; });
    $('#togglePassword')?.addEventListener('click', () => { const p=$('#password'); p.type = p.type === 'password' ? 'text' : 'password'; });
    $('#forgotPassword')?.addEventListener('click', () => { $('#loginMessage').textContent = t('forgotPrototype'); });
    $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang, false)));
  }

  if (isLogin) { initLogin(); return; }

  const L = (ar, en) => ({ar, en});

  const personRegistry = {
    '750123456': {id:'750123456',name:L('أحمد يوسف عبدالله الهاشمي','Ahmed Yousif Abdullah Al Hashimi'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1975-01-23',maritalStatus:L('متزوج','Married'),address:L('المنامة - مجمع 316 - طريق 1204','Manama - Block 316 - Road 1204'),mobile:'39001234',email:'ahmed.hashimi@example.test',source:'iga'},
    '780234567': {id:'780234567',name:L('مريم حسن علي الهاشمي','Maryam Hassan Ali Al Hashimi'),nationality:L('بحرينية','Bahraini'),gender:'F',birthDate:'1978-02-14',maritalStatus:L('متزوجة','Married'),address:L('المنامة - مجمع 316 - طريق 1204','Manama - Block 316 - Road 1204'),mobile:'39004567',email:'maryam.hashimi@example.test',source:'iga'},
    '010345678': {id:'010345678',name:L('يوسف أحمد يوسف الهاشمي','Yousif Ahmed Yousif Al Hashimi'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'2001-03-12',maritalStatus:L('أعزب','Single'),address:L('المنامة - مجمع 316','Manama - Block 316'),mobile:'36003456',email:'yousif.hashimi@example.test',source:'iga'},
    '050456789': {id:'050456789',name:L('عبدالله أحمد يوسف الهاشمي','Abdullah Ahmed Yousif Al Hashimi'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'2005-04-18',maritalStatus:L('أعزب','Single'),address:L('المنامة - مجمع 316','Manama - Block 316'),mobile:'36004567',email:'abdullah.hashimi@example.test',source:'iga'},
    '080567890': {id:'080567890',name:L('فاطمة أحمد يوسف الهاشمي','Fatima Ahmed Yousif Al Hashimi'),nationality:L('بحرينية','Bahraini'),gender:'F',birthDate:'2008-05-23',maritalStatus:L('عزباء','Single'),address:L('المنامة - مجمع 316','Manama - Block 316'),mobile:'36005678',email:'fatima.hashimi@example.test',source:'iga'},
    '120678901': {id:'120678901',name:L('زينب أحمد يوسف الهاشمي','Zainab Ahmed Yousif Al Hashimi'),nationality:L('بحرينية','Bahraini'),gender:'F',birthDate:'2012-06-29',maritalStatus:L('عزباء','Single'),address:L('المنامة - مجمع 316','Manama - Block 316'),mobile:'—',email:'—',source:'iga'},
    '650789012': {id:'650789012',name:L('خالد عبدالرحمن محمد البنعلي','Khalid Abdulrahman Mohammed Al Bin Ali'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1965-07-08',maritalStatus:L('متزوج','Married'),address:L('المحرق - مجمع 204','Muharraq - Block 204'),mobile:'—',email:'—',source:'iga'},
    '700890123': {id:'700890123',name:L('نورة إبراهيم حسن البنعلي','Noora Ibrahim Hassan Al Bin Ali'),nationality:L('بحرينية','Bahraini'),gender:'F',birthDate:'1970-08-16',maritalStatus:L('متزوجة','Married'),address:L('المحرق - مجمع 204','Muharraq - Block 204'),mobile:'36661234',email:'noora.binali@example.test',source:'iga'},
    '900111222': {id:'900111222',name:L('سلمان جاسم محمد','Salman Jassim Mohammed'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1990-01-11',maritalStatus:L('متزوج','Married'),address:L('مدينة عيسى - مجمع 808','Isa Town - Block 808'),mobile:'37771122',email:'salman@example.test',source:'iga'},
    '860222333': {id:'860222333',name:L('هدى علي حسن','Huda Ali Hassan'),nationality:L('بحرينية','Bahraini'),gender:'F',birthDate:'1986-02-22',maritalStatus:L('متزوجة','Married'),address:L('الرفاع - مجمع 903','Riffa - Block 903'),mobile:'38882233',email:'huda@example.test',source:'iga'},
    '790333444': {id:'790333444',name:L('ماجد يوسف إبراهيم','Majid Yousif Ibrahim'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1979-03-03',maritalStatus:L('متزوج','Married'),address:L('سترة - مجمع 606','Sitra - Block 606'),mobile:'39993344',email:'majid@example.test',source:'iga'},
    '810444555': {id:'810444555',name:L('علي محمد حسن','Ali Mohammed Hassan'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1981-04-04',maritalStatus:L('متزوج','Married'),address:L('الحد - مجمع 109','Hidd - Block 109'),mobile:'34445556',email:'ali@example.test',source:'iga'},
    '770555666': {id:'770555666',name:L('يوسف محمود عبدالله','Yousif Mahmood Abdullah'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1977-05-05',maritalStatus:L('متزوج','Married'),address:L('المحرق - مجمع 205','Muharraq - Block 205'),mobile:'35556667',email:'yousif.mahmood@example.test',source:'iga'}
  };

  function ageAt(person, referenceDate = today) {
    if (!person?.birthDate) return null;
    const b = new Date(`${person.birthDate}T00:00:00`), r = new Date(`${referenceDate}T00:00:00`);
    let a = r.getFullYear() - b.getFullYear();
    if (r.getMonth() < b.getMonth() || (r.getMonth() === b.getMonth() && r.getDate() < b.getDate())) a--;
    return a;
  }

  const files = [
    {
      id:'TRM-2024-00124',type:'estateMuslim',legalStatus:'active',operationalStatus:'assetStage',opened:'2024-01-10',subjectId:'750123456',legalRef:'FRD-2024-000124',responsibleUnit:L('قسم التركات','Estates Section'),assignment:{mode:'department',department:L('قسم التركات','Estates Section'),officer:null,priority:'high'},
      events:[
        {type:'death',label:L('تاريخ الوفاة','Date of Death'),date:'2024-01-01',source:L('شهادة الوفاة / هيئة المعلومات','Death Certificate / IGA')},
        {type:'faraid',label:L('إصدار الفريضة الشرعية','Inheritance Certificate Issued'),date:'2024-01-08',source:L('نظام الفريضة الشرعية','Inheritance Certificate System')},
        {type:'open',label:L('فتح ملف التركة','Estate File Opened'),date:'2024-01-10',source:L('نظام شئون القاصرين','Minors Affairs System')}
      ],
      parties:[
        {personId:'780234567',group:'heirs',role:L('الزوجة','Wife'),relation:L('زوجة','Spouse'),share:20,accountId:'SUB-EST-001'},
        {personId:'010345678',group:'heirs',role:L('ابن','Son'),relation:L('ابن','Son'),share:20,accountId:'SUB-EST-002'},
        {personId:'050456789',group:'heirs',role:L('ابن','Son'),relation:L('ابن','Son'),share:20,accountId:'SUB-EST-003'},
        {personId:'080567890',group:'heirs',role:L('ابنة','Daughter'),relation:L('ابنة','Daughter'),share:20,accountId:'SUB-EST-004'},
        {personId:'120678901',group:'heirs',role:L('ابنة قاصر','Minor Daughter'),relation:L('ابنة','Daughter'),share:20,accountId:'SUB-EST-005'}
      ],
      documents:[
        {id:'DOC-TR-001',nameKey:'faraidDocument',status:'verified',source:L('نظام الفريضة الشرعية','Inheritance Certificate System'),required:true},
        {id:'DOC-TR-002',nameKey:'deathCertificate',status:'verified',source:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),required:true},
        {id:'DOC-TR-003',nameKey:'identificationPapers',status:'verified',source:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),required:true},
        {id:'DOC-TR-004',nameKey:'fileOpeningForm',status:'uploaded',source:L('الموظف المختص','Case Officer'),required:true}
      ],
      circulars:[
        {id:'CIR-2024-001',entity:L('مصرف البحرين المركزي - تعميم البنوك','Central Bank of Bahrain - Banks Circular'),sent:'2024-01-15',status:'replied',reply:'2024-01-24',summary:L('وردت بيانات حساب بنكي باسم المتوفى','A bank account in the deceased name was reported')},
        {id:'CIR-2024-002',entity:L('جهاز المساحة والتسجيل العقاري','Survey & Land Registration Bureau'),sent:'2024-01-15',status:'replied',reply:'2024-01-22',summary:L('وردت بيانات عقارين مسجلين','Two registered properties were reported')}
      ],
      notes:L('عدد الورثة: زوجة وأربعة أبناء وبنات. البيانات افتراضية بالكامل.','Heirs: a wife and four sons/daughters. All data is fictional.'),
      audit:[
        {date:'2024-01-10',user:L('موظف فتح الملفات','File Opening Officer'),action:L('إنشاء الملف كمسودة','Created file as draft')},
        {date:'2024-01-12',user:L('رئيس قسم التركات','Head of Estates Section'),action:L('اعتماد الملف وإسناده إلى قائمة عمل القسم','Approved file and assigned it to department queue')},
        {date:'2024-01-15',user:L('موظف التركات','Estates Officer'),action:L('إصدار تعاميم حصر الأموال','Issued asset-identification circulars')}
      ]
    },
    {
      id:'HJ-2020-00031',type:'interdicted',legalStatus:'active',operationalStatus:'activeManagement',opened:'2020-01-01',subjectId:'650789012',legalRef:'CRT-HJ-2020-0031',responsibleUnit:L('قسم المحجور عليهم','Interdicted Persons Section'),assignment:{mode:'employee',department:L('قسم المحجور عليهم','Interdicted Persons Section'),officer:L('ليلى حسن','Layla Hassan'),priority:'normal'},
      events:[
        {type:'decision',label:L('تاريخ حكم الحجر','Interdiction Ruling Date'),date:'2019-12-20',source:L('نظام المحاكم','Court System')},
        {type:'guardianship',label:L('تاريخ بداية التولي','Guardianship Start Date'),date:'2020-01-01',source:L('قرار التولي','Guardianship Decision')},
        {type:'review',label:L('آخر مراجعة دورية','Latest Periodic Review'),date:'2026-07-15',source:L('قسم المحجور عليهم','Interdicted Persons Section')}
      ],
      parties:[
        {personId:'700890123',group:'appointed',role:L('القائمة على شؤونه','Person Managing His Affairs'),relation:L('الزوجة','Spouse'),share:null,accountId:null}
      ],
      documents:[
        {id:'DOC-HJ-001',nameKey:'courtOrder',status:'verified',source:L('نظام المحاكم','Court System'),required:true},
        {id:'DOC-HJ-002',nameKey:'identificationPapers',status:'verified',source:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),required:true},
        {id:'DOC-HJ-003',name:L('قرار تعيين القائمة على شؤونه','Appointment Decision for Affairs Manager'),status:'verified',source:L('المحكمة','Court'),required:true}
      ],
      circulars:[
        {id:'CIR-2020-031',entity:L('الهيئة العامة للتأمين الاجتماعي','Social Insurance Organization'),sent:'2020-01-05',status:'replied',reply:'2020-01-09',summary:L('تأكيد معاش تقاعدي شهري قدره 2,000 د.ب','Monthly pension of BHD 2,000 confirmed')}
      ],
      financialProfile:{monthlyPension:2000,modelBalance:70000,monthlyAllowance:900,monthlySurplus:1100,annualPension:24000,annualAllowance:10800,annualSurplus:13200},
      notes:L('القائم على شؤونه: زوجته نورة إبراهيم حسن البنعلي. البيانات افتراضية بالكامل.','Affairs manager: his wife Noora Ibrahim Hassan Al Bin Ali. All data is fictional.'),
      audit:[
        {date:'2020-01-01',user:L('موظف المحجور عليهم','Interdicted Persons Officer'),action:L('فتح الملف وتسجيل قرار التولي','Opened file and recorded guardianship decision')},
        {date:'2026-07-15',user:L('ليلى حسن','Layla Hassan'),action:L('تنفيذ المراجعة الدورية للنفقة والحساب','Completed periodic allowance and account review')}
      ]
    },
    {id:'TRN-2025-00088',type:'estateNonMuslim',legalStatus:'awaitingApproval',operationalStatus:'dataCollection',opened:'2025-11-18',subjectId:'770555666',legalRef:'JDG-2025-9088',responsibleUnit:L('قسم التركات','Estates Section'),assignment:{mode:'department',department:L('قسم التركات','Estates Section'),officer:null,priority:'normal'},events:[{type:'death',label:L('تاريخ الوفاة','Date of Death'),date:'2025-11-02',source:L('هيئة المعلومات','IGA')},{type:'judgment',label:L('تاريخ الحكم القانوني','Legal Judgment Date'),date:'2025-11-15',source:L('نظام المحاكم','Court System')}],parties:[],documents:[{id:'D1',nameKey:'deathCertificate',status:'verified',source:L('هيئة المعلومات','IGA'),required:true},{id:'D2',name:L('المستند القانوني لحصر الورثة','Legal Heir Determination Instrument'),status:'uploaded',source:L('المحكمة','Court'),required:true}],circulars:[],notes:L('متطلبات التفصيل القانوني لهذا النوع تحتاج اعتماد نهائي من المختصين.','Detailed legal requirements for this type require final subject-matter approval.'),audit:[]},
    {id:'MN-2026-00117',type:'minorLinked',legalStatus:'active',operationalStatus:'periodicFollowup',opened:'2026-02-01',subjectId:'120678901',legalRef:'TRM-2024-00124',responsibleUnit:L('قسم القاصرين','Minors Section'),assignment:{mode:'department',department:L('قسم القاصرين','Minors Section'),officer:null,priority:'high'},events:[{type:'birth',label:L('تاريخ الميلاد','Date of Birth'),date:'2012-06-29',source:L('هيئة المعلومات','IGA')},{type:'link',label:L('تاريخ الربط بملف التركة','Estate Link Date'),date:'2026-02-01',source:L('نظام شئون القاصرين','Minors Affairs System')}],parties:[{personId:'780234567',group:'appointed',role:L('الولي الطبيعي','Natural Guardian'),relation:L('الأم','Mother'),share:null,accountId:null}],documents:[{id:'MN-D1',nameKey:'identificationPapers',status:'verified',source:L('هيئة المعلومات','IGA'),required:true}],circulars:[],notes:L('ملف قاصر مرتبط بتركة أحمد الهاشمي.','Minor file linked to Ahmed Al Hashimi estate.'),audit:[]},
    {id:'MI-2026-00042',type:'minorIndependent',legalStatus:'draft',operationalStatus:'dataCollection',opened:'2026-08-02',subjectId:'900111222',legalRef:'MIN-IND-0042',responsibleUnit:L('قسم القاصرين','Minors Section'),assignment:{mode:'department',department:L('قسم القاصرين','Minors Section'),officer:null,priority:'normal'},events:[{type:'birth',label:L('تاريخ الميلاد','Date of Birth'),date:'2010-01-11',source:L('هيئة المعلومات','IGA')}],parties:[],documents:[],circulars:[],notes:L('بيانات تجريبية.','Prototype data.'),audit:[]},
    {id:'PR-2026-00019',type:'prisoner',legalStatus:'active',operationalStatus:'periodicFollowup',opened:'2026-03-14',subjectId:'790333444',legalRef:'PRSN-2026-019',responsibleUnit:L('قسم الحالات الخاصة','Special Cases Section'),assignment:{mode:'employee',department:L('قسم الحالات الخاصة','Special Cases Section'),officer:L('سارة محمد','Sara Mohammed'),priority:'normal'},events:[{type:'prisonStart',label:L('تاريخ بدء السجن','Imprisonment Start Date'),date:'2026-02-20',source:L('نظام المؤسسات الإصلاحية','Correctional Institution System')},{type:'prisonEnd',label:L('تاريخ نهاية السجن المتوقع','Expected Release Date'),date:'2028-02-19',source:L('نظام المؤسسات الإصلاحية','Correctional Institution System')}],parties:[],documents:[{id:'PR-D1',nameKey:'proofOfImprisonment',status:'verified',source:L('نظام المؤسسات الإصلاحية','Correctional Institution System'),required:true}],circulars:[],notes:L('الحقول القانونية التفصيلية لمسار المسجون تحتاج اعتماد نهائي.','Detailed prisoner workflow fields require final approval.'),audit:[]},
    {id:'AB-2026-00007',type:'absent',legalStatus:'active',operationalStatus:'circularStage',opened:'2026-04-10',subjectId:'810444555',legalRef:'ABS-CRT-2026-007',responsibleUnit:L('قسم الحالات الخاصة','Special Cases Section'),assignment:{mode:'department',department:L('قسم الحالات الخاصة','Special Cases Section'),officer:null,priority:'high'},events:[{type:'absence',label:L('تاريخ ثبوت الغياب','Date Absence Established'),date:'2026-03-25',source:L('نظام المحاكم','Court System')}],parties:[],documents:[{id:'AB-D1',nameKey:'proofOfAbsence',status:'verified',source:L('نظام المحاكم','Court System'),required:true}],circulars:[{id:'CIR-AB-007',entity:L('البنوك والشركات المالية','Banks & Financial Companies'),sent:'2026-04-12',status:'pending',reply:null,summary:L('بانتظار الرد','Awaiting reply')}],notes:L('الحقول القانونية التفصيلية لمسار الغائب تحتاج اعتماد نهائي.','Detailed absent-person workflow fields require final approval.'),audit:[]}
  ];

  const assetCategories = [
    {id:'realEstate',key:'realEstateAssets',examples:'realEstateExamples',icon:'🏠',subtypes:[L('أرض','Land'),L('شقة','Apartment'),L('بيت','House'),L('بناية','Building'),L('مجمع','Complex'),L('ملكية زمنية','Timeshare Ownership')]},
    {id:'movable',key:'movableAssets',examples:'movableExamples',icon:'🚗',subtypes:[L('سيارة','Car'),L('دراجة نارية','Motorcycle'),L('سفينة','Ship'),L('مقتنيات شخصية','Personal Collectibles'),L('مقتنيات ثمينة','Valuable Collectibles'),L('رخصة صيد','Hunting Licence'),L('لوحة مرورية','Traffic Plate'),L('معدات','Equipment'),L('أجهزة إلكترونية','Electronic Devices'),L('لوحة نقل عام','Public Transport Plate'),L('رخص أخرى','Other Licences')]},
    {id:'financial',key:'financialAssets',examples:'financialExamples',icon:'💰',subtypes:[L('حساب بنكي','Bank Account'),L('وديعة','Deposit'),L('محفظة استثمارية','Investment Portfolio'),L('أسهم','Shares'),L('سندات','Bonds'),L('صكوك','Sukuk'),L('نقد','Cash'),L('أموال مستحقة','Receivables'),L('أصول مالية أخرى','Other Financial Assets')]},
    {id:'commercial',key:'commercialAssets',examples:'commercialExamples',icon:'🏪',subtypes:[L('سجل تجاري','Commercial Registration')]},
    {id:'other',key:'otherAssets',examples:'otherExamples',icon:'◇',subtypes:[L('أصل آخر','Other Asset')]}
  ];

  const assets = [
    {id:'AST-0001',fileId:'TRM-2024-00124',registrationDate:'2024-01-23',category:'realEstate',subtype:L('بيت','House'),managementEntity:L('تحت إدارة القسم','Managed by Section'),guardianshipCapacity:L('تولي إداري','Administrative Guardianship'),rights:L('ملكية كاملة دون قيد مسجل','Full ownership with no registered restriction'),ownershipType:L('ملكية فردية للتركة','Sole Estate Ownership'),ownershipPercentage:100,estimatedValue:175000,status:'active',relatedParty:'750123456',documents:[L('وثيقة ملكية','Title Deed'),L('شهادة مسح','Survey Certificate')],confidence:'high',hasRevenue:false,hasExpenses:true,source:L('رد جهاز المساحة والتسجيل العقاري على التعميم CIR-2024-002','SLRB reply to circular CIR-2024-002'),sourceType:'external',description:L('منزل سكني مملوك للمتوفى','Residential house owned by the deceased'),revenueRecords:[],expenseRecords:[{date:'2026-05-10',amount:120,desc:L('صيانة دورية','Periodic Maintenance')}],alerts:[]},
    {id:'AST-0002',fileId:'TRM-2024-00124',registrationDate:'2024-01-23',category:'realEstate',subtype:L('بناية تجارية','Commercial Building'),managementEntity:L('تحت إدارة القسم','Managed by Section'),guardianshipCapacity:L('تولي إداري','Administrative Guardianship'),rights:L('ملكية كاملة - عقود إيجار قائمة','Full ownership - active leases'),ownershipType:L('ملكية فردية للتركة','Sole Estate Ownership'),ownershipPercentage:100,estimatedValue:260550,status:'active',relatedParty:'750123456',documents:[L('وثيقة ملكية','Title Deed'),L('عقود الإيجار','Lease Agreements')],confidence:'high',hasRevenue:true,hasExpenses:true,source:L('رد جهاز المساحة والتسجيل العقاري على التعميم CIR-2024-002','SLRB reply to circular CIR-2024-002'),sourceType:'external',description:L('مبنى يضم أربعة محلات تجارية','Building containing four commercial shops'),revenueRecords:[{date:'2026-07-31',amount:800,desc:L('إيجارات شهر يوليو','July Rent Collections')}],expenseRecords:[{date:'2026-07-10',amount:0,desc:L('لا توجد مصروفات في الفترة','No expenses in period')}],alerts:[]},
    {id:'AST-0003',fileId:'TRM-2024-00124',registrationDate:'2024-01-25',category:'financial',subtype:L('حساب بنكي','Bank Account'),managementEntity:L('إدارة الأموال والحسابات','Funds & Accounts Department'),guardianshipCapacity:L('تولي إداري','Administrative Guardianship'),rights:L('رصيد خاضع لإدارة التركة','Balance subject to estate administration'),ownershipType:L('ملكية فردية للتركة','Sole Estate Ownership'),ownershipPercentage:100,estimatedValue:48620,status:'active',relatedParty:'750123456',documents:[L('كشف حساب بنكي','Bank Statement'),L('رد التعميم البنكي','Bank Circular Reply')],confidence:'high',hasRevenue:true,hasExpenses:true,source:L('رد مصرف على التعميم CIR-2024-001','Bank reply to circular CIR-2024-001'),sourceType:'external',description:L('حساب بنكي باسم المتوفى','Bank account in the deceased name'),revenueRecords:[{date:'2026-07-31',amount:22.4,desc:L('عائد حساب','Account Return')}],expenseRecords:[],alerts:[]},
    {id:'AST-0004',fileId:'HJ-2020-00031',registrationDate:'2020-01-09',category:'financial',subtype:L('حساب بنكي','Bank Account'),managementEntity:L('إدارة الأموال والحسابات','Funds & Accounts Department'),guardianshipCapacity:L('تولي وصاية','Guardianship Administration'),rights:L('حساب مخصص لإدارة أموال المحجور عليه','Dedicated account for interdicted person funds'),ownershipType:L('ملكية فردية','Sole Ownership'),ownershipPercentage:100,estimatedValue:70000,status:'active',relatedParty:'650789012',documents:[L('كشف حساب','Account Statement'),L('قرار التولي','Guardianship Decision')],confidence:'high',hasRevenue:true,hasExpenses:true,source:L('رد الهيئة العامة للتأمين الاجتماعي والتسوية البنكية','SIO reply and bank reconciliation'),sourceType:'external',description:L('حساب إدارة أموال خالد البنعلي','Khalid Al Bin Ali funds management account'),revenueRecords:[{date:'2026-07-25',amount:2000,desc:L('المعاش التقاعدي الشهري','Monthly Pension')}],expenseRecords:[{date:'2026-07-28',amount:900,desc:L('النفقة الشهرية المصروفة','Monthly Allowance')}],alerts:[]},
    {id:'AST-0005',fileId:'TRM-2024-00124',registrationDate:'2024-02-02',category:'commercial',subtype:L('سجل تجاري','Commercial Registration'),managementEntity:L('قسم التركات','Estates Section'),guardianshipCapacity:L('تولي إداري','Administrative Guardianship'),rights:L('سجل نشط قيد التحقق من الالتزامات','Active registration pending liability verification'),ownershipType:L('ملكية فردية للتركة','Sole Estate Ownership'),ownershipPercentage:100,estimatedValue:0,status:'underProcedure',relatedParty:'750123456',documents:[L('مستخرج سجل تجاري','Commercial Registration Extract')],confidence:'medium',hasRevenue:false,hasExpenses:false,source:L('رد وزارة الصناعة والتجارة','Ministry of Industry and Commerce reply'),sourceType:'external',description:L('سجل تجاري افتراضي مرتبط بالتركة','Prototype commercial registration linked to estate'),revenueRecords:[],expenseRecords:[],alerts:[L('قيد التحقق من الالتزامات','Liabilities verification pending')]}
  ];

  const propertyData = [
    {assetId:'AST-0001',code:'PROP-TR-001',name:L('منزل الهاشمي السكني','Al Hashimi Residential House'),address:L('المنامة - مجمع 316','Manama - Block 316'),units:[{id:'U-H-01',code:'H-01',name:L('المنزل الرئيسي','Main House'),status:'occupiedFamily',tenant:null,lease:null}],maintenance:[{date:'2026-05-10',amount:120,desc:L('صيانة دورية للمكيفات','Periodic A/C Maintenance')}]},
    {assetId:'AST-0002',code:'PROP-TR-002',name:L('مبنى الهاشمي التجاري','Al Hashimi Commercial Building'),address:L('المنامة - شارع الحكومة','Manama - Government Avenue'),units:[
      {id:'U-C-01',code:'S-01',name:L('محل 1','Shop 1'),status:'leased',tenant:L('مؤسسة الواحة للتجارة','Al Waha Trading Est.'),lease:{id:'LS-001',no:'LEASE-2026-001',start:'2026-01-01',end:'2026-12-31',annualRent:2400,cycle:'monthly'}},
      {id:'U-C-02',code:'S-02',name:L('محل 2','Shop 2'),status:'leased',tenant:L('مخبز النخيل','Al Nakheel Bakery'),lease:{id:'LS-002',no:'LEASE-2026-002',start:'2026-02-01',end:'2027-01-31',annualRent:2400,cycle:'monthly'}},
      {id:'U-C-03',code:'S-03',name:L('محل 3','Shop 3'),status:'leased',tenant:L('الخليج للخدمات','Gulf Services'),lease:{id:'LS-003',no:'LEASE-2026-003',start:'2025-09-01',end:'2026-08-31',annualRent:2400,cycle:'monthly'}},
      {id:'U-C-04',code:'S-04',name:L('محل 4','Shop 4'),status:'leased',tenant:L('المنار للإلكترونيات','Al Manar Electronics'),lease:{id:'LS-004',no:'LEASE-2026-004',start:'2026-03-01',end:'2027-02-28',annualRent:2400,cycle:'monthly'}}
    ],maintenance:[]}
  ];

  const rentalInvoices = [
    {id:'INV-2026-0701',unitId:'U-C-01',due:'2026-07-01',amount:200,paid:200,receipt:'RC-0701'},
    {id:'INV-2026-0702',unitId:'U-C-02',due:'2026-07-01',amount:200,paid:200,receipt:'RC-0702'},
    {id:'INV-2026-0703',unitId:'U-C-03',due:'2026-07-01',amount:200,paid:200,receipt:'RC-0703'},
    {id:'INV-2026-0704',unitId:'U-C-04',due:'2026-07-01',amount:200,paid:200,receipt:'RC-0704'},
    {id:'INV-2026-0801',unitId:'U-C-01',due:'2026-08-01',amount:200,paid:0,receipt:null},
    {id:'INV-2026-0802',unitId:'U-C-02',due:'2026-08-01',amount:200,paid:120,receipt:'RC-0802'},
    {id:'INV-2026-0803',unitId:'U-C-03',due:'2026-08-01',amount:200,paid:0,receipt:null},
    {id:'INV-2026-0804',unitId:'U-C-04',due:'2026-08-01',amount:200,paid:200,receipt:'RC-0804'}
  ];

  const generalAccounts = [
    {code:'1100',nameKey:'banks',type:L('أصل','Asset'),balance:1324500},
    {code:'1200',nameKey:'cash',type:L('أصل','Asset'),balance:48250},
    {code:'2100',nameKey:'minorsGeneral',type:L('التزام','Liability'),balance:3862000},
    {code:'2200',nameKey:'maturityGeneral',type:L('التزام','Liability'),balance:184750},
    {code:'2300',nameKey:'interdictedGeneral',type:L('التزام','Liability'),balance:74200},
    {code:'2400',nameKey:'estatesGeneral',type:L('التزام','Liability'),balance:559170}
  ];

  const subAccounts = [
    {id:'SUB-EST-001',ownerId:'780234567',fileId:'TRM-2024-00124',parent:'2400',opening:0},
    {id:'SUB-EST-002',ownerId:'010345678',fileId:'TRM-2024-00124',parent:'2400',opening:0},
    {id:'SUB-EST-003',ownerId:'050456789',fileId:'TRM-2024-00124',parent:'2400',opening:0},
    {id:'SUB-EST-004',ownerId:'080567890',fileId:'TRM-2024-00124',parent:'2100',opening:0},
    {id:'SUB-EST-005',ownerId:'120678901',fileId:'TRM-2024-00124',parent:'2100',opening:0},
    {id:'SUB-HJ-001',ownerId:'650789012',fileId:'HJ-2020-00031',parent:'2300',opening:68900}
  ];

  const transactions = {
    'SUB-EST-001':[{date:'2026-07-31',ref:'JR-2026-07131-01',desc:L('حصة افتراضية من إيراد العقار التجاري - يوليو','Prototype share of commercial property income - July'),debit:0,credit:160,journal:'JE-2026-07131'}],
    'SUB-EST-002':[{date:'2026-07-31',ref:'JR-2026-07131-02',desc:L('حصة افتراضية من إيراد العقار التجاري - يوليو','Prototype share of commercial property income - July'),debit:0,credit:160,journal:'JE-2026-07131'}],
    'SUB-EST-003':[{date:'2026-07-31',ref:'JR-2026-07131-03',desc:L('حصة افتراضية من إيراد العقار التجاري - يوليو','Prototype share of commercial property income - July'),debit:0,credit:160,journal:'JE-2026-07131'}],
    'SUB-EST-004':[{date:'2026-07-31',ref:'JR-2026-07131-04',desc:L('حصة افتراضية من إيراد العقار التجاري - يوليو','Prototype share of commercial property income - July'),debit:0,credit:160,journal:'JE-2026-07131'}],
    'SUB-EST-005':[{date:'2026-07-31',ref:'JR-2026-07131-05',desc:L('حصة قاصر معلقة من إيراد العقار التجاري - يوليو','Minor suspended share of commercial property income - July'),debit:0,credit:160,journal:'JE-2026-07131'}],
    'SUB-HJ-001':[
      {date:'2026-07-25',ref:'RC-2026-0725',desc:L('إيداع المعاش التقاعدي الشهري','Monthly pension deposit'),debit:0,credit:2000,journal:'JE-2026-0725'},
      {date:'2026-07-28',ref:'PV-2026-0728',desc:L('صرف النفقة الشهرية المعتمدة','Approved monthly allowance payment'),debit:900,credit:0,journal:'JE-2026-0728'}
    ]
  };

  const journalEntries = {
    'JE-2026-07131': {date:'2026-07-31',description:L('توزيع صافي إيراد العقار التجاري على الحسابات المساعدة','Distribution of net commercial property income to subsidiary accounts'),lines:[
      {account:'1100',name:L('الحساب البنكي - تحصيل الإيجار','Bank Account - Rent Collection'),debit:800,credit:0},
      {account:'SUB-EST-001',name:personRegistry['780234567'].name,debit:0,credit:160},
      {account:'SUB-EST-002',name:personRegistry['010345678'].name,debit:0,credit:160},
      {account:'SUB-EST-003',name:personRegistry['050456789'].name,debit:0,credit:160},
      {account:'SUB-EST-004',name:personRegistry['080567890'].name,debit:0,credit:160},
      {account:'SUB-EST-005',name:personRegistry['120678901'].name,debit:0,credit:160}
    ]},
    'JE-2026-0725': {date:'2026-07-25',description:L('إيداع المعاش التقاعدي','Pension Deposit'),lines:[{account:'1100',name:L('البنك','Bank'),debit:2000,credit:0},{account:'SUB-HJ-001',name:personRegistry['650789012'].name,debit:0,credit:2000}]},
    'JE-2026-0728': {date:'2026-07-28',description:L('صرف النفقة الشهرية','Monthly Allowance Payment'),lines:[{account:'SUB-HJ-001',name:personRegistry['650789012'].name,debit:900,credit:0},{account:'1100',name:L('البنك','Bank'),debit:0,credit:900}]}
  };

  const alerts = [
    {id:'ALR-2026-001',priority:'critical',type:'noEstate',title:L('متوفى لديه قُصّر ولم يُفتح له ملف تركة','Deceased Person with Minors and No Estate File'),description:L('وردت حالة وفاة لشخص لديه قاصر مسجل، ولم يعثر النظام على ملف تركة قائم أو سابق مطابق.','A death record with a registered minor was received and no matching estate file exists.'),source:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),trigger:L('حالة وفاة + وجود قاصر + عدم وجود ملف تركة مطابق','Death record + minor exists + no matching estate file'),exclusion:L('استبعاد أي شخص لديه ملف تركة قائم أو مغلق سابقاً','Exclude any person with an active or historical estate file'),recipient:L('قسم فتح الملفات','File Opening Section'),created:'2026-08-11',slaHours:24,status:'open',dedup:'DEATH-MINOR-880111222',related:{kind:'newFile',personId:'880111222'},icon:'⚠'},
    {id:'ALR-2026-002',priority:'critical',type:'deceasedInterdicted',title:L('محجور عليه متوفى يحتاج إجراء إغلاق وتسوية','Deceased Interdicted Person Requiring Closure and Settlement'),description:L('وصل تحديث وفاة لمحجور عليه ويجب مراجعة الحسابات والطلبات قبل نقل الملف لمسار الإغلاق.','A death update was received for an interdicted person; accounts and requests must be reviewed before closure.'),source:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),trigger:L('وفاة صاحب ملف محجور عليه فعال','Death of subject of an active interdicted file'),exclusion:L('استبعاد الملفات المغلقة أو التي لديها إجراء وفاة مفتوح','Exclude closed files or files with an open death process'),recipient:L('قسم المحجور عليهم','Interdicted Persons Section'),created:'2026-08-10',slaHours:12,status:'inProgress',dedup:'HJ-DEATH-00077',related:{kind:'file',id:'HJ-2020-00031'},icon:'✝'},
    {id:'ALR-2026-003',priority:'warning',type:'circularReply',title:L('وصول رد على تعميم حصر الأموال','Asset-identification Circular Reply Received'),description:L('وصل رد جديد من جهة مالية ويحتاج مراجعته وتسجيل الأصول المؤكدة في السجل المركزي.','A new financial-entity reply requires review and confirmed assets must be registered centrally.'),source:L('بوابة التكامل مع الجهات','Entity Integration Gateway'),trigger:L('استلام رد جديد على تعميم فعال','New reply received for an active circular'),exclusion:L('استبعاد الردود التي تمت مراجعتها وإنشاء أصولها','Exclude replies already reviewed and converted to asset records'),recipient:L('قسم التركات','Estates Section'),created:'2026-08-11',slaHours:16,status:'open',dedup:'CIR-REPLY-TRN-0088-01',related:{kind:'file',id:'TRN-2025-00088'},icon:'↩'},
    {id:'ALR-2026-004',priority:'warning',type:'assignment',title:L('ملف معتمد في قائمة القسم دون بدء معالجة','Approved File in Department Queue with No Handling Started'),description:L('تم اعتماد الملف وإسناده إلى قائمة عمل القسم ولم يتسلمه أي موظف خلال المهلة المحددة.','The file was approved and assigned to a department queue but no officer accepted it within the SLA.'),source:L('محرك التكليف وسجل التدقيق','Assignment Engine & Audit Trail'),trigger:L('تكليف للقسم + عدم بدء معالجة خلال 8 ساعات','Department assignment + no handling start within 8 hours'),exclusion:L('استبعاد الملفات التي بدأ موظف بمعالجتها أو أعيد توزيعها','Exclude files already accepted or reassigned'),recipient:L('رئيس القسم','Section Head'),created:'2026-08-10',slaHours:8,status:'open',dedup:'ASSIGN-QUEUE-AB-0007',related:{kind:'file',id:'AB-2026-00007'},icon:'👤'},
    {id:'ALR-2026-005',priority:'warning',type:'case',title:L('قضية جديدة مرتبطة بقاصر في ملف قائم','New Case Linked to a Minor in an Existing File'),description:L('تم ربط قضية جديدة بالقاصر زينب الهاشمي وتحتاج مراجعة أثرها على الملف والحساب.','A new case was linked to minor Zainab Al Hashimi and its impact on the file and account must be reviewed.'),source:L('نظام المحاكم','Court System'),trigger:L('إنشاء أو تحديث قضية لطرف مرتبط بملف','Case created or updated for a party related to a file'),exclusion:L('استبعاد القضايا التي تمت مراجعة أثرها','Exclude cases whose impact has been reviewed'),recipient:L('قسم القاصرين','Minors Section'),created:'2026-08-09',slaHours:48,status:'open',dedup:'CASE-2026-5512-120678901',related:{kind:'file',id:'MN-2026-00117'},icon:'⚖'},
    {id:'ALR-2026-006',priority:'information',type:'maturity',title:L('حساب رشد تجاوز موعد الصرف المعتمد','Maturity Account Passed Approved Payment Date'),description:L('حساب رشد محدد تجاوز موعد الصرف، وهو تنبيه حدثي؛ أما الإجمالي فيظهر ضمن التقارير المالية.','A specific maturity account passed its payment date; aggregate totals are shown in financial reports.'),source:L('حساب الرشد العام','General Maturity Account'),trigger:L('تاريخ استحقاق صرف مضى + رصيد قائم + لا يوجد أمر صرف مفتوح','Payment due date passed + balance exists + no open payment order'),exclusion:L('استبعاد الحسابات قيد أمر صرف أو الموقوفة قضائياً','Exclude accounts with payment orders or legal holds'),recipient:L('قسم الحسابات','Accounts Section'),created:'2026-08-08',slaHours:72,status:'open',dedup:'MATURITY-ACC-591',related:{kind:'ledger',id:'SUB-MAT-591'},icon:'💰'}
  ];

  const workItems = [
    {id:'WI-2026-0101',type:L('اعتماد وتكليف ملف','File Approval & Assignment'),source:L('مركز الملفات','File Center'),stage:L('مراجعة المسؤول','Manager Review'),action:L('مراجعة البيانات والمستندات ثم الاعتماد','Review data and documents, then approve'),sla:'06:20',priority:'critical',related:{kind:'file',id:'TRN-2025-00088'}},
    {id:'WI-2026-0102',type:L('مراجعة رد تعميم','Review Circular Reply'),source:L('مركز الأصول','Asset Center'),stage:L('تحقق المصدر','Source Verification'),action:L('اعتماد الرد وتسجيل الأصول المؤكدة','Approve reply and register confirmed assets'),sla:'11:40',priority:'warning',related:{kind:'file',id:'TRN-2025-00088'}},
    {id:'WI-2026-0103',type:L('اعتماد قيد توزيع إيراد','Approve Revenue Distribution Entry'),source:L('إدارة العقارات','Property Management'),stage:L('مراجعة مالية','Financial Review'),action:L('مراجعة التحصيل والتوزيع على الحسابات المساعدة','Review collection and subsidiary-account distribution'),sla:'19:10',priority:'warning',related:{kind:'journal',id:'JE-2026-07131'}},
    {id:'WI-2026-0104',type:L('مراجعة نفقة شهرية','Review Monthly Allowance'),source:L('ملف محجور عليه','Interdicted Person File'),stage:L('اعتماد القسم','Section Approval'),action:L('مراجعة الرصيد والنفقة قبل الصرف','Review balance and allowance before payment'),sla:'31:00',priority:'information',related:{kind:'file',id:'HJ-2020-00031'}}
  ];

  const assetCommonFields = [
    {id:1,key:'assetNo',required:true,editable:false,example:'AST-0001',description:L('رقم تعريفي فريد يستخدم لتمييز الأصل داخل النظام','Unique identifier used to distinguish the asset in the system')},
    {id:2,key:'fileNo',required:true,editable:false,example:'20250254',description:L('رقم الملف المرتبط بالأصل ضمن نظام إدارة الملفات','File number linked to the asset')},
    {id:3,key:'registrationDate',required:true,editable:false,example:'01/01/2026',description:L('تاريخ إنشاء أو تسجيل الأصل داخل النظام','Asset creation or registration date')},
    {id:4,key:'mainClassification',required:true,editable:false,example:L('أصل عقاري - أصل مالي - أصل منقول - أصل تجاري','Real Estate - Financial - Movable - Commercial'),description:L('الفئة العامة للأصل ضمن تصنيفات النظام','General asset category in the system')},
    {id:5,key:'managementEntity',required:true,editable:true,example:L('تحت إدارة القسم - تحت إدارة طرف - تحت الإسناد','Managed by Section - Third Party - Outsourced'),description:L('الجهة المسؤولة عن متابعة الأصل وإدارته','Entity responsible for following up and managing the asset')},
    {id:6,key:'guardianshipCapacity',required:true,editable:true,example:L('تولي إداري - تولي وصاية - تولي مساند','Administrative - Guardianship - Support'),description:L('نوع العلاقة القانونية المرتبطة بإدارة الأصل','Legal capacity associated with asset management')},
    {id:7,key:'assetRights',required:false,editable:true,example:L('حق انتفاع - رهن - حجز - نزاع','Usufruct - Mortgage - Attachment - Dispute'),description:L('الحقوق أو القيود القانونية المرتبطة بالأصل','Legal rights or restrictions related to the asset')},
    {id:8,key:'ownershipType',required:true,editable:true,example:L('ملكية فردية - ملكية مشتركة','Sole Ownership - Shared Ownership'),description:L('نوع ملكية الأصل','Asset ownership type')},
    {id:9,key:'ownershipPercentage',required:true,editable:true,example:'100% - 50% - 25%',description:L('نسبة ملكية الولاية في الأصل','Guardianship ownership percentage in the asset')},
    {id:10,key:'estimatedValue',required:false,editable:true,example:'75,000 BHD',description:L('القيمة التقديرية الحالية للأصل حسب المعلومات المتاحة','Current estimated value based on available information')},
    {id:11,key:'assetStatus',required:true,editable:true,example:L('نشط - تحت الإجراء - تم التصرف فيه','Active - Under Procedure - Disposed'),description:L('الوضع الحالي للأصل داخل النظام','Current asset status in the system')},
    {id:12,key:'relatedParty',required:false,editable:true,example:L('وصي - وكيل - قيم','Guardian - Agent - Custodian'),description:L('الطرف المسؤول عن متابعة الأصل إن وجد ارتباط','Party responsible for following up the asset, if any')},
    {id:13,key:'assetDocuments',required:true,editable:true,example:L('وثيقة ملكية - كشف حساب - شهادة أسهم','Title Deed - Account Statement - Share Certificate'),description:L('المستندات والصور الداعمة والمثبتة لبيانات الأصل','Documents and images supporting the asset data')},
    {id:14,key:'confidenceLevel',required:true,editable:true,example:L('مثبت بمستند رسمي - مثبت بإفادة - غير مثبت','Officially Verified - Statement Supported - Unverified'),description:L('مستوى موثوقية بيانات الأصل بناء على نوع الإثبات','Asset data confidence based on evidence type')},
    {id:15,key:'hasRevenue',required:true,editable:true,example:L('نعم - لا','Yes - No'),description:L('هل يوجد إيراد للأصل','Whether the asset generates revenue')},
    {id:16,key:'hasExpenses',required:true,editable:true,example:L('نعم - لا','Yes - No'),description:L('هل توجد مصروفات على الأصل','Whether the asset has expenses')}
  ];

  let currentPage = 'dashboard';
  let filesPage = 1;
  const filesPageSize = 5;
  let fileSearchState = {query:'',type:'',legal:'',operational:'',saved:'all'};
  let alertsState = {query:'',priority:'',status:'',type:''};
  let assetState = {query:'',category:''};
  let activeFileTab = 'overview';
  let ledgerTab = 'general';
  let propertyTab = 'overview';
  let modalGuard = null;
  let wizard = null;
  let assetWizard = null;

  function fileTypeLabel(type) {
    return t({estateMuslim:'estateMuslim',estateNonMuslim:'estateNonMuslim',minorLinked:'minorLinked',minorIndependent:'minorIndependent',interdicted:'interdicted',prisoner:'prisoner',absent:'absent'}[type] || type);
  }
  function legalStatusLabel(status) {
    return t({draft:'draft',awaitingApproval:'legalAwaitingApproval',active:'legalActive',suspended:'legalSuspended',closed:'legalClosed'}[status] || status);
  }
  function operationalStatusLabel(status) {
    return t({dataCollection:'dataCollection',circularStage:'circularStage',assetStage:'assetStage',activeManagement:'activeManagement',periodicFollowup:'periodicFollowup'}[status] || status);
  }
  function statusClass(status) {
    return ({draft:'draft',awaitingApproval:'awaitingApproval',active:'active',suspended:'suspended',closed:'closed',dataCollection:'review',circularStage:'followup',assetStage:'followup',activeManagement:'active',periodicFollowup:'info',open:'awaitingApproval',inProgress:'followup',resolved:'active'}[status] || 'draft');
  }
  function statusPill(label, status) { return `<span class="status ${statusClass(status)}">${esc(label)}</span>`; }
  function priorityPill(priority) {
    const label = priority === 'critical' ? t('critical') : priority === 'warning' ? t('warning') : t('information');
    const cls = priority === 'critical' ? 'danger' : priority === 'warning' ? 'warning' : 'source';
    return `<span class="chip ${cls}">${label}</span>`;
  }
  function fileById(id) { return files.find(f => f.id === id); }
  function personById(id) { return personRegistry[id] || {id,name:L('غير معروف','Unknown'),nationality:L('—','—')}; }
  function assetsForFile(fileId) { return assets.filter(a => a.fileId === fileId); }
  function subAccountById(id) { return subAccounts.find(a => a.id === id); }
  function accountBalance(accountId) {
    const acc = subAccountById(accountId); if (!acc) return 0;
    return (transactions[accountId] || []).reduce((balance, tx) => balance + Number(tx.credit || 0) - Number(tx.debit || 0), Number(acc.opening || 0));
  }
  function fileAssignmentLabel(file) {
    if (!file.assignment) return t('unassigned');
    if (file.assignment.mode === 'employee' && file.assignment.officer) return loc(file.assignment.officer);
    return `${t('deptQueue')} - ${loc(file.assignment.department)}`;
  }
  function filePrimaryName(file) { return loc(personById(file.subjectId).name); }
  function fileSearchText(file) {
    const person = personById(file.subjectId);
    const partyText = file.parties.map(p => { const pp=personById(p.personId); return `${loc(pp.name)} ${pp.id} ${loc(p.role)} ${loc(p.relation)}`; }).join(' ');
    return `${file.id} ${file.legalRef || ''} ${person.id} ${loc(person.name)} ${partyText}`.toLowerCase();
  }
  function daysBetween(start, end = today) { return Math.floor((new Date(`${end}T00:00:00`) - new Date(`${start}T00:00:00`)) / 86400000); }

  function completenessModel(file) {
    const hasSubject = !!(file.subjectId && personRegistry[file.subjectId]);
    const allDocs = file.documents.filter(d => d.required).every(d => d.status === 'verified' || d.status === 'uploaded');
    const hasSource = !!file.legalRef;
    const hasParties = file.type === 'estateMuslim' ? file.parties.filter(p => p.group === 'heirs').length > 0 : file.type === 'interdicted' ? file.parties.some(p => p.group === 'appointed') : true;
    const hasCirculars = file.circulars.length > 0;
    const hasConfirmedReply = file.circulars.some(c => c.status === 'replied');
    const hasAssets = assetsForFile(file.id).length > 0;
    const models = {
      estateMuslim:[
        {key:L('مرجع الفريضة والمصدر','Inheritance reference & source'),weight:20,ok:hasSource},
        {key:L('بيانات المتوفى المتحققة','Verified deceased data'),weight:20,ok:hasSubject},
        {key:L('الورثة والعلاقات','Heirs & relationships'),weight:20,ok:hasParties},
        {key:L('المستندات الإلزامية','Required documents'),weight:20,ok:allDocs},
        {key:L('التعاميم والردود','Circulars & replies'),weight:10,ok:hasCirculars && hasConfirmedReply},
        {key:L('الأصول المؤكدة','Confirmed assets'),weight:10,ok:hasAssets}
      ],
      estateNonMuslim:[
        {key:L('المرجع القانوني','Legal reference'),weight:25,ok:hasSource},{key:L('بيانات المتوفى','Deceased data'),weight:20,ok:hasSubject},{key:L('الأطراف القانونية','Legal parties'),weight:20,ok:file.parties.length>0},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('التعاميم والردود','Circulars & replies'),weight:15,ok:hasCirculars && hasConfirmedReply}
      ],
      minorLinked:[
        {key:L('بيانات القاصر','Minor data'),weight:25,ok:hasSubject},{key:L('الربط بملف التركة','Estate link'),weight:20,ok:!!file.legalRef},{key:L('الولي أو الوصي','Guardian / custodian'),weight:20,ok:file.parties.length>0},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('الحساب المساعد','Subsidiary account'),weight:15,ok:file.parties.some(p=>p.accountId)}
      ],
      minorIndependent:[
        {key:L('بيانات القاصر','Minor data'),weight:25,ok:hasSubject},{key:L('المرجع القانوني','Legal reference'),weight:20,ok:hasSource},{key:L('الولي أو الوصي','Guardian / custodian'),weight:25,ok:file.parties.length>0},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('الحساب المساعد','Subsidiary account'),weight:10,ok:file.parties.some(p=>p.accountId)}
      ],
      interdicted:[
        {key:L('بيانات المحجور عليه','Interdicted person data'),weight:20,ok:hasSubject},{key:L('الحكم وتاريخ التولي','Ruling & guardianship dates'),weight:25,ok:hasSource && file.events.length>=2},{key:L('القائم على الشؤون','Affairs manager'),weight:20,ok:file.parties.some(p=>p.group==='appointed')},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('الحساب والبيانات المالية','Account & financial data'),weight:15,ok:!!file.financialProfile}
      ],
      prisoner:[
        {key:L('بيانات الشخص','Person data'),weight:25,ok:hasSubject},{key:L('مرجع السجن','Prison reference'),weight:25,ok:hasSource},{key:L('التواريخ القانونية','Legal dates'),weight:20,ok:file.events.length>=2},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('الأطراف المعينة','Appointed parties'),weight:10,ok:file.parties.length>0}
      ],
      absent:[
        {key:L('بيانات الشخص','Person data'),weight:25,ok:hasSubject},{key:L('حكم أو قرار الغياب','Absence judgment / decision'),weight:25,ok:hasSource},{key:L('التاريخ القانوني','Legal date'),weight:15,ok:file.events.length>0},{key:L('المستندات','Documents'),weight:20,ok:allDocs},{key:L('التعاميم','Circulars'),weight:15,ok:hasCirculars}
      ]
    };
    const rows = models[file.type] || [];
    const score = rows.reduce((sum, r) => sum + (r.ok ? r.weight : 0), 0);
    return {score, rows};
  }

  function table(headers, rows, options = {}) {
    const className = options.className || 'data-table responsive-table';
    const empty = options.empty || t('noData');
    if (!rows.length) return `<div class="empty-state"><span>∅</span><b>${esc(empty)}</b></div>`;
    return `<div class="table-wrap"><table class="${className}"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((cell,i)=>`<td data-label="${esc(headers[i].replace(/<[^>]+>/g,''))}">${cell ?? '—'}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function pageHeader(title, intro, actions = '') {
    return `<div class="page-header"><div><h1>${esc(title)}</h1><p>${esc(intro)}</p></div><div class="page-actions">${actions}</div></div>`;
  }
  function panel(title, subtitle, body, actions = '', extraClass = '') {
    return `<section class="panel ${extraClass}"><div class="panel-head"><div><h3>${esc(title)}</h3>${subtitle?`<p>${esc(subtitle)}</p>`:''}</div><div class="page-actions">${actions}</div></div><div class="panel-body ${body?.startsWith('<div class="table-wrap')?'flush':''}">${body}</div></section>`;
  }
  function detailItem(label, value, source = '') {
    return `<div class="detail-item"><span>${esc(label)}</span><strong>${value ?? '—'}</strong>${source?`<div class="source-line"><span class="chip source">${t('source')}</span>${esc(source)}</div>`:''}</div>`;
  }
  function button(label, cls='', attrs='') { return `<button type="button" class="btn ${cls}" ${attrs}>${label}</button>`; }

  /* --------------------------------------------------------------------------
     Prototype interaction layer
     -------------------------------------------------------------------------- */

  // A maturity account is included so the event alert can open a real statement.
  if (!subAccounts.some(a => a.id === 'SUB-MAT-591')) {
    subAccounts.push({id:'SUB-MAT-591',ownerId:'010345678',fileId:'MN-2026-00117',parent:'2200',opening:184750});
    transactions['SUB-MAT-591'] = [
      {date:'2026-06-30',ref:'MAT-2026-591',desc:L('تحويل رصيد القاصر إلى حساب الرشد العام','Transfer of minor balance to general maturity account'),debit:0,credit:0,journal:null}
    ];
  }

  const alertTypeLabels = {
    noEstate:L('متوفون لديهم قُصّر دون ملف','Deceased with Minors and No File'),
    deceasedInterdicted:L('محجور عليهم متوفون','Deceased Interdicted Persons'),
    circularReply:L('ردود التعاميم','Circular Replies'),
    assignment:L('تنبيهات التكليف','Assignment Alerts'),
    case:L('قضايا مرتبطة بالأطراف','Cases Linked to Parties'),
    maturity:L('استحقاقات الرشد','Maturity Due Events')
  };

  const fileTypeHints = {
    estateMuslim:'typeEstateMuslimHint', estateNonMuslim:'typeEstateNonMuslimHint',
    minorLinked:'typeMinorLinkedHint', minorIndependent:'typeMinorIndependentHint',
    interdicted:'typeInterdictedHint', prisoner:'typePrisonerHint', absent:'typeAbsentHint'
  };

  const sourceLabels = {
    iga:L('هيئة المعلومات والحكومة الإلكترونية','Information & eGovernment Authority'),
    faraid:L('نظام الفريضة الشرعية','Inheritance Certificate System'),
    court:L('نظام المحاكم','Court System'),
    prison:L('نظام المؤسسات الإصلاحية','Correctional Institution System'),
    manual:L('إدخال يدوي استثنائي','Exceptional Manual Entry')
  };

  function sourceForType(type) {
    if (type === 'estateMuslim') return 'faraid';
    if (type === 'prisoner') return 'prison';
    if (['estateNonMuslim','interdicted','minorIndependent','absent'].includes(type)) return 'court';
    return 'iga';
  }

  function referenceLabelForType(type) {
    return ({estateMuslim:t('faraidNo'), estateNonMuslim:t('legalDocumentNo'), interdicted:t('courtDecisionNo'),
      prisoner:t('prisonerNo'), absent:t('absenceDecisionNo'), minorIndependent:t('courtDecisionNo'),
      minorLinked:L('رقم ملف التركة المرتبط','Linked Estate File Number')[lang]}[type] || t('sourceReference'));
  }

  function typeIcon(type) {
    return ({estateMuslim:'☾',estateNonMuslim:'§',minorLinked:'◉',minorIndependent:'○',interdicted:'◇',prisoner:'▥',absent:'⌁'}[type] || '🗂');
  }

  function assetCategoryLabel(category) {
    const item = assetCategories.find(c => c.id === category);
    return item ? t(item.key) : category;
  }

  function assetStatusLabel(status) {
    return status === 'active' ? t('active') : status === 'underProcedure' ? t('underProcedure') : t('disposed');
  }

  function confidenceLabel(value) {
    return value === 'high' ? t('highConfidence') : value === 'medium' ? t('mediumConfidence') : t('lowConfidence');
  }

  function documentLabel(doc) { return doc.nameKey ? t(doc.nameKey) : loc(doc.name); }
  function priorityLabel(value) { return value === 'urgent' || value === 'critical' ? t('urgent') : value === 'high' || value === 'warning' ? t('high') : t('normal'); }

  function openModal(title, subtitle, body, guard = null) {
    $('#modalTitle').textContent = title || '';
    $('#modalSubtitle').textContent = subtitle || '';
    $('#modalBody').innerHTML = body || '';
    modalGuard = guard;
    $('#modal').classList.add('open');
    $('#modal').setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    localizeNumbersInDom($('#modal'));
  }

  function closeModal(force = false) {
    if (!$('#modal')?.classList.contains('open')) return true;
    if (!force && modalGuard && !window.confirm(typeof modalGuard === 'string' ? modalGuard : t('confirmCancelWizard'))) return false;
    $('#modal').classList.remove('open');
    $('#modal').setAttribute('aria-hidden','true');
    $('#modalBody').innerHTML = '';
    modalGuard = null;
    wizard = null;
    assetWizard = null;
    document.body.style.overflow = '';
    return true;
  }

  function openDrawer(title, subtitle, body) {
    $('#drawerTitle').textContent = title || '';
    $('#drawerSubtitle').textContent = subtitle || '';
    $('#drawerBody').innerHTML = body || '';
    $('#drawer').classList.add('open');
    $('#drawer').setAttribute('aria-hidden','false');
    $('#drawerBackdrop').classList.add('open');
    $('#drawerBackdrop').setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    localizeNumbersInDom($('#drawer'));
  }

  function closeDrawer() {
    $('#drawer')?.classList.remove('open');
    $('#drawer')?.setAttribute('aria-hidden','true');
    $('#drawerBackdrop')?.classList.remove('open');
    $('#drawerBackdrop')?.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  function openMobileNav() {
    $('#sidebar').classList.add('mobile-open');
    $('#sidebarBackdrop').classList.add('open');
    $('#navToggle').setAttribute('aria-expanded','true');
    document.body.classList.add('nav-open');
  }

  function closeMobileNav() {
    $('#sidebar')?.classList.remove('mobile-open');
    $('#sidebarBackdrop')?.classList.remove('open');
    $('#navToggle')?.setAttribute('aria-expanded','false');
    document.body.classList.remove('nav-open');
  }

  function kpiCard(icon, label, value, foot = '', cls = '') {
    return `<article class="kpi-card ${cls}"><div class="kpi-top"><div class="kpi-icon">${icon}</div><span class="kpi-label">${esc(label)}</span></div><strong class="kpi-number">${value}</strong>${foot?`<div class="kpi-foot">${foot}</div>`:''}</article>`;
  }

  function moduleEntry(page, icon, title, hint, count = '') {
    return `<button class="module-entry" type="button" data-page="${page}"><span class="module-icon">${icon}</span><strong>${esc(title)}</strong><small>${esc(hint)}</small>${count!==''?`<span class="badge">${count}</span>`:''}</button>`;
  }

  function renderDashboard() {
    const active = files.filter(f=>f.legalStatus==='active').length;
    const awaiting = files.filter(f=>f.legalStatus==='awaitingApproval').length;
    const openItems = workItems.length;
    const replies = alerts.filter(a=>a.type==='circularReply' && a.status!=='resolved').length;
    const totalMaturity = generalAccounts.find(a=>a.code==='2200')?.balance || 0;
    const due = rentalInvoices.reduce((s,x)=>s+x.amount,0);
    const collected = rentalInvoices.reduce((s,x)=>s+x.paid,0);
    const unverified = assets.filter(a=>a.confidence!=='high').length;

    const workPreview = workItems.slice(0,4).map(w=>`<article class="work-card"><div class="work-icon">${w.priority==='critical'?'!':'✓'}</div><div><div class="alert-title-row"><strong>${esc(loc(w.type))}</strong>${priorityPill(w.priority)}</div><p>${esc(loc(w.action))}</p><div class="work-meta"><span>${esc(loc(w.source))}</span><span class="sla">SLA ${convertDigits(w.sla)}</span></div></div><button class="btn btn-sm" data-action="open-related" data-kind="${w.related.kind}" data-id="${w.related.id}">${t('openItem')}</button></article>`).join('');

    const alertPreview = alerts.filter(a=>a.status!=='resolved').slice(0,4).map(a=>`<article class="alert-card"><div class="alert-icon">${a.icon}</div><div><div class="alert-title-row"><strong>${esc(loc(a.title))}</strong>${priorityPill(a.priority)}</div><p>${esc(loc(a.description))}</p><div class="work-meta"><span>${dateFmt(a.created)}</span><span>${esc(loc(a.recipient))}</span></div></div><button class="btn btn-sm btn-soft" data-action="open-alert" data-id="${a.id}">${t('details')}</button></article>`).join('');

    return `
      ${pageHeader(t('homeTitle'),t('homeIntro'),button(`＋ ${t('openNewFile')}`,'btn-primary','data-action="new-file"')+button(t('viewInbox'),'','data-page="inbox"'))}
      <section class="dashboard-hero">
        <div><span class="eyebrow">${esc(L('Oracle APEX-ready Interactive Prototype','Oracle APEX-ready Interactive Prototype')[lang])}</span><h1>${esc(t('homeTitle'))}</h1><p>${esc(t('homeIntro'))}</p></div>
        <div class="hero-meta"><span class="chip source">${esc(L('آخر تحديث','Last Updated')[lang])}: ${dateFmt(today)}</span><span class="chip success">${esc(L('مصادر مترابطة','Connected Sources')[lang])}</span></div>
      </section>
      <div class="module-entry-grid">
        ${moduleEntry('files','🗂',t('moduleFiles'),t('moduleFilesHint'),files.length)}
        ${moduleEntry('assets','◆',t('moduleAssets'),t('moduleAssetsHint'),assets.length)}
        ${moduleEntry('properties','🏢',t('moduleProperties'),t('modulePropertiesHint'),propertyData.length)}
        ${moduleEntry('ledger','▤',t('moduleLedger'),t('moduleLedgerHint'),subAccounts.length)}
        ${moduleEntry('inbox','✓',t('moduleInbox'),t('moduleInboxHint'),workItems.length)}
        ${moduleEntry('reports','▥',t('moduleReports'),t('moduleReportsHint'))}
      </div>
      <div class="section-title"><h2>${t('legalOperational')}</h2><p>${esc(L('حالة الملفات والأعمال التشغيلية فقط','File and operational work status only')[lang])}</p></div>
      <div class="kpi-grid">
        ${kpiCard('🗂',t('activeFiles'),numberFmt(active),esc(L('حالة قانونية: فعال','Legal status: Active')[lang]),'green')}
        ${kpiCard('⌛',t('awaitingApproval'),numberFmt(awaiting),esc(L('تنتظر قرار المسؤول','Awaiting manager decision')[lang]),'gold')}
        ${kpiCard('✓',t('openWorkItems'),numberFmt(openItems),esc(L('عبر جميع الوحدات','Across all modules')[lang]),'blue')}
        ${kpiCard('↩',t('unreadReplies'),numberFmt(replies),esc(L('أحداث تتطلب مراجعة','Events requiring review')[lang]),'danger')}
      </div>
      <div class="section-title"><h2>${t('financialMonitoring')}</h2><p>${t('operationalNote')}</p></div>
      <div class="finance-monitor-grid">
        <article class="finance-monitor"><span>💰</span><div><small>${t('maturityUnpaid')}</small><strong>${money(totalMaturity)}</strong><p>${esc(L('قائمة متابعة مالية مجمعة وليست حالة ملف','Aggregated financial monitoring, not a file status')[lang])}</p></div></article>
        <article class="finance-monitor"><span>⌁</span><div><small>${t('unverifiedAccounts')}</small><strong>${numberFmt(unverified)}</strong><p>${esc(L('أصول بدرجة موثوقية أقل من مستند رسمي','Assets below official-document confidence')[lang])}</p></div></article>
        <article class="finance-monitor"><span>🏢</span><div><small>${t('propertyArrears')}</small><strong>${money(due-collected)}</strong><p>${esc(L('محسوبة من الفواتير وسندات القبض','Derived from invoices and receipts')[lang])}</p></div></article>
      </div>
      <div class="two-col">
        ${panel(t('recentWork'),L('عناصر عمل من الوحدات الأصلية مع المرحلة وSLA','Work items from source modules with stage and SLA')[lang],`<div class="work-list">${workPreview}</div>`,button(t('viewInbox'),'btn-soft','data-page="inbox"'))}
        ${panel(t('priorityAlerts'),L('أحداث فعلية، وليست قوائم تقارير مجمعة','Actionable events, not aggregated report lists')[lang],`<div class="alert-list">${alertPreview}</div>`,button(t('workAlerts'),'btn-soft','data-page="alerts"'))}
      </div>`;
  }

  function filteredFiles() {
    let list = [...files];
    const s = fileSearchState;
    if (s.saved === 'approval') list = list.filter(f=>f.legalStatus==='awaitingApproval');
    if (s.saved === 'estates') list = list.filter(f=>f.type==='estateMuslim'||f.type==='estateNonMuslim');
    if (s.saved === 'myDept') list = list.filter(f=>loc(f.responsibleUnit).includes(lang==='ar'?'التركات':'Estates'));
    if (s.query) list = list.filter(f=>fileSearchText(f).includes(s.query.toLowerCase()));
    if (s.type) list = list.filter(f=>f.type===s.type);
    if (s.legal) list = list.filter(f=>f.legalStatus===s.legal);
    if (s.operational) list = list.filter(f=>f.operationalStatus===s.operational);
    return list;
  }

  function renderFiles() {
    const list = filteredFiles();
    const pages = Math.max(1,Math.ceil(list.length/filesPageSize));
    if (filesPage>pages) filesPage=pages;
    const start=(filesPage-1)*filesPageSize;
    const rows=list.slice(start,start+filesPageSize).map(f=>{
      const p=personById(f.subjectId), c=completenessModel(f);
      return [
        `<button class="text-btn mono" data-action="open-file" data-id="${f.id}">${convertDigits(f.id)}</button>`,
        `<span class="chip source">${typeIcon(f.type)} ${fileTypeLabel(f.type)}</span>`,
        `<div class="case-name"><b>${esc(loc(p.name))}</b><span>${convertDigits(p.id)}</span></div>`,
        statusPill(legalStatusLabel(f.legalStatus),f.legalStatus),
        statusPill(operationalStatusLabel(f.operationalStatus),f.operationalStatus),
        esc(fileAssignmentLabel(f)),
        `<div class="mini-bar"><i style="width:${c.score}%"></i><span>${numberFmt(c.score)}%</span></div>`,
        button(t('viewFileDetails'),'btn-sm btn-soft',`data-action="open-file" data-id="${f.id}"`)
      ];
    });
    const typeOptions=['estateMuslim','estateNonMuslim','minorLinked','minorIndependent','interdicted','prisoner','absent'].map(x=>`<option value="${x}" ${fileSearchState.type===x?'selected':''}>${fileTypeLabel(x)}</option>`).join('');
    const saved = [['all','savedAll'],['approval','savedApproval'],['estates','savedEstates'],['myDept','savedMyDept']].map(([id,key])=>`<button class="view-chip ${fileSearchState.saved===id?'active':''}" data-action="saved-view" data-value="${id}">${t(key)}</button>`).join('');
    const body = `
      <div class="saved-views">${saved}</div>
      <div class="table-toolbar">
        <label class="search-control"><span>⌕</span><input id="fileSearch" value="${esc(fileSearchState.query)}" placeholder="${esc(t('searchFiles'))}" /></label>
        <select id="fileTypeFilter" class="control"><option value="">${t('allTypes')}</option>${typeOptions}</select>
        <select id="fileLegalFilter" class="control"><option value="">${t('allStatuses')}</option>${['draft','awaitingApproval','active','suspended','closed'].map(x=>`<option value="${x}" ${fileSearchState.legal===x?'selected':''}>${legalStatusLabel(x)}</option>`).join('')}</select>
        <select id="fileOperationalFilter" class="control"><option value="">${t('allOperational')}</option>${['dataCollection','circularStage','assetStage','activeManagement','periodicFollowup'].map(x=>`<option value="${x}" ${fileSearchState.operational===x?'selected':''}>${operationalStatusLabel(x)}</option>`).join('')}</select>
        ${button(L('مسح الفلاتر','Clear Filters')[lang],'btn-soft','data-action="clear-file-filters"')}
      </div>
      <div class="help-note">${t('serverSideNote')}</div>
      ${table([t('fileNo'),t('fileType'),t('subjectOwner'),t('legalStatus'),t('operationalStatus'),t('assignment'),t('completeness'),t('action')],rows)}
      <div class="pagination"><span>${numberFmt(list.length)} ${t('results')} · ${t('page')} ${numberFmt(filesPage)} / ${numberFmt(pages)}</span><div class="pager-buttons">${button(t('previous'),'btn-sm',`data-action="file-page" data-value="${filesPage-1}" ${filesPage<=1?'disabled':''}`)}${button(t('next'),'btn-sm',`data-action="file-page" data-value="${filesPage+1}" ${filesPage>=pages?'disabled':''}`)}</div></div>`;
    return `${pageHeader(t('filesTitle'),t('filesIntro'),button(`＋ ${t('openNewFile')}`,'btn-primary','data-action="new-file"'))}${panel(t('fileCenter'),L('سجل موحد مع بحث بالعلاقات','Unified registry with relationship-based search')[lang],body)}`;
  }

  function renderInbox() {
    const cards=workItems.map(w=>`<article class="inbox-card">
      <div><div class="alert-title-row"><strong>${esc(loc(w.type))}</strong>${priorityPill(w.priority)}</div><small class="mono">${convertDigits(w.id)}</small></div>
      <div class="inbox-cell"><span>${t('sourceModule')}</span><b>${esc(loc(w.source))}</b></div>
      <div class="inbox-cell"><span>${t('currentStage')}</span><b>${esc(loc(w.stage))}</b></div>
      <div class="inbox-cell"><span>${t('requiredAction')}</span><b>${esc(loc(w.action))}</b></div>
      <div class="work-meta"><span>${t('sla')}</span><strong>${convertDigits(w.sla)}</strong></div>
      ${button(t('openItem'),'btn-sm btn-primary',`data-action="open-related" data-kind="${w.related.kind}" data-id="${w.related.id}"`)}
    </article>`).join('');
    return `${pageHeader(t('inboxTitle'),t('inboxIntro'))}${panel(t('workInbox'),L('القرار يبقى داخل الوحدة الأصلية','Decision remains in the source module')[lang],`<div class="work-list">${cards||`<div class="empty-state">${t('noInbox')}</div>`}</div>`)}`;
  }

  function alertStatusLabel(status) { return status==='open'?t('alertOpen'):status==='inProgress'?t('alertInProgress'):t('alertResolved'); }

  function filteredAlerts() {
    return alerts.filter(a=>(!alertsState.query||`${loc(a.title)} ${loc(a.description)} ${a.id}`.toLowerCase().includes(alertsState.query.toLowerCase()))&&(!alertsState.priority||a.priority===alertsState.priority)&&(!alertsState.status||a.status===alertsState.status)&&(!alertsState.type||a.type===alertsState.type));
  }

  function renderAlerts() {
    const list=filteredAlerts();
    const cards=list.map(a=>`<article class="alert-center-card">
      <div class="alert-icon ${a.priority}">${a.icon}</div>
      <div><div class="alert-title-row"><strong>${esc(loc(a.title))}</strong>${priorityPill(a.priority)} ${statusPill(alertStatusLabel(a.status),a.status)}</div><p>${esc(loc(a.description))}</p><div class="work-meta"><span>${esc(loc(a.source))}</span><span>${dateFmt(a.created)}</span><span>SLA ${numberFmt(a.slaHours)}h</span></div></div>
      <div class="page-actions">${button(t('details'),'btn-sm btn-soft',`data-action="open-alert" data-id="${a.id}"`)}</div>
    </article>`).join('');
    const types=[...new Set(alerts.map(a=>a.type))].map(type=>`<option value="${type}" ${alertsState.type===type?'selected':''}>${esc(loc(alertTypeLabels[type]||type))}</option>`).join('');
    const filters=`<div class="alert-filter-grid"><label class="search-control"><span>⌕</span><input id="alertSearch" value="${esc(alertsState.query)}" placeholder="${esc(t('alertSearch'))}"></label><select id="alertPriority" class="control"><option value="">${t('allPriorities')}</option><option value="critical" ${alertsState.priority==='critical'?'selected':''}>${t('critical')}</option><option value="warning" ${alertsState.priority==='warning'?'selected':''}>${t('warning')}</option><option value="information" ${alertsState.priority==='information'?'selected':''}>${t('information')}</option></select><select id="alertStatus" class="control"><option value="">${t('allAlertStatuses')}</option><option value="open" ${alertsState.status==='open'?'selected':''}>${t('alertOpen')}</option><option value="inProgress" ${alertsState.status==='inProgress'?'selected':''}>${t('alertInProgress')}</option><option value="resolved" ${alertsState.status==='resolved'?'selected':''}>${t('alertResolved')}</option></select><select id="alertType" class="control"><option value="">${t('allAlertTypes')}</option>${types}</select></div>`;
    return `${pageHeader(t('alertsTitle'),t('alertsIntro'))}${panel(t('workAlerts'),L('التنبيه له حدث ومُستلم وإجراء مطلوب','Each alert has an event, recipient and required action')[lang],filters+`<div class="alert-list">${cards||`<div class="empty-state"><b>${t('noResults')}</b></div>`}</div>`)}`;
  }

  function openAlert(id) {
    const a=alerts.find(x=>x.id===id); if(!a)return;
    const body=`<div class="stack">
      <div class="alert-card"><div class="alert-icon">${a.icon}</div><div><div class="alert-title-row"><strong>${esc(loc(a.title))}</strong>${priorityPill(a.priority)} ${statusPill(alertStatusLabel(a.status),a.status)}</div><p>${esc(loc(a.description))}</p></div></div>
      <div class="alert-rule"><span>${t('source')}</span><b>${esc(loc(a.source))}</b></div>
      <div class="alert-rule"><span>${t('triggerRule')}</span><b>${esc(loc(a.trigger))}</b></div>
      <div class="alert-rule"><span>${t('exclusionRule')}</span><b>${esc(loc(a.exclusion))}</b></div>
      <div class="alert-rule"><span>${t('recipient')}</span><b>${esc(loc(a.recipient))}</b></div>
      <div class="alert-rule"><span>${t('dedupKey')}</span><b class="mono">${convertDigits(a.dedup)}</b></div>
      <div class="detail-grid">${detailItem(t('createdAt'),dateFmt(a.created),loc(a.source))}${detailItem(t('sla'),`${numberFmt(a.slaHours)} ${L('ساعة','hours')[lang]}`)}${detailItem(t('lifecycle'),alertStatusLabel(a.status))}</div>
      <div class="page-actions">${a.status==='open'?button(t('startHandling'),'btn-primary',`data-action="alert-status" data-id="${a.id}" data-status="inProgress"`):''}${a.status!=='resolved'?button(t('resolveAlert'),'btn-success',`data-action="alert-status" data-id="${a.id}" data-status="resolved"`):''}${button(t('openRelated'),'btn-soft',`data-action="open-related" data-kind="${a.related.kind}" data-id="${a.related.id||a.related.personId||''}"`)}</div>
    </div>`;
    openDrawer(t('workAlerts'),a.id,body);
  }

  function fieldDictionaryHtml() {
    const rows=assetCommonFields.map(f=>[numberFmt(f.id),t(f.key),esc(loc(f.description)),esc(loc(f.example)),f.required?`<span class="chip success">${t('yes')}</span>`:`<span class="chip">${t('no')}</span>`,f.editable?`<span class="chip success">${t('yes')}</span>`:`<span class="chip warning">${t('fixed')}</span>`]);
    return `<div class="help-note">${esc(L('هذه الحقول الستة عشر نُقلت إلى نموذج الأصل المركزي مع حالة الإلزام وإمكانية التعديل.','These sixteen fields are implemented in the central asset record with required/editable behavior.')[lang])}</div>${table([L('م','No.')[lang],L('الحقل','Field')[lang],L('الوصف','Description')[lang],L('مثال','Example')[lang],t('required'),t('editable')],rows)}`;
  }

  function filteredAssets() {
    return assets.filter(a=>(!assetState.query||`${a.id} ${a.fileId} ${loc(a.description)} ${loc(a.subtype)} ${loc(a.source)}`.toLowerCase().includes(assetState.query.toLowerCase()))&&(!assetState.category||a.category===assetState.category));
  }

  function renderAssets() {
    const cats=assetCategories.map(c=>`<button class="asset-category-card ${assetState.category===c.id?'selected':''}" data-action="asset-category" data-value="${c.id}"><span class="asset-cat-icon">${c.icon}</span><strong>${t(c.key)}</strong><small>${t(c.examples)}</small><span class="badge">${numberFmt(assets.filter(a=>a.category===c.id).length)}</span></button>`).join('');
    const list=filteredAssets();
    const rows=list.map(a=>[button(convertDigits(a.id),'btn-sm btn-soft',`data-action="open-asset" data-id="${a.id}"`),convertDigits(a.fileId),`<div class="case-name"><b>${esc(loc(a.subtype))}</b><span>${esc(loc(a.description))}</span></div>`,assetCategoryLabel(a.category),statusPill(assetStatusLabel(a.status),a.status),money(a.estimatedValue),esc(confidenceLabel(a.confidence)),button(t('viewAsset'),'btn-sm',`data-action="open-asset" data-id="${a.id}"`)]);
    const filters=`<div class="table-toolbar"><label class="search-control"><span>⌕</span><input id="assetSearch" value="${esc(assetState.query)}" placeholder="${esc(t('assetSearch'))}"></label><select id="assetCategoryFilter" class="control"><option value="">${t('allCategories')}</option>${assetCategories.map(c=>`<option value="${c.id}" ${assetState.category===c.id?'selected':''}>${t(c.key)}</option>`).join('')}</select>${button(L('عرض قاموس الحقول','View Field Dictionary')[lang],'btn-soft','data-action="show-asset-fields"')}</div>`;
    return `${pageHeader(t('assetsTitle'),t('assetsIntro'),button(`＋ ${t('registerAsset')}`,'btn-primary','data-action="new-asset"'))}
      ${panel(t('assetCategories'),L('قوائم محددة مسبقاً وفق التصنيف المرفق','Predefined lists based on the supplied classification')[lang],`<div class="asset-category-grid">${cats}</div>`)}
      ${panel(t('assetCenter'),t('singleSourceNote'),filters+table([t('assetNo'),t('fileNo'),t('subClassification'),t('mainClassification'),t('assetStatus'),t('estimatedValue'),t('confidenceLevel'),t('action')],rows))}`;
  }

  function assetSourceMap(asset) {
    const rows=[
      [t('assetNo'),convertDigits(asset.id),L('مولد النظام عند الإنشاء','Generated by system on creation')[lang]],
      [t('fileNo'),convertDigits(asset.fileId),L('علاقة مباشرة مع سجل الملف','Direct relationship to file record')[lang]],
      [t('mainClassification'),assetCategoryLabel(asset.category),L('قائمة التصنيفات المعتمدة','Approved classification list')[lang]],
      [t('subClassification'),esc(loc(asset.subtype)),L('نوع مختار من القائمة الفرعية','Selected approved subtype')[lang]],
      [t('estimatedValue'),money(asset.estimatedValue),L('تقييم أو رد جهة - غير ثابت زمنياً','Valuation or entity reply - time-sensitive')[lang]],
      [t('dataProvenance'),esc(loc(asset.source)),L('رد تعميم / مستند خارجي','Circular reply / external document')[lang]],
      [t('hasRevenue'),asset.hasRevenue?t('yes'):t('no'),L('مؤشر من وجود سجلات إيراد','Derived from revenue records')[lang]],
      [t('hasExpenses'),asset.hasExpenses?t('yes'):t('no'),L('مؤشر من وجود سجلات مصروف','Derived from expense records')[lang]]
    ];
    return `<div class="source-map">${rows.map(r=>`<div class="source-map-row"><b>${r[0]}</b><span>${r[1]}</span><small>${esc(r[2])}</small></div>`).join('')}</div>`;
  }

  function openAsset(id) {
    const a=assets.find(x=>x.id===id); if(!a)return;
    const file=fileById(a.fileId), related=personById(a.relatedParty);
    const property=propertyData.find(p=>p.assetId===a.id);
    const tabs=[['profile',t('overview')],['source',t('fieldSourceMap')],['financial',L('السجلات المالية','Financial Records')[lang]],['documents',t('assetDocuments')],['linked',t('linkedAlertsRequests')]];
    const active='profile';
    const body=`<div class="profile-head"><div class="profile-title"><div class="profile-avatar">${assetCategories.find(c=>c.id===a.category)?.icon||'◆'}</div><div><h2>${esc(loc(a.subtype))}</h2><p>${convertDigits(a.id)} · ${convertDigits(a.fileId)}</p><div>${statusPill(assetStatusLabel(a.status),a.status)} <span class="chip source">${assetCategoryLabel(a.category)}</span></div></div></div><div class="profile-actions">${button(t('viewFileDetails'),'btn-soft',`data-action="open-file" data-id="${a.fileId}"`)}${property?button(t('viewProperty'),'btn-primary',`data-action="open-property" data-id="${property.assetId}"`):''}</div></div>
    <div class="tabs">${tabs.map(([id,label])=>`<button class="tab-btn ${id===active?'active':''}" data-action="asset-tab" data-id="${a.id}" data-tab="${id}">${label}</button>`).join('')}</div><div id="assetTabContent">${assetTabHtml(a,active,file,related)}</div>`;
    openDrawer(t('viewAsset'),`${a.id} · ${loc(a.description)}`,body);
  }

  function assetTabHtml(a,tab,file=fileById(a.fileId),related=personById(a.relatedParty)) {
    if(tab==='source') return `<div class="help-note">${t('singleSourceNote')}</div>${assetSourceMap(a)}`;
    if(tab==='financial') {
      const rev=(a.revenueRecords||[]).map(x=>[dateFmt(x.date),esc(loc(x.desc)),money(x.amount)]);
      const exp=(a.expenseRecords||[]).map(x=>[dateFmt(x.date),esc(loc(x.desc)),money(x.amount)]);
      return `<div class="two-col">${panel(t('revenueRecords'),'',table([t('transactionDate'),t('description'),L('المبلغ','Amount')[lang]],rev))}${panel(t('expenseRecords'),'',table([t('transactionDate'),t('description'),L('المبلغ','Amount')[lang]],exp))}</div><div class="help-note">${esc(L('الإيراد والمصروف سجلات زمنية مستقلة، ولا يُحفظان كقيمة ثابتة في بطاقة الأصل.','Revenue and expense are independent time-based records, not fixed values on the asset profile.')[lang])}</div>`;
    }
    if(tab==='documents') return `<div class="document-grid">${a.documents.map((d,i)=>`<article class="document-card"><div class="document-icon">▤</div><div><strong>${esc(loc(d))}</strong><small>${esc(loc(a.source))}</small></div><span class="chip success">${t('verified')}</span></article>`).join('')}</div>`;
    if(tab==='linked') {
      const linkedAlerts=alerts.filter(x=>x.related?.id===a.fileId);
      return `<div class="stack">${linkedAlerts.length?linkedAlerts.map(x=>`<article class="alert-card"><div class="alert-icon">${x.icon}</div><div><strong>${esc(loc(x.title))}</strong><p>${esc(loc(x.description))}</p></div>${button(t('details'),'btn-sm',`data-action="open-alert" data-id="${x.id}"`)}</article>`).join(''):`<div class="empty-state"><span>✓</span><b>${t('noData')}</b></div>`}</div>`;
    }
    return `<div class="asset-profile-grid"><div class="detail-grid">${detailItem(t('assetNo'),`<span class="mono">${convertDigits(a.id)}</span>`)}${detailItem(t('fileNo'),`<button class="text-btn mono" data-action="open-file" data-id="${a.fileId}">${convertDigits(a.fileId)}</button>`)}${detailItem(t('registrationDate'),dateFmt(a.registrationDate))}${detailItem(t('mainClassification'),assetCategoryLabel(a.category))}${detailItem(t('subClassification'),esc(loc(a.subtype)))}${detailItem(t('managementEntity'),esc(loc(a.managementEntity)))}${detailItem(t('guardianshipCapacity'),esc(loc(a.guardianshipCapacity)))}${detailItem(t('assetRights'),esc(loc(a.rights)))}${detailItem(t('ownershipType'),esc(loc(a.ownershipType)))}${detailItem(t('ownershipPercentage'),`${numberFmt(a.ownershipPercentage)}%`)}${detailItem(t('estimatedValue'),money(a.estimatedValue))}${detailItem(t('assetStatus'),assetStatusLabel(a.status))}${detailItem(t('relatedParty'),`${esc(loc(related.name))} · ${convertDigits(related.id)}`)}${detailItem(t('confidenceLevel'),confidenceLabel(a.confidence),loc(a.source))}${detailItem(t('hasRevenue'),a.hasRevenue?t('yes'):t('no'))}${detailItem(t('hasExpenses'),a.hasExpenses?t('yes'):t('no'))}</div><div>${panel(t('dataProvenance'),'',`<div class="source-result"><div class="source-result-head"><span class="chip source">${t('source')}</span><b>${esc(loc(a.source))}</b></div><p>${esc(loc(a.description))}</p></div>`)}</div></div>`;
  }

  function propertyUnitById(id) {
    for (const p of propertyData) { const u=p.units.find(x=>x.id===id); if(u)return {property:p,unit:u}; }
    return null;
  }

  function propertyMetrics() {
    const rentable=propertyData.flatMap(p=>p.units).filter(u=>u.lease||u.status==='vacant');
    const leased=rentable.filter(u=>u.status==='leased'&&u.lease).length;
    const due=rentalInvoices.reduce((s,x)=>s+x.amount,0), paid=rentalInvoices.reduce((s,x)=>s+x.paid,0);
    return {rentable,leased,vacant:rentable.length-leased,occupancy:rentable.length?leased/rentable.length*100:0,due,paid,arrears:due-paid};
  }

  function propertyTabs() {
    return [['overview','propertyDashboard'],['portfolio','portfolio'],['units','units'],['leases','leases'],['collections','collections'],['distributions','distributions'],['tree','propertyTree']].map(([id,key])=>`<button class="module-tab ${propertyTab===id?'active':''}" data-action="property-tab" data-tab="${id}">${t(key)}</button>`).join('');
  }

  function renderProperties() {
    const m=propertyMetrics();
    return `${pageHeader(t('propertyTitle'),t('propertyIntro'))}<div class="module-tabs">${propertyTabs()}</div><div id="propertyContent">${propertyTabHtml(propertyTab,m)}</div>`;
  }

  function propertyTabHtml(tab,m=propertyMetrics()) {
    if(tab==='portfolio') {
      const rows=propertyData.map(p=>{const a=assets.find(x=>x.id===p.assetId);return[convertDigits(p.code),`<div class="case-name"><b>${esc(loc(p.name))}</b><span>${esc(loc(p.address))}</span></div>`,convertDigits(a.fileId),esc(loc(a.subtype)),numberFmt(p.units.length),money(a.estimatedValue),button(t('viewProperty'),'btn-sm btn-soft',`data-action="open-property" data-id="${p.assetId}"`)];});
      return panel(t('portfolio'),'',table([t('propertyCode'),t('propertyName'),t('fileNo'),t('subClassification'),t('totalUnits'),t('estimatedValue'),t('action')],rows));
    }
    if(tab==='units') {
      const rows=propertyData.flatMap(p=>p.units.map(u=>[convertDigits(u.code),esc(loc(p.name)),esc(loc(u.name)),esc(u.status==='leased'?L('مؤجرة','Leased')[lang]:u.status==='occupiedFamily'?L('إشغال عائلي غير استثماري','Non-investment Family Occupancy')[lang]:L('شاغرة','Vacant')[lang]),u.tenant?esc(loc(u.tenant)):'—',u.lease?money(u.lease.annualRent):'—',u.lease?button(t('viewLease'),'btn-sm',`data-action="open-lease" data-id="${u.lease.id}"`):'—']));
      return panel(t('units'),t('occupancySource'),table([t('unitCode'),t('propertyName'),L('اسم الوحدة','Unit Name')[lang],t('assetStatus'),t('tenant'),t('annualRent'),t('action')],rows));
    }
    if(tab==='leases') {
      const rows=propertyData.flatMap(p=>p.units.filter(u=>u.lease).map(u=>[convertDigits(u.lease.no),esc(loc(p.name)),convertDigits(u.code),esc(loc(u.tenant)),dateFmt(u.lease.start),dateFmt(u.lease.end),money(u.lease.annualRent),button(t('viewLease'),'btn-sm btn-soft',`data-action="open-lease" data-id="${u.lease.id}"`)]));
      return panel(t('leases'),'',table([t('contractNo'),t('propertyName'),t('unitCode'),t('tenant'),t('startDate'),t('endDate'),t('annualRent'),t('action')],rows));
    }
    if(tab==='collections') {
      const rows=rentalInvoices.map(i=>{const x=propertyUnitById(i.unitId);return[convertDigits(i.id),esc(loc(x?.unit?.tenant)||'—'),convertDigits(x?.unit?.code||i.unitId),dateFmt(i.due),money(i.amount),money(i.paid),money(i.amount-i.paid),i.amount===i.paid?`<span class="chip success">${L('مسددة','Paid')[lang]}</span>`:i.paid>0?`<span class="chip warning">${L('جزئية','Partial')[lang]}</span>`:`<span class="chip danger">${L('متأخرة','Overdue')[lang]}</span>`,i.amount>i.paid?button(t('recordCollection'),'btn-sm btn-primary',`data-action="record-collection" data-id="${i.id}"`):'—'];});
      return `${panel(t('collections'),t('revenueSource'),table([t('invoiceNo'),t('tenant'),t('unitCode'),t('dueDate'),t('dueRent'),t('paidAmount'),t('remaining'),t('documentStatus'),t('action')],rows))}`;
    }
    if(tab==='distributions') {
      const heirs=fileById('TRM-2024-00124').parties.filter(p=>p.group==='heirs');
      const rows=heirs.map(p=>{const person=personById(p.personId);return[esc(loc(person.name)),esc(loc(p.role)),`${numberFmt(p.share)}%`,money(800*p.share/100),money(9600*p.share/100),p.personId==='120678901'?`<span class="chip warning">${L('معلق للقاصر','Suspended for Minor')[lang]}</span>`:`<span class="chip success">${L('مرحّل للحساب المساعد','Posted to Subsidiary Account')[lang]}</span>`,button(t('balanceDetails'),'btn-sm',`data-action="statement" data-id="${p.accountId}"`)];});
      return `${panel(t('distributions'),L('مثال التركة الافتراضي: صافي دخل شهري 800 د.ب','Prototype estate example: net monthly income BHD 800')[lang],`<div class="metric-strip"><div class="metric-mini"><span>${t('monthlyIncome')}</span><b>${money(800)}</b></div><div class="metric-mini"><span>${t('annualIncome')}</span><b>${money(9600)}</b></div><div class="metric-mini"><span>${t('shareMonthly')}</span><b>${money(160)}</b></div><div class="metric-mini"><span>${t('shareAnnual')}</span><b>${money(1920)}</b></div></div>${table([t('accountOwner'),t('role'),t('ownershipPercentage'),t('shareMonthly'),t('shareAnnual'),t('documentStatus'),t('action')],rows)}<div class="help-note warning-note">${t('equalDistributionNote')}</div>`)}`;
    }
    if(tab==='tree') {
      const nodes=propertyData.map(p=>{const a=assets.find(x=>x.id===p.assetId),f=fileById(a.fileId);return `<div class="tree-file"><button class="tree-node" data-action="open-file" data-id="${f.id}"><span class="tree-icon">🗂</span><b>${convertDigits(f.id)}</b><small>${esc(filePrimaryName(f))}</small></button><div class="tree-children"><button class="tree-node" data-action="open-property" data-id="${p.assetId}"><span class="tree-icon">🏢</span><b>${esc(loc(p.name))}</b><small>${convertDigits(p.code)}</small></button><div class="tree-children">${p.units.map(u=>`<div class="tree-node"><span class="tree-icon">▣</span><b>${convertDigits(u.code)} · ${esc(loc(u.name))}</b><small>${u.lease?`${esc(loc(u.tenant))} · ${convertDigits(u.lease.no)}`:L('لا يوجد عقد استثماري','No investment lease')[lang]}</small></div>`).join('')}</div></div></div>`;}).join('');
      return panel(t('propertyTree'),L('الملف ← الأصل العقاري ← الوحدة ← العقد الحالي','File → Property Asset → Unit → Current Lease')[lang],`<div class="property-tree">${nodes}</div>`);
    }
    const portfolioRows=propertyData.map(p=>{const a=assets.find(x=>x.id===p.assetId);const leased=p.units.filter(u=>u.lease).length;const rentUnits=p.units.filter(u=>u.lease||u.status==='vacant').length;const rate=rentUnits?leased/rentUnits*100:0;return[esc(loc(p.name)),convertDigits(p.code),numberFmt(p.units.length),rentUnits?`${numberFmt(rate)}%`:L('غير استثماري','Non-investment')[lang],money(a.estimatedValue),button(t('viewProperty'),'btn-sm',`data-action="open-property" data-id="${p.assetId}"`)];});
    return `<div class="property-kpis">${kpiCard('🏢',t('propertiesCount'),numberFmt(propertyData.length),'')}${kpiCard('▣',t('totalUnits'),numberFmt(propertyData.reduce((s,p)=>s+p.units.length,0)),'')}${kpiCard('✓',t('occupiedUnits'),numberFmt(m.leased),'')}${kpiCard('○',t('vacantUnits'),numberFmt(m.vacant),'')}</div><div class="metric-strip"><div class="metric-mini"><span>${t('occupancyRate')}</span><b>${numberFmt(m.occupancy)}%</b><div class="occupancy-bar"><i style="width:${m.occupancy}%"></i></div></div><div class="metric-mini"><span>${t('dueRent')}</span><b>${money(m.due)}</b></div><div class="metric-mini"><span>${t('collectedRent')}</span><b>${money(m.paid)}</b></div><div class="metric-mini"><span>${t('arrears')}</span><b>${money(m.arrears)}</b></div></div><div class="help-note">${t('occupancySource')} ${t('revenueSource')}</div>${panel(t('portfolio'),'',table([t('propertyName'),t('propertyCode'),t('totalUnits'),t('occupancyRate'),t('estimatedValue'),t('action')],portfolioRows))}`;
  }

  function openProperty(assetId) {
    const p=propertyData.find(x=>x.assetId===assetId),a=assets.find(x=>x.id===assetId); if(!p||!a)return;
    const invoices=rentalInvoices.filter(i=>p.units.some(u=>u.id===i.unitId));
    const due=invoices.reduce((s,x)=>s+x.amount,0),paid=invoices.reduce((s,x)=>s+x.paid,0);
    const rows=p.units.map(u=>[convertDigits(u.code),esc(loc(u.name)),u.tenant?esc(loc(u.tenant)):'—',u.lease?convertDigits(u.lease.no):'—',u.lease?money(u.lease.annualRent):'—',u.lease?button(t('viewLease'),'btn-sm',`data-action="open-lease" data-id="${u.lease.id}"`):'—']);
    const body=`<div class="profile-head"><div class="profile-title"><div class="profile-avatar">🏢</div><div><h2>${esc(loc(p.name))}</h2><p>${convertDigits(p.code)} · ${esc(loc(p.address))}</p><div><span class="chip source">${assetCategoryLabel(a.category)}</span> ${statusPill(assetStatusLabel(a.status),a.status)}</div></div></div><div class="profile-actions">${button(t('viewAsset'),'btn-soft',`data-action="open-asset" data-id="${a.id}"`)}${button(t('viewFileDetails'),'btn-primary',`data-action="open-file" data-id="${a.fileId}"`)}</div></div><div class="metric-strip"><div class="metric-mini"><span>${t('totalUnits')}</span><b>${numberFmt(p.units.length)}</b></div><div class="metric-mini"><span>${t('dueRent')}</span><b>${money(due)}</b></div><div class="metric-mini"><span>${t('collectedRent')}</span><b>${money(paid)}</b></div><div class="metric-mini"><span>${t('arrears')}</span><b>${money(due-paid)}</b></div></div>${panel(t('units'),'',table([t('unitCode'),L('الوحدة','Unit')[lang],t('tenant'),t('contractNo'),t('annualRent'),t('action')],rows))}${panel(L('سجل الصيانة','Maintenance History')[lang],'',table([t('transactionDate'),t('description'),L('التكلفة','Cost')[lang]],p.maintenance.map(x=>[dateFmt(x.date),esc(loc(x.desc)),money(x.amount)])))}`;
    openDrawer(t('viewProperty'),p.code,body);
  }

  function openLease(leaseId) {
    let found=null; for(const p of propertyData){for(const u of p.units){if(u.lease?.id===leaseId)found={p,u,lease:u.lease};}}
    if(!found)return; const {p,u,lease}=found;
    const inv=rentalInvoices.filter(i=>i.unitId===u.id);
    const body=`<div class="detail-grid">${detailItem(t('contractNo'),convertDigits(lease.no))}${detailItem(t('propertyName'),esc(loc(p.name)))}${detailItem(t('unitCode'),convertDigits(u.code))}${detailItem(t('tenant'),esc(loc(u.tenant)))}${detailItem(t('startDate'),dateFmt(lease.start))}${detailItem(t('endDate'),dateFmt(lease.end))}${detailItem(t('annualRent'),money(lease.annualRent))}${detailItem(L('دورة الدفع','Payment Cycle')[lang],t('month'))}</div>${panel(t('collections'),'',table([t('invoiceNo'),t('dueDate'),t('dueRent'),t('paidAmount'),t('remaining')],inv.map(i=>[convertDigits(i.id),dateFmt(i.due),money(i.amount),money(i.paid),money(i.amount-i.paid)])))}`;
    openModal(t('viewLease'),lease.no,body);
  }

  function recordCollection(id) {
    const inv=rentalInvoices.find(x=>x.id===id); if(!inv)return;
    const remaining=inv.amount-inv.paid;
    openModal(t('recordCollection'),id,`<form id="collectionForm" class="stack"><div class="detail-grid">${detailItem(t('invoiceNo'),convertDigits(inv.id))}${detailItem(t('remaining'),money(remaining))}</div><div class="form-grid"><label class="field"><span>${L('مبلغ التحصيل','Collection Amount')[lang]}</span><input id="collectionAmount" type="number" min="0.001" max="${remaining}" step="0.001" value="${remaining}"></label><label class="field"><span>${L('طريقة الدفع','Payment Method')[lang]}</span><select id="collectionMethod"><option>${L('تحويل بنكي','Bank Transfer')[lang]}</option><option>${L('نقدي','Cash')[lang]}</option><option>${L('شيك','Cheque')[lang]}</option><option>${L('دفع إلكتروني','Electronic Payment')[lang]}</option></select></label><label class="field span-2"><span>${L('مرجع سند القبض','Receipt Reference')[lang]}</span><input id="collectionRef" value="RC-${Date.now().toString().slice(-6)}"></label></div><div class="form-actions">${button(t('confirm'),'btn-primary','data-action="save-collection" data-id="'+id+'"')}${button(t('cancel'),'','data-action="close-modal"')}</div></form>`);
  }

  function renderLedger() {
    const tabs=`<div class="ledger-tabs"><button class="module-tab ${ledgerTab==='general'?'active':''}" data-action="ledger-tab" data-tab="general">${t('chartOfAccounts')}</button><button class="module-tab ${ledgerTab==='subsidiary'?'active':''}" data-action="ledger-tab" data-tab="subsidiary">${t('subsidiaryAccounts')}</button></div>`;
    let body='';
    if(ledgerTab==='general'){
      const rows=generalAccounts.map(a=>[convertDigits(a.code),t(a.nameKey),esc(loc(a.type)),money(a.balance),subAccounts.filter(s=>s.parent===a.code).length?button(L('عرض الحسابات المساعدة','View Subsidiary Accounts')[lang],'btn-sm btn-soft',`data-action="show-parent-subs" data-id="${a.code}"`):'—']);
      body=panel(t('chartOfAccounts'),L('الأرصدة التجريبية على مستوى الأستاذ العام','Prototype balances at general-ledger level')[lang],table([t('accountCode'),t('accountName'),t('accountType'),t('balance'),t('action')],rows));
    } else {
      const rows=subAccounts.map(a=>{const owner=personById(a.ownerId),parent=generalAccounts.find(g=>g.code===a.parent);return[convertDigits(a.id),esc(loc(owner.name)),convertDigits(owner.id),convertDigits(a.fileId),parent?t(parent.nameKey):a.parent,money(accountBalance(a.id)),button(t('balanceDetails'),'btn-sm btn-primary',`data-action="statement" data-id="${a.id}"`)];});
      body=panel(t('subsidiaryAccounts'),L('كل حساب مساعد مرتبط بصاحب وملف وحساب أستاذ عام','Each subsidiary account is linked to an owner, file and general account')[lang],table([t('accountCode'),t('accountOwner'),t('personalId'),t('linkedFile'),t('parentAccount'),t('currentBalance'),t('action')],rows));
    }
    return `${pageHeader(t('ledgerTitle'),t('ledgerIntro'))}${tabs}${body}`;
  }

  function openStatement(accountId) {
    const acc=subAccountById(accountId); if(!acc){toast(t('noData'));return;}
    const owner=personById(acc.ownerId), txs=transactions[accountId]||[];
    let running=Number(acc.opening||0), totalDebit=0,totalCredit=0;
    const rows=txs.map(tx=>{totalDebit+=Number(tx.debit||0);totalCredit+=Number(tx.credit||0);running+=Number(tx.credit||0)-Number(tx.debit||0);return[dateFmt(tx.date),convertDigits(tx.ref),esc(loc(tx.desc)),money(tx.debit||0),money(tx.credit||0),money(running),tx.journal?button(t('entryDetails'),'btn-sm btn-soft',`data-action="journal" data-id="${tx.journal}"`):'—'];});
    const body=`<div class="profile-head"><div class="profile-title"><div class="profile-avatar">▤</div><div><h2>${esc(loc(owner.name))}</h2><p>${convertDigits(accountId)} · ${convertDigits(acc.fileId)}</p></div></div><div class="profile-actions">${button(t('viewFileDetails'),'btn-soft',`data-action="open-file" data-id="${acc.fileId}"`)}</div></div><div class="statement-summary"><div class="summary-box"><span>${t('openingBalance')}</span><strong>${money(acc.opening)}</strong></div><div class="summary-box"><span>${t('totalDebit')}</span><strong>${money(totalDebit)}</strong></div><div class="summary-box"><span>${t('totalCredit')}</span><strong>${money(totalCredit)}</strong></div><div class="summary-box"><span>${t('closingBalance')}</span><strong>${money(running)}</strong></div></div>${table([t('transactionDate'),t('reference'),t('description'),t('debit'),t('credit'),t('runningBalance'),t('action')],rows,{empty:t('noTransactions')})}<div class="help-note">${esc(L('الرصيد في كل سطر = الرصيد السابق + الدائن − المدين. زر تفاصيل القيد يعرض طرفي القيد وجميع سطوره.','Each line balance = previous balance + credit − debit. Entry Details opens all journal lines.')[lang])}</div>`;
    openModal(t('accountStatement'),`${accountId} · ${loc(owner.name)}`,body);
  }

  function openJournal(id) {
    const je=journalEntries[id]; if(!je)return;
    const debit=je.lines.reduce((s,x)=>s+x.debit,0),credit=je.lines.reduce((s,x)=>s+x.credit,0);
    const body=`<div class="journal-entry"><div class="journal-head"><div><b>${convertDigits(id)}</b><span>${dateFmt(je.date)}</span></div><span>${esc(loc(je.description))}</span></div>${table([t('accountCode'),t('accountName'),t('debit'),t('credit')],je.lines.map(l=>[convertDigits(l.account),esc(loc(l.name)),money(l.debit),money(l.credit)]))}</div><div class="statement-summary"><div class="summary-box"><span>${t('totalDebit')}</span><strong>${money(debit)}</strong></div><div class="summary-box"><span>${t('totalCredit')}</span><strong>${money(credit)}</strong></div><div class="summary-box"><span>${L('حالة التوازن','Balance Status')[lang]}</span><strong>${debit===credit?L('متوازن','Balanced')[lang]:L('غير متوازن','Unbalanced')[lang]}</strong></div><div class="summary-box"><span>${L('الفرق','Difference')[lang]}</span><strong>${money(Math.abs(debit-credit))}</strong></div></div>`;
    openModal(t('journalEntry'),id,body);
  }

  const reportDefinitions = [
    ['fileStatus','reportFileStatus','🗂'],['alerts','reportAlertsLifecycle','🔔'],['maturity','reportMaturity','💰'],['assets','reportAssets','◆'],['property','reportProperty','🏢'],['circulars','reportCirculars','↩'],['inbox','reportInbox','✓'],['audit','reportAudit','⌁']
  ];

  function renderReports() {
    const cards=reportDefinitions.map(([id,key,icon])=>`<article class="report-card"><div class="report-icon">${icon}</div><h3>${t(key)}</h3><p>${esc(reportDescription(id))}</p>${button(t('runReport'),'btn-sm btn-primary',`data-action="open-report" data-id="${id}"`)}</article>`).join('');
    return `${pageHeader(t('reportsTitle'),t('reportsIntro'))}<div class="report-grid">${cards}</div>`;
  }

  function reportDescription(id) {
    const map={fileStatus:L('الحالات القانونية والتشغيلية ونموذج اكتمال كل نوع ملف.','Legal/operational status and type-specific completeness model.'),alerts:L('الحالة ومدة المعالجة وSLA ومصدر كل تنبيه.','Status, handling duration, SLA and source for every alert.'),maturity:L('قائمة الحسابات ومواعيد الاستحقاق والمبالغ غير المصروفة.','Accounts, due dates and unpaid maturity balances.'),assets:L('التصنيف والحالة ومصدر البيانات ودرجة الموثوقية.','Classification, status, data source and confidence.'),property:L('الإيرادات والتحصيل والمتأخرات والإشغال المشتق للفترة.','Revenue, collections, arrears and derived occupancy for a period.'),circulars:L('التعاميم المرسلة والردود ومدة الانتظار والتحويل إلى أصول.','Sent circulars, replies, waiting time and conversion to assets.'),inbox:L('حجم الأعمال وSLA حسب الوحدة والمرحلة.','Work volume and SLA by module and stage.'),audit:L('إجراءات الاعتماد والتكليف وإعادة التكليف.','Approval, assignment and reassignment actions.')};return loc(map[id]);
  }

  function reportRows(type) {
    if(type==='fileStatus')return {headers:[t('fileNo'),t('fileType'),t('legalStatus'),t('operationalStatus'),t('completeness')],rows:files.map(f=>[convertDigits(f.id),fileTypeLabel(f.type),legalStatusLabel(f.legalStatus),operationalStatusLabel(f.operationalStatus),`${numberFmt(completenessModel(f).score)}%`])};
    if(type==='alerts')return {headers:[L('التنبيه','Alert')[lang],t('source'),t('createdAt'),t('sla'),t('lifecycle')],rows:alerts.map(a=>[esc(loc(a.title)),esc(loc(a.source)),dateFmt(a.created),`${numberFmt(a.slaHours)}h`,alertStatusLabel(a.status)])};
    if(type==='maturity')return {headers:[t('accountCode'),t('accountOwner'),t('linkedFile'),t('closingBalance')],rows:subAccounts.filter(a=>a.parent==='2200').map(a=>[convertDigits(a.id),esc(loc(personById(a.ownerId).name)),convertDigits(a.fileId),money(accountBalance(a.id))])};
    if(type==='assets')return {headers:[t('assetNo'),t('fileNo'),t('mainClassification'),t('assetStatus'),t('confidenceLevel'),t('estimatedValue')],rows:assets.map(a=>[convertDigits(a.id),convertDigits(a.fileId),assetCategoryLabel(a.category),assetStatusLabel(a.status),confidenceLabel(a.confidence),money(a.estimatedValue)])};
    if(type==='property'){const m=propertyMetrics();return {headers:[t('propertiesCount'),t('totalUnits'),t('occupancyRate'),t('dueRent'),t('collectedRent'),t('arrears')],rows:[[numberFmt(propertyData.length),numberFmt(propertyData.reduce((s,p)=>s+p.units.length,0)),`${numberFmt(m.occupancy)}%`,money(m.due),money(m.paid),money(m.arrears)]]};}
    if(type==='circulars')return {headers:[t('fileNo'),L('رقم التعميم','Circular No.')[lang],L('الجهة','Entity')[lang],L('تاريخ الإرسال','Sent Date')[lang],L('تاريخ الرد','Reply Date')[lang],t('documentStatus')],rows:files.flatMap(f=>f.circulars.map(c=>[convertDigits(f.id),convertDigits(c.id),esc(loc(c.entity)),dateFmt(c.sent),dateFmt(c.reply),c.status==='replied'?t('verified'):L('بانتظار الرد','Awaiting Reply')[lang]]))};
    if(type==='inbox')return {headers:[t('itemType'),t('sourceModule'),t('currentStage'),t('requiredAction'),t('sla')],rows:workItems.map(w=>[esc(loc(w.type)),esc(loc(w.source)),esc(loc(w.stage)),esc(loc(w.action)),convertDigits(w.sla)])};
    return {headers:[t('transactionDate'),L('المستخدم','User')[lang],t('fileNo'),L('الإجراء','Action')[lang]],rows:files.flatMap(f=>(f.audit||[]).map(a=>[dateFmt(a.date),esc(loc(a.user)),convertDigits(f.id),esc(loc(a.action))]))};
  }

  function openReport(type) {
    const def=reportDefinitions.find(x=>x[0]===type),data=reportRows(type);
    const body=`<div class="form-grid three"><label class="field"><span>${t('fromDate')}</span><input id="reportFrom" type="date" value="2026-01-01"></label><label class="field"><span>${t('toDate')}</span><input id="reportTo" type="date" value="${today}"></label><div class="field"><span>&nbsp;</span><div class="page-actions">${button(t('run'),'btn-primary',`data-action="run-report" data-id="${type}"`)}${button(t('exportCsv'),'btn-soft',`data-action="export-report" data-id="${type}"`)}</div></div></div><div id="reportOutput">${panel(t('reportResult'),'2026-01-01 — '+today,table(data.headers,data.rows))}</div>`;
    openModal(t(def?.[1]||'reportsTitle'),reportDescription(type),body);
  }

  function exportReport(type) {
    const data=reportRows(type); const clean=v=>String(v??'').replace(/<[^>]*>/g,'').replaceAll('"','""');
    const csv='\ufeff'+[data.headers,...data.rows].map(r=>r.map(x=>`"${clean(x)}"`).join(',')).join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download=`${type}-report.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  function renderUsers() {
    const rows=[
      [L('مدير النظام','System Administrator')[lang],L('كل الوحدات والإعدادات','All modules and settings')[lang],L('إدارة كاملة مع سجل تدقيق','Full administration with audit')[lang]],
      [L('رئيس القسم','Section Head')[lang],L('ملفات القسم وصندوق العمل','Department files and work inbox')[lang],L('اعتماد وتكليف وإعادة توزيع','Approve, assign and redistribute')[lang]],
      [L('موظف الملفات','File Officer')[lang],L('الملفات التي قبلها من قائمة القسم','Files accepted from department queue')[lang],L('تحديث ومتابعة دون اعتماد ذاتي','Update and follow-up without self-approval')[lang]],
      [L('المراجع المالي','Financial Reviewer')[lang],L('الحسابات والقيود والطلبات','Accounts, entries and requests')[lang],L('مراجعة مستقلة وفق فصل المهام','Independent review under segregation of duties')[lang]]
    ];
    return `${pageHeader(t('usersTitle'),t('usersIntro'))}${panel(L('مصفوفة الأدوار المقترحة','Proposed Role Matrix')[lang],L('تعريف الصلاحيات في Shared Components / Authorization Schemes','Implement through Shared Components / Authorization Schemes')[lang],table([L('الدور','Role')[lang],L('نطاق البيانات','Data Scope')[lang],L('الصلاحيات الرئيسية','Primary Permissions')[lang]],rows))}${panel(L('فصل المهام','Segregation of Duties')[lang],'',`<div class="check-list"><div class="check-row"><span>✓</span><b>${esc(L('لا يعتمد المستخدم الإجراء الذي أنشأه عندما تتطلب السياسة مراجعة مستقلة.','A user cannot approve an action they created where independent review is required.')[lang])}</b></div><div class="check-row"><span>✓</span><b>${esc(L('صلاحية التكليف منفصلة عن صلاحية تعديل البيانات القانونية.','Assignment authority is separate from legal-data editing authority.')[lang])}</b></div><div class="check-row"><span>✓</span><b>${esc(L('كل تغيير في التكليف أو الاعتماد يسجل قبل وبعد في سجل التدقيق.','Every assignment or approval change is recorded before and after in the audit trail.')[lang])}</b></div></div>`)}`;
  }

  function renderSettings() {
    const integrations=[
      [t('igaSource'),L('بيانات الشخص والعنوان والتواصل وحالات الوفاة','Person, address, contact and death events')[lang],L('مخطط / يحتاج API معتمد','Planned / requires approved API')[lang]],
      [t('faraidSource'),L('الفريضة وبيانات المتوفى والورثة والصفات','Inheritance certificate, deceased and heirs')[lang],L('مخطط / يحتاج عقد بيانات','Planned / requires data contract')[lang]],
      [t('courtSource'),L('الأحكام والقرارات والقضايا والأطراف المعينة','Judgments, decisions, cases and appointed parties')[lang],L('مخطط','Planned')[lang]],
      [t('prisonSource'),L('مرجع السجين وبداية ونهاية السجن','Prisoner reference and imprisonment dates')[lang],L('مخطط','Planned')[lang]],
      [L('بوابة الجهات المالية','Financial Entity Gateway')[lang],L('إرسال التعاميم واستلام الردود','Send circulars and receive replies')[lang],L('مخطط','Planned')[lang]]
    ];
    return `${pageHeader(t('settingsTitle'),t('settingsIntro'))}${panel(L('تكاملات ومصادر البيانات','Integrations & Data Sources')[lang],L('النموذج يوضح المصدر المتوقع ولا يدعي وجود ربط فعلي','The prototype shows intended sources and does not claim live integration')[lang],table([t('source'),L('البيانات','Data')[lang],L('الحالة','Status')[lang]],integrations))}${panel(L('قواعد النظام المركزية','Central System Rules')[lang],'',`<div class="check-list"><div class="check-row"><span>1</span><b>${esc(L('التحقق من الرقم الشخصي والتواريخ ومنع تاريخ وفاة مستقبلي.','Validate personal IDs and dates, including future death dates.')[lang])}</b></div><div class="check-row"><span>2</span><b>${esc(L('منع تكرار الملف حسب نوعه والشخص والمرجع القانوني.','Prevent duplicate files by type, person and legal reference.')[lang])}</b></div><div class="check-row"><span>3</span><b>${esc(L('نسبة الاكتمال مشتقة من نموذج أوزان مختلف لكل نوع ملف.','Completeness is derived from a type-specific weighted model.')[lang])}</b></div><div class="check-row"><span>4</span><b>${esc(L('التنبيهات لها تعريف ودورة حياة ومفتاح منع تكرار منفصل.','Alerts have definitions, lifecycle and deduplication keys.')[lang])}</b></div><div class="check-row"><span>5</span><b>${esc(L('الأصل سجل مركزي واحد؛ العقارات وحدة فرعية متخصصة تقرأ منه.','An asset is one central record; the property module reads from it.')[lang])}</b></div></div>`)}`;
  }

  function eventIcon(type) { return ({death:'✝',faraid:'§',open:'🗂',decision:'⚖',guardianship:'◇',review:'✓',birth:'●',link:'↗',judgment:'⚖',prisonStart:'▥',prisonEnd:'⌛',absence:'⌁'}[type]||'•'); }

  function fileProfileHeader(file) {
    const p=personById(file.subjectId),c=completenessModel(file);
    return `<div class="profile-head"><div class="profile-title"><div class="profile-avatar">${typeIcon(file.type)}</div><div><h2>${esc(loc(p.name))}</h2><p>${convertDigits(file.id)} · ${fileTypeLabel(file.type)}</p><div>${statusPill(legalStatusLabel(file.legalStatus),file.legalStatus)} ${statusPill(operationalStatusLabel(file.operationalStatus),file.operationalStatus)}</div></div></div><div class="profile-actions">${button(t('approveAssign'),'btn-gold',`data-action="approve-assign" data-id="${file.id}"`)}${button(t('issueCircular'),'btn-soft',`data-action="issue-circular" data-id="${file.id}"`)}${button(t('addAsset'),'btn-primary',`data-action="new-asset" data-file="${file.id}"`)}${button(t('printSummary'),'','data-action="print-file"')}</div></div><div class="metric-strip"><div class="metric-mini"><span>${t('legalStatus')}</span><b>${legalStatusLabel(file.legalStatus)}</b></div><div class="metric-mini"><span>${t('operationalStatus')}</span><b>${operationalStatusLabel(file.operationalStatus)}</b></div><div class="metric-mini"><span>${t('assignment')}</span><b>${esc(fileAssignmentLabel(file))}</b></div><div class="metric-mini"><span>${t('completeness')}</span><b>${numberFmt(c.score)}%</b></div></div>`;
  }

  function fileTabs(file) {
    const tabs=[['overview','overview'],['parties','parties'],['events','legalEvents'],['documents','documents'],['circulars','circulars'],['assets','assets'],['accounts','accounts'],['work','requestsWork'],['audit','auditTrail']];
    return `<div class="tabs">${tabs.map(([id,key])=>`<button class="tab-btn ${activeFileTab===id?'active':''}" data-action="file-tab" data-id="${file.id}" data-tab="${id}">${t(key)}</button>`).join('')}</div>`;
  }

  function fileOverviewHtml(file) {
    const p=personById(file.subjectId),c=completenessModel(file),semantic=file.events.find(e=>['death','guardianship','birth','prisonStart','absence','judgment','decision'].includes(e.type));
    const base=`<div class="detail-grid">${detailItem(t('fileNo'),`<span class="mono">${convertDigits(file.id)}</span>`)}${detailItem(t('fileType'),fileTypeLabel(file.type))}${detailItem(t('legalReference'),`<span class="mono">${convertDigits(file.legalRef||'—')}</span>`,loc(sourceLabels[sourceForType(file.type)]))}${detailItem(t('openedDate'),dateFmt(file.opened))}${detailItem(t('fullName'),esc(loc(p.name)),loc(sourceLabels.iga))}${detailItem(t('personalId'),convertDigits(p.id),loc(sourceLabels.iga))}${detailItem(t('nationality'),esc(loc(p.nationality)),loc(sourceLabels.iga))}${detailItem(t('maritalStatus'),esc(loc(p.maritalStatus)),loc(sourceLabels.iga))}${semantic?detailItem(loc(semantic.label),dateFmt(semantic.date),loc(semantic.source)):''}${detailItem(t('address'),esc(loc(p.address)),loc(sourceLabels.iga))}${detailItem(t('mobile'),convertDigits(p.mobile),loc(sourceLabels.iga))}${detailItem(t('responsibleUnit'),esc(loc(file.responsibleUnit)))}${detailItem(t('assignment'),esc(fileAssignmentLabel(file)))}</div>`;
    const completeness=`<div class="completeness-wrap"><div class="progress-ring" style="--value:${c.score}"><strong>${numberFmt(c.score)}%</strong><span>${t('completeness')}</span></div><div class="weight-list">${c.rows.map(r=>`<div class="weight-row"><span>${r.ok?'✓':'○'}</span><b>${esc(loc(r.key))}</b><em>${numberFmt(r.weight)}%</em></div>`).join('')}<div class="help-note">${t('calculatedMetric')}</div></div></div>`;
    let special='';
    if(file.type==='estateMuslim') special=`${panel(L('البيانات التجريبية للتركة','Estate Prototype Data')[lang],'',`<div class="metric-strip"><div class="metric-mini"><span>${L('عدد الورثة','Number of Heirs')[lang]}</span><b>${numberFmt(file.parties.filter(x=>x.group==='heirs').length)}</b></div><div class="metric-mini"><span>${L('العقارات المسجلة','Registered Properties')[lang]}</span><b>${numberFmt(assetsForFile(file.id).filter(a=>a.category==='realEstate').length)}</b></div><div class="metric-mini"><span>${t('monthlyIncome')}</span><b>${money(800)}</b></div><div class="metric-mini"><span>${t('annualIncome')}</span><b>${money(9600)}</b></div></div><div class="help-note warning-note">${t('equalDistributionNote')}</div>`)}`;
    if(file.type==='interdicted'&&file.financialProfile){const x=file.financialProfile;special=`${panel(L('البيانات المالية للمحجور عليه','Interdicted Person Financial Data')[lang],'',`<div class="detail-grid">${detailItem(t('monthlyPension'),money(x.monthlyPension))}${detailItem(t('modelBalance'),money(x.modelBalance))}${detailItem(t('monthlyAllowance'),money(x.monthlyAllowance))}${detailItem(t('monthlySurplus'),money(x.monthlySurplus))}${detailItem(t('annualPension'),money(x.annualPension))}${detailItem(t('annualAllowance'),money(x.annualAllowance))}${detailItem(t('annualSurplus'),money(x.annualSurplus))}</div>`)}`;}
    return `${panel(t('overview'),L('لا يوجد حقل تاريخ عام؛ كل تاريخ مرتبط بحدث قانوني محدد','No generic date field; each date is linked to a defined legal event')[lang],base)}${panel(t('completenessMethod'),'',completeness)}${special}${file.notes?`<div class="help-note">${esc(loc(file.notes))}</div>`:''}`;
  }

  function filePartiesHtml(file) {
    const groups=[['heirs','heirs'],['related','relatedParties'],['appointed','appointedParties']];
    const html=groups.map(([group,key])=>{const list=file.parties.filter(p=>p.group===group);if(!list.length)return'';return `<section class="party-groups"><div class="group-label"><h3>${t(key)}</h3><span class="badge">${numberFmt(list.length)}</span></div><div class="party-card-grid">${list.map(pr=>{const p=personById(pr.personId),bal=pr.accountId?accountBalance(pr.accountId):null;return `<article class="party-card"><div class="party-card-head"><div><strong>${esc(loc(p.name))}</strong><span>${convertDigits(p.id)}</span></div><span class="chip source">${esc(loc(pr.role))}</span></div><div class="detail-grid"><div class="detail-item"><span>${t('relation')}</span><strong>${esc(loc(pr.relation))}</strong></div><div class="detail-item"><span>${t('age')}</span><strong>${numberFmt(ageAt(p))}</strong></div><div class="detail-item"><span>${t('nationality')}</span><strong>${esc(loc(p.nationality))}</strong></div>${pr.share!=null?`<div class="detail-item"><span>${t('ownershipPercentage')}</span><strong>${numberFmt(pr.share)}%</strong></div>`:''}</div><div class="source-line"><span class="chip source">${t('partySource')}</span>${esc(loc(sourceLabels.iga))}</div>${pr.accountId?`<div class="party-balance"><div><span>${t('currentBalance')}</span><strong>${money(bal)}</strong></div>${button(t('balanceDetails'),'btn-sm btn-primary',`data-action="statement" data-id="${pr.accountId}"`)}</div>`:''}</article>`;}).join('')}</div></section>`;}).join('');
    return `${html||`<div class="empty-state"><span>👥</span><b>${t('noData')}</b></div>`}<div class="help-note">${esc(L('الشخص محفوظ مرة واحدة في سجل الأشخاص، بينما الصفة والعلاقة تحفظ في علاقة الشخص بالملف ويمكن أن تتعدد بين الملفات.','A person is stored once in the person registry; role and relationship are stored on the person-file relationship and may vary by file.')[lang])}</div>`;
  }

  function fileEventsHtml(file) {
    return `<div class="timeline">${file.events.map(e=>`<div class="timeline-item"><div class="timeline-dot">${eventIcon(e.type)}</div><div><strong>${esc(loc(e.label))}</strong><span>${dateFmt(e.date)}</span><small>${esc(loc(e.source))}</small></div></div>`).join('')}</div>`;
  }

  function fileDocumentsHtml(file) {
    return `<div class="document-grid">${file.documents.map(d=>`<article class="document-card"><div class="document-icon">▤</div><div><strong>${esc(documentLabel(d))}</strong><small>${esc(loc(d.source))}</small></div>${d.status==='verified'?`<span class="chip success">${t('verified')}</span>`:d.status==='uploaded'?`<span class="chip source">${t('uploaded')}</span>`:`<span class="chip danger">${t('missing')}</span>`}</article>`).join('')}</div><div class="help-note">${esc(L('المستندات منفصلة عن التكليف. المستندات المطلوبة تتغير حسب نوع الملف.','Documents are separate from assignment. Required documents vary by file type.')[lang])}</div>`;
  }

  function fileCircularsHtml(file) {
    const rows=file.circulars.map(c=>[convertDigits(c.id),esc(loc(c.entity)),dateFmt(c.sent),c.reply?dateFmt(c.reply):'—',c.status==='replied'?`<span class="chip success">${L('ورد الرد','Replied')[lang]}</span>`:`<span class="chip warning">${L('بانتظار الرد','Awaiting Reply')[lang]}</span>`,esc(loc(c.summary)),c.status==='replied'?button(t('addFromCircular'),'btn-sm btn-primary',`data-action="new-asset" data-file="${file.id}"`):'—']);
    return `${table([L('رقم التعميم','Circular No.')[lang],L('الجهة','Entity')[lang],L('تاريخ الإرسال','Sent Date')[lang],L('تاريخ الرد','Reply Date')[lang],t('documentStatus'),L('ملخص الرد','Reply Summary')[lang],t('action')],rows)}<div class="help-note">${t('assetsAddedLater')}</div>`;
  }

  function fileAssetsHtml(file) {
    const list=assetsForFile(file.id); const rows=list.map(a=>[convertDigits(a.id),assetCategoryLabel(a.category),esc(loc(a.subtype)),esc(loc(a.description)),money(a.estimatedValue),confidenceLabel(a.confidence),button(t('viewAsset'),'btn-sm',`data-action="open-asset" data-id="${a.id}"`)]);
    return `${table([t('assetNo'),t('mainClassification'),t('subClassification'),t('description'),t('estimatedValue'),t('confidenceLevel'),t('action')],rows)}<div class="help-note">${t('singleSourceNote')}</div>`;
  }

  function fileAccountsHtml(file) {
    const accounts=subAccounts.filter(a=>a.fileId===file.id); const rows=accounts.map(a=>{const owner=personById(a.ownerId),parent=generalAccounts.find(g=>g.code===a.parent);return[convertDigits(a.id),esc(loc(owner.name)),parent?t(parent.nameKey):a.parent,money(accountBalance(a.id)),button(t('balanceDetails'),'btn-sm btn-primary',`data-action="statement" data-id="${a.id}"`)];});
    return table([t('accountCode'),t('accountOwner'),t('parentAccount'),t('currentBalance'),t('action')],rows);
  }

  function fileWorkHtml(file) {
    const items=workItems.filter(w=>w.related?.id===file.id),al=alerts.filter(a=>a.related?.id===file.id&&a.status!=='resolved');
    return `<div class="two-col">${panel(t('workInbox'),'',`<div class="work-list">${items.length?items.map(w=>`<article class="work-card"><div class="work-icon">✓</div><div><strong>${esc(loc(w.type))}</strong><p>${esc(loc(w.action))}</p><div class="work-meta"><span>${esc(loc(w.stage))}</span><span>SLA ${convertDigits(w.sla)}</span></div></div></article>`).join(''):`<div class="empty-state"><b>${t('noData')}</b></div>`}</div>`)}${panel(t('workAlerts'),'',`<div class="alert-list">${al.length?al.map(a=>`<article class="alert-card"><div class="alert-icon">${a.icon}</div><div><strong>${esc(loc(a.title))}</strong><p>${esc(loc(a.description))}</p></div>${button(t('details'),'btn-sm',`data-action="open-alert" data-id="${a.id}"`)}</article>`).join(''):`<div class="empty-state"><b>${t('noData')}</b></div>`}</div>`)}</div>`;
  }

  function fileAuditHtml(file) {
    const rows=(file.audit||[]).map(a=>[dateFmt(a.date),esc(loc(a.user)),esc(loc(a.action))]);
    return table([t('transactionDate'),L('المستخدم','User')[lang],L('الإجراء','Action')[lang]],rows);
  }

  function fileTabHtml(file,tab) {
    if(tab==='parties')return filePartiesHtml(file);
    if(tab==='events')return fileEventsHtml(file);
    if(tab==='documents')return fileDocumentsHtml(file);
    if(tab==='circulars')return fileCircularsHtml(file);
    if(tab==='assets')return fileAssetsHtml(file);
    if(tab==='accounts')return fileAccountsHtml(file);
    if(tab==='work')return fileWorkHtml(file);
    if(tab==='audit')return fileAuditHtml(file);
    return fileOverviewHtml(file);
  }

  function openFile(id,tab='overview') {
    const file=fileById(id); if(!file)return;
    activeFileTab=tab;
    const body=`${fileProfileHeader(file)}${fileTabs(file)}<div id="fileTabContent">${fileTabHtml(file,tab)}</div>`;
    openDrawer(t('fileDetails'),`${file.id} · ${fileTypeLabel(file.type)}`,body);
  }

  function openApproveAssign(fileId) {
    const file=fileById(fileId);if(!file)return;
    const checked=file.legalStatus==='active'?'checked':'';
    const body=`<form id="approveAssignForm" class="stack"><div class="help-note">${esc(L('تجمع هذه الشاشة قرار الاعتماد والمخاطبات المالية والتكليف، بينما تظل المستندات في تبويب مستقل.','This screen combines approval, financial circular authorization and assignment, while documents remain in a separate tab.')[lang])}</div><div class="check-list"><label class="check-row"><input id="approveFileCheck" type="checkbox" ${checked}><b>${t('fileApproval')}</b></label><label class="check-row"><input id="approveBankCheck" type="checkbox"><b>${t('bankCircularApproval')}</b></label></div><div class="form-grid"><label class="field"><span>${t('assignmentMode')}</span><select id="assignMode"><option value="department" ${file.assignment?.mode==='department'?'selected':''}>${t('assignToDepartment')}</option><option value="employee" ${file.assignment?.mode==='employee'?'selected':''}>${t('assignToEmployee')}</option></select></label><label class="field"><span>${t('department')}</span><select id="assignDepartment"><option>${loc(file.responsibleUnit)}</option><option>${L('قسم فتح الملفات','File Opening Section')[lang]}</option><option>${L('قسم الحسابات','Accounts Section')[lang]}</option></select></label><label class="field"><span>${t('employee')}</span><select id="assignEmployee"><option value="">${t('unassigned')}</option><option>${L('ليلى حسن','Layla Hassan')[lang]}</option><option>${L('سارة محمد','Sara Mohammed')[lang]}</option><option>${L('محمد علي','Mohammed Ali')[lang]}</option></select></label><label class="field"><span>${t('priority')}</span><select id="assignPriority"><option value="normal">${t('normal')}</option><option value="high" ${file.assignment?.priority==='high'?'selected':''}>${t('high')}</option><option value="urgent">${t('urgent')}</option></select></label><label class="field span-2"><span>${t('approvalNotes')}</span><textarea id="approvalNotes">${esc(L('تمت مراجعة البيانات الأساسية والمستندات المتاحة.','Core data and available documents were reviewed.')[lang])}</textarea></label></div><div class="form-actions">${button(t('confirmApprove'),'btn-primary',`data-action="save-approve-assign" data-id="${file.id}"`)}${button(t('cancel'),'','data-action="close-modal"')}</div></form>`;
    openModal(t('approveAssign'),file.id,body);
  }

  function openIssueCircular(fileId) {
    const file=fileById(fileId);if(!file)return;
    const body=`<form class="stack"><div class="form-grid"><label class="field"><span>${L('الجهة المخاطبة','Recipient Entity')[lang]}</span><select id="circularEntity"><option>${L('البنوك والشركات المالية','Banks & Financial Companies')[lang]}</option><option>${L('جهاز المساحة والتسجيل العقاري','Survey & Land Registration Bureau')[lang]}</option><option>${L('وزارة الصناعة والتجارة','Ministry of Industry and Commerce')[lang]}</option><option>${L('الإدارة العامة للمرور','General Directorate of Traffic')[lang]}</option></select></label><label class="field"><span>${L('نوع التعميم','Circular Type')[lang]}</span><select id="circularType"><option>${L('حصر الأموال والأصول','Asset Identification')[lang]}</option><option>${L('تحديث بيانات أصل','Asset Data Update')[lang]}</option></select></label><label class="field span-2"><span>${t('notes')}</span><textarea id="circularNotes">${esc(L('يرجى الإفادة عن أي أموال أو أصول مسجلة باسم صاحب الملف.','Please report any funds or assets registered in the file subject’s name.')[lang])}</textarea></label></div><div class="form-actions">${button(t('confirm'),'btn-primary',`data-action="save-circular" data-id="${file.id}"`)}${button(t('cancel'),'','data-action="close-modal"')}</div></form>`;
    openModal(t('issueCircular'),file.id,body);
  }

  function newWizardState() {
    return {step:1,type:'estateMuslim',source:sourceForType('estateMuslim'),reference:'',sourceVerified:false,duplicate:null,manual:false,manualReason:'',person:null,parties:[],documents:[],legalDate:'',createdId:null};
  }

  function wizardStepsHtml() {
    const steps=[t('stepTypeSource'),t('stepLegalData'),t('stepParties'),t('stepDocuments'),t('stepReview')];
    return `<div class="wizard-progress">${steps.map((s,i)=>`<div class="wizard-step ${wizard.step===i+1?'active':wizard.step>i+1?'done':''}"><span>${wizard.step>i+1?'✓':numberFmt(i+1)}</span><b>${s}</b></div>`).join('')}</div>`;
  }

  function documentTemplateForType(type) {
    const base=[{nameKey:'identificationPapers',status:'verified',source:sourceLabels.iga,required:true},{nameKey:'fileOpeningForm',status:'missing',source:L('الموظف المختص','Case Officer'),required:true}];
    if(type==='estateMuslim')return [{nameKey:'faraidDocument',status:'verified',source:sourceLabels.faraid,required:true},{nameKey:'deathCertificate',status:'verified',source:sourceLabels.iga,required:true},...base];
    if(type==='estateNonMuslim')return [{nameKey:'deathCertificate',status:'verified',source:sourceLabels.iga,required:true},{nameKey:'courtOrder',status:'verified',source:sourceLabels.court,required:true},...base];
    if(type==='prisoner')return [{nameKey:'proofOfImprisonment',status:'verified',source:sourceLabels.prison,required:true},...base];
    if(type==='absent')return [{nameKey:'proofOfAbsence',status:'verified',source:sourceLabels.court,required:true},...base];
    return [{nameKey:'courtOrder',status:'verified',source:sourceLabels.court,required:true},...base];
  }

  function sourceLookupData(type,reference) {
    const exactEstate=reference.trim().toUpperCase()==='FRD-2024-000124';
    const exactHJ=reference.trim().toUpperCase()==='CRT-HJ-2020-0031';
    if(type==='estateMuslim'&&exactEstate)return {person:personRegistry['750123456'],parties:fileById('TRM-2024-00124').parties.map(x=>({...x})),date:'2024-01-01'};
    if(type==='interdicted'&&exactHJ)return {person:personRegistry['650789012'],parties:fileById('HJ-2020-00031').parties.map(x=>({...x})),date:'2019-12-20'};
    const demoByType={estateMuslim:{id:'880111222',name:L('حسن إبراهيم محمود','Hassan Ibrahim Mahmood'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1980-01-01',maritalStatus:L('متزوج','Married'),address:L('الرفاع - مجمع 905','Riffa - Block 905'),mobile:'37770001',email:'hassan@example.test',source:'iga'},estateNonMuslim:personRegistry['770555666'],interdicted:{id:'660111333',name:L('عبدالعزيز سالم محمد','Abdulaziz Salem Mohammed'),nationality:L('بحريني','Bahraini'),gender:'M',birthDate:'1966-01-11',maritalStatus:L('متزوج','Married'),address:L('المحرق - مجمع 210','Muharraq - Block 210'),mobile:'36660002',email:'abdulaziz@example.test',source:'iga'},minorLinked:personRegistry['080567890'],minorIndependent:personRegistry['900111222'],prisoner:personRegistry['790333444'],absent:personRegistry['810444555']};
    const person={...demoByType[type]};
    const parties=type==='estateMuslim'?[{personId:'780234567',group:'heirs',role:L('الزوجة','Wife'),relation:L('زوجة','Spouse'),share:null,accountId:null}]:[];
    return {person,parties,date:type.startsWith('estate')?'2026-07-15':type==='minorIndependent'||type==='minorLinked'?person.birthDate:type==='prisoner'?'2026-02-20':type==='absent'?'2026-03-25':'2026-01-01'};
  }

  function renderFileWizard() {
    const typeCards=['estateMuslim','estateNonMuslim','minorLinked','minorIndependent','interdicted','prisoner','absent'].map(type=>`<button class="type-card ${wizard.type===type?'selected':''}" data-action="wizard-type" data-value="${type}"><span class="type-icon">${typeIcon(type)}</span><strong>${fileTypeLabel(type)}</strong><small>${t(fileTypeHints[type])}</small></button>`).join('');
    let content='';
    if(wizard.step===1){
      content=`<div class="type-grid">${typeCards}</div><div class="divider"></div><div class="form-grid"><label class="field"><span class="required">${esc(referenceLabelForType(wizard.type))}</span><input id="wizardReference" value="${esc(wizard.reference)}" placeholder="${wizard.type==='estateMuslim'?'FRD-2024-000124':'REF-2026-00001'}"></label><label class="field"><span>${t('dataSource')}</span><input value="${esc(loc(sourceLabels[wizard.source]))}" readonly></label><div class="field span-2"><span>&nbsp;</span>${button(`↻ ${t('retrieveSource')}`,'btn-primary','data-action="wizard-lookup"')}</div></div>${wizard.sourceVerified?`<div class="source-result"><div class="source-result-head"><span class="chip success">${t('sourceVerified')}</span><b>${esc(loc(sourceLabels[wizard.source]))}</b></div><p>${esc(loc(wizard.person?.name))} · ${convertDigits(wizard.person?.id)}</p></div>`:`<div class="help-note">${t('sourcePending')} · ${esc(L('استخدم FRD-2024-000124 لإظهار فحص الملف القائم، أو أي مرجع آخر لمسودة جديدة.','Use FRD-2024-000124 to demonstrate duplicate detection, or another reference for a new draft.')[lang])}</div>`}${wizard.duplicate?`<div class="duplicate-banner"><b>${t('duplicateFound')}</b><span>${convertDigits(wizard.duplicate.id)} · ${esc(filePrimaryName(wizard.duplicate))}</span>${button(t('openExisting'),'btn-sm btn-danger',`data-action="open-existing" data-id="${wizard.duplicate.id}"`)}</div>`:wizard.sourceVerified?`<div class="help-note success-note">${t('noDuplicate')}</div>`:''}`;
    }
    if(wizard.step===2){
      const p=wizard.person||{}; const dateLabel=wizard.type.startsWith('estate')?t('dateOfDeath'):wizard.type==='interdicted'?t('decisionDate'):wizard.type==='prisoner'?t('prisonStart'):wizard.type==='absent'?t('absenceDate'):t('birthDate');
      content=`<div class="source-result"><div class="source-result-head"><span class="chip source">${t('dataSource')}</span><b>${esc(loc(sourceLabels[wizard.source]))}</b></div><p>${esc(L('الحقول الأساسية مسترجعة من المصدر؛ الإدخال اليدوي يتطلب مبرراً وصلاحية.','Core fields are source-retrieved; manual entry requires authority and justification.')[lang])}</p></div><div class="form-grid"><label class="field"><span class="required">${t('personalId')}</span><input id="wizardCpr" value="${esc(p.id||'')}" ${wizard.manual?'':'readonly'} inputmode="numeric"></label><label class="field"><span class="required">${t('fullName')}</span><input id="wizardName" value="${esc(loc(p.name))}" ${wizard.manual?'':'readonly'}></label><label class="field"><span>${t('nationality')}</span><input id="wizardNationality" value="${esc(loc(p.nationality))}" ${wizard.manual?'':'readonly'}></label><label class="field"><span class="required">${dateLabel}</span><input id="wizardLegalDate" type="date" value="${esc(wizard.legalDate||'')}" ${wizard.manual?'':'readonly'}></label><label class="field"><span>${t('maritalStatus')}</span><input value="${esc(loc(p.maritalStatus))}" readonly></label><label class="field"><span>${t('mobile')}</span><input value="${esc(p.mobile||'')}" readonly></label><label class="field span-2"><span>${t('address')}</span><input value="${esc(loc(p.address))}" readonly></label></div><div class="manual-override"><label class="check-row"><input id="manualToggle" type="checkbox" ${wizard.manual?'checked':''}><b>${t('enableManual')}</b></label>${wizard.manual?`<label class="field"><span class="required">${t('overrideReason')}</span><textarea id="manualReason">${esc(wizard.manualReason)}</textarea></label>`:''}</div>`;
    }
    if(wizard.step===3){
      const groups=wizard.parties.length?wizard.parties.map(pr=>{const p=personById(pr.personId);return `<article class="party-card"><div class="party-card-head"><div><strong>${esc(loc(p.name))}</strong><span>${convertDigits(p.id)}</span></div><span class="chip source">${esc(loc(pr.role))}</span></div><div class="detail-grid"><div class="detail-item"><span>${t('relation')}</span><strong>${esc(loc(pr.relation))}</strong></div><div class="detail-item"><span>${t('age')}</span><strong>${numberFmt(ageAt(p,wizard.legalDate||today))}</strong></div><div class="detail-item"><span>${t('nationality')}</span><strong>${esc(loc(p.nationality))}</strong></div></div><div class="source-line"><span class="chip source">${t('source')}</span>${esc(loc(sourceLabels[wizard.type==='estateMuslim'?'faraid':'iga']))}</div></article>`;}).join(''):`<div class="empty-state"><span>👥</span><b>${esc(L('لا توجد أطراف مسترجعة لهذا النوع في النموذج','No source-retrieved parties for this type in the prototype')[lang])}</b></div>`;
      content=`<div class="help-note">${esc(L('في التركة المسلمة تُسترجع بيانات الورثة والصفة من الفريضة، ثم العنوان والتواصل من هيئة المعلومات.','For a Muslim estate, heir identities and roles come from the inheritance certificate, while address/contact come from IGA.')[lang])}</div><div class="party-card-grid">${groups}</div>${button(`＋ ${t('addParty')}`,'btn-soft','data-action="wizard-add-party"')}`;
    }
    if(wizard.step===4){
      content=`<div class="help-note">${esc(L('المستندات مرحلة مستقلة. يمكن رفع الناقص تجريبياً قبل المراجعة.','Documents are a separate stage. Missing documents can be uploaded in this prototype before review.')[lang])}</div><div class="document-grid">${wizard.documents.map((d,i)=>`<article class="document-card"><div class="document-icon">▤</div><div><strong>${documentLabel(d)}</strong><small>${esc(loc(d.source))}</small></div>${d.status==='missing'?button(t('uploadPrototype'),'btn-sm btn-primary',`data-action="wizard-upload" data-index="${i}"`):`<span class="chip success">${d.status==='verified'?t('verified'):t('uploaded')}</span>`}</article>`).join('')}</div>`;
    }
    if(wizard.step===5){
      const p=wizard.person||{};
      content=`<div class="review-sections"><section class="review-section"><h3>${t('stepTypeSource')}</h3><div class="review-body">${detailItem(t('fileType'),fileTypeLabel(wizard.type))}${detailItem(referenceLabelForType(wizard.type),convertDigits(wizard.reference),loc(sourceLabels[wizard.source]))}</div></section><section class="review-section"><h3>${t('stepLegalData')}</h3><div class="review-body">${detailItem(t('fullName'),esc(loc(p.name)))}${detailItem(t('personalId'),convertDigits(p.id))}${detailItem(t('nationality'),esc(loc(p.nationality)))}${detailItem(wizard.type.startsWith('estate')?t('dateOfDeath'):wizard.type==='interdicted'?t('decisionDate'):wizard.type==='prisoner'?t('prisonStart'):wizard.type==='absent'?t('absenceDate'):t('birthDate'),dateFmt(wizard.legalDate))}${detailItem(t('address'),esc(loc(p.address)))}</div></section><section class="review-section"><h3>${t('parties')}</h3><div class="review-body">${wizard.parties.length?wizard.parties.map(pr=>{const x=personById(pr.personId);return detailItem(esc(loc(pr.role)),`${esc(loc(x.name))} · ${convertDigits(x.id)}`)}).join(''):`<span class="muted">${t('noData')}</span>`}</div></section><section class="review-section"><h3>${t('documents')}</h3><div class="review-body">${wizard.documents.map(d=>detailItem(documentLabel(d),d.status==='missing'?t('missing'):d.status==='verified'?t('verified'):t('uploaded'),loc(d.source))).join('')}</div></section><section class="review-section"><h3>${t('assets')}</h3><div class="review-body"><div class="help-note">${t('assetsAddedLater')}</div></div></section></div><div class="help-note">${t('reviewAllData')}</div>`;
    }
    const nextDisabled=wizard.step===1&&(!wizard.sourceVerified||wizard.duplicate);
    const footer=`<div class="wizard-actions"><button class="btn btn-danger" data-action="cancel-wizard">${t('cancel')}</button><div class="page-actions">${wizard.step>1?button(`‹ ${t('previous')}`,'',`data-action="wizard-prev"`):''}${wizard.step<5?button(`${t('next')} ›`,'btn-primary',`data-action="wizard-next" ${nextDisabled?'disabled':''}`):button(t('createDraft'),'btn-primary','data-action="wizard-create"')}</div></div>`;
    $('#modalBody').innerHTML=`${wizardStepsHtml()}<div class="wizard-body">${content}</div>${footer}`;
    localizeNumbersInDom($('#modalBody'));
  }

  function openFileWizard() {
    wizard=newWizardState();
    openModal(t('newFileTitle'),t('newFileHint'),'<div></div>',t('confirmCancelWizard'));
    renderFileWizard();
  }

  function lookupWizardSource() {
    wizard.reference=$('#wizardReference')?.value.trim()||'';
    if(!wizard.reference){toast(L('أدخل مرجع المصدر أولاً','Enter a source reference first')[lang]);return;}
    const data=sourceLookupData(wizard.type,wizard.reference);
    wizard.person=data.person; wizard.parties=data.parties; wizard.legalDate=data.date; wizard.sourceVerified=true;
    if(!personRegistry[data.person.id])personRegistry[data.person.id]=data.person;
    wizard.documents=documentTemplateForType(wizard.type).map((d,i)=>({id:`W-D${i+1}`,...d}));
    wizard.duplicate=files.find(f=>f.type===wizard.type&&f.subjectId===data.person.id)||null;
    renderFileWizard();
  }

  function validateWizardStep() {
    if(wizard.step===1)return wizard.sourceVerified&&!wizard.duplicate;
    if(wizard.step===2){
      const cpr=convertDigits($('#wizardCpr')?.value||'','en');
      if(!/^\d{9}$/.test(cpr)){toast(t('invalidCpr'));return false;}
      const d=$('#wizardLegalDate')?.value||wizard.legalDate;
      if(wizard.type.startsWith('estate')&&d>today){toast(t('futureDateError'));return false;}
      if(wizard.manual){wizard.manualReason=$('#manualReason')?.value.trim()||'';if(!wizard.manualReason){toast(t('overrideReason'));return false;}}
      wizard.legalDate=d;return true;
    }
    if(wizard.step===4&&wizard.documents.some(d=>d.required&&d.status==='missing')){toast(L('أكمل رفع المستندات الإلزامية','Upload all required documents')[lang]);return false;}
    return true;
  }

  function createWizardFile() {
    if(!validateWizardStep())return;
    const prefixes={estateMuslim:'TRM',estateNonMuslim:'TRN',minorLinked:'MN',minorIndependent:'MI',interdicted:'HJ',prisoner:'PR',absent:'AB'};
    const id=`${prefixes[wizard.type]}-2026-${String(files.filter(f=>f.type===wizard.type).length+101).padStart(5,'0')}`;
    const eventType=wizard.type.startsWith('estate')?'death':wizard.type==='interdicted'?'decision':wizard.type==='prisoner'?'prisonStart':wizard.type==='absent'?'absence':'birth';
    const eventLabel=wizard.type.startsWith('estate')?L('تاريخ الوفاة','Date of Death'):wizard.type==='interdicted'?L('تاريخ الحكم','Ruling Date'):wizard.type==='prisoner'?L('تاريخ بدء السجن','Imprisonment Start Date'):wizard.type==='absent'?L('تاريخ ثبوت الغياب','Date Absence Established'):L('تاريخ الميلاد','Date of Birth');
    files.unshift({id,type:wizard.type,legalStatus:'draft',operationalStatus:'dataCollection',opened:today,subjectId:wizard.person.id,legalRef:wizard.reference,responsibleUnit:wizard.type==='interdicted'?L('قسم المحجور عليهم','Interdicted Persons Section'):wizard.type.startsWith('estate')?L('قسم التركات','Estates Section'):L('قسم الحالات الخاصة','Special Cases Section'),assignment:{mode:'department',department:wizard.type.startsWith('estate')?L('قسم التركات','Estates Section'):L('قائمة عمل القسم','Department Work Queue'),officer:null,priority:'normal'},events:[{type:eventType,label:eventLabel,date:wizard.legalDate,source:sourceLabels[wizard.source]},{type:'open',label:L('إنشاء مسودة الملف','File Draft Created'),date:today,source:L('نظام شئون القاصرين','Minors Affairs System')}],parties:wizard.parties.map(x=>({...x})),documents:wizard.documents.map((x,i)=>({...x,id:`${id}-D${i+1}`})),circulars:[],notes:L('تم إنشاؤه من معالج النموذج الاحترافي. لا توجد أصول حتى اعتماد الملف وورود الردود.','Created from the professional prototype wizard. No assets exist until approval and source replies.'),audit:[{date:today,user:L('نواف محمد','Nawaf Mohammed'),action:L('إنشاء الملف كمسودة بعد فحص المصدر والتكرار','Created file as draft after source and duplicate checks')} ]});
    modalGuard=null;closeModal(true);toast(t('fileCreated'));currentPage='files';renderPage('files');setTimeout(()=>openFile(id),150);
  }

  function openPartyAdder() {
    openModal(t('addParty'),L('إضافة علاقة بين سجل شخص موحد والملف','Add a relationship between a unified person record and the file')[lang],`<div class="form-grid"><label class="field"><span>${t('personalId')}</span><input id="partyLookupCpr" inputmode="numeric" placeholder="780234567"></label><label class="field"><span>${t('role')}</span><input id="partyRole" value="${L('طرف ذو علاقة','Related Party')[lang]}"></label><label class="field"><span>${t('relation')}</span><input id="partyRelation" value="${L('صلة أخرى','Other Relation')[lang]}"></label><label class="field"><span>${L('مجموعة العلاقة','Relationship Group')[lang]}</span><select id="partyGroup"><option value="related">${t('relatedParties')}</option><option value="appointed">${t('appointedParties')}</option><option value="heirs">${t('heirs')}</option></select></label></div><div class="form-actions">${button(t('confirm'),'btn-primary','data-action="save-wizard-party"')}${button(t('cancel'),'','data-action="return-wizard"')}</div>`,null);
  }

  function openAssetWizard(fileId='') {
    const eligible=files.filter(f=>f.legalStatus==='active'&&f.circulars.some(c=>c.status==='replied'));
    assetWizard={fileId:fileId&&eligible.some(f=>f.id===fileId)?fileId:(eligible[0]?.id||''),category:'realEstate'};
    const fileOptions=eligible.map(f=>`<option value="${f.id}" ${assetWizard.fileId===f.id?'selected':''}>${convertDigits(f.id)} · ${esc(filePrimaryName(f))}</option>`).join('');
    if(!eligible.length){openModal(t('registerAsset'),'',`<div class="empty-state"><span>⚠</span><b>${t('cannotAddAsset')}</b></div>`);return;}
    const selected=fileById(assetWizard.fileId),replies=selected.circulars.filter(c=>c.status==='replied');
    const body=`<form id="assetForm" class="stack"><div class="help-note">${t('cannotAddAsset')} ${t('singleSourceNote')}</div><div class="form-grid three"><label class="field"><span class="required">${t('fileNo')}</span><select id="assetFile">${fileOptions}</select></label><label class="field"><span class="required">${t('dataProvenance')}</span><select id="assetSource">${replies.map(c=>`<option value="${c.id}">${convertDigits(c.id)} · ${esc(loc(c.entity))}</option>`).join('')}</select></label><label class="field"><span>${t('registrationDate')}</span><input value="${today}" readonly></label><label class="field"><span class="required">${t('mainClassification')}</span><select id="assetCategory">${assetCategories.map(c=>`<option value="${c.id}">${t(c.key)}</option>`).join('')}</select></label><label class="field"><span class="required">${t('subClassification')}</span><select id="assetSubtype">${assetCategories[0].subtypes.map(s=>`<option>${esc(loc(s))}</option>`).join('')}</select></label><label class="field"><span class="required">${t('managementEntity')}</span><select id="assetManagement"><option>${L('تحت إدارة القسم','Managed by Section')[lang]}</option><option>${L('تحت إدارة طرف','Managed by Third Party')[lang]}</option><option>${L('تحت الإسناد الخارجي','Outsourced')[lang]}</option></select></label><label class="field"><span class="required">${t('guardianshipCapacity')}</span><select id="assetCapacity"><option>${L('تولي إداري','Administrative Guardianship')[lang]}</option><option>${L('تولي وصاية','Guardianship Administration')[lang]}</option><option>${L('تولي مساند','Support Administration')[lang]}</option></select></label><label class="field"><span>${t('assetRights')}</span><input id="assetRights" placeholder="${L('حق انتفاع / رهن / حجز / نزاع','Usufruct / Mortgage / Attachment / Dispute')[lang]}"></label><label class="field"><span class="required">${t('ownershipType')}</span><select id="assetOwnership"><option>${L('ملكية فردية','Sole Ownership')[lang]}</option><option>${L('ملكية مشتركة','Shared Ownership')[lang]}</option></select></label><label class="field"><span class="required">${t('ownershipPercentage')}</span><input id="assetPercentage" type="number" min="0.01" max="100" step="0.01" value="100"></label><label class="field"><span>${t('estimatedValue')}</span><input id="assetValue" type="number" min="0" step="0.001" value="0"></label><label class="field"><span class="required">${t('assetStatus')}</span><select id="assetStatus"><option value="active">${t('active')}</option><option value="underProcedure">${t('underProcedure')}</option></select></label><label class="field"><span>${t('relatedParty')}</span><select id="assetParty"><option value="">—</option>${selected.parties.map(p=>{const x=personById(p.personId);return`<option value="${x.id}">${esc(loc(x.name))} · ${esc(loc(p.role))}</option>`}).join('')}</select></label><label class="field"><span class="required">${t('confidenceLevel')}</span><select id="assetConfidence"><option value="high">${t('highConfidence')}</option><option value="medium">${t('mediumConfidence')}</option><option value="low">${t('lowConfidence')}</option></select></label><label class="field"><span class="required">${t('hasRevenue')}</span><select id="assetRevenue"><option value="false">${t('no')}</option><option value="true">${t('yes')}</option></select></label><label class="field"><span class="required">${t('hasExpenses')}</span><select id="assetExpense"><option value="false">${t('no')}</option><option value="true">${t('yes')}</option></select></label><label class="field span-2"><span class="required">${t('description')}</span><textarea id="assetDescription"></textarea></label><label class="field span-2"><span class="required">${t('assetDocuments')}</span><input id="assetDocs" value="${L('مستند المصدر، مستند إثبات الملكية','Source document, ownership evidence')[lang]}"></label></div><div class="form-actions">${button(t('confirm'),'btn-primary','data-action="save-asset"')}${button(t('cancel'),'','data-action="close-modal"')}</div></form>`;
    openModal(t('registerAsset'),t('addFromCircular'),body);
  }

  function saveAsset() {
    const fileId=$('#assetFile').value,file=fileById(fileId),cat=$('#assetCategory').value,sourceId=$('#assetSource').value,circular=file.circulars.find(c=>c.id===sourceId);
    const id=`AST-${String(assets.length+1).padStart(4,'0')}`;
    const a={id,fileId,registrationDate:today,category:cat,subtype:L($('#assetSubtype').value,$('#assetSubtype').value),managementEntity:L($('#assetManagement').value,$('#assetManagement').value),guardianshipCapacity:L($('#assetCapacity').value,$('#assetCapacity').value),rights:L($('#assetRights').value||L('لا يوجد قيد مسجل','No registered restriction')[lang],$('#assetRights').value||L('لا يوجد قيد مسجل','No registered restriction')[lang]),ownershipType:L($('#assetOwnership').value,$('#assetOwnership').value),ownershipPercentage:Number($('#assetPercentage').value||0),estimatedValue:Number($('#assetValue').value||0),status:$('#assetStatus').value,relatedParty:$('#assetParty').value||file.subjectId,documents:$('#assetDocs').value.split(',').map(x=>L(x.trim(),x.trim())),confidence:$('#assetConfidence').value,hasRevenue:$('#assetRevenue').value==='true',hasExpenses:$('#assetExpense').value==='true',source:L(`${loc(circular.entity)} - ${circular.id}`,`${loc(circular.entity)} - ${circular.id}`),sourceType:'external',description:L($('#assetDescription').value,$('#assetDescription').value),revenueRecords:[],expenseRecords:[],alerts:[]};
    assets.push(a);file.operationalStatus='assetStage';file.audit.push({date:today,user:L('نواف محمد','Nawaf Mohammed'),action:L(`تسجيل الأصل المركزي ${id} من رد التعميم ${sourceId}`,`Registered central asset ${id} from circular reply ${sourceId}`)});closeModal(true);toast(t('assetCreated'));renderPage(currentPage);setTimeout(()=>openAsset(id),150);
  }

  function openGlobalSearch() {
    openModal(t('globalSearch'),L('البحث يشمل الملفات والأشخاص وعلاقاتهم والأصول','Search covers files, people, relationships and assets')[lang],`<label class="search-control"><span>⌕</span><input id="globalSearchInput" autofocus placeholder="${esc(t('globalSearch'))}"></label><div id="globalSearchResults"><div class="empty-state"><span>⌕</span><b>${esc(L('ابدأ الكتابة لعرض النتائج','Start typing to view results')[lang])}</b></div></div>`);
    setTimeout(()=>$('#globalSearchInput')?.focus(),30);
  }

  function updateGlobalSearch(query) {
    const q=query.trim().toLowerCase();const out=$('#globalSearchResults');if(!out)return;
    if(q.length<2){out.innerHTML=`<div class="empty-state"><span>⌕</span><b>${esc(L('اكتب حرفين على الأقل','Enter at least two characters')[lang])}</b></div>`;return;}
    const f=files.filter(x=>fileSearchText(x).includes(q)).slice(0,5);
    const people=Object.values(personRegistry).filter(p=>`${p.id} ${loc(p.name)}`.toLowerCase().includes(q)).slice(0,5);
    const aa=assets.filter(a=>`${a.id} ${a.fileId} ${loc(a.description)} ${loc(a.subtype)}`.toLowerCase().includes(q)).slice(0,5);
    out.innerHTML=`<div class="stack"><div class="section-title"><h3>${t('fileCenter')}</h3></div>${f.map(x=>`<button class="source-result" data-action="open-file" data-id="${x.id}"><div class="source-result-head"><b>${convertDigits(x.id)}</b><span class="chip source">${fileTypeLabel(x.type)}</span></div><p>${esc(filePrimaryName(x))}</p></button>`).join('')||`<small>${t('noData')}</small>`}<div class="section-title"><h3>${t('personRecord')}</h3></div>${people.map(p=>{const linked=files.filter(x=>x.subjectId===p.id||x.parties.some(pr=>pr.personId===p.id));return`<div class="source-result"><div class="source-result-head"><b>${esc(loc(p.name))}</b><span>${convertDigits(p.id)}</span></div><p>${esc(loc(p.address))}</p><div class="page-actions">${linked.map(x=>button(convertDigits(x.id),'btn-sm',`data-action="open-file" data-id="${x.id}"`)).join('')}</div></div>`;}).join('')||`<small>${t('noData')}</small>`}<div class="section-title"><h3>${t('assetCenter')}</h3></div>${aa.map(a=>`<button class="source-result" data-action="open-asset" data-id="${a.id}"><div class="source-result-head"><b>${convertDigits(a.id)}</b><span class="chip source">${assetCategoryLabel(a.category)}</span></div><p>${esc(loc(a.description))}</p></button>`).join('')||`<small>${t('noData')}</small>`}</div>`;
    localizeNumbersInDom(out);
  }

  function renderPage(page) {
    currentPage=page||'dashboard';
    const renderers={dashboard:renderDashboard,files:renderFiles,inbox:renderInbox,alerts:renderAlerts,assets:renderAssets,properties:renderProperties,ledger:renderLedger,reports:renderReports,users:renderUsers,settings:renderSettings};
    const content=renderers[currentPage]?renderers[currentPage]():renderDashboard();
    $('#pageContent').innerHTML=content;
    $$('.nav-link[data-page]').forEach(x=>x.classList.toggle('active',x.dataset.page===currentPage));
    const titleKey={dashboard:'dashboard',files:'fileCenter',inbox:'workInbox',alerts:'workAlerts',assets:'assetCenter',properties:'propertyManagement',ledger:'generalLedger',reports:'reportsMonitoring',users:'usersPermissions',settings:'settingsIntegrations'}[currentPage]||'dashboard';
    $('#breadcrumbTitle').textContent=t(titleKey);
    document.title=`${t(titleKey)} | ${t('shortSystemName')}`;
    closeMobileNav();
    updateNavCounts();
    localizeNumbersInDom($('#pageContent'));
    window.scrollTo({top:0,behavior:'instant'});
  }

  function updateNavCounts() {
    $('#filesNavCount').textContent=numberFmt(files.length);
    $('#inboxNavCount').textContent=numberFmt(workItems.length);
    $('#alertsNavCount').textContent=numberFmt(alerts.filter(a=>a.status!=='resolved').length);
    $('#notificationCount').textContent=numberFmt(alerts.filter(a=>a.status!=='resolved').length);
  }

  function handleRelated(kind,id) {
    if(kind==='file'){closeModal(true);closeDrawer();openFile(id);return;}
    if(kind==='journal'){openJournal(id);return;}
    if(kind==='ledger'){openStatement(id);return;}
    if(kind==='newFile'){closeDrawer();openFileWizard();return;}
  }

  function bindPortal() {
    applyLanguage(lang,false);
    renderPage('dashboard');
    $('#navToggle').addEventListener('click',()=>$('#sidebar').classList.contains('mobile-open')?closeMobileNav():openMobileNav());
    $('#sidebarBackdrop').addEventListener('click',closeMobileNav);
    $('#drawerClose').addEventListener('click',closeDrawer);
    $('#drawerBackdrop').addEventListener('click',closeDrawer);
    $('#modalClose').addEventListener('click',()=>closeModal(false));
    $('#modal').addEventListener('click',e=>{if(e.target===$('#modal'))closeModal(false);});
    $('#globalSearchButton').addEventListener('click',openGlobalSearch);
    $('#notificationsButton').addEventListener('click',()=>renderPage('alerts'));
    $('#logoutBtn').addEventListener('click',()=>{sessionStorage.removeItem('ma_demo_auth');window.location.href='index.html';});

    document.addEventListener('keydown',e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openGlobalSearch();}
      if(e.key==='Escape'){if($('#modal').classList.contains('open'))closeModal(false);else if($('#drawer').classList.contains('open'))closeDrawer();else closeMobileNav();}
    });

    document.addEventListener('input',e=>{
      if(e.target.id==='fileSearch'){fileSearchState.query=e.target.value;filesPage=1;$('#pageContent').innerHTML=renderFiles();localizeNumbersInDom($('#pageContent'));const x=$('#fileSearch');x?.focus();x?.setSelectionRange(x.value.length,x.value.length);}
      if(e.target.id==='alertSearch'){alertsState.query=e.target.value;$('#pageContent').innerHTML=renderAlerts();localizeNumbersInDom($('#pageContent'));const x=$('#alertSearch');x?.focus();x?.setSelectionRange(x.value.length,x.value.length);}
      if(e.target.id==='assetSearch'){assetState.query=e.target.value;$('#pageContent').innerHTML=renderAssets();localizeNumbersInDom($('#pageContent'));const x=$('#assetSearch');x?.focus();x?.setSelectionRange(x.value.length,x.value.length);}
      if(e.target.id==='globalSearchInput')updateGlobalSearch(e.target.value);
      if(e.target.id==='wizardReference'&&wizard)wizard.reference=e.target.value;
      if(e.target.id==='manualReason'&&wizard)wizard.manualReason=e.target.value;
    });

    document.addEventListener('change',e=>{
      if(e.target.id==='fileTypeFilter'){fileSearchState.type=e.target.value;filesPage=1;renderPage('files');}
      if(e.target.id==='fileLegalFilter'){fileSearchState.legal=e.target.value;filesPage=1;renderPage('files');}
      if(e.target.id==='fileOperationalFilter'){fileSearchState.operational=e.target.value;filesPage=1;renderPage('files');}
      if(e.target.id==='alertPriority'){alertsState.priority=e.target.value;renderPage('alerts');}
      if(e.target.id==='alertStatus'){alertsState.status=e.target.value;renderPage('alerts');}
      if(e.target.id==='alertType'){alertsState.type=e.target.value;renderPage('alerts');}
      if(e.target.id==='assetCategoryFilter'){assetState.category=e.target.value;renderPage('assets');}
      if(e.target.id==='manualToggle'&&wizard){wizard.manual=e.target.checked;renderFileWizard();}
      if(e.target.id==='assetCategory'){
        const cat=assetCategories.find(c=>c.id===e.target.value);const select=$('#assetSubtype');if(select)select.innerHTML=cat.subtypes.map(s=>`<option>${esc(loc(s))}</option>`).join('');
      }
      if(e.target.id==='assetFile'){
        // Reopen to refresh source replies and file parties in a clear, deterministic way.
        openAssetWizard(e.target.value);
      }
    });

    document.addEventListener('click',e=>{
      const langBtn=e.target.closest('.lang-btn');if(langBtn){closeDrawer();closeModal(true);applyLanguage(langBtn.dataset.lang,true);toast(t('languageChanged'));return;}
      const pageBtn=e.target.closest('[data-page]');if(pageBtn){renderPage(pageBtn.dataset.page);return;}
      const el=e.target.closest('[data-action]');if(!el)return;
      const action=el.dataset.action,id=el.dataset.id,value=el.dataset.value,tab=el.dataset.tab;
      if(action==='new-file'){openFileWizard();return;}
      if(action==='open-file'){closeModal(true);closeDrawer();openFile(id);return;}
      if(action==='open-alert'){openAlert(id);return;}
      if(action==='alert-status'){const a=alerts.find(x=>x.id===id);if(a){a.status=el.dataset.status;toast(t('alertResolvedToast'));openAlert(id);updateNavCounts();}return;}
      if(action==='open-related'){handleRelated(el.dataset.kind,id);return;}
      if(action==='saved-view'){fileSearchState.saved=value;filesPage=1;renderPage('files');return;}
      if(action==='clear-file-filters'){fileSearchState={query:'',type:'',legal:'',operational:'',saved:'all'};filesPage=1;renderPage('files');return;}
      if(action==='file-page'){filesPage=Number(value);renderPage('files');return;}
      if(action==='asset-category'){assetState.category=assetState.category===value?'':value;renderPage('assets');return;}
      if(action==='show-asset-fields'){openModal(t('fieldSourceMap'),L('الحقول المشتركة لجميع الأصول','Common Fields for All Assets')[lang],fieldDictionaryHtml());return;}
      if(action==='open-asset'){openAsset(id);return;}
      if(action==='asset-tab'){const a=assets.find(x=>x.id===id);if(a){$$('.tab-btn',$('#drawer')).forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));$('#assetTabContent').innerHTML=assetTabHtml(a,tab);localizeNumbersInDom($('#assetTabContent'));}return;}
      if(action==='new-asset'){openAssetWizard(el.dataset.file||'');return;}
      if(action==='save-asset'){saveAsset();return;}
      if(action==='property-tab'){propertyTab=tab;renderPage('properties');return;}
      if(action==='open-property'){openProperty(id);return;}
      if(action==='open-lease'){openLease(id);return;}
      if(action==='record-collection'){recordCollection(id);return;}
      if(action==='save-collection'){const inv=rentalInvoices.find(x=>x.id===id),amt=Number($('#collectionAmount')?.value||0);if(inv&&amt>0){inv.paid=Math.min(inv.amount,inv.paid+amt);inv.receipt=$('#collectionRef')?.value||inv.receipt;closeModal(true);toast(t('genericSaved'));renderPage('properties');}return;}
      if(action==='ledger-tab'){ledgerTab=tab;renderPage('ledger');return;}
      if(action==='show-parent-subs'){ledgerTab='subsidiary';renderPage('ledger');return;}
      if(action==='statement'){openStatement(id);return;}
      if(action==='journal'){openJournal(id);return;}
      if(action==='open-report'){openReport(id);return;}
      if(action==='run-report'){const data=reportRows(id);$('#reportOutput').innerHTML=panel(t('reportResult'),`${$('#reportFrom').value} — ${$('#reportTo').value}`,table(data.headers,data.rows));localizeNumbersInDom($('#reportOutput'));return;}
      if(action==='export-report'){exportReport(id);return;}
      if(action==='file-tab'){const f=fileById(id);if(f){activeFileTab=tab;$$('.tab-btn',$('#drawer')).forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));$('#fileTabContent').innerHTML=fileTabHtml(f,tab);localizeNumbersInDom($('#fileTabContent'));}return;}
      if(action==='approve-assign'){openApproveAssign(id);return;}
      if(action==='save-approve-assign'){const f=fileById(id);if(f){const mode=$('#assignMode').value,officer=$('#assignEmployee').value;f.legalStatus=$('#approveFileCheck').checked?'active':f.legalStatus;f.assignment={mode,department:L($('#assignDepartment').value,$('#assignDepartment').value),officer:mode==='employee'&&officer?L(officer,officer):null,priority:$('#assignPriority').value};f.audit.push({date:today,user:L('نواف محمد','Nawaf Mohammed'),action:L(`اعتماد وتكليف: ${$('#approvalNotes').value}`,`Approval and assignment: ${$('#approvalNotes').value}`)});if($('#approveBankCheck').checked&&!f.circulars.length)f.circulars.push({id:`CIR-${f.id.slice(-5)}-01`,entity:L('البنوك والشركات المالية','Banks & Financial Companies'),sent:today,status:'pending',reply:null,summary:L('بانتظار الرد','Awaiting Reply')});closeModal(true);toast(t('approvedAssigned'));openFile(id,'overview');}return;}
      if(action==='issue-circular'){openIssueCircular(id);return;}
      if(action==='save-circular'){const f=fileById(id);if(f){f.circulars.push({id:`CIR-${String(f.circulars.length+1).padStart(3,'0')}-${f.id.slice(-3)}`,entity:L($('#circularEntity').value,$('#circularEntity').value),sent:today,status:'pending',reply:null,summary:L('بانتظار الرد','Awaiting Reply')});f.operationalStatus='circularStage';f.audit.push({date:today,user:L('نواف محمد','Nawaf Mohammed'),action:L('إصدار تعميم جديد لحصر الأموال','Issued a new asset-identification circular')});closeModal(true);toast(t('genericSaved'));openFile(id,'circulars');}return;}
      if(action==='print-file'){window.print();return;}
      if(action==='wizard-type'){wizard.type=value;wizard.source=sourceForType(value);wizard.sourceVerified=false;wizard.duplicate=null;wizard.reference='';wizard.person=null;wizard.parties=[];wizard.documents=[];renderFileWizard();return;}
      if(action==='wizard-lookup'){lookupWizardSource();return;}
      if(action==='open-existing'){modalGuard=null;closeModal(true);openFile(id);return;}
      if(action==='wizard-next'){if(validateWizardStep()){wizard.step++;renderFileWizard();}return;}
      if(action==='wizard-prev'){wizard.step=Math.max(1,wizard.step-1);renderFileWizard();return;}
      if(action==='wizard-upload'){wizard.documents[Number(el.dataset.index)].status='uploaded';renderFileWizard();return;}
      if(action==='wizard-add-party'){const snapshot=wizard;openPartyAdder();wizard=snapshot;return;}
      if(action==='return-wizard'){closeModal(true);openModal(t('newFileTitle'),t('newFileHint'),'<div></div>',t('confirmCancelWizard'));renderFileWizard();return;}
      if(action==='save-wizard-party'){
        const cpr=convertDigits($('#partyLookupCpr').value,'en');if(!/^\d{9}$/.test(cpr)){toast(t('invalidCpr'));return;}if(!personRegistry[cpr])personRegistry[cpr]={id:cpr,name:L(`${L('شخص','Person')[lang]} ${cpr}`,`Person ${cpr}`),nationality:L('بحريني','Bahraini'),birthDate:'1990-01-01',maritalStatus:L('غير محدد','Not Specified'),address:L('غير متوفر','Unavailable'),mobile:'—',email:'—',source:'manual'};wizard.parties.push({personId:cpr,group:$('#partyGroup').value,role:L($('#partyRole').value,$('#partyRole').value),relation:L($('#partyRelation').value,$('#partyRelation').value),share:null,accountId:null});closeModal(true);openModal(t('newFileTitle'),t('newFileHint'),'<div></div>',t('confirmCancelWizard'));renderFileWizard();return;
      }
      if(action==='wizard-create'){createWizardFile();return;}
      if(action==='cancel-wizard'){closeModal(false);return;}
      if(action==='close-modal'){closeModal(false);return;}
    });
  }

  bindPortal();
})();
