const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];

function toast(message){
  const el=$('#toast');
  if(!el)return;
  el.textContent=message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>el.classList.remove('show'),2400);
}
function openModal(id){
  const m=$('#'+id);
  if(m){m.classList.add('open');m.setAttribute('aria-hidden','false')}
}
function closeModal(id){
  const m=$('#'+id);
  if(m){m.classList.remove('open');m.setAttribute('aria-hidden','true')}
}
function money(value){
  if(value===null||value===undefined||value==='')return '—';
  if(typeof value==='string' && isNaN(Number(value.replace(/,/g,''))))return value;
  const n=Number(String(value).replace(/,/g,''));
  return n.toLocaleString('en-US',{minimumFractionDigits:3,maximumFractionDigits:3});
}
function rowsTable(headers,rows=[]){
  return `<div class="table-wrap"><table class="detail-table"><thead><tr>${headers.map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c??'—'}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${headers.length}">لا توجد بيانات تفصيلية في النموذج التجريبي.</td></tr>`}</tbody></table></div>`;
}

const caseData={
  'TR-2024-00124':{
    name:'تركة أحمد يوسف عبدالله الهاشمي',
    type:'ملف تركة',
    status:'فعال',
    officer:'سارة يوسف',
    assets:'غير مُقيّم',
    beneficiaries:5,
    opened:'01/01/2024',
    deceased:'أحمد يوسف عبدالله الهاشمي',
    id:'750123456',
    nationality:'بحريني',
    death:'01/01/2024',
    marital:'متزوج',
    heirsText:'زوجة وأربعة أبناء وبنات',
    court:'المحكمة الكبرى الشرعية',
    caseNo:'TR-DEMO-2024-00124',
    subjectHeading:'بيانات المتوفى',
    subjectNameLabel:'اسم المتوفى',
    dateLabel:'تاريخ الوفاة',
    extraRows:[
      ['الجنسية','بحريني'],
      ['الحالة الاجتماعية','متزوج'],
      ['عدد الورثة','زوجة وأربعة أبناء وبنات']
    ],
    partyHeaders:['م','الصفة','الاسم','الرقم الشخصي','الجنسية','الحصة الافتراضية'],
    parties:[
      ['1','الزوجة','مريم حسن علي الهاشمي','780234567','بحرينية','20%'],
      ['2','ابن','يوسف أحمد يوسف الهاشمي','010345678','بحريني','20%'],
      ['3','ابن','عبدالله أحمد يوسف الهاشمي','050456789','بحريني','20%'],
      ['4','ابنة','فاطمة أحمد يوسف الهاشمي','080567890','بحرينية','20%'],
      ['5','ابنة','زينب أحمد يوسف الهاشمي','120678901','بحرينية','20%']
    ],
    assetHeaders:['العقار','نوعه','التفاصيل','آلية التوزيع'],
    assetRows:[
      ['العقار الأول','سكني','منزل سكني مملوك للمتوفى','مقسم بالتساوي بين الورثة الخمسة لأغراض النموذج'],
      ['العقار الثاني','تجاري','مبنى يضم أربعة محلات تجارية','مقسم بالتساوي بين الورثة الخمسة لأغراض النموذج']
    ],
    financeSummary:[
      ['إجمالي الدخل الشهري للعقار التجاري','800.000 د.ب'],
      ['إجمالي الدخل السنوي','9,600.000 د.ب'],
      ['الحصة الافتراضية لكل وارث شهريًا','160.000 د.ب'],
      ['الحصة الافتراضية لكل وارث سنويًا','1,920.000 د.ب']
    ],
    financeNote:'التقسيم بالتساوي افتراض لأغراض النموذج فقط، ولا يمثل القسمة الشرعية للتركة. الأنصبة الفعلية تعتمد على حصر الورثة والفريضة الشرعية.',
    subsidiaryAccounts:['EST-AH-01','EST-AH-02','EST-AH-03','EST-AH-04','EST-AH-05'],
    requests:[
      ['RQ-2024-112','تسجيل إيراد العقار التجاري','800.000','معتمد'],
      ['RQ-2024-119','مراجعة آلية توزيع الإيراد','—','قيد المراجعة']
    ],
    docs:[
      ['شهادة الوفاة','موثق','01/01/2024'],
      ['حصر الورثة','مطلوب للاستكمال','—'],
      ['مستند ملكية العقار السكني','مسجل','03/01/2024'],
      ['مستند ملكية العقار التجاري','مسجل','03/01/2024']
    ],
    audit:[
      ['فتح ملف التركة','سارة يوسف','01/01/2024 09:10'],
      ['إضافة الورثة الخمسة','سارة يوسف','01/01/2024 10:05'],
      ['تسجيل العقارين','خالد إبراهيم','03/01/2024 13:40'],
      ['إضافة حسابات مساعدة للورثة','النظام','03/01/2024 13:42']
    ]
  },
  'HJ-2020-00031':{
    name:'خالد عبدالرحمن محمد البنعلي',
    type:'ملف محجور عليه',
    status:'فعال',
    officer:'نورة أحمد',
    assets:'70,000.000',
    beneficiaries:1,
    opened:'01/01/2020',
    deceased:'خالد عبدالرحمن محمد البنعلي',
    id:'650789012',
    nationality:'بحريني',
    death:'01/01/2020',
    marital:'متزوج',
    court:'المحكمة الكبرى المدنية',
    caseNo:'HJ-DEMO-2020-00031',
    subjectHeading:'بيانات المحجور عليه',
    subjectNameLabel:'اسم المحجور عليه',
    dateLabel:'تاريخ بداية التولي',
    extraRows:[
      ['الجنسية','بحريني'],
      ['الحالة الاجتماعية','متزوج'],
      ['القائم على شؤونه','زوجته – نورة إبراهيم حسن البنعلي']
    ],
    partyHeaders:['الصفة','الاسم','الرقم الشخصي','الجنسية','صلة القرابة'],
    parties:[
      ['القائمة على شؤونه','نورة إبراهيم حسن البنعلي','700890123','بحرينية','الزوجة']
    ],
    assetHeaders:['نوع الأصل / الرصيد','البيان','القيمة','الحالة'],
    assetRows:[
      ['رصيد مالي','الرصيد المالي عند إعداد النموذج','70,000.000 د.ب','مسجل'],
      ['دخل دوري','المعاش التقاعدي الشهري','2,000.000 د.ب','نشط']
    ],
    financeSummary:[
      ['المعاش التقاعدي الشهري','2,000.000 د.ب'],
      ['الرصيد المالي عند إعداد النموذج','70,000.000 د.ب'],
      ['النفقة الشهرية المصروفة','900.000 د.ب'],
      ['الفائض الشهري من المعاش','1,100.000 د.ب'],
      ['إجمالي المعاش السنوي','24,000.000 د.ب'],
      ['إجمالي النفقة السنوية','10,800.000 د.ب'],
      ['صافي الفائض السنوي','13,200.000 د.ب']
    ],
    financeNote:'الحركة المعروضة في كشف الحساب المساعد بيانات تجريبية مبنية على المعاش والنفقة الشهرية الواردين في المثال.',
    subsidiaryAccounts:['HJ-KH-01'],
    requests:[
      ['RQ-2026-220','صرف نفقة شهرية','900.000','معتمد'],
      ['RQ-2026-226','مراجعة الرصيد المالي','—','مكتمل']
    ],
    docs:[
      ['قرار / حكم الحجر','موثق','01/01/2020'],
      ['بيانات القائمة على شؤونه','موثق','01/01/2020'],
      ['كشف الرصيد المالي','محدث','31/07/2026']
    ],
    audit:[
      ['فتح ملف المحجور عليه','نورة أحمد','01/01/2020 08:50'],
      ['ربط القائمة على شؤونه','نورة أحمد','01/01/2020 09:20'],
      ['تسجيل المعاش التقاعدي','المحاسب','05/01/2020 11:15'],
      ['تحديث الرصيد المالي','المحاسب','31/07/2026 14:10']
    ]
  },
  'TR-2026-00481':{
    name:'ورثة أحمد عبدالله',
    type:'ملف تركة',
    status:'قيد المراجعة',
    officer:'سارة يوسف',
    assets:'128,450.000',
    beneficiaries:4,
    opened:'12/06/2026',
    deceased:'أحمد عبدالله حسن',
    id:'650123456',
    death:'04/06/2026',
    court:'المحكمة الكبرى الشرعية',
    caseNo:'SH-2026-771',
    subjectHeading:'بيانات المتوفى',
    subjectNameLabel:'اسم المتوفى',
    dateLabel:'تاريخ الوفاة',
    parties:[['محمد أحمد عبدالله','قاصر / وارث','15 سنة','25%'],['مريم أحمد عبدالله','قاصر / وارث','11 سنة','25%'],['يوسف أحمد عبدالله','وارث بالغ','24 سنة','25%'],['فاطمة علي حسن','ولي','—','—']],
    assetRows:[['عقار سكني','مدينة حمد - عقار 1842','78,000.000','موثق'],['حساب بنكي','بنك البحرين الوطني ••4521','42,300.000','مطابق'],['أسهم','محفظة استثمارية','8,150.000','قيد التقييم']],
    finance:[['رصيد افتتاحي','128,450.000','12/06/2026'],['إيراد إيجار','450.000','01/08/2026'],['مصروف صيانة','-120.000','03/08/2026']],
    requests:[['RQ-2026-881','طلب صرف صيانة','1,200.000','قيد المراجعة'],['RQ-2026-742','إضافة مستأجر','—','معتمد']],
    docs:[['شهادة الوفاة','موثق','12/06/2026'],['الفريضة الشرعية','موثق','14/06/2026'],['سند الملكية','قيد التحقق','16/06/2026']],
    audit:[['فتح الملف','سارة يوسف','12/06/2026 09:10'],['إضافة قاصر','سارة يوسف','12/06/2026 09:23'],['تحديث أصل عقاري','خالد إبراهيم','07/08/2026 13:05']]
  },
  'MN-2026-01933':{name:'محمد علي حسن',type:'ملف قاصر مرتبط بتركة',status:'فعال',officer:'خالد إبراهيم',assets:'42,850.500',beneficiaries:1,opened:'03/02/2026',deceased:'ملف قاصر مرتبط بتركة TR-2023-00612',id:'110223344',death:'—',court:'—',caseNo:'TR-2023-00612',subjectHeading:'بيانات القاصر',subjectNameLabel:'اسم القاصر',dateLabel:'تاريخ الميلاد'},
  'HJ-2026-00204':{name:'علي جاسم محمد',type:'ملف محجور عليه',status:'جديد',officer:'نورة أحمد',assets:'19,600.000',beneficiaries:1,opened:'06/08/2026',deceased:'علي جاسم محمد',id:'770112233',death:'—',court:'المحكمة الكبرى المدنية',caseNo:'CV-2026-442',subjectHeading:'بيانات المحجور عليه',subjectNameLabel:'اسم المحجور عليه',dateLabel:'تاريخ الميلاد'},
  'TR-2025-00876':{name:'ورثة يوسف محمود',type:'ملف تركة',status:'فعال',officer:'مريم صالح',assets:'310,220.750',beneficiaries:6,opened:'19/11/2025',deceased:'يوسف محمود علي',id:'540998877',death:'03/11/2025',court:'المحكمة الكبرى الشرعية',caseNo:'SH-2025-1198',subjectHeading:'بيانات المتوفى',subjectNameLabel:'اسم المتوفى',dateLabel:'تاريخ الوفاة'},
  'MN-2024-01104':{name:'فاطمة حسن علي',type:'ملف تحويل وتسوية حسابات الرشد',status:'محول للرشد',officer:'خالد إبراهيم',assets:'61,125.000',beneficiaries:1,opened:'10/05/2024',deceased:'فاطمة حسن علي',id:'060708099',death:'18/05/2008',court:'وزارة العدل',caseNo:'TR-2021-00211',subjectHeading:'بيانات صاحب حساب الرشد',subjectNameLabel:'اسم صاحب الحساب',dateLabel:'تاريخ الميلاد',subsidiaryAccounts:['AD-FT-01']},
  'MI-2026-00041':{name:'سلمان يوسف علي',type:'ملف قاصر مستقل',status:'فعال',officer:'مريم صالح',assets:'27,300.000',beneficiaries:1,opened:'01/08/2026',deceased:'سلمان يوسف علي',id:'120512345',death:'12/05/2012',court:'المحكمة الكبرى الشرعية',caseNo:'MN-IND-2026-041',subjectHeading:'بيانات القاصر',subjectNameLabel:'اسم القاصر',dateLabel:'تاريخ الميلاد',subsidiaryAccounts:['MN-SL-01']}
};

const generalAccounts=[
  {code:'110100',name:'البنوك',category:'أصول',nature:'مدين',balance:1248500.250,description:'الحسابات البنكية الرئيسية للإدارة'},
  {code:'110200',name:'الكاش / الصندوق',category:'أصول',nature:'مدين',balance:18750.000,description:'النقدية والصندوق'},
  {code:'210100',name:'حساب القُصّر العام',category:'حسابات أمانات',nature:'دائن',balance:532400.000,description:'إجمالي حسابات القُصّر المساعدة'},
  {code:'210200',name:'حساب الرشد العام',category:'حسابات أمانات',nature:'دائن',balance:184750.000,description:'مبالغ وصلت لمرحلة الرشد والتسوية'},
  {code:'210300',name:'حساب المحجور عليهم العام',category:'حسابات أمانات',nature:'دائن',balance:206000.000,description:'إجمالي الحسابات المساعدة للمحجور عليهم'},
  {code:'210400',name:'حساب التركات العام',category:'حسابات أمانات',nature:'دائن',balance:721350.000,description:'إجمالي أرصدة وحصص التركات المعلقة أو المدارة'},
  {code:'410100',name:'إيرادات العقارات',category:'إيرادات',nature:'دائن',balance:93600.000,description:'الإيرادات الدورية للعقارات المدارة'},
  {code:'510100',name:'مصروفات الملفات',category:'مصروفات',nature:'مدين',balance:28400.000,description:'مصروفات معتمدة مرتبطة بالملفات'}
];

const subsidiaryAccounts=[
  {id:'EST-AH-01',parent:'210400',caseId:'TR-2024-00124',owner:'مريم حسن علي الهاشمي',role:'وارث / الزوجة',balance:160.000,opening:0,openingDate:'2026-07-01'},
  {id:'EST-AH-02',parent:'210400',caseId:'TR-2024-00124',owner:'يوسف أحمد يوسف الهاشمي',role:'وارث / ابن',balance:160.000,opening:0,openingDate:'2026-07-01'},
  {id:'EST-AH-03',parent:'210400',caseId:'TR-2024-00124',owner:'عبدالله أحمد يوسف الهاشمي',role:'وارث / ابن',balance:160.000,opening:0,openingDate:'2026-07-01'},
  {id:'EST-AH-04',parent:'210400',caseId:'TR-2024-00124',owner:'فاطمة أحمد يوسف الهاشمي',role:'وارث / ابنة',balance:160.000,opening:0,openingDate:'2026-07-01'},
  {id:'EST-AH-05',parent:'210400',caseId:'TR-2024-00124',owner:'زينب أحمد يوسف الهاشمي',role:'وارث / ابنة',balance:160.000,opening:0,openingDate:'2026-07-01'},
  {id:'HJ-KH-01',parent:'210300',caseId:'HJ-2020-00031',owner:'خالد عبدالرحمن محمد البنعلي',role:'صاحب ملف محجور عليه',balance:70000.000,opening:68900.000,openingDate:'2026-07-01'},
  {id:'MN-SL-01',parent:'210100',caseId:'MI-2026-00041',owner:'سلمان يوسف علي',role:'قاصر',balance:27300.000,opening:27300.000,openingDate:'2026-07-01'},
  {id:'AD-FT-01',parent:'210200',caseId:'MN-2024-01104',owner:'فاطمة حسن علي',role:'صاحب حساب رشد',balance:61125.000,opening:61125.000,openingDate:'2026-07-01'}
];

const statementTransactions={
  'EST-AH-01':[{date:'2026-07-31',ref:'JR-2026-07131-01',description:'حصة افتراضية من إيراد العقار التجاري – يوليو',debit:0,credit:160}],
  'EST-AH-02':[{date:'2026-07-31',ref:'JR-2026-07131-02',description:'حصة افتراضية من إيراد العقار التجاري – يوليو',debit:0,credit:160}],
  'EST-AH-03':[{date:'2026-07-31',ref:'JR-2026-07131-03',description:'حصة افتراضية من إيراد العقار التجاري – يوليو',debit:0,credit:160}],
  'EST-AH-04':[{date:'2026-07-31',ref:'JR-2026-07131-04',description:'حصة افتراضية من إيراد العقار التجاري – يوليو',debit:0,credit:160}],
  'EST-AH-05':[{date:'2026-07-31',ref:'JR-2026-07131-05',description:'حصة افتراضية من إيراد العقار التجاري – يوليو',debit:0,credit:160}],
  'HJ-KH-01':[
    {date:'2026-07-25',ref:'RC-2026-0725',description:'إيداع المعاش التقاعدي الشهري',debit:0,credit:2000},
    {date:'2026-07-28',ref:'PV-2026-0728',description:'صرف النفقة الشهرية المعتمدة',debit:900,credit:0}
  ],
  'MN-SL-01':[],
  'AD-FT-01':[]
};

function getGeneral(code){return generalAccounts.find(a=>a.code===code)}
function getSub(id){return subsidiaryAccounts.find(a=>a.id===id)}

function financePanel(d){
  const summary=(d.financeSummary||[]).length
    ? `<div class="finance-summary-grid">${d.financeSummary.map(x=>`<div class="finance-summary-card"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('')}</div>`
    : '';
  const note=d.financeNote?`<div class="prototype-note warning-note">${d.financeNote}</div>`:'';
  const linked=(d.subsidiaryAccounts||[]).map(id=>getSub(id)).filter(Boolean);
  const accounts=linked.length ? `
    <div class="detail-section-heading"><div><h4>الحسابات المساعدة المرتبطة بالملف</h4><p>كل حساب مساعد مرتبط بحساب أستاذ عام، وتظهر حركته مدين/دائن مع الرصيد الجاري.</p></div></div>
    <div class="table-wrap"><table class="detail-table"><thead><tr><th>رقم الحساب المساعد</th><th>صاحب الحساب</th><th>حساب الأستاذ العام</th><th>الرصيد الحالي</th><th>الإجراء</th></tr></thead><tbody>
    ${linked.map(a=>`<tr><td>${a.id}</td><td>${a.owner}</td><td>${getGeneral(a.parent)?.name||a.parent}</td><td>${money(a.balance)} د.ب</td><td><button class="btn btn-secondary statement-btn" data-account="${a.id}">عرض كشف الحركة المالية</button></td></tr>`).join('')}
    </tbody></table></div>` : '';
  const oldFinance=(d.finance||[]).length?`<div class="detail-section-heading"><h4>حركات مختصرة على الملف</h4></div>${rowsTable(['الحركة','المبلغ (د.ب)','التاريخ'],d.finance)}`:'';
  return `${summary}${note}${accounts}${oldFinance}`;
}

function showCase(id){
  const d=caseData[id]||caseData['TR-2026-00481'];
  $('#caseTitle').textContent=`${d.name} — ${id}`;
  $('#caseMeta').textContent=`${d.type} • الموظف المختص: ${d.officer} • تاريخ فتح الملف: ${d.opened}`;
  const assetDisplay=String(d.assets).includes('مُقيّم')?d.assets:`${d.assets} د.ب`;
  $('#caseSummary').innerHTML=[
    ['الحالة',d.status],
    ['إجمالي الأصول / الرصيد',assetDisplay],
    ['عدد المستفيدين / الأطراف',d.beneficiaries],
    ['الموظف المختص',d.officer],
    ['رقم القضية / المرجع',d.caseNo]
  ].map(x=>`<div class="summary-item"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');

  const extra=(d.extraRows||[]).map(x=>`<div class="data-row"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('');
  $('#detailOverview').innerHTML=`
    <div class="detail-grid">
      <div class="detail-card"><h4>البيانات الأساسية للملف</h4><div class="data-list">
        <div class="data-row"><span>رقم الملف</span><strong>${id}</strong></div>
        <div class="data-row"><span>نوع الملف</span><strong>${d.type}</strong></div>
        <div class="data-row"><span>تاريخ فتح الملف</span><strong>${d.opened}</strong></div>
        <div class="data-row"><span>حالة الملف الحالية</span><strong>${d.status}</strong></div>
      </div></div>
      <div class="detail-card"><h4>${d.subjectHeading||'بيانات صاحب الملف'}</h4><div class="data-list">
        <div class="data-row"><span>${d.subjectNameLabel||'الاسم الكامل'}</span><strong>${d.deceased}</strong></div>
        <div class="data-row"><span>الرقم الشخصي / رقم الهوية</span><strong>${d.id}</strong></div>
        <div class="data-row"><span>${d.dateLabel||'التاريخ الأساسي'}</span><strong>${d.death}</strong></div>
        ${extra}
        <div class="data-row"><span>المحكمة أو الجهة المختصة</span><strong>${d.court}</strong></div>
      </div></div>
      <div class="detail-card"><h4>مسؤولية ومتابعة الملف</h4><div class="data-list">
        <div class="data-row"><span>الموظف المختص بمتابعة الملف</span><strong>${d.officer}</strong></div>
        <div class="data-row"><span>نسبة اكتمال بيانات الملف</span><strong>${id==='TR-2024-00124'?'94%':'92%'}</strong></div>
        <div class="data-row"><span>طريقة مطابقة البيانات</span><strong>مطابقة يدوية</strong></div>
        <div class="data-row"><span>تاريخ آخر مراجعة للملف</span><strong>08/08/2026</strong></div>
      </div></div>
    </div>
    ${id==='TR-2024-00124'?'<div class="prototype-note warning-note">ملاحظة النموذج: توزيع العقارات بالتساوي بين الورثة الخمسة افتراض تجريبي فقط ولا يمثل القسمة الشرعية. الأنصبة الفعلية تحدد وفق حصر الورثة والفريضة الشرعية.</div>':''}
  `;
  $('#detailParties').innerHTML=rowsTable(d.partyHeaders||['الاسم','الصفة','العمر','نسبة الاستحقاق'],d.parties||[['الطرف الرئيسي',d.type,'—','—']]);
  $('#detailAssets').innerHTML=rowsTable(d.assetHeaders||['نوع الأصل','البيان','القيمة (د.ب)','الحالة'],d.assetRows||[['أصول مالية','رصيد الملف',d.assets,'مسجل']]);
  $('#detailFinance').innerHTML=financePanel(d);
  $('#detailRequests').innerHTML=rowsTable(['رقم الطلب','النوع','المبلغ','الحالة'],d.requests||[]);
  $('#detailDocs').innerHTML=rowsTable(['المستند','الحالة','تاريخ الإضافة'],d.docs||[['مستند أساسي','موجود',d.opened]]);
  $('#detailAudit').innerHTML=rowsTable(['الإجراء','المستخدم','الوقت'],d.audit||[['فتح الملف',d.officer,d.opened]]);
  bindStatementButtons($('#detailFinance'));
  openModal('caseModal');
}

function generalLedgerHTML(){
  return rowsTable(
    ['رقم الحساب','اسم الحساب','التصنيف','طبيعة الحساب','الرصيد التجريبي','الوصف'],
    generalAccounts.map(a=>[a.code,a.name,a.category,a.nature,`${money(a.balance)} د.ب`,a.description])
  );
}
function subsidiaryLedgerHTML(list=subsidiaryAccounts){
  return `<div class="table-wrap"><table class="detail-table"><thead><tr><th>الحساب المساعد</th><th>الملف المرتبط</th><th>صاحب الحساب</th><th>الصفة</th><th>حساب الأستاذ العام</th><th>الرصيد</th><th>الإجراء</th></tr></thead><tbody>
    ${list.map(a=>`<tr><td>${a.id}</td><td><button class="link-btn open-case-link" data-case="${a.caseId}">${a.caseId}</button></td><td>${a.owner}</td><td>${a.role}</td><td>${getGeneral(a.parent)?.name||a.parent}</td><td>${money(a.balance)} د.ب</td><td><button class="btn btn-secondary statement-btn" data-account="${a.id}">عرض كشف الحركة المالية</button></td></tr>`).join('')}
  </tbody></table></div>`;
}
function renderLedger(){
  if(!$('#generalLedgerTable'))return;
  $('#generalLedgerTable').innerHTML=generalLedgerHTML();
  const parentSelect=$('#subsidiaryParentFilter');
  if(parentSelect && parentSelect.options.length===1){
    generalAccounts.filter(a=>a.code.startsWith('21')).forEach(a=>{
      const o=document.createElement('option');o.value=a.code;o.textContent=`${a.code} — ${a.name}`;parentSelect.appendChild(o);
    });
  }
  const statementSelect=$('#statementAccount');
  if(statementSelect && !statementSelect.options.length){
    subsidiaryAccounts.forEach(a=>{
      const o=document.createElement('option');o.value=a.id;o.textContent=`${a.id} — ${a.owner}`;statementSelect.appendChild(o);
    });
  }
  filterSubsidiary();
  renderStatement(statementSelect?.value||'HJ-KH-01');
}
function filterSubsidiary(){
  const parent=$('#subsidiaryParentFilter')?.value||'';
  const q=($('#subsidiarySearch')?.value||'').trim();
  const list=subsidiaryAccounts.filter(a=>(!parent||a.parent===parent)&&(!q||`${a.id} ${a.caseId} ${a.owner} ${a.role}`.includes(q)));
  $('#subsidiaryAccountsTable').innerHTML=subsidiaryLedgerHTML(list);
  bindStatementButtons($('#subsidiaryAccountsTable'));
  $$('.open-case-link',$('#subsidiaryAccountsTable')).forEach(b=>b.addEventListener('click',()=>{closeModal('ledgerModal');showCase(b.dataset.case)}));
}
function renderStatement(accountId){
  const account=getSub(accountId);
  if(!account)return;
  const from=$('#statementFrom')?.value||'1900-01-01';
  const to=$('#statementTo')?.value||'2999-12-31';
  const all=[...(statementTransactions[accountId]||[])].sort((a,b)=>a.date.localeCompare(b.date));
  let opening=account.opening;
  all.filter(t=>t.date<from).forEach(t=>opening+=t.credit-t.debit);
  let running=opening;
  const visible=all.filter(t=>t.date>=from&&t.date<=to).map(t=>{
    running+=t.credit-t.debit;
    return {...t,balance:running};
  });
  const parent=getGeneral(account.parent);
  const totalDebit=visible.reduce((s,t)=>s+t.debit,0);
  const totalCredit=visible.reduce((s,t)=>s+t.credit,0);
  const closing=running;
  $('#statementOutput').innerHTML=`
    <section class="bank-statement">
      <div class="statement-head">
        <div><span class="eyebrow">كشف حركة مالية تجريبي</span><h3>${account.owner}</h3><p>${account.id} • الملف ${account.caseId}</p></div>
        <div class="statement-account-box"><span>حساب الأستاذ العام المرتبط</span><strong>${parent?.code||account.parent} — ${parent?.name||''}</strong></div>
      </div>
      <div class="statement-summary">
        <div><span>الفترة</span><strong>${from} إلى ${to}</strong></div>
        <div><span>الرصيد الافتتاحي</span><strong>${money(opening)} د.ب</strong></div>
        <div><span>إجمالي المدين</span><strong>${money(totalDebit)} د.ب</strong></div>
        <div><span>إجمالي الدائن</span><strong>${money(totalCredit)} د.ب</strong></div>
        <div><span>الرصيد الختامي</span><strong>${money(closing)} د.ب</strong></div>
      </div>
      <div class="table-wrap"><table class="statement-table"><thead><tr><th>التاريخ</th><th>المرجع</th><th>البيان</th><th>مدين</th><th>دائن</th><th>الرصيد الجاري</th></tr></thead><tbody>
        <tr class="opening-row"><td>${from}</td><td>OPEN</td><td>الرصيد الافتتاحي للفترة</td><td>—</td><td>—</td><td>${money(opening)}</td></tr>
        ${visible.map(t=>`<tr><td>${t.date}</td><td>${t.ref}</td><td>${t.description}</td><td class="debit-cell">${t.debit?money(t.debit):'—'}</td><td class="credit-cell">${t.credit?money(t.credit):'—'}</td><td><strong>${money(t.balance)}</strong></td></tr>`).join('')||'<tr><td colspan="6">لا توجد حركات خلال الفترة المحددة.</td></tr>'}
      </tbody></table></div>
      <div class="statement-foot">يعرض هذا الكشف حركة الحساب المساعد بصورة مشابهة لكشف الحساب البنكي. في هذا النموذج، زيادة الدائن ترفع رصيد حساب المستفيد المساعد، والمدين يخفضه. جميع البيانات والأرقام تجريبية.</div>
    </section>`;
}
function openStatement(accountId){
  openModal('ledgerModal');
  renderLedger();
  const select=$('#statementAccount');
  if(select)select.value=accountId;
  const modal=$('#ledgerModal');
  const tabBtn=$('[data-tab="ledger-statement"]',modal);
  tabBtn?.click();
  renderStatement(accountId);
}
function bindStatementButtons(root=document){
  $$('.statement-btn',root).forEach(b=>{
    if(b.dataset.bound)return;
    b.dataset.bound='1';
    b.addEventListener('click',()=>openStatement(b.dataset.account));
  });
}

function initTabs(root=document){
  $$('.tab-btn',root).forEach(btn=>{
    if(btn.dataset.bound)return;
    btn.dataset.bound='1';
    btn.addEventListener('click',()=>{
      const group=btn.closest('[data-tabs]');
      if(!group)return;
      $$('.tab-btn',group).forEach(b=>b.classList.remove('active'));
      $$('.tab-panel',group).forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      $('#'+btn.dataset.tab,group)?.classList.add('active');
    });
  });
}

function initWizard(){
  let step=0;
  const panels=$$('.wizard-panel'),steps=$$('.wizard-step'),prev=$('#wizardPrev'),next=$('#wizardNext'),create=$('#wizardCreate'),fileType=$('#fileType');
  const configs={
    'estate':{label:'ملف تركة',prefix:'TR',title:'فتح ملف تركة جديد',section:'بيانات المتوفى والتركة',help:'أدخل بيانات المتوفى والمرجع القضائي الذي ستُبنى عليه التركة.',idLabel:'الرقم الشخصي للمتوفى *',nameLabel:'اسم المتوفى بالكامل *',dateLabel:'تاريخ الوفاة *',certificateLabel:'رقم شهادة الوفاة',referenceLabel:'رقم قضية التركة / حصر الإرث',workflow:'استكمال بيانات التركة ← مطابقة ← مراجعة ← تفعيل',notice:'بعد إنشاء ملف التركة يمكن إضافة الورثة والقاصرين وربط كل مستفيد بأصوله وحسابه المساعد وحصته ومستنداته.'},
    'minor-estate':{label:'ملف قاصر مرتبط بتركة',prefix:'MN',title:'فتح ملف قاصر مرتبط بتركة',section:'بيانات القاصر والملف الأم',help:'أدخل بيانات القاصر وحدد مرجع التركة التي يتبع لها.',idLabel:'الرقم الشخصي للقاصر *',nameLabel:'اسم القاصر بالكامل *',dateLabel:'تاريخ ميلاد القاصر *',certificateLabel:'رقم شهادة الميلاد',referenceLabel:'رقم ملف التركة المرتبط *',workflow:'ربط بالتركة ← التحقق من الولي ← تحديد الحصة ← إنشاء الحساب المساعد ← تفعيل',notice:'بعد الإنشاء سيبقى ملف القاصر مرتبطًا بملف التركة، ويُنشأ له حساب مساعد مرتبط بحساب القُصّر العام.'},
    'minor-independent':{label:'ملف قاصر مستقل',prefix:'MI',title:'فتح ملف قاصر مستقل',section:'بيانات القاصر وسبب فتح الملف المستقل',help:'يستخدم هذا النوع عندما تتم إدارة أموال القاصر في ملف مستقل غير تابع مباشرة لملف تركة.',idLabel:'الرقم الشخصي للقاصر *',nameLabel:'اسم القاصر بالكامل *',dateLabel:'تاريخ ميلاد القاصر *',certificateLabel:'رقم شهادة الميلاد / المستند التعريفي',referenceLabel:'رقم القرار أو المرجع الرسمي',workflow:'التحقق من الولاية ← تسجيل الأموال ← إنشاء الحساب المساعد ← مراجعة ← تفعيل',notice:'بعد الإنشاء يمكن إدارة أموال القاصر وأصوله وحركات حسابه المساعد المرتبط بحساب القُصّر العام.'},
    'interdicted':{label:'ملف محجور عليه',prefix:'HJ',title:'فتح ملف محجور عليه',section:'بيانات المحجور عليه وقرار الحجر',help:'أدخل بيانات الشخص وقرار الحجر أو المرجع القضائي وتفاصيل القيم المسؤول عنه.',idLabel:'الرقم الشخصي للمحجور عليه *',nameLabel:'اسم المحجور عليه بالكامل *',dateLabel:'تاريخ بداية التولي / الحجر *',certificateLabel:'رقم قرار / حكم الحجر',referenceLabel:'رقم القضية أو القرار القضائي *',workflow:'التحقق من قرار الحجر ← تسجيل القائم على شؤونه ← تسجيل الأموال ← إنشاء الحساب المساعد ← تفعيل',notice:'بعد الإنشاء يمكن ربط القائم على شؤونه والأصول والحسابات والطلبات المالية بملف المحجور عليه.'},
    'adulthood':{label:'ملف تحويل وتسوية حسابات الرشد',prefix:'AD',title:'فتح ملف تحويل وتسوية حسابات الرشد',section:'بيانات المستفيد وملف القاصر السابق',help:'يستخدم لتوثيق انتقال ملف القاصر إلى مرحلة الرشد وتسوية الأموال والحسابات قبل التسليم.',idLabel:'الرقم الشخصي للمستفيد *',nameLabel:'اسم المستفيد بالكامل *',dateLabel:'تاريخ الميلاد *',certificateLabel:'رقم مستند إثبات بلوغ الرشد',referenceLabel:'رقم ملف القاصر السابق *',workflow:'التحقق من بلوغ الرشد ← تحويل الرصيد لحساب الرشد العام ← تسوية الحسابات ← مراجعة ← صرف / إغلاق',notice:'بعد الإنشاء تتم مراجعة أرصدة وأصول ملف القاصر السابق، ويُتابع الرصيد في حساب مساعد مرتبط بحساب الرشد العام حتى الصرف.'}
  };
  function cfg(){return configs[fileType?.value]||null}
  function paint(){
    panels.forEach((p,i)=>p.classList.toggle('active',i===step));
    steps.forEach((s,i)=>{s.classList.toggle('active',i===step);s.classList.toggle('done',i<step)});
    prev.disabled=step===0;
    next.classList.toggle('hidden',step===panels.length-1);
    create.classList.toggle('hidden',step!==panels.length-1);
  }
  function updateTypeUI(){
    const c=cfg();
    $('#wizardEyebrow').textContent=c?c.label:'فتح ملف جديد';
    $('#wizardTitle').textContent=c?c.title:'معالج إنشاء ملف جديد';
    $('#primarySectionTitle').textContent=c?c.section:'المعلومات الأساسية للملف';
    $('#primarySectionHelp').textContent=c?c.help:'اختر نوع الملف أولاً، ثم أدخل البيانات الأساسية المطلوبة لفتحه.';
    $('#primaryIdLabel').textContent=c?c.idLabel:'الرقم الشخصي / رقم الهوية *';
    $('#primaryNameLabel').textContent=c?c.nameLabel:'اسم صاحب الملف بالكامل *';
    $('#primaryDateLabel').textContent=c?c.dateLabel:'التاريخ الأساسي *';
    $('#certificateLabel').textContent=c?c.certificateLabel:'رقم المستند الأساسي';
    $('#caseReferenceLabel').textContent=c?c.referenceLabel:'رقم القضية / المرجع الرسمي';
    $('#reviewFileType').textContent=c?c.label:'لم يتم الاختيار بعد';
    $('#reviewWorkflow').textContent=c?c.workflow:'استكمال البيانات ← مطابقة ← مراجعة ← تفعيل';
    $('#reviewNotice').textContent=c?c.notice:'بعد إنشاء الملف يمكن فتح «تفاصيل الملف» مباشرة لاستكمال جميع البيانات المرتبطة به.';
    create.textContent=c?`إنشاء ${c.label}`:'إنشاء الملف';
  }
  function validate(){
    const inputs=$$('input[required],select[required]',panels[step]);
    for(const i of inputs){
      if(!i.value){
        i.focus();
        toast(i===fileType?'يرجى اختيار نوع الملف المراد فتحه':'يرجى استكمال جميع الحقول الإلزامية في هذه الخطوة');
        return false;
      }
    }
    return true;
  }
  next?.addEventListener('click',()=>{if(validate()&&step<panels.length-1){step++;paint()}});
  prev?.addEventListener('click',()=>{if(step>0){step--;paint()}});
  steps.forEach((s,i)=>s.addEventListener('click',()=>{if(i<=step||validate()){step=i;paint()}}));
  fileType?.addEventListener('change',updateTypeUI);
  $('#addParty')?.addEventListener('click',()=>{
    $('#partyList').innerHTML+=`<div><strong>طرف مرتبط إضافي</strong><span>تمت إضافة سجل تجريبي؛ يمكن استكمال صفته وبياناته داخل النظام الفعلي.</span></div>`;
    toast('تمت إضافة طرف مرتبط جديد');
  });
  $$('[data-asset]').forEach(b=>b.addEventListener('click',()=>{
    $('#assetList').innerHTML+=`<div><strong>${b.dataset.asset}</strong><span>تمت إضافة الأصل إلى الملف ويحتاج استكمال بيانات الملكية والقيمة.</span></div>`;
    toast(`تمت إضافة أصل من نوع: ${b.dataset.asset}`);
  }));
  create?.addEventListener('click',()=>{
    const c=cfg();
    if(!c)return toast('يرجى اختيار نوع الملف');
    closeModal('wizardModal');
    const demoNo=`${c.prefix}-2026-00502`;
    toast(`تم إنشاء ${c.label} برقم تجريبي ${demoNo}`);
    setTimeout(()=>showCase(c.prefix==='TR'?'TR-2024-00124':c.prefix==='HJ'?'HJ-2020-00031':c.prefix==='MI'?'MI-2026-00041':c.prefix==='AD'?'MN-2024-01104':'MN-2026-01933'),500);
  });
  $('#newFileBtn')?.addEventListener('click',()=>{
    step=0;$('#caseWizard')?.reset();updateTypeUI();paint();openModal('wizardModal');
  });
  updateTypeUI();paint();
}

function openAlerts(filter=''){
  openModal('alertsModal');
  if(filter)toast('تم فتح مركز التنبيهات على نوع التنبيه المحدد');
}

function initLedgerEvents(){
  $('#openLedgerBtn')?.addEventListener('click',()=>{renderLedger();openModal('ledgerModal')});
  $('#subsidiaryParentFilter')?.addEventListener('change',filterSubsidiary);
  $('#subsidiarySearch')?.addEventListener('input',filterSubsidiary);
  $('#applyStatementFilter')?.addEventListener('click',()=>renderStatement($('#statementAccount')?.value));
  $('#statementAccount')?.addEventListener('change',()=>renderStatement($('#statementAccount').value));
  $('#ledgerExportBtn')?.addEventListener('click',()=>toast('تم تجهيز كشف حساب تجريبي للتصدير'));
  $('#openAdulthoodLedger')?.addEventListener('click',()=>{
    closeModal('alertsModal');renderLedger();openModal('ledgerModal');
    $('#subsidiaryParentFilter').value='210200';filterSubsidiary();
    $('[data-tab="ledger-subsidiary"]',$('#ledgerModal'))?.click();
  });
}

function initShell(){
  const sidebar=$('#sidebar'),main=$('#main'),toggle=$('#navToggle');
  if(!sidebar && !main)return;
  toggle?.addEventListener('click',()=>{
    if(window.innerWidth<=820)sidebar.classList.toggle('mobile-open');
    else{sidebar.classList.toggle('collapsed');main.classList.toggle('expanded')}
  });
  $$('.nav-parent').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.nav-group')?.classList.toggle('open')));
  $$('.nav-item').forEach(item=>item.addEventListener('click',()=>{
    if(item.tagName==='A')return;
    $$('.nav-item').forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
    const title=item.dataset.title||item.textContent.trim();
    $('#currentCrumb').textContent=title;
    if(['دليل الحسابات','القيود اليومية','المطابقة'].includes(title)){
      renderLedger();openModal('ledgerModal');
      if(title==='دليل الحسابات')$('[data-tab="ledger-general"]',$('#ledgerModal'))?.click();
      if(title==='القيود اليومية')$('[data-tab="ledger-statement"]',$('#ledgerModal'))?.click();
      if(title==='المطابقة')$('[data-tab="ledger-subsidiary"]',$('#ledgerModal'))?.click();
    }else{
      toast(`تم الانتقال إلى: ${title}`);
    }
    if(window.innerWidth<=820)sidebar?.classList.remove('mobile-open');
  }));
  initTabs();
  $('#notificationsBtn')?.addEventListener('click',()=>openAlerts());
  $('#showAllAlertsBtn')?.addEventListener('click',()=>openAlerts());
  $$('.activity-btn').forEach(b=>b.addEventListener('click',()=>openAlerts(b.dataset.alertFilter)));
  $$('.alert-action').forEach(b=>{
    if(b.id==='openAdulthoodLedger')return;
    b.addEventListener('click',()=>toast(b.textContent.trim()));
  });
  $('#exportBtn')?.addEventListener('click',()=>toast('تم تجهيز ملف تجريبي لتصدير قائمة الملفات الحالية'));
  const filterCases=()=>{
    const q=$('#searchInput')?.value.trim()||'',type=$('#caseTypeFilter')?.value||'';
    $$('#casesTable tbody tr').forEach(row=>{
      const matchesText=!q||row.textContent.includes(q);
      const matchesType=!type||row.children[1]?.textContent.trim()===type;
      row.style.display=matchesText&&matchesType?'':'none';
    });
  };
  $('#searchInput')?.addEventListener('input',filterCases);
  $('#caseTypeFilter')?.addEventListener('change',filterCases);
  $$('.view-case').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();showCase(b.closest('tr').dataset.case)}));
  $$('#casesTable tbody tr[data-case]').forEach(r=>{
    r.classList.add('clickable-row');
    r.addEventListener('dblclick',()=>showCase(r.dataset.case));
  });
  $$('.modal-close').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
  $$('.modal-shell').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id)}));
  initWizard();
  initLedgerEvents();
  renderLedger();
}

function initLogin(){
  $('#ekeyBtn')?.addEventListener('click',()=>{
    toast('محاكاة الانتقال إلى eKey 2.0');
    setTimeout(()=>location.href='index.html',700);
  });
  $('#staffLogin')?.addEventListener('submit',e=>{
    e.preventDefault();
    const u=$('#username')?.value.trim(),p=$('#password')?.value.trim();
    if(!u||!p)return toast('يرجى إدخال اسم المستخدم وكلمة المرور');
    toast('تم تسجيل الدخول التجريبي بنجاح');
    setTimeout(()=>location.href='index.html',650);
  });
}

document.addEventListener('DOMContentLoaded',()=>{initShell();initLogin()});
