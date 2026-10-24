'use strict';

/* ===================== الجدول الافتراضي ===================== */
const DEFAULT_SCHEDULE = [
  { code: 'BMH113.1', name: 'LİNEER CEBİR',                    instructor: 'Doç. Dr. Hüseyin KAMACI',            room: 'A103',  day: 1, start: '09:30', end: '12:15', hue: 212 },
  { code: 'MMF101.2', name: 'FİZİK-I',                         instructor: 'Prof. Dr. Sait YILMAZ',               room: 'A103',  day: 1, start: '13:30', end: '17:15', hue: 188 },
  { code: 'MMF103.1', name: 'MATEMATİK-I',                     instructor: 'Doç. Dr. Hürmet Fulya AKIZ',          room: 'A103',  day: 2, start: '08:30', end: '12:15', hue: 262 },
  { code: 'BMH239.2', name: 'SAYISAL ANALİZ',                  instructor: 'Doç. Dr. Volkan ASLAN',              room: 'A104',  day: 2, start: '09:30', end: '12:15', hue: 228 },
  { code: 'BMH115.1', name: 'BİLGİSAYAR MÜHENDİSLİĞİNE GİRİŞ', instructor: 'Doç. Dr. Hasan ULUTAŞ',              room: 'EZ004', day: 2, start: '13:30', end: '16:15', hue: 22  },
  { code: 'BMH234.1', name: 'MANTIK DEVRELERİ',                instructor: 'Dr. Öğr. Üyesi Halil İbrahim COŞAR', room: 'EZ004', day: 3, start: '14:30', end: '17:15', hue: 158 },
  { code: 'BMH114.1', name: 'BİLGİSAYAR PROGRAMLAMA I',        instructor: 'Dr. Öğr. Üyesi Çağrı ARISOY',        room: 'EZ010', day: 4, start: '08:30', end: '12:15', hue: 45  },
  { code: 'BMH236.1', name: 'VERİ TABANI YÖNETİM SİSTEMİ',     instructor: 'Prof. Dr. Mehmet BAKIR',             room: 'EZ010', day: 4, start: '14:30', end: '17:15', hue: 338 },
  { code: 'BMH231.1', name: 'WEB PROGRAMLAMA',                 instructor: 'Dr. Öğr. Üyesi Çağrı ARISOY',        room: 'EZ010', day: 5, start: '10:30', end: '13:15', hue: 118 },
];

/* ===================== الترجمات ===================== */
const STR = {
  ar: {
    dir: 'rtl', appName: 'طالب بوزوك',
    tabs: { today: 'اليوم', week: 'الأسبوع', assignments: 'الواجبات', courses: 'المواد', schedule: 'جدولي' },
    days: ['الأحد', 'الاتنين', 'التلات', 'الأربع', 'الخميس', 'الجمعة', 'السبت'],
    daysShort: ['أحد', 'اتنين', 'تلات', 'أربع', 'خميس', 'جمعة', 'سبت'],
    months: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    dateFmt: (dow, d, m) => `${dow}، ${d} ${m}`,
    classesToday: n => n === 1 ? 'عندك النهارده محاضرة واحدة' : n === 2 ? 'عندك النهارده محاضرتين' : `عندك النهارده ${n} محاضرات`,
    calmDay: 'يوم هادي',
    badgeNow: 'دلوقتي', badgeNext: 'اللي جاي', badgeDone: 'خلصت',
    noClasses: 'مفيش محاضرات النهارده',
    noClassesSub: 'يومك فاضي من الجامعة. استغله صح.',
    nextClass: 'أقرب محاضرة جاية',
    weekEyebrow: 'الجدول', weekTitle: 'الأسبوع كله', weekSub: 'من الاتنين للجمعة، كل المحاضرات قدامك',
    assignEyebrow: 'متابعة', assignTitle: 'الواجبات',
    assignCount: n => n === 1 ? 'عندك واجب واحد' : n === 2 ? 'عندك واجبين' : `عندك ${n} واجبات`,
    addFirst: 'ضيف أول واجب',
    newAssign: 'واجب جديد', fCourse: 'المادة', fTitle: 'اسم الواجب', fDue: 'آخر ميعاد تسليم',
    pickCourse: 'اختار المادة', titlePh: 'مثال: Ödev 2', addBtn: 'أضف الواجب',
    dueLabel: 'تسليم', soon: 'قريب', overdue: 'فات ميعاده',
    dayWord: n => n === 0 ? 'النهارده' : n === 1 ? 'بكره' : n === 2 ? 'بعد بكره' : n <= 10 ? `باقي ${n} أيام` : `باقي ${n} يوم`,
    noAssign: 'مفيش واجبات مسجلة', noAssignSub: 'أول ما ينزل واجب على BOYSIS ضيفه هنا وهيفضل قدامك.',
    del: 'امسح',
    coursesEyebrow: 'الفصل الدراسي', coursesTitle: 'المواد',
    coursesSub: n => `${n} مواد - خريف 2026`,
    schedEyebrow: 'إعداد', schedTitle: 'جدولي',
    schedSub: 'عدل محاضراتك، أو ابدأ بجدول فاضي لو الجدول ده مش بتاعك',
    addClass: 'محاضرة جديدة',
    fCode: 'كود المادة', fCodePh: 'BMH101.1', fName: 'اسم المادة', fNamePh: 'BİLGİSAYAR PROGRAMLAMA I',
    fInstr: 'الدكتور', fInstrPh: 'اختياري', fRoom: 'القاعة', fRoomPh: 'A103',
    fDay: 'اليوم', fFrom: 'من', fTo: 'إلى',
    addClassBtn: 'أضف المحاضرة',
    startEmpty: 'ابدأ من الصفر', restoreDefault: 'استرجع الجدول الأصلي',
    confirmEmpty: 'هتمسح كل المحاضرات وتبدأ بجدول فاضي. متأكد؟',
    confirmRestore: 'هيمسح الجدول الحالي ويرجع الجدول الأصلي. متأكد؟',
    emptySched: 'جدولك فاضي', emptySchedSub: 'ضيف أول محاضرة من الفورم اللي فوق.',
    classCount: n => n === 1 ? 'محاضرة واحدة في الأسبوع' : n === 2 ? 'محاضرتين في الأسبوع' : `${n} محاضرات في الأسبوع`,
    todayEyebrow: 'جدولك',
  },
  en: {
    dir: 'ltr', appName: 'Bozok Student',
    tabs: { today: 'Today', week: 'Week', assignments: 'Tasks', courses: 'Courses', schedule: 'My schedule' },
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    dateFmt: (dow, d, m) => `${dow}, ${m} ${d}`,
    classesToday: n => n === 1 ? 'You have 1 class today' : `You have ${n} classes today`,
    calmDay: 'A calm day',
    badgeNow: 'Now', badgeNext: 'Next', badgeDone: 'Done',
    noClasses: 'No classes today',
    noClassesSub: 'Your day is free from university. Make it count.',
    nextClass: 'Next class coming up',
    weekEyebrow: 'Timetable', weekTitle: 'Your whole week', weekSub: 'Monday to Friday, every class at a glance',
    assignEyebrow: 'Tracking', assignTitle: 'Assignments',
    assignCount: n => n === 1 ? 'You have 1 assignment' : `You have ${n} assignments`,
    addFirst: 'Add your first assignment',
    newAssign: 'New assignment', fCourse: 'Course', fTitle: 'Assignment title', fDue: 'Deadline',
    pickCourse: 'Pick a course', titlePh: 'e.g. Ödev 2', addBtn: 'Add assignment',
    dueLabel: 'Due', soon: 'Soon', overdue: 'Overdue',
    dayWord: n => n === 0 ? 'Today' : n === 1 ? 'Tomorrow' : `${n} days left`,
    noAssign: 'No assignments yet', noAssignSub: 'When an assignment lands on BOYSIS, add it here and keep it in sight.',
    del: 'Delete',
    coursesEyebrow: 'Semester', coursesTitle: 'Courses',
    coursesSub: n => `${n} courses - Fall 2026`,
    schedEyebrow: 'Setup', schedTitle: 'My schedule',
    schedSub: 'Edit your classes, or start from an empty schedule if this one is not yours',
    addClass: 'New class',
    fCode: 'Course code', fCodePh: 'BMH101.1', fName: 'Course name', fNamePh: 'BİLGİSAYAR PROGRAMLAMA I',
    fInstr: 'Instructor', fInstrPh: 'Optional', fRoom: 'Room', fRoomPh: 'A103',
    fDay: 'Day', fFrom: 'From', fTo: 'To',
    addClassBtn: 'Add class',
    startEmpty: 'Start from scratch', restoreDefault: 'Restore default schedule',
    confirmEmpty: 'This clears every class and starts you with an empty schedule. Sure?',
    confirmRestore: 'This replaces the current schedule with the default one. Sure?',
    emptySched: 'Your schedule is empty', emptySchedSub: 'Add your first class with the form above.',
    classCount: n => n === 1 ? '1 class a week' : `${n} classes a week`,
    todayEyebrow: 'Your day',
  },
  tr: {
    dir: 'ltr', appName: 'Bozok Öğrenci',
    tabs: { today: 'Bugün', week: 'Hafta', assignments: 'Ödevler', courses: 'Dersler', schedule: 'Programım' },
    days: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    daysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    months: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
    dateFmt: (dow, d, m) => `${d} ${m} ${dow}`,
    classesToday: n => n === 1 ? 'Bugün 1 dersin var' : `Bugün ${n} dersin var`,
    calmDay: 'Sakin bir gün',
    badgeNow: 'Şimdi', badgeNext: 'Sıradaki', badgeDone: 'Bitti',
    noClasses: 'Bugün ders yok',
    noClassesSub: 'Günün üniversitesiz. İyi değerlendir.',
    nextClass: 'Yaklaşan ilk ders',
    weekEyebrow: 'Program', weekTitle: 'Tüm hafta', weekSub: 'Pazartesiden cumaya, bütün dersler önünde',
    assignEyebrow: 'Takip', assignTitle: 'Ödevler',
    assignCount: n => n === 1 ? '1 ödevin var' : `${n} ödevin var`,
    addFirst: 'İlk ödevini ekle',
    newAssign: 'Yeni ödev', fCourse: 'Ders', fTitle: 'Ödev adı', fDue: 'Son teslim tarihi',
    pickCourse: 'Ders seç', titlePh: 'örn. Ödev 2', addBtn: 'Ödevi ekle',
    dueLabel: 'Teslim', soon: 'Yaklaşıyor', overdue: 'Süresi geçti',
    dayWord: n => n === 0 ? 'Bugün' : n === 1 ? 'Yarın' : `${n} gün kaldı`,
    noAssign: 'Kayıtlı ödev yok', noAssignSub: 'BOYSIS’e ödev düşünce buraya ekle, gözünün önünde kalsın.',
    del: 'Sil',
    coursesEyebrow: 'Dönem', coursesTitle: 'Dersler',
    coursesSub: n => `${n} ders - Güz 2026`,
    schedEyebrow: 'Kurulum', schedTitle: 'Programım',
    schedSub: 'Derslerini düzenle ya da bu program senin değilse boş bir programla başla',
    addClass: 'Yeni ders',
    fCode: 'Ders kodu', fCodePh: 'BMH101.1', fName: 'Ders adı', fNamePh: 'BİLGİSAYAR PROGRAMLAMA I',
    fInstr: 'Öğretim üyesi', fInstrPh: 'İsteğe bağlı', fRoom: 'Derslik', fRoomPh: 'A103',
    fDay: 'Gün', fFrom: 'Başlangıç', fTo: 'Bitiş',
    addClassBtn: 'Dersi ekle',
    startEmpty: 'Sıfırdan başla', restoreDefault: 'Varsayılan programı geri yükle',
    confirmEmpty: 'Bütün dersler silinip boş bir programla başlanacak. Emin misin?',
    confirmRestore: 'Mevcut program silinip varsayılan programa dönülecek. Emin misin?',
    emptySched: 'Programın boş', emptySchedSub: 'Yukarıdaki formdan ilk dersini ekle.',
    classCount: n => n === 1 ? 'Haftada 1 ders' : `Haftada ${n} ders`,
    todayEyebrow: 'Günün',
  },
};

/* ===================== الحالة ===================== */
const SCHED_KEY = 'talib_schedule_v2';
const ASSIGN_KEY = 'talib_bozok_assignments_v1';
const LANG_KEY = 'talib_lang';
const Q = new URLSearchParams(location.search);

function getLang() {
  const q = Q.get('lang');
  if (q && STR[q]) return q;
  try { return localStorage.getItem(LANG_KEY) || 'ar'; } catch { return 'ar'; }
}
function setLang(l) {
  try { localStorage.setItem(LANG_KEY, l); } catch {}
  const t = STR[l];
  document.documentElement.lang = l;
  document.documentElement.dir = t.dir;
  document.getElementById('appName').textContent = t.appName;
  document.title = t.appName;
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n-tab]').forEach(el => { el.textContent = t.tabs[el.dataset.i18nTab]; });
}

function getSchedule() {
  try {
    const raw = localStorage.getItem(SCHED_KEY);
    if (raw !== null) return JSON.parse(raw);
  } catch {}
  return DEFAULT_SCHEDULE.slice();
}
function saveSchedule(s) { localStorage.setItem(SCHED_KEY, JSON.stringify(s)); }
function ensureSeed() {
  try { if (localStorage.getItem(SCHED_KEY) === null) saveSchedule(DEFAULT_SCHEDULE.slice()); } catch {}
}

/* ===================== أدوات ===================== */
const t2m = t => { const [h, m] = String(t).split(':').map(Number); return h * 60 + m; };
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hueFor = code => { let h = 0; for (const ch of String(code)) h = (h * 31 + ch.charCodeAt(0)) % 360; return h; };

/* باراميترات العرض التجريبي (?day=4&time=09:45&demo=1) — للتطوير فقط */
function now() {
  const d = new Date();
  const day = Q.has('day') ? Number(Q.get('day')) : d.getDay();
  const mins = Q.has('time') ? t2m(Q.get('time')) : d.getHours() * 60 + d.getMinutes();
  if (Q.has('day')) d.setDate(d.getDate() + ((day - d.getDay() + 7) % 7));
  return { day, mins, date: d };
}

const PERSON_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/></svg>';
const PIN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const TRASH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6.5 7l1 13h9l1-13"/></svg>';

/* ===================== شاشة اليوم ===================== */
function renderToday(t) {
  const { day, mins, date } = now();
  const sched = getSchedule();
  const todays = sched.filter(c => c.day === day).sort((a, b) => t2m(a.start) - t2m(b.start));
  const dateStr = t.dateFmt(t.days[day], date.getDate(), t.months[date.getMonth()]);

  let nextAny = null;
  for (let i = 0; i < 7 && !nextAny; i++) {
    const dd = (day + i) % 7;
    const list = sched.filter(c => c.day === dd).sort((a, b) => t2m(a.start) - t2m(b.start));
    nextAny = list.find(c => i > 0 || t2m(c.end) > mins) || null;
  }

  let body = '';
  if (!todays.length) {
    body = `
      <div class="empty">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>
        </div>
        <h3>${t.noClasses}</h3>
        <p>${t.noClassesSub}</p>
        ${nextAny ? `<p style="margin-top:14px;color:var(--amber-strong)">${t.nextClass}: <b dir="ltr">${esc(nextAny.name)}</b><br>${t.days[nextAny.day]} ${nextAny.start}</p>` : ''}
      </div>`;
  } else {
    let nextMarked = false;
    body = todays.map(c => {
      const s = t2m(c.start), e = t2m(c.end);
      const isNow = mins >= s && mins < e;
      const isDone = mins >= e;
      let badge = '';
      if (isNow) badge = `<span class="badge badge-now"><span class="pulse"></span>${t.badgeNow}</span>`;
      else if (!isDone && !nextMarked) { badge = `<span class="badge badge-next">${t.badgeNext}</span>`; nextMarked = true; }
      else if (isDone) badge = `<span class="badge badge-done">${t.badgeDone}</span>`;
      const pct = isNow ? Math.round(((mins - s) / (e - s)) * 100) : 0;
      return `
        <div class="card ${isNow ? 'is-now' : ''} ${isDone ? 'is-done' : ''}" style="--accent:hsl(${c.hue ?? hueFor(c.code)},45%,50%)">
          <div class="card-top">
            <span class="card-time" dir="ltr">${c.start} - ${c.end}</span>
            ${badge}
          </div>
          <div class="card-name" dir="ltr">${esc(c.name)}</div>
          <div class="card-meta">
            <span class="meta-item">${PIN_ICON}<b dir="ltr">${esc(c.room)}</b></span>
            ${c.instructor ? `<span class="meta-item">${PERSON_ICON}<span dir="ltr">${esc(c.instructor)}</span></span>` : ''}
          </div>
          ${isNow ? `<div class="progress"><i style="width:${pct}%"></i></div>` : ''}
        </div>`;
    }).join('');
  }

  return `
    <div class="page-head">
      <div class="eyebrow">${t.todayEyebrow}</div>
      <h1 class="page-title">${dateStr}</h1>
      <p class="page-sub">${todays.length ? t.classesToday(todays.length) : t.calmDay}</p>
    </div>
    ${body}`;
}

/* ===================== شاشة الأسبوع ===================== */
function renderWeek(t) {
  const { day } = now();
  const sched = getSchedule();
  const START = 8 * 60, END = 18 * 60, PPM = 1.5;
  const H = (END - START) * PPM;
  const days = [1, 2, 3, 4, 5];

  let hours = '';
  for (let h = 8; h <= 17; h++) hours += `<span style="top:${(h * 60 - START) * PPM}px">${String(h).padStart(2, '0')}:00</span>`;

  let cols = '';
  for (const d of days) {
    let lines = '';
    for (let h = 9; h <= 17; h++) lines += `<div class="hour-line" style="top:${(h * 60 - START) * PPM}px"></div>`;
    const list = sched.filter(c => c.day === d).sort((a, b) => t2m(a.start) - t2m(b.start));

    const lanes = [];
    const placed = list.map(c => {
      const s = t2m(c.start), e = t2m(c.end);
      let lane = lanes.findIndex(le => le <= s);
      if (lane === -1) { lanes.push(0); lane = lanes.length - 1; }
      lanes[lane] = e;
      return { c, s, e, lane };
    });
    const nLanes = Math.max(1, lanes.length);

    let blocks = '';
    for (const { c, s, e, lane } of placed) {
      const top = (s - START) * PPM, hgt = (e - s) * PPM - 2;
      const w = 100 / nLanes;
      const hue = c.hue ?? hueFor(c.code);
      blocks += `
        <div class="wblock" style="top:${top}px;height:${hgt}px;inset-inline-start:${lane * w}%;width:calc(${w}% - 3px);
          background:hsla(${hue},55%,45%,0.10);border-color:hsla(${hue},50%,45%,0.35);color:hsl(${hue},45%,30%)">
          <b dir="ltr">${esc(String(c.code).split('.')[0])}</b>
          <span dir="ltr">${esc(c.room)}</span>
        </div>`;
    }
    cols += `<div class="day-col ${d === day ? 'is-today' : ''}" style="height:${H}px">${lines}${blocks}</div>`;
  }

  return `
    <div class="page-head">
      <div class="eyebrow">${t.weekEyebrow}</div>
      <h1 class="page-title">${t.weekTitle}</h1>
      <p class="page-sub">${t.weekSub}</p>
    </div>
    <div class="week-wrap">
      <div class="week-grid">
        <div class="week-corner"></div>
        ${days.map(d => `<div class="week-day ${d === day ? 'is-today' : ''}">${t.days[d]}</div>`).join('')}
        <div class="week-body">
          <div class="time-gutter" style="height:${H}px">${hours}</div>
          ${cols}
        </div>
      </div>
    </div>`;
}

/* ===================== شاشة الواجبات ===================== */
function loadAssign() {
  try { return JSON.parse(localStorage.getItem(ASSIGN_KEY)) || []; } catch { return []; }
}
function saveAssign(a) { localStorage.setItem(ASSIGN_KEY, JSON.stringify(a)); }

function seedDemo() {
  if (loadAssign().length) return;
  const t = new Date();
  const iso = off => { const d = new Date(t); d.setDate(d.getDate() + off); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
  saveAssign([
    { id: 1, course: 'BMH236.1', title: 'تقرير قاعدة البيانات', due: iso(1) },
    { id: 2, course: 'BMH231.1', title: 'Ödev 1 - صفحة ويب شخصية', due: iso(3) },
    { id: 3, course: 'BMH114.1', title: 'Ödev 3 - تمارين C', due: iso(6) },
  ]);
}

function renderAssignments(t) {
  if (Q.has('demo')) seedDemo();
  const items = loadAssign().sort((a, b) => a.due.localeCompare(b.due));
  const sched = getSchedule();
  const nowD = new Date();
  const todayStr = `${nowD.getFullYear()}-${String(nowD.getMonth()+1).padStart(2,'0')}-${String(nowD.getDate()).padStart(2,'0')}`;
  const today = new Date(todayStr + 'T00:00:00');

  const cards = items.map(a => {
    const course = sched.find(c => c.code === a.course);
    const due = new Date(a.due + 'T00:00:00');
    const dueStr = `${due.getDate()} ${t.months[due.getMonth()]}`;
    const diff = Math.round((due - today) / 86400000);
    const soon = diff >= 0 && diff <= 2;
    const overdue = diff < 0;
    const hue = course ? (course.hue ?? hueFor(course.code)) : 36;
    const when = overdue ? t.overdue : t.dayWord(diff);
    return `
      <div class="card ${overdue ? 'is-overdue' : ''}" style="--accent:hsl(${hue},45%,50%)">
        <div class="assign-item">
          <div class="assign-info">
            <div class="assign-title">${esc(a.title)}</div>
            <div class="assign-sub"><span dir="ltr">${esc(a.course)}${course ? ' · ' + esc(course.name) : ''}</span> · ${t.dueLabel} ${dueStr}</div>
          </div>
          <div class="assign-due">
            <div class="when" style="color:${overdue ? 'var(--danger)' : soon ? 'var(--amber-strong)' : 'var(--text)'}">${when}</div>
            ${soon ? `<span class="badge badge-soon">${t.soon}</span>` : ''}
          </div>
          <button class="assign-del" data-del="${a.id}" aria-label="${t.del}">${TRASH_ICON}</button>
        </div>
      </div>`;
  }).join('');

  const seen = new Set();
  const options = sched.filter(c => !seen.has(c.code) && seen.add(c.code))
    .map(c => `<option value="${esc(c.code)}">${esc(c.code)} - ${esc(c.name)}</option>`).join('');

  return `
    <div class="page-head">
      <div class="eyebrow">${t.assignEyebrow}</div>
      <h1 class="page-title">${t.assignTitle}</h1>
      <p class="page-sub">${items.length ? t.assignCount(items.length) : t.addFirst}</p>
    </div>
    <form class="add-form" id="addForm">
      <h3>${t.newAssign}</h3>
      <div class="field">
        <label>${t.fCourse}</label>
        <select id="fCourse" required><option value="" disabled selected>${t.pickCourse}</option>${options}</select>
      </div>
      <div class="field">
        <label>${t.fTitle}</label>
        <input id="fTitle" type="text" placeholder="${t.titlePh}" required maxlength="80">
      </div>
      <div class="field">
        <label>${t.fDue}</label>
        <input id="fDue" type="date" required min="${todayStr}">
      </div>
      <button class="btn" type="submit">${t.addBtn}</button>
    </form>
    ${cards || `<div class="empty"><h3>${t.noAssign}</h3><p>${t.noAssignSub}</p></div>`}`;
}

/* ===================== شاشة المواد ===================== */
function renderCourses(t) {
  const sched = getSchedule();
  const list = [...sched].sort((a, b) => a.day - b.day || t2m(a.start) - t2m(b.start));
  return `
    <div class="page-head">
      <div class="eyebrow">${t.coursesEyebrow}</div>
      <h1 class="page-title">${t.coursesTitle}</h1>
      <p class="page-sub">${t.coursesSub(list.length)}</p>
    </div>
    ${list.map(c => `
      <div class="card" style="--accent:hsl(${c.hue ?? hueFor(c.code)},45%,50%)">
        <div class="course-code" dir="ltr">${esc(c.code)}</div>
        <div class="card-name" dir="ltr">${esc(c.name)}</div>
        <div class="card-meta">
          ${c.instructor ? `<span class="meta-item">${PERSON_ICON}<span dir="ltr">${esc(c.instructor)}</span></span>` : ''}
          <span class="meta-item">${PIN_ICON}<b dir="ltr">${esc(c.room)}</b></span>
        </div>
        <span class="course-when">${t.days[c.day]} · <span dir="ltr">${c.start} - ${c.end}</span></span>
      </div>`).join('') || `<div class="empty"><h3>${t.emptySched}</h3></div>`}`;
}

/* ===================== شاشة جدولي ===================== */
function renderSchedule(t) {
  const sched = getSchedule().sort((a, b) => a.day - b.day || t2m(a.start) - t2m(b.start));
  const dayOpts = [1,2,3,4,5].map(d => `<option value="${d}">${t.days[d]}</option>`).join('');

  let listHtml = '';
  if (!sched.length) {
    listHtml = `<div class="empty"><h3>${t.emptySched}</h3><p>${t.emptySchedSub}</p></div>`;
  } else {
    let lastDay = null;
    for (const c of sched) {
      if (c.day !== lastDay) {
        lastDay = c.day;
        listHtml += `<div class="sched-day-name">${t.days[c.day]}</div>`;
      }
      const idx = getSchedule().indexOf(c);
      listHtml += `
        <div class="card" style="--accent:hsl(${c.hue ?? hueFor(c.code)},45%,50%)">
          <div class="sched-row">
            <div class="assign-info">
              <div class="assign-title" dir="ltr" style="text-align:start">${esc(c.code)} · ${esc(c.name)}</div>
              <div class="assign-sub"><span dir="ltr">${c.start} - ${c.end}</span> · <span dir="ltr">${esc(c.room)}</span>${c.instructor ? ` · <span dir="ltr">${esc(c.instructor)}</span>` : ''}</div>
            </div>
            <button class="assign-del" data-del-class="${esc(c.code)}|${c.day}|${c.start}" aria-label="${t.del}">${TRASH_ICON}</button>
          </div>
        </div>`;
    }
  }

  return `
    <div class="page-head">
      <div class="eyebrow">${t.schedEyebrow}</div>
      <h1 class="page-title">${t.schedTitle}</h1>
      <p class="page-sub">${t.schedSub} · ${t.classCount(sched.length)}</p>
    </div>
    <div class="sched-actions">
      <button class="btn btn-danger-ghost" id="btnEmpty" type="button">${t.startEmpty}</button>
      <button class="btn btn-ghost" id="btnRestore" type="button">${t.restoreDefault}</button>
    </div>
    <form class="add-form" id="classForm">
      <h3>${t.addClass}</h3>
      <div class="field-row">
        <div class="field">
          <label>${t.fCode}</label>
          <input id="cCode" type="text" placeholder="${t.fCodePh}" required maxlength="16" dir="ltr">
        </div>
        <div class="field">
          <label>${t.fRoom}</label>
          <input id="cRoom" type="text" placeholder="${t.fRoomPh}" maxlength="12" dir="ltr">
        </div>
      </div>
      <div class="field">
        <label>${t.fName}</label>
        <input id="cName" type="text" placeholder="${t.fNamePh}" required maxlength="60" dir="ltr">
      </div>
      <div class="field">
        <label>${t.fInstr}</label>
        <input id="cInstr" type="text" placeholder="${t.fInstrPh}" maxlength="60" dir="ltr">
      </div>
      <div class="field">
        <label>${t.fDay}</label>
        <select id="cDay" required>${dayOpts}</select>
      </div>
      <div class="field-row">
        <div class="field">
          <label>${t.fFrom}</label>
          <input id="cStart" type="time" required value="08:30">
        </div>
        <div class="field">
          <label>${t.fTo}</label>
          <input id="cEnd" type="time" required value="10:15">
        </div>
      </div>
      <button class="btn" type="submit">${t.addClassBtn}</button>
    </form>
    ${listHtml}`;
}

/* ===================== التنقل والتشغيل ===================== */
const VIEWS = { today: renderToday, week: renderWeek, assignments: renderAssignments, courses: renderCourses, schedule: renderSchedule };
const view = document.getElementById('view');

function currentTab() {
  const h = location.hash.replace('#', '');
  return VIEWS[h] ? h : 'today';
}

function render() {
  const lang = getLang();
  const t = STR[lang];
  setLang(lang);
  ensureSeed();
  const tab = currentTab();
  view.innerHTML = VIEWS[tab](t);
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  const form = document.getElementById('addForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const items = loadAssign();
      items.push({
        id: Date.now(),
        course: document.getElementById('fCourse').value,
        title: document.getElementById('fTitle').value.trim(),
        due: document.getElementById('fDue').value,
      });
      saveAssign(items);
      render();
    });
  }
  view.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      saveAssign(loadAssign().filter(a => a.id !== Number(btn.dataset.del)));
      render();
    });
  });

  const cform = document.getElementById('classForm');
  if (cform) {
    cform.addEventListener('submit', e => {
      e.preventDefault();
      const code = document.getElementById('cCode').value.trim().toUpperCase();
      const name = document.getElementById('cName').value.trim();
      const start = document.getElementById('cStart').value;
      const end = document.getElementById('cEnd').value;
      if (!code || !name || !start || !end || t2m(start) >= t2m(end)) return;
      const sched = getSchedule();
      sched.push({
        code, name,
        instructor: document.getElementById('cInstr').value.trim(),
        room: document.getElementById('cRoom').value.trim() || '-',
        day: Number(document.getElementById('cDay').value),
        start, end,
        hue: hueFor(code),
      });
      saveSchedule(sched);
      render();
    });
  }
  view.querySelectorAll('[data-del-class]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [code, day, start] = btn.dataset.delClass.split('|');
      saveSchedule(getSchedule().filter(c => !(c.code === code && String(c.day) === day && c.start === start)));
      render();
    });
  });
  const btnEmpty = document.getElementById('btnEmpty');
  if (btnEmpty) btnEmpty.addEventListener('click', () => { if (confirm(t.confirmEmpty)) { saveSchedule([]); render(); } });
  const btnRestore = document.getElementById('btnRestore');
  if (btnRestore) btnRestore.addEventListener('click', () => { if (confirm(t.confirmRestore)) { saveSchedule(DEFAULT_SCHEDULE.slice()); render(); } });
}

document.querySelectorAll('.tab').forEach(b => {
  b.addEventListener('click', () => { location.hash = b.dataset.tab; });
});
document.querySelectorAll('.lang-switch button').forEach(b => {
  b.addEventListener('click', () => {
    try { localStorage.setItem(LANG_KEY, b.dataset.lang); } catch {}
    render();
  });
});
window.addEventListener('hashchange', render);
render();
