/* Mon vocabulaire — toutes les données restent sur l'appareil (localStorage). */
{
const APP_VERSION = '2.5.0';
const DAY = 86400000;
const INTER = [0, 1, 3, 7, 16, 35, 90];
const PTS = [0, 1, 2, 4, 8, 16, 40];
const BOXL = ['Nouv.', '1 j', '3 j', '1 sem', '2 sem', '1 mois', '3 mois'];
const TOP = INTER.length - 1;
// link of the support page (Ko-fi, Buy Me a Coffee, PayPal…); empty = no support button
const SUPPORT_URL = '';
const PRESETS = {
  foret: { name: 'Forêt', main: '#14613f', accent: '#c8f169' },
  cobalt: { name: 'Cobalt', main: '#1f3fd1', accent: '#ffd84a' },
  seoul: { name: 'Séoul', main: '#c60c30', accent: '#ffe9a8' },
  corail: { name: 'Corail', main: '#e0533b', accent: '#fff1a8' },
  prune: { name: 'Prune', main: '#5e1d52', accent: '#ffb3d1' },
  nuit: { name: 'Nuit', main: '#10141f', accent: '#7cc4ff', btn: '#2f6bff' }
};
const LANG_PRESETS = [['Anglais', 'en'], ['Coréen', 'ko'], ['Espagnol', 'es'], ['Italien', 'it'], ['Allemand', 'de'], ['Portugais', 'pt'], ['Japonais', 'ja'], ['Chinois', 'zh']];
const STARTER = `to work = travailler
to live = habiter / vivre
to speak = parler
to like = aimer
to drive = conduire
to go = aller
to study = étudier
every day = tous les jours
girlfriend = petite amie / copine
relationship = relation / couple
truck = camion
to build = construire
construction = bâtiment / construction
to be hungry = avoir faim
to be cold = avoir froid
today = aujourd'hui
Saturday = samedi`;
const THEMES = [
  ['Politesse et expressions',
   "bonjour salut merci s'il vous plait s'il te plait pardon excusez moi excuse moi au revoir bienvenue oui non d'accord bonsoir bonne nuit de rien felicitations bravo enchante desole bonne journee a bientot a plus tard ca va comment ca va peut etre bien sur",
   "hello hi thanks thank you please sorry excuse me goodbye bye welcome yes no okay ok good morning good evening good night you're welcome congratulations nice to meet you how are you maybe of course"],
  ['Chiffres et nombres',
   "zero un deux trois quatre cinq six sept huit neuf dix onze douze treize quatorze quinze seize vingt trente quarante cinquante soixante cent cents mille million milliard premier premiere deuxieme troisieme quatrieme cinquieme dernier moitie quart double nombre numero chiffre douzaine",
   "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million billion first second third fourth fifth last half quarter number dozen"],
  ['Temps et calendrier',
   "lundi mardi mercredi jeudi vendredi samedi dimanche janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre aujourd'hui demain hier semaine mois annee an ans jour jours matin apres midi soir soiree nuit midi minuit heure heures minute seconde week end saison printemps ete automne hiver tous les jours toujours jamais souvent parfois maintenant tard tot bientot date anniversaire calendrier horaire",
   "monday tuesday wednesday thursday friday saturday sunday january february march april may june july august september october november december today tomorrow yesterday week month year day morning afternoon evening night noon midnight hour minute second weekend season spring summer autumn fall winter always never often sometimes now late early soon date birthday o'clock"],
  ['Famille et relations',
   "mere pere maman papa frere soeur fils fille enfant enfants bebe mari femme epouse copine copain petite amie petit ami ami amie amis parents grand mere grand pere oncle tante cousin cousine neveu niece famille relation couple mariage marie voisin voisine homme garcon gens personne",
   "mother father mom mum dad brother sister son daughter child children baby husband wife girlfriend boyfriend friend friends parents grandmother grandfather uncle aunt cousin nephew niece family relationship couple wedding married neighbour neighbor man woman boy girl people person"],
  ['Travail et chantier',
   "travail boulot travailler batiment construction chantier ouvrier electricien plombier macon patron chef collegue client outil outils marteau perceuse tournevis cable fil mur toit beton ciment brique echelle casque bureau reunion salaire entreprise societe metier apprenti apprentissage plan electricite prise interrupteur tableau electrique gaine securite contrat stage formation bts vis clou scie metre niveau peinture",
   "work job worker building construction site electrician plumber mason boss manager colleague coworker customer client tool tools hammer drill screwdriver cable wire wall roof concrete cement brick ladder helmet office meeting salary company business apprentice plan electricity socket outlet switch safety contract training screw nail saw tape paint"],
  ['Maison',
   "maison appartement chambre cuisine salle de bain salon toilettes porte fenetre lit table chaise canape cle loyer jardin garage escalier etage lumiere meuble placard frigo douche lampe sol plafond",
   "house home flat apartment bedroom kitchen bathroom living room toilet door window bed table chair sofa couch key rent garden yard garage stairs floor light furniture cupboard fridge shower lamp ceiling"],
  ['Nourriture et boissons',
   "eau pain viande poisson poulet boeuf porc riz fruit fruits legume legumes pomme banane orange cafe the biere vin lait oeuf oeufs fromage repas petit dejeuner dejeuner diner restaurant faim soif sucre sel poivre soupe gateau nouilles kimchi boisson nourriture manger boire",
   "water bread meat fish chicken beef pork rice fruit vegetable vegetables apple banana orange coffee tea beer wine milk egg eggs cheese meal breakfast lunch dinner restaurant hungry thirsty sugar salt pepper soup cake noodles drink food eat"],
  ['Transports et voyage',
   "voiture camion bus train avion metro velo moto gare aeroport billet route rue autoroute passeport visa valise hotel voyage voyager taxi vol arret station trajet essence parking conduire",
   "car truck lorry bus train plane airplane subway underground metro bike bicycle motorbike station airport ticket road street highway motorway passport visa suitcase luggage hotel trip travel journey taxi flight stop fuel petrol gas parking drive"],
  ['Corps et santé',
   "tete main mains pied pieds bras jambe jambes oeil yeux bouche dent dents dos coeur ventre nez oreille oreilles cheveux malade maladie medecin docteur hopital douleur pharmacie medicament sante fievre rhume blessure",
   "head hand hands foot feet arm leg legs eye eyes mouth tooth teeth back heart stomach belly nose ear ears hair sick ill illness doctor hospital pain pharmacy medicine health fever cold injury"],
  ['Couleurs',
   "rouge bleu bleue vert verte jaune noir noire blanc blanche gris grise rose violet marron couleur",
   "red blue green yellow black white grey gray pink purple brown colour color"],
  ['Argent et achats',
   "argent banque prix euro euros won compte carte bancaire magasin marche supermarche cher chere bon marche monnaie facture ticket caisse acheter payer vendre",
   "money bank price euro euros won account card shop store market supermarket expensive cheap change bill receipt cashier buy pay sell"],
  ['Pays et langues',
   "france coree anglais anglaise francais francaise coreen coreenne pays ville langue nationalite seoul marseille angleterre amerique etats unis europe asie japon chine",
   "france korea english french korean country city town language nationality seoul marseille england america usa europe asia japan china"]
];
const ADJ = "grand grande petit petite bon bonne mauvais mauvaise beau belle joli jolie nouveau nouvelle vieux vieille jeune facile difficile heureux heureuse triste fatigue fatiguee content contente chaud chaude froid froide rapide lent lente fort forte faible gentil gentille mechant drole calme occupe libre long longue court courte haut haute bas basse proche loin";
const ADJ_EN = "big large small little good bad beautiful pretty nice new old young easy difficult hard happy sad tired glad hot warm cold fast quick slow strong weak kind funny calm busy free long short high low near far";
const deaccent = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const joinDigits = s => String(s).replace(/(\d)[\s.,\u00a0\u202f'’](?=\d{3}(?!\d))/g, '$1').replace(/(\d)[\s.,\u00a0\u202f'’](?=\d{3}(?!\d))/g, '$1');
const frKey = s => deaccent(joinDigits(s).toLowerCase()).replace(/[’‘`´]/g, "'").replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[^a-z0-9' -]/g, ' ').replace(/\s+/g, ' ').trim();
// tokens: lower, no accents, hyphens/apostrophes as spaces, leading article removed when something follows
const tok = (s, en) => {
  let t = ' ' + frKey(s).replace(/[-']/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  t = en ? t.replace(/^ (to|a|an|the) (?=\S)/, ' ') : t.replace(/^ (le|la|les|l|un|une|des|du|de la|d) (?=\S)/, ' ');
  return t;
};
function splitKeys(list) {
  // multi-word keys are the known phrases; everything else is one word
  const phrases = ["s'il vous plait", "s'il te plait", 'excusez moi', 'excuse moi', 'au revoir', "d'accord", 'bonne nuit', 'de rien', 'bonne journee', 'a bientot', 'a plus tard', 'ca va', 'comment ca va', 'peut etre', 'bien sur', 'thank you', 'excuse me', 'good morning', 'good evening', 'good night', "you're welcome", 'nice to meet you', 'how are you', 'of course', 'apres midi', 'week end', 'tous les jours', 'petite amie', 'petit ami', 'grand mere', 'grand pere', 'tableau electrique', 'salle de bain', 'living room', 'petit dejeuner', 'carte bancaire', 'bon marche', 'etats unis'];
  let rest = ' ' + list + ' ';
  const keys = [];
  phrases.forEach(p => { if (rest.includes(' ' + p + ' ')) { keys.push(p); rest = rest.replace(' ' + p + ' ', ' '); } });
  return keys.concat(rest.split(' ').filter(Boolean)).map(k => k.replace(/'/g, ' '));
}
const THEME_SETS = THEMES.map(([name, fr, en]) => [name, splitKeys(fr), splitKeys(en)]);
const ADJ_SET = splitKeys(ADJ), ADJ_EN_SET = splitKeys(ADJ_EN);
function guessTheme(w, langCode) {
  const learned = cfg.learn || {};
  for (const f of w.fr) { const k = frKey(f); if (learned[k]) return learned[k]; }
  const frs = w.fr.map(f => tok(f, false));
  const ens = langCode === 'en' ? w.en.map(t => tok(t, true)) : [];
  const hit = (arr, k) => arr.some(t => t.includes(' ' + k + ' '));
  if ([...w.fr, ...w.en].some(x => /\d/.test(x))) return 'Chiffres et nombres';
  if (langCode === 'en' && w.en.some(t => /^to\s/i.test(t.trim()))) return 'Verbes';
  let best = null, bestN = 0;
  for (const [name, fk, ek] of THEME_SETS) {
    const n = fk.filter(k => hit(frs, k)).length + ek.filter(k => hit(ens, k)).length;
    if (n > bestN) { best = name; bestN = n; }
  }
  if (best) return best;
  const plain = w.fr.map(frKey);
  if (plain.some(f => /^(avoir|etre|faire|aller|se|s') /.test(f) || (!f.includes(' ') && /(er|ir|oir|re)$/.test(f) && f.length > 3))) return 'Verbes';
  if (ADJ_SET.some(k => hit(frs, k)) || ADJ_EN_SET.some(k => hit(ens, k))) return 'Adjectifs';
  return 'Divers';
}
// French answers: tolerant (accents, articles, plurals, small typos)
const frLoose = s => frKey(s).replace(/^(le|la|les|un|une|des|du|de la|de l'|l'|d')\s*/, '').replace(/[-']/g, ' ').replace(/\s+/g, ' ').trim().split(' ').map(x => x.length > 3 ? x.replace(/[sx]$/, '') : x).join(' ').replace(/(.)\1+/g, '$1');
function lev(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  let p = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const c = [i];
    for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    p = c;
  }
  return p[b.length];
}
// typo tolerance: same first letter, long enough word, and not another French word the user knows
function frClose(given, target, known) {
  const g = frLoose(given), t = frLoose(target);
  if (!g) return false;
  if (g === t) return true;
  const tol = t.length >= 10 ? 2 : t.length >= 6 ? 1 : 0;
  if (!tol || g[0] !== t[0] || (known && known.has(g))) return false;
  return lev(g, t) <= tol;
}

const defaultCfg = () => ({
  rev: 0,
  langs: [{ id: 'en', name: 'Anglais', code: 'en' }],
  libs: [{ id: 'default', lang: 'en', name: 'Premières leçons' }],
  theme: { preset: 'foret', mode: 'auto', main: '#14613f', accent: '#c8f169' },
  filt: { on: ['en'], to: ['fr', 'en'], mix: true, theme: 'all' },
  stats: { day: '', streak: 0, best: 0, bestScore: 0, goal: 20, days: {}, sprintBest: 0, bossWins: 0, duels: 0, bestCombo: 0 },
  badges: {},
  duelNames: ['Joueur 1', 'Joueur 2']
});

let words = new Map();
let cfg = defaultCfg();
let view = 'rev';
let backend = null;
let framed = false;
let session = null;
let popBox = -1, popScore = false;
const ui = { theme: 'all', q: '', libLang: null, openId: null, importText: '', addLang: 'en', addLib: '__auto', addNew: false, editLib: null, confirm: null, newLib: false, restore: null, backupText: '' };

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = s => joinDigits(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, ' ').trim().replace(/[.!?;,]+$/, '').trim();
const split = s => String(s).split(/[\/;]/).map(x => x.trim()).filter(Boolean);
const midnight = t => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
const ymd = t => { const d = new Date(t); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const isDue = w => w.due <= Date.now();
const wLang = w => w.lang || 'en';
const wLib = w => w.lib || 'default';
const getLang = id => cfg.langs.find(l => l.id === id) || { id, name: id, code: '' };
const getLib = id => cfg.libs.find(l => l.id === id) || { id, name: 'Sans thème', lang: '' };
const lower = s => s.toLowerCase();
const normT = (s, lang) => getLang(lang).code === 'en' ? norm(s).replace(/^to /, '') : norm(s);
const score = () => [...words.values()].reduce((s, w) => s + PTS[w.lvl], 0);
const plural = (n, a, b) => n + ' ' + (n > 1 ? b : a);
const fmt = n => n.toLocaleString('fr-FR');

/* ---------- config ---------- */
function mergeCfg(d) {
  d = JSON.parse(JSON.stringify(d || {}));
  const c = defaultCfg();
  const out = { ...c, ...d, theme: { ...c.theme, ...(d.theme || {}) }, stats: { ...c.stats, ...(d.stats || {}) }, langs: d.langs?.length ? d.langs : c.langs, libs: (d.libs || c.libs).map(l => ({ id: l.id, lang: l.lang, name: l.name })) };
  const f = d.filt || {};
  const ids = out.langs.map(l => l.id);
  let on = Array.isArray(f.on) ? f.on : (f.lang && f.lang !== 'all' ? [f.lang] : ids);
  on = on.filter(x => ids.includes(x));
  if (!on.length) on = ids.slice();
  let ans = f.ans;
  if (typeof ans === 'string' || !ans) { const v = typeof ans === 'string' ? ans : 'mix'; ans = {}; ids.forEach(i => ans[i] = v); }
  let to = Array.isArray(f.to) ? f.to : null, mix = !!f.mix;
  if (!to) {
    const own = Array.isArray(f.own) ? f.own : (f.mode && ids.includes(f.mode) ? [f.mode] : []);
    mix = Array.isArray(f.own) ? !!f.mix : (f.mode ? f.mode === 'mix' : true);
    to = own.length ? own.slice() : ['fr'];
    if (own.length && on.some(x => !own.includes(x))) to.unshift('fr');
  }
  to = to.filter(x => x === 'fr' || ids.includes(x));
  if (!to.length) to = ['fr'];
  out.filt = { on, to, mix, hide: !!f.hide, theme: f.theme && f.theme !== 'all' && out.libs.some(l => l.id === f.theme) ? f.theme : (f.lib && f.lib !== 'all' && out.libs.some(l => l.id === f.lib) ? f.lib : 'all') };
  return out;
}

/* ---------- storage ---------- */
function localBackend() {
  const KEY = 'vocab-anglais-v1', CK = 'vocab-config-v1';
  try { JSON.parse(localStorage.getItem(KEY) || '[]').forEach(w => words.set(w.id, w)); } catch (e) {}
  try { const c = localStorage.getItem(CK); if (c) cfg = mergeCfg(JSON.parse(c)); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...words.values()])); } catch (e) { toast('Mémoire du téléphone pleine : fais une sauvegarde.'); } };
  return { put: save, del: save, cfg: () => { try { localStorage.setItem(CK, JSON.stringify(cfg)); } catch (e) {} } };
}
function remoteBackend(db, id) {
  const col = db.collection('data/users/' + id);
  const chain = {};
  const queue = (key, fn) => {
    chain[key] = (chain[key] || Promise.resolve()).then(fn).catch(e => {
      toast(e && e.code === 'quota_exceeded' ? 'Espace plein : supprime quelques mots.' : "Enregistrement impossible pour l'instant.");
    });
  };
  let first = true;
  const timer = setTimeout(() => setStatus('Connexion lente : tes mots arrivent…'), 10000);
  col.onSnapshot(snap => {
    if (!snap.metadata.fromCache) { clearTimeout(timer); setStatus(''); }
    const m = new Map();
    snap.docs.forEach(d => {
      if (!d.exists) return;
      if (d.id === '_config') { const data = d.data(); if ((data.rev || 0) >= (cfg.rev || 0)) cfg = mergeCfg(data); }
      else m.set(d.id, { ...JSON.parse(JSON.stringify(d.data())), id: d.id });
    });
    words = m;
    applyTheme();
    if (first) { first = false; startSessionIfNeeded(); firstRun(); }
    render(true);
  }, () => { clearTimeout(timer); setStatus('Mots indisponibles pour le moment.'); });
  return {
    put: w => { const { id: wid, ...data } = w; queue(wid, () => col.doc(wid).set(data)); },
    del: w => queue(w.id, () => col.doc(w.id).delete()),
    cfg: () => { const c = JSON.parse(JSON.stringify(cfg)); queue('_config', () => col.doc('_config').set(c)); }
  };
}
const saveCfg = () => { cfg.rev = (cfg.rev || 0) + 1; backend?.cfg(); };
function setStatus(t) { $('#status').textContent = t; }

const canUpdate = () => !framed && /^https?:$/.test(location.protocol);
async function latestVersion() {
  try { const r = await fetch('version.json?t=' + Date.now(), { cache: 'no-store' }); return r.ok ? (await r.json()).version : null; } catch (e) { return null; }
}
async function hardUpdate() {
  toast('Mise à jour en cours…');
  try { if (ui.newVersion) localStorage.setItem('vocab-upd-tried', ui.newVersion); } catch (e) {}
  try { const regs = await navigator.serviceWorker?.getRegistrations(); await Promise.all((regs || []).map(r => r.unregister())); } catch (e) {}
  try { const keys = await caches.keys(); await Promise.all(keys.map(k => caches.delete(k))); } catch (e) {}
  location.replace(location.pathname + '?v=' + Date.now());
}
async function checkUpdate(manual) {
  if (!canUpdate()) return;
  const v = await latestVersion();
  let tried = null; try { tried = localStorage.getItem('vocab-upd-tried'); } catch (e) {}
  if (v && v !== APP_VERSION) { ui.newVersion = v; ui.updFailed = tried === v; render(); }
  else if (v) { try { localStorage.removeItem('vocab-upd-tried'); } catch (e) {} }
  else if (manual) toast(v ? 'Tu as la dernière version.' : 'Impossible de vérifier (pas de connexion ?).');
}
async function boot() {
  let db = null, user = null, id = null;
  try { framed = window.top !== window; } catch (e) { framed = true; }
  if (framed) for (let i = 0; i < 20 && !window.claude?.use; i++) await new Promise(r => setTimeout(r, 100));
  try {
    if (window.claude?.use) {
      [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      id = user ? await user.id() : null;
    }
  } catch (e) { db = null; }
  if (db && id) { backend = remoteBackend(db, id); setStatus('Chargement de tes mots…'); }
  else {
    backend = localBackend();
    setStatus(framed ? 'Mode hors ligne : les mots restent sur cet appareil.' : '');
    applyTheme(); startSessionIfNeeded(); checkBadges(); firstRun(); render();
    checkUpdate(false);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) checkUpdate(false); });
  }
}

/* ---------- theme ---------- */
function lum(hex) {
  const n = parseInt(hex.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; });
  return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
}
function applyTheme() {
  if (!['auto', 'light', 'dark'].includes(cfg.theme.mode)) cfg.theme.mode = 'auto';
  const t = cfg.theme, p = t.preset === 'custom' ? { main: t.main, accent: t.accent } : (PRESETS[t.preset] || PRESETS.foret);
  const r = document.documentElement.style;
  r.setProperty('--main', p.main);
  r.setProperty('--accent', p.accent);
  r.setProperty('--btn', p.btn || (lum(p.main) > .45 ? '#121626' : p.main));
  r.setProperty('--bandInk', lum(p.main) > .45 ? '#121626' : '#ffffff');
  if (t.mode === 'auto') r.removeProperty('color-scheme'); else r.setProperty('color-scheme', t.mode);
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.content = p.main;
}

/* ---------- words ---------- */
function themeId(lang, name) {
  let l = cfg.libs.find(x => x.lang === lang && norm(x.name) === norm(name));
  if (!l) { l = { id: uid(), lang, name }; cfg.libs.push(l); cfg._dirty = true; }
  return l.id;
}
function addWords(pairs, lang, lib) {
  let added = 0, merged = 0;
  const code = getLang(lang).code;
  const key = w => wLang(w) + '|' + normT(w.en[0], wLang(w));
  const byKey = new Map([...words.values()].map(w => [key(w), w]));
  for (const [t, fr] of pairs) {
    const k = lang + '|' + normT(t[0], lang);
    const ex = byKey.get(k);
    if (ex) {
      const all = [...ex.fr];
      fr.forEach(f => { if (!all.some(a => norm(a) === norm(f))) all.push(f); });
      if (all.length !== ex.fr.length) { update(ex, { fr: all }); merged++; }
      continue;
    }
    const forced = pairs.themes?.get(t);
    const wl = forced ? themeId(lang, forced) : lib === '__auto' ? themeId(lang, guessTheme({ en: t, fr }, code)) : lib;
    const w = { id: uid(), en: t, fr, lang, lib: wl, lvl: 0, due: Date.now(), ok: 0, ko: 0, added: Date.now() };
    words.set(w.id, w); byKey.set(k, w); backend.put(w); added++;
  }
  if (cfg._dirty) { delete cfg._dirty; saveCfg(); }
  if (added) { const t0 = midnight(Date.now()); if ([...words.values()].filter(w => (w.added || 0) >= t0).length >= 100) award('boulimique'); }
  return { added, merged };
}
function parseImport(text) {
  const pairs = [], bad = [];
  pairs.themes = new Map();
  let cur = null;
  text.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    const h = l.match(/^(?:#+|th[eè]me\s*:)\s*(.+)$/i);
    if (h) { cur = h[1].trim(); return; }
    const m = l.match(/^(.+?)\s*(?:=|\t)\s*(.+)$/);
    if (!m) { bad.push(l); return; }
    const t = split(m[1]), fr = split(m[2]);
    if (t.length && fr.length) { pairs.push([t, fr]); if (cur) pairs.themes.set(t, cur); } else bad.push(l);
  });
  return { pairs, bad };
}
function update(w, patch) { const n = { ...w, ...patch }; words.set(n.id, n); backend.put(n); return n; }
function autoSort(lang) {
  const code = getLang(lang).code, before = [];
  const hadWords = new Set([...words.values()].filter(w => wLang(w) === lang).map(wLib));
  let moved = 0;
  [...words.values()].filter(w => wLang(w) === lang).forEach(w => {
    const id = themeId(lang, guessTheme(w, code));
    if (id !== wLib(w)) { before.push([w.id, wLib(w)]); update(w, { lib: id }); moved++; }
  });
  const used = new Set([...words.values()].map(wLib));
  const removed = cfg.libs.filter(l => l.lang === lang && hadWords.has(l.id) && !used.has(l.id));
  cfg.libs = cfg.libs.filter(l => !removed.includes(l));
  delete cfg._dirty; saveCfg();
  return { moved, undo: () => { cfg.libs.push(...removed); before.forEach(([id, lib]) => { const w = words.get(id); if (w) update(w, { lib }); }); saveCfg(); } };
}
function libsOf(lang) { return cfg.libs.filter(l => l.lang === lang).sort((a, b) => a.name.localeCompare(b.name)); }
function ensureLib(lang) {
  let l = libsOf(lang)[0];
  if (!l) { l = { id: uid(), lang, name: 'Général' }; cfg.libs.push(l); saveCfg(); }
  return l.id;
}
function addLanguage(name, code) {
  const l = { id: uid(), name, code };
  cfg.langs.push(l);
  cfg.libs.push({ id: uid(), lang: l.id, name: 'Général' });
  cfg.filt.on.push(l.id);
  saveCfg();
  return l;
}

/* ---------- progress ---------- */
// the last title is hidden: it is never announced before being reached
const TITLES = [[0, 'Débutant'], [50, 'Apprenti'], [150, 'Explorateur'], [400, 'Voyageur'], [1000, 'Polyglotte'], [2500, 'Maître des mots'], [5000, 'Légende'], [20000, 'Immortel', true]];
const titleOf = sc => { let t = TITLES[0]; for (const x of TITLES) if (sc >= x[0]) t = x; return t[1]; };
const nextTitle = sc => TITLES.find(x => x[0] > sc && !x[2]);
const goalOf = () => cfg.stats.goal || 20;
const todayCount = () => (cfg.stats.days || {})[ymd(Date.now())] || 0;
// goal of a given day (remembered for each day, so changing the goal does not rewrite the past)
const dayGoal = k => k === ymd(Date.now()) ? goalOf() : ((cfg.stats.goals || {})[k] || goalOf());
function streakNow() {
  const d = cfg.stats.days || {};
  let t = Date.now();
  if ((d[ymd(t)] || 0) < dayGoal(ymd(t))) t -= DAY;
  let n = 0;
  while ((d[ymd(t)] || 0) >= dayGoal(ymd(t))) { n++; t -= DAY; }
  return n;
}
function addDay() {
  const st = cfg.stats, k = ymd(Date.now());
  st.days = { ...(st.days || {}) };
  st.days[k] = (st.days[k] || 0) + 1;
  st.goals = { ...(st.goals || {}), [k]: goalOf() };
  if (st.days[k] === goalOf()) ui.goalDone = true;
  const keys = Object.keys(st.days);
  if (keys.length > 420) { const lim = Date.now() - 400 * DAY; keys.forEach(x => { const [y, m, dd] = x.split('-').map(Number); if (new Date(y, m - 1, dd).getTime() < lim) { delete st.days[x]; delete st.goals[x]; } }); }
  const sk = streakNow(); if (sk > (st.best || 0)) st.best = sk;
}
const ring = (p, size, sw, col) => { const r = (size - sw) / 2, c = 2 * Math.PI * r, v = Math.max(0, Math.min(1, p)); return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="${sw}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col || 'var(--accent)'}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c * v} ${c}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`; };

/* ---------- badges ---------- */
// 10 families of 6 tiers; each tier has its own name and picture (badge-<img>-<tier>.webp)
const ACH_VER = 3;
const ACH = [
  { id: 'goal', label: 'Défis du jour réussis', unit: 'défis réussis', steps: [1, 10, 50, 100, 365, 730], names: ['Premier défi', 'Assidu', 'Acharné', 'Infatigable', 'Légende du quotidien', 'Éternel'], img: 'defis' },
  { id: 'streak', label: 'Jours d\'affilée', unit: 'jours d\'affilée', steps: [3, 7, 30, 100, 200, 365], names: ['Petite flamme', 'Brasier', 'Incendie', 'Volcan', 'Soleil', 'Supernova'], img: 'serie' },
  { id: 'combo', label: 'Bonnes réponses d\'affilée', unit: 'bonnes réponses d\'affilée', steps: [10, 25, 50, 100, 200, 500], names: ['En rythme', 'Sur sa lancée', 'Inarrêtable', 'Machine', 'Perfection', 'Dieu vivant'], img: 'combo' },
  { id: 'total', label: 'Ascension', unit: 'bonnes réponses au total', steps: [100, 500, 2000, 5000, 15000, 30000], names: ['Caillou', 'Rocher', 'Colline', 'Montagne', 'Sommet enneigé', 'Olympe'], img: 'ascension' },
  { id: 'words', label: 'Mots dans une bibliothèque', unit: 'mots dans une même langue', steps: [250, 1000, 2500, 5000, 8000, 12000], names: ['Carnet', 'Cahier', 'Dictionnaire', 'Encyclopédie', 'Grande bibliothèque', 'Bibliothèque d\'Alexandrie'], img: 'mots' },
  { id: 'mastered', label: 'Mots maîtrisés', unit: 'mots maîtrisés dans une même langue', steps: [1, 100, 500, 1500, 3000, 6000], names: ['Première graine', 'Jeune pousse', 'Arbuste', 'Grand arbre', 'Forêt', 'Arbre-monde'], img: 'maitrise' },
  { id: 'sprint', label: 'Sprint 60 s', unit: 'bonnes réponses en 60 s', steps: [10, 15, 20, 25, 30, 40], names: ['Étincelle', 'Double éclair', 'Boule de foudre', 'Orage', 'Tempête', 'Foudre divine'], img: 'sprint' },
  { id: 'boss', label: 'Boss battus', unit: 'boss battus (un seul compte par jour)', steps: [1, 10, 50, 150, 300, 500], names: ['Genin', 'Chūnin', 'Jōnin', 'Rōnin', 'Shōgun', 'Kami'], img: 'boss' },
  { id: 'duels', label: 'Duels joués', unit: 'duels joués', steps: [1, 5, 20, 50, 100, 500], names: ['Challenger', 'Rival', 'Duelliste', 'Gladiateur', 'Maître d\'armes', 'Gladiateur invaincu'], img: 'duels' },
  { id: 'langs', label: 'Polyglotte', unit: 'langues parlées', hint: 'Le français compte pour une langue, puis chaque langue où tu maîtrises au moins 500 mots.', steps: [2, 3, 4, 5, 6, 8], names: ['Bilingue', 'Trilingue', 'Polyglotte', 'Interprète', 'Bâtisseur', 'Tour de Babel'], img: 'langues' }
];
// secret badges: hidden ("?") until found
const SECRETS = [
  ['oiseau-nuit', 'Oiseau de nuit', 'Réviser entre minuit et 4 h du matin.'],
  ['leve-tot', 'Lève-tôt', 'Réviser entre 4 h et 6 h du matin.'],
  ['phenix', 'Phénix', 'Battre un boss avec une seule vie restante.'],
  ['fair-play', 'Fair-play', 'Perdre un duel 0 à 10.'],
  ['marathonien', 'Marathonien', 'Faire 300 bonnes réponses dans la journée.'],
  ['retour-heros', 'Le retour du héros', 'Revenir réviser après plus de 30 jours d\'absence.'],
  ['sans-filet', 'Sans filet', 'Faire au moins 20 bonnes réponses dans la journée sans aucune erreur.'],
  ['photo-finish', 'Photo finish', 'Trouver une bonne réponse dans la dernière seconde d\'un sprint.'],
  ['meteore', 'Météore', 'Faire 10 bonnes réponses en 15 secondes pendant un sprint.'],
  ['vengeance', 'Vengeance', 'Battre un boss juste après avoir perdu contre lui.'],
  ['jour-an', 'Jour de l\'an', 'Réviser le 1er janvier.'],
  ['lutin', 'Lutin studieux', 'Réviser le 25 décembre.'],
  ['grand-ecart', 'Grand écart', 'Répondre dans 3 langues différentes le même jour.'],
  ['feu-sacre', 'Feu sacré', 'Réussir un défi de 50 sept jours de suite.'],
  ['collectionneur', 'Collectionneur', 'Obtenir le premier niveau de toutes les familles de succès.'],
  ['faucheuse', 'La Faucheuse', 'Réviser le soir d\'Halloween, le 31 octobre.'],
  ['coeur', 'Cœur d\'artichaut', 'Réviser le jour de la Saint-Valentin.'],
  ['poisson-avril', 'Poisson d\'avril', 'Réviser le 1er avril.'],
  ['seollal', 'Seollal', 'Réviser du coréen pendant le Nouvel An coréen.'],
  ['un-an', 'Un an déjà', 'Utiliser l\'appli un an après avoir ajouté ton premier mot.'],
  ['sisyphe', 'Sisyphe', 'Rater le même mot 10 fois.'],
  ['elephant', 'Mémoire d\'éléphant', 'Amener un mot jusqu\'à la case 3 mois sans jamais le rater.'],
  ['insomniaque', 'Insomniaque', 'Réviser entre minuit et 4 h trois nuits dans la même semaine.'],
  ['boulimique', 'Boulimique', 'Ajouter 100 mots dans la même journée.'],
  ['perfectionniste', 'Perfectionniste', 'Réussir un défi de 50 sans aucune erreur dans la journée.'],
  ['escargot', 'Escargot', 'Finir un sprint sans aucune bonne réponse.']
];
const SEOLLAL = ['2026-02-17', '2027-02-06', '2028-01-26', '2029-02-13', '2030-02-03', '2031-01-23', '2032-02-11', '2033-01-31', '2034-02-19', '2035-02-08', '2036-01-28'];
// calendar colours for the 10 / 20 / 30 / 50 goals, by theme (chosen in the settings)
const CAL_THEMES = {
  feu: ['Feu', ['#f2b33d', '#ec7a1c', '#d23a22', '#8e1b2e']],
  foret: ['Forêt', ['#8fcf7a', '#3fa34d', '#1e6b3a', '#0f3b24']],
  ocean: ['Océan', ['#5fd3c9', '#2a9fd6', '#1f5fae', '#16306e']],
  crepuscule: ['Crépuscule', ['#f29ac1', '#c96bd1', '#8a4fc0', '#4d2a7c']],
  classique: ['Classique', ['#3b82f6', '#16a34a', '#f59e0b', '#e11d48']]
};
const goalCol = v => (CAL_THEMES[cfg.calTheme] || CAL_THEMES.feu)[1][[10, 20, 30, 50].indexOf(v) < 0 ? 1 : [10, 20, 30, 50].indexOf(v)];
const TIER_COL = ['#c4874f', '#9aa7b8', '#e8b923', '#5cc6cf', '#a77bf0', '#1b1b22'];
const isKorean = id => { const l = id && id !== 'fr' && getLang(id); return !!l && (l.code === 'ko' || /cor/i.test(l.name)); };
function achValues() {
  const all = [...words.values()], st = cfg.stats, days = st.days || {};
  const perLang = f => Math.max(0, ...cfg.langs.map(l => all.filter(w => wLang(w) === l.id && f(w)).length));
  const sumOk = all.reduce((n, w) => n + (w.ok || 0), 0);
  if (sumOk > (st.totalOk || 0)) st.totalOk = sumOk;
  return {
    goal: Object.keys(days).filter(k => days[k] >= dayGoal(k)).length,
    streak: Math.max(streakNow(), st.best || 0),
    combo: st.bestCombo || 0,
    total: st.totalOk || 0,
    words: perLang(() => true),
    mastered: perLang(w => w.lvl === TOP),
    sprint: st.sprintBest || 0,
    boss: st.bossDays ?? (st.bossWins || 0),
    duels: st.duels || 0,
    langs: 1 + cfg.langs.filter(l => all.filter(w => wLang(w) === l.id && w.lvl === TOP).length >= 500).length
  };
}
const tierOf = (a, v) => a.steps.filter(x => v >= x).length;
const secretOf = id => SECRETS.find(x => x[0] === id);
// gives a secret badge once; it is announced by celebrate()
function award(id) {
  cfg.secrets = cfg.secrets || {};
  if (cfg.secrets[id] || !secretOf(id)) return;
  cfg.secrets = { ...cfg.secrets, [id]: Date.now() };
  cfg.lastBadge = { img: 'secret-' + id, name: secretOf(id)[1], t: Date.now() };
  (ui.newSecrets = ui.newSecrets || []).push(id);
  saveCfg();
}
// returns the newly reached tiers; the first time (or after a badge rework) it records the current state silently
function checkBadges() {
  const v = achValues(), first = !cfg.tiers || cfg.achVer !== ACH_VER, prev = cfg.tiers || {}, now = {}, nw = [];
  ACH.forEach(a => { now[a.id] = tierOf(a, v[a.id]); if (!first && now[a.id] > (prev[a.id] || 0)) nw.push([a, now[a.id]]); });
  if (first || ACH.some(a => now[a.id] !== (prev[a.id] || 0))) {
    cfg.tiers = now; cfg.achVer = ACH_VER;
    const dates = { ...(cfg.tierDates || {}) };
    nw.forEach(([a, t]) => { for (let i = (prev[a.id] || 0) + 1; i <= t; i++) dates[a.id + '-' + i] = Date.now(); });
    cfg.tierDates = dates;
    if (nw.length) { const [a, t] = nw[nw.length - 1]; cfg.lastBadge = { img: a.img + '-' + t, name: a.names[t - 1], t: Date.now() }; }
    saveCfg();
  }
  if (ACH.every(a => now[a.id] >= 1)) award('collectionneur');
  return nw;
}
// secret badges checked after each answer (ev: { ok, q, mode })
function secretsAfterAnswer(ev) {
  const st = cfg.stats, now = new Date(), h = now.getHours(), k = ymd(Date.now()), md = String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0'), today = midnight(Date.now());
  // absence of more than 30 days (lastSeen = last answer)
  if (st.lastSeen && Date.now() - st.lastSeen > 30 * DAY) award('retour-heros');
  st.lastSeen = Date.now();
  const timeOk = clockOk(); st.maxSeen = Math.max(st.maxSeen || 0, Date.now());
  if (!ev.ok) {
    st.wrongDays = { ...(st.wrongDays || {}), [k]: ((st.wrongDays || {})[k] || 0) + 1 };
    const wd = Object.keys(st.wrongDays); if (wd.length > 40) wd.sort().slice(0, wd.length - 40).forEach(x => delete st.wrongDays[x]);
    const w = ev.q && words.get(ev.q.id); if (w && w.ko >= 10) award('sisyphe');
    return;
  }
  if (!timeOk) return;
  if (h < 4) {
    award('oiseau-nuit');
    const nights = [...new Set([...(st.nights || []), today])].filter(x => today - x < 7 * DAY);
    st.nights = nights; if (nights.length >= 3) award('insomniaque');
  } else if (h < 6) award('leve-tot');
  if (md === '01-01') award('jour-an');
  if (md === '12-25') award('lutin');
  if (md === '10-31') award('faucheuse');
  if (md === '02-14') award('coeur');
  if (md === '04-01') award('poisson-avril');
  if (ev.q && (isKorean(ev.q.pl) || isKorean(ev.q.al)) && SEOLLAL.some(d => { const [y, m, dd] = d.split('-').map(Number); return Math.abs(new Date(y, m - 1, dd).getTime() - today) <= 1.5 * DAY; })) award('seollal');
  if (ev.q) { const al = st.alDay && st.alDay.d === k ? st.alDay.l : []; if (!al.includes(ev.q.al)) st.alDay = { d: k, l: [...al, ev.q.al] }; if (st.alDay.l.length >= 3) award('grand-ecart'); }
  const n = todayCount(), wrong = (st.wrongDays || {})[k] || 0;
  if (n >= 300) award('marathonien');
  if (n >= 20 && !wrong) award('sans-filet');
  if (dayGoal(k) === 50 && n >= 50 && !wrong) award('perfectionniste');
  if (dayGoal(k) === 50 && n >= 50) { let ok7 = true; for (let i = 0; i < 7; i++) { const d = ymd(Date.now() - i * DAY); if (dayGoal(d) !== 50 || ((st.days || {})[d] || 0) < 50) ok7 = false; } if (ok7) award('feu-sacre'); }
  const w = ev.q && words.get(ev.q.id);
  if (w && w.lvl === TOP && !w.ko) award('elephant');
  const all = [...words.values()], first = Math.min(...all.map(x => x.added || Date.now()));
  if (all.length && Date.now() - first >= 365 * DAY) award('un-an');
}
// after any answer: daily goal, new badges, mastered word → message + confetti
function celebrate() {
  const nb = checkBadges(), msg = [];
  let fx = false;
  if (ui.fxMastered) { ui.fxMastered = false; fx = true; }
  if (ui.goalDone) { ui.goalDone = false; msg.push('Défi du jour réussi !'); }
  if (nb.length) msg.push((nb.length > 1 ? 'Nouveaux succès : ' : 'Nouveau succès : ') + nb.map(([a, t]) => `${a.names[t - 1]} (${a.label})`).join(', '));
  if (ui.newSecrets?.length) { msg.push((ui.newSecrets.length > 1 ? 'Badges secrets : ' : 'Badge secret : ') + ui.newSecrets.map(id => secretOf(id)[1]).join(', ') + ' !'); ui.newSecrets = []; }
  if (msg.length) { saveCfg(); toast(msg.join(' · ')); fx = true; }
  if (fx) confetti();
  if (msg.length) renderHeader();
}
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div');
  box.className = 'confetti';
  const cols = ['var(--accent)', 'var(--main)', '#ffffff', 'var(--green)', '#ff8a5b'];
  box.innerHTML = Array.from({ length: 46 }, (_, i) => `<i style="left:${Math.random() * 100}%;background:${cols[i % cols.length]};animation-delay:${(Math.random() * .3).toFixed(2)}s;animation-duration:${(1.1 + Math.random() * .9).toFixed(2)}s"></i>`).join('');
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2600);
}

/* ---------- review ---------- */
const inScope = w => cfg.filt.on.includes(wLang(w)) && (ui.theme === 'all' || cfg.filt.on.length !== 1 || wLib(w) === ui.theme);
const answerLangs = () => { const f = cfg.filt; if (f.mix) return ['fr', ...f.on]; const t = f.to.filter(x => x === 'fr' || f.on.includes(x)); return t.length ? t : ['fr']; };
const langName = id => id === 'fr' ? 'français' : lower(getLang(id).name);
const langCode = id => id === 'fr' ? 'fr' : getLang(id).code;
const uniq = a => [...new Set(a)];
function cpIndex() {
  const m = new Map();
  for (const w of words.values()) if (cfg.filt.on.includes(wLang(w))) for (const f of w.fr) { const k = wLang(w) + '|' + frLoose(f); if (!m.has(k)) m.set(k, []); m.get(k).push(w); }
  return m;
}
const counterparts = (w, lang, idx) => uniq(w.fr.flatMap(f => idx.get(lang + '|' + frLoose(f)) || [])).filter(x => x !== w);
// every way this word can be asked, given the chosen answer languages
function questions(w, S, idx) {
  const L = wLang(w), res = [];
  if (S.includes('fr')) res.push({ prompt: w.en, pl: L, answers: w.fr, al: 'fr', addTo: 'fr' });
  if (S.includes(L)) {
    res.push({ prompt: w.fr, pl: 'fr', answers: w.en, al: L, addTo: 'en' });
    cfg.filt.on.filter(x => x !== L).forEach(L1 => { const c = counterparts(w, L1, idx); if (c.length) res.push({ prompt: uniq(c.flatMap(x => x.en)), pl: L1, answers: w.en, al: L, addTo: 'en' }); });
  }
  S.filter(x => x !== 'fr' && x !== L).forEach(L2 => { const c = counterparts(w, L2, idx); if (c.length) res.push({ prompt: w.en, pl: L, answers: uniq(c.flatMap(x => x.en)), al: L2, addTo: null }); });
  return res;
}
function askable() { const S = answerLangs(), idx = cpIndex(); return w => inScope(w) && questions(w, S, idx).length > 0; }
const inFilter = w => askable()(w);
function dueList() {
  const ok = askable();
  const ids = [...words.values()].filter(w => isDue(w) && ok(w)).map(w => w.id);
  for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
  return ids;
}
const newSession = extra => ({ queue: extra ? [] : dueList(), extra, cur: null, state: 'ask', missed: session?.missed || new Set(), done: 0, good: 0, combo: 0, bestCombo: 0, gained: 0, last: [] });
function startSessionIfNeeded() {
  if (session || !words.size) return;
  session = newSession(false);
  next();
}
function restartSession() { session = null; startSessionIfNeeded(); }
function pickExtra() {
  const ok = askable();
  const cands = [...words.values()].filter(ok);
  const fresh = cands.filter(w => !session.last.includes(w.id));
  const pool = fresh.length ? fresh : cands;
  const wt = w => 1 / (w.lvl + 1) + w.ko * .15;
  let r = Math.random() * pool.reduce((s, w) => s + wt(w), 0);
  for (const w of pool) { r -= wt(w); if (r <= 0) return w.id; }
  return pool[0]?.id;
}
function next() {
  const s = session, ok = askable();
  let id = null;
  if (!s.extra) {
    while (s.queue.length && !(words.has(s.queue[0]) && ok(words.get(s.queue[0])))) s.queue.shift();
    if (!s.queue.length) s.queue = dueList().filter(x => x !== s.cur?.id);
    const cw = s.cur && words.get(s.cur.id);
    if (!s.queue.length && cw && isDue(cw) && ok(cw)) s.queue = [cw.id];
    id = s.queue.shift() || null;
  } else id = pickExtra();
  if (!id) { s.cur = null; s.state = 'done'; return; }
  s.last = [id, ...s.last].slice(0, 3);
  const qs = questions(words.get(id), answerLangs(), cpIndex());
  const q = qs[Math.floor(Math.random() * qs.length)];
  s.cur = { id, ...q, given: '', delta: 0, from: 0, to: 0 };
  ui.toCard = s.done > 0;
  s.state = 'ask';
}
const variants = t => { const v = String(t).replace(/\([^)]*\)/g, ' ').split(/[,\/;]/).map(x => x.trim()).filter(Boolean); return v.length ? v : [t]; };
function check(given, q) {
  const parts = String(given).replace(/\([^)]*\)/g, ' ').split(/[,\/;]/).map(x => x.trim()).filter(Boolean);
  const all = q.answers.flatMap(variants);
  const known = q.al === 'fr' ? new Set([...words.values()].flatMap(w => w.fr.flatMap(variants)).map(frLoose)) : null;
  const one = g => all.some(t => q.al === 'fr' ? frClose(g, t, known) : normT(t, q.al) === normT(g, q.al));
  return one(given) || (parts.length > 1 && parts.every(one));
}
const mustRetype = q => q.al !== 'fr';
function submit(val) {
  const s = session, w = words.get(s.cur.id);
  if (!w) return;
  if (s.state === 'right' || (s.state === 'wrong' && !mustRetype(s.cur))) { next(); render(); return; }
  if (s.state === 'wrong') {
    if (check(val, s.cur)) { next(); render(); }
    else { const i = $('#ans'); i.value = ''; i.placeholder = 'Pas tout à fait, recopie-la'; i.focus(); }
    return;
  }
  if (!val.trim()) return;
  if (s.state === 'ask') {
    s.cur.given = val;
    if (check(val, s.cur)) { s.cur.loose = s.cur.al === 'fr' && !s.cur.answers.flatMap(variants).some(t => norm(t) === norm(val)); grade(w, true); s.state = 'right'; }
    else { grade(w, false); s.state = 'wrong'; }
    secretsAfterAnswer({ ok: s.state === 'right', q: s.cur });
    render();
    celebrate();
  }
}
function touchDay() {
  const st = cfg.stats, today = ymd(Date.now());
  if (st.day === today) return false;
  st.streak = st.day === ymd(Date.now() - DAY) ? st.streak + 1 : 1;
  st.best = Math.max(st.best, st.streak);
  st.day = today;
  return true;
}
function grade(w, good) {
  const s = session, from = w.lvl;
  s.done++;
  let to = from;
  if (good) {
    s.good++; s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo);
    addDay();
    if (s.combo > (cfg.stats.bestCombo || 0)) cfg.stats.bestCombo = s.combo;
    if (s.extra && !isDue(w)) update(w, { ok: w.ok + 1 });
    else {
      to = s.missed.has(w.id) ? 1 : Math.min(from + 1, TOP);
      update(w, { lvl: to, due: midnight(Date.now() + INTER[to] * DAY), ok: w.ok + 1 });
    }
  } else {
    s.combo = 0; s.missed.add(w.id); to = 0;
    update(w, { lvl: 0, due: Date.now(), ko: w.ko + 1 });
    // a missed word comes back 8 to 12 words later (or at the end of the round)
    if (!s.extra) s.queue.splice(Math.min(8 + Math.floor(Math.random() * 5), s.queue.length), 0, w.id);
  }
  s.cur.from = from; s.cur.to = to; s.cur.delta = PTS[to] - PTS[from]; s.gained += s.cur.delta;
  popBox = to !== from ? to : -1;
  popScore = s.cur.delta > 0;
  const sc = score();
  if (sc > cfg.stats.bestScore) cfg.stats.bestScore = sc;
  if (to === TOP && from !== TOP) { ui.fxMastered = true; if (!cfg.stats.firstMastered) { cfg.stats.firstMastered = Date.now(); ui.celebrate = true; } }
  saveCfg();
}
function acceptMine() {
  const s = session, w = words.get(s.cur.id), key = s.cur.addTo;
  if (!key) return;
  const restored = update(w, { [key]: [...w[key], s.cur.given.trim()], lvl: s.cur.from, ko: Math.max(0, w.ko - 1), due: Date.now() });
  s.cur.answers = [...s.cur.answers, s.cur.given.trim()];
  s.missed.delete(w.id); s.done--; s.gained -= s.cur.delta;
  const qi = s.queue.indexOf(w.id); if (qi >= 0) s.queue.splice(qi, 1);
  grade(restored, true); s.state = 'right'; render();
}

/* ---------- games: sprint, boss, duel ---------- */
const MODES = [['rev', 'Révision'], ['sprint', 'Sprint 60 s'], ['boss', 'Boss'], ['duel', 'Duel']];
const flagOf = q => (q.pl === 'fr' ? 'Français' : getLang(q.pl).name) + ' → ' + langName(q.al);
function pickQ(exclude) {
  const S = answerLangs(), idx = cpIndex();
  let pool = [...words.values()].filter(w => inScope(w) && questions(w, S, idx).length);
  const fresh = pool.filter(w => !exclude.includes(w.id));
  if (fresh.length) pool = fresh;
  if (!pool.length) return null;
  const w = pool[Math.floor(Math.random() * pool.length)], qs = questions(w, S, idx);
  return { id: w.id, ...qs[Math.floor(Math.random() * qs.length)] };
}
// result of an answer outside the normal review (sprint, boss): same rules, no retype
function applyResult(w, good) {
  const from = w.lvl;
  let to = from;
  if (good) {
    addDay();
    if (isDue(w)) { to = Math.min(from + 1, TOP); update(w, { lvl: to, due: midnight(Date.now() + INTER[to] * DAY), ok: w.ok + 1 }); }
    else update(w, { ok: w.ok + 1 });
  } else { to = 0; update(w, { lvl: 0, due: Date.now(), ko: w.ko + 1 }); }
  if (to === TOP && from !== TOP) ui.fxMastered = true;
  popBox = to !== from ? to : -1;
  popScore = PTS[to] > PTS[from];
  const sc = score(); if (sc > cfg.stats.bestScore) cfg.stats.bestScore = sc;
  saveCfg();
}
const answerInput = (q, ph, hint) => `<input id="ans" lang="${esc(langCode(q.al))}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${hint || 'done'}" placeholder="${esc(ph)}" aria-label="Ta réponse en ${esc(langName(q.al))}">`;
const resultBox = (q, ok) => ok
  ? `<div class="fb ok">Juste !${q.answers.length > 1 ? `<small>Toutes les réponses : ${esc(q.answers.join(' ou '))}</small>` : ''}</div>`
  : `<div class="fb ko">Ta réponse : <span class="yours">${esc(q.given)}</span><span class="right">${esc(q.answers.join(' ou '))}</span></div>`;

/* sprint */
let sprintTimer = null;
function stopSprint() { clearInterval(sprintTimer); sprintTimer = null; }
function sprintStart() {
  stopSprint();
  const sp = ui.sprint = { state: 'run', end: Date.now() + 60000, score: 0, wrong: 0, combo: 0, last: [] };
  sp.cur = pickQ([]);
  if (!sp.cur) { ui.sprint = { state: 'ready' }; toast('Aucun mot dans cette sélection.'); render(); return; }
  sprintTimer = setInterval(sprintTick, 200);
  ui.toCard = true;
  render();
}
function sprintTick() {
  const sp = ui.sprint;
  if (!sp || sp.state !== 'run') return stopSprint();
  const left = Math.max(0, (sp.end - Date.now()) / 1000);
  const t = $('#stime'), b = $('#tbar');
  if (t) t.textContent = Math.ceil(left);
  if (b) { b.style.width = (left / 60 * 100) + '%'; b.classList.toggle('low', left <= 10); }
  if (left <= 0) sprintEnd();
}
function sprintEnd() {
  stopSprint();
  const sp = ui.sprint;
  sp.state = 'end';
  sp.record = sp.score > (cfg.stats.sprintBest || 0);
  if (sp.record) { cfg.stats.sprintBest = sp.score; saveCfg(); confetti(); }
  if (!sp.score) award('escargot');
  if (view === 'rev' && ui.mode === 'sprint') { document.activeElement?.blur?.(); render(); }
  celebrate();
}
function sprintAnswer(val) {
  const sp = ui.sprint;
  if (!sp || sp.state !== 'run' || !val.trim()) return;
  const q = sp.cur, w = words.get(q.id), ok = check(val, q);
  if (w) applyResult(w, ok);
  if (ok) { sp.score++; sp.combo++; if (sp.combo > (cfg.stats.bestCombo || 0)) cfg.stats.bestCombo = sp.combo; } else { sp.wrong++; sp.combo = 0; }
  if (ok) {
    if (sp.end - Date.now() < 1000) award('photo-finish');
    sp.hits = [...(sp.hits || []), Date.now()].slice(-10);
    if (sp.hits.length >= 10 && sp.hits[9] - sp.hits[0] <= 15000) award('meteore');
  }
  secretsAfterAnswer({ ok, q });
  sp.flash = { ok, p: q.prompt.join(' / '), a: q.answers.join(' ou ') };
  sp.last = [q.id, ...sp.last].slice(0, 6);
  sp.cur = pickQ(sp.last) || q;
  render();
  celebrate();
}
function renderSprint() {
  const sp = ui.sprint || (ui.sprint = { state: 'ready' }), best = cfg.stats.sprintBest || 0;
  const bolt = `<svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="var(--accent)" stroke="var(--btn)" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
  if (sp.state === 'ready') return `<div class="card done game">${bolt}<b class="big">Sprint 60 secondes</b><p>Un maximum de bonnes réponses en une minute. Pas besoin de recopier : on enchaîne.</p><p class="hint">Ton record : <b>${best}</b></p><div class="row center"><button class="btn" data-a="sprintgo">Démarrer</button></div></div>`;
  if (sp.state === 'end') return `<div class="card done game">${bolt}<b class="big">${sp.score}</b><p>${plural(sp.score, 'bonne réponse', 'bonnes réponses')} en 60 secondes${sp.record ? ' · <b>nouveau record !</b>' : ` · record ${best}`}</p><p class="hint">${plural(sp.wrong, 'erreur', 'erreurs')}</p><div class="row center"><button class="btn" data-a="sprintgo">Rejouer</button></div></div>`;
  const q = sp.cur, left = Math.max(0, Math.ceil((sp.end - Date.now()) / 1000));
  const flash = sp.flash ? `<div class="flash ${sp.flash.ok ? 'ok' : 'ko'}">${sp.flash.ok ? 'Juste' : 'Raté'} : ${esc(sp.flash.p)} = <b>${esc(sp.flash.a)}</b></div>` : '';
  return `<div class="card">
    <div class="dir"><span class="flag">${esc(flagOf(q))}</span><span><b id="stime" class="big2">${left}</b> s · <b>${sp.score}</b> ${sp.score > 1 ? 'justes' : 'juste'}</span></div>
    <div class="tbar"><i id="tbar" style="width:${left / 60 * 100}%"></i></div>
    <div class="word" lang="${esc(langCode(q.pl))}">${esc(q.prompt.join(' / '))}</div>
    <form id="sf" autocomplete="off" style="margin-top:14px">${answerInput(q, 'En ' + langName(q.al) + '…')}<div class="row"><button class="btn grow" type="submit">Valider</button></div></form>
    ${flash}
  </div>`;
}

/* boss: creatures of the world's folklore, collected in the bestiary */
// rate = hidden chance (%) when the creature can appear; has = its picture exists (boss-<id>.webp)
// cond: always | night | fullmoon | winter | winternight | halloween | december | korean
// rules: classic, fragile (1 life), chrono (10 s per word), colossus (20 words, 5 lives),
//        hydra (an error adds a word), greedy (an error gives it back a word), strict (no typo), trick (answer language changes)
const BEASTS = [
  { id: 'gobelin', name: 'Gobelin', from: 'Europe', rar: 'Commun', rate: 6, cond: 'always', rules: ['classic'], has: true, txt: 'Petit, rusé et chapardeur, il hante les caves et les forêts d\'Europe. Il adore les mauvais tours, surtout aux voyageurs distraits.' },
  { id: 'kappa', name: 'Kappa', from: 'Japon', rar: 'Commun', rate: 5, cond: 'always', rules: ['classic'], has: true, txt: 'Lutin des rivières japonaises, il garde de l\'eau dans la coupelle de son crâne. Salue-le poliment : en s\'inclinant, il la renverse et perd sa force.' },
  { id: 'troll', name: 'Troll', from: 'Scandinavie', rar: 'Commun', rate: 5, cond: 'always', rules: ['colossus'], has: true, txt: 'Géant des montagnes du Nord, lent mais d\'une force colossale. La légende dit que la lumière du soleil le change en pierre.' },
  { id: 'golem', name: 'Golem', from: 'Europe centrale', rar: 'Commun', rate: 5, cond: 'always', rules: ['colossus'], has: true, txt: 'Façonné dans l\'argile au bord de la Vltava, à Prague, il prend vie grâce à un mot gravé sur son front. Il obéit sans relâche, sans jamais se fatiguer.' },
  { id: 'minotaure', name: 'Minotaure', from: 'Grèce', rar: 'Commun', rate: 5, cond: 'always', rules: ['classic'], has: true, txt: 'Mi-homme mi-taureau, enfermé dans le labyrinthe du roi Minos en Crète. Il fallut le fil d\'Ariane pour que Thésée en ressorte vivant.' },
  { id: 'harpie', name: 'Harpie', from: 'Grèce', rar: 'Commun', rate: 5, cond: 'always', rules: ['chrono'], has: true, txt: 'Rapide comme la tempête, elle fond sur sa proie et l\'emporte avant qu\'on ait compris. Ne traîne pas pour répondre !' },
  { id: 'tengu', name: 'Tengu', from: 'Japon', rar: 'Commun', rate: 5, cond: 'always', rules: ['chrono'], has: true, txt: 'Esprit fier des montagnes japonaises, maître du sabre et des arts martiaux. On dit qu\'il enseigna l\'escrime aux plus grands guerriers.' },
  { id: 'chupacabra', name: 'Chupacabra', from: 'Amérique latine', rar: 'Commun', rate: 4, cond: 'always', rules: ['classic'], has: true, txt: 'Aperçu à Porto Rico puis au Mexique, ce « suceur de chèvres » rôde la nuit autour des fermes. Personne n\'en a jamais attrapé un.' },
  { id: 'kelpie', name: 'Kelpie', from: 'Écosse', rar: 'Commun', rate: 4, cond: 'always', rules: ['fragile'], has: true, txt: 'Cheval noir des lochs écossais, il invite les voyageurs à monter sur son dos… puis plonge au fond de l\'eau. Une seule erreur suffit.' },
  { id: 'dokkaebi', name: 'Dokkaebi', from: 'Corée', rar: 'Commun', rate: 4.5, cond: 'korean', rules: ['classic'], has: true, txt: 'Lutin farceur coréen, armé d\'un gourdin magique qui fait apparaître tout ce qu\'il souhaite. Il adore les défis, les jeux et la lutte.' },
  { id: 'hydre', name: 'Hydre', from: 'Grèce', rar: 'Rare', rate: 3, cond: 'always', rules: ['hydra'], has: true, txt: 'Le monstre du marais de Lerne : chaque tête tranchée en fait repousser une autre. Chaque erreur ajoute un mot au combat.' },
  { id: 'meduse', name: 'Méduse', from: 'Grèce', rar: 'Rare', rate: 3, cond: 'always', rules: ['chrono'], has: true, txt: 'La Gorgone aux cheveux de serpents : un seul regard et l\'on se change en pierre. Réponds vite, avant d\'être pétrifié.' },
  { id: 'sphinx', name: 'Sphinx', from: 'Égypte', rar: 'Rare', rate: 3, cond: 'always', rules: ['strict'], has: true, txt: 'Gardien des cités, il pose une énigme à chaque passant et dévore ceux qui se trompent. Aucune faute de frappe n\'est tolérée.' },
  { id: 'djinn', name: 'Djinn', from: 'Arabie', rar: 'Rare', rate: 3, cond: 'always', rules: ['trick'], has: false, txt: 'Esprit de fumée et de feu, enfermé dans une lampe. Il exauce les vœux… à sa façon. Méfie-toi : il change la langue de réponse à chaque mot.' },
  { id: 'babayaga', name: 'Baba Yaga', from: 'Russie', rar: 'Rare', rate: 3, cond: 'always', rules: ['greedy'], has: false, txt: 'La sorcière des forêts slaves vole dans un mortier et vit dans une isba sur pattes de poule. Chaque erreur la renforce.' },
  { id: 'gumiho', name: 'Gumiho', from: 'Corée', rar: 'Rare', rate: 3, cond: 'korean', rules: ['trick'], has: false, txt: 'Renard à neuf queues de la légende coréenne, maître de l\'illusion. Il brouille les pistes en changeant la langue à chaque mot.' },
  { id: 'banshee', name: 'Banshee', from: 'Irlande', rar: 'Nocturne', rate: 4, cond: 'night', rules: ['fragile'], has: false, txt: 'Son cri déchire la nuit irlandaise. Elle n\'apparaît qu\'à la nuit tombée, et ne laisse aucune seconde chance.' },
  { id: 'strigoi', name: 'Strigoï', from: 'Roumanie', rar: 'Nocturne', rate: 4, cond: 'night', rules: ['greedy'], has: false, txt: 'Le vampire des Carpates sort de sa tombe à la nuit tombée. Chaque erreur le nourrit et lui rend des forces.' },
  { id: 'loupgarou', name: 'Loup-garou', from: 'Europe', rar: 'Nocturne', rate: 6, cond: 'fullmoon', rules: ['colossus', 'chrono'], has: false, txt: 'Homme le jour, bête les soirs de pleine lune. On ne le croise que lorsque la lune est pleine.' },
  { id: 'yeti', name: 'Yéti', from: 'Himalaya', rar: 'Saisonnier', rate: 4, cond: 'winter', rules: ['colossus'], has: false, txt: 'L\'abominable homme des neiges laisse d\'immenses traces dans les cols de l\'Himalaya. Il ne descend qu\'en hiver.' },
  { id: 'wendigo', name: 'Wendigo', from: 'Amérique du Nord', rar: 'Saisonnier', rate: 3, cond: 'winternight', rules: ['greedy'], has: false, txt: 'Esprit de la faim des forêts glacées, il rôde les nuits d\'hiver. Il ne se rassasie jamais : chaque erreur le nourrit.' },
  { id: 'cavalier', name: 'Cavalier sans tête', from: 'Irlande et Amérique', rar: 'Saisonnier', rate: 6, cond: 'halloween', rules: ['fragile', 'chrono'], has: false, txt: 'Il galope à la recherche de sa tête perdue. On ne le croise que pendant la semaine d\'Halloween.' },
  { id: 'krampus', name: 'Krampus', from: 'Alpes', rar: 'Saisonnier', rate: 5, cond: 'december', rules: ['hydra'], has: false, txt: 'Le compagnon sombre de saint Nicolas punit les enfants pas sages. Il ne sort qu\'en décembre.' },
  { id: 'kraken', name: 'Kraken', from: 'Scandinavie', rar: 'Légendaire', rate: 1, cond: 'always', rules: ['colossus', 'hydra'], has: false, txt: 'Le monstre des abysses de Norvège, si grand qu\'on le prenait pour une île. Très peu de marins l\'ont vu et sont revenus pour le raconter.' },
  { id: 'dragon', name: 'Dragon', from: 'Partout dans le monde', rar: 'Légendaire', rate: 0.5, cond: 'always', rules: ['colossus', 'chrono'], has: false, txt: 'Présent dans presque toutes les cultures, de la Chine à l\'Europe. Le plus rare et le plus redoutable de tous.' }
];
const RULES = {
  classic: 'Combat classique : 10 mots, 3 vies.',
  fragile: 'Fragile : une seule vie.',
  chrono: 'Chrono : 10 secondes par mot.',
  colossus: 'Colosse : 20 mots, 5 vies.',
  hydra: 'Hydre : chaque erreur ajoute un mot.',
  greedy: 'Vorace : chaque erreur lui rend un mot de vie.',
  strict: 'Implacable : aucune faute de frappe tolérée.',
  trick: 'Trompeur : la langue de réponse change à chaque mot.'
};
const REGION = from => /Japon|Corée|Himalaya|Chine|Inde/.test(from) ? 'Asie' : /Égypte|Arabie|Afrique|Perse/.test(from) ? 'Afrique et Moyen-Orient' : /^Amérique/.test(from) ? 'Amériques' : /Partout/.test(from) ? 'Monde entier' : 'Europe';
const REGIONS = ['Europe', 'Asie', 'Amériques', 'Afrique et Moyen-Orient', 'Monde entier'];
const RARS = ['Commun', 'Rare', 'Nocturne', 'Saisonnier', 'Légendaire'];
const RULE_NAMES = { classic: 'Classique · 10 mots, 3 vies', colossus: 'Colosse · 20 mots, 5 vies', fragile: 'Fragile · 1 vie', chrono: 'Chrono · 10 s par mot', hydra: 'Hydre · gagne des mots', greedy: 'Vorace · récupère de la vie', strict: 'Implacable · aucune faute', trick: 'Trompeur · langue qui change' };
const RAR_COL = { Commun: '#6b7f72', Rare: '#3b82f6', Nocturne: '#6d3fb0', Saisonnier: '#d97706', Légendaire: '#b91c1c' };
const BOSS_MIN = 20, CHRONO_S = 10;
const beast = id => BEASTS.find(x => x.id === id);
// moon age in days (0 = new moon, ~14.8 = full moon), from a known new moon
const moonAge = t => { const syn = 29.530588853, ref = Date.UTC(2000, 0, 6, 18, 14); return (((t - ref) / DAY) % syn + syn) % syn; };
// if the clock went back in time, special appearances are blocked
const clockOk = () => Date.now() >= (cfg.stats.maxSeen || 0) - 3600000;
function beastCan(b) {
  if (!b.has) return false;
  const now = new Date(), h = now.getHours(), m = now.getMonth(), d = now.getDate();
  if (b.cond === 'always') return true;
  if (b.cond === 'korean') return cfg.filt.on.some(isKorean);
  if (!clockOk()) return false;
  const night = h >= 21 || h < 5, winter = m === 11 || m <= 1;
  if (b.cond === 'night') return night;
  if (b.cond === 'fullmoon') return Math.abs(moonAge(Date.now()) - 14.77) <= 1.2;
  if (b.cond === 'winter') return winter;
  if (b.cond === 'winternight') return winter && night;
  if (b.cond === 'halloween') return (m === 9 && d >= 25) || (m === 10 && d <= 1);
  if (b.cond === 'december') return m === 11;
  return false;
}
// weighted draw among the creatures that can appear now, except the one that just fled
function drawBeast() {
  const fled = cfg.stats.fled, c = BEASTS.filter(b => beastCan(b) && b.id !== fled);
  const list = c.length ? c : BEASTS.filter(beastCan);
  let r = Math.random() * list.reduce((n, b) => n + b.rate, 0);
  for (const b of list) { r -= b.rate; if (r <= 0) return b; }
  return list[list.length - 1];
}
function bossPool(n) {
  const ok = askable(), c = [...words.values()].filter(ok);
  const hard = c.filter(w => w.ko > 0).sort((a, b) => (b.ko - b.ok * .3) - (a.ko - a.ok * .3) || a.lvl - b.lvl);
  const rest = c.filter(w => !w.ko).sort((a, b) => a.lvl - b.lvl || Math.random() - .5);
  const top = [...hard, ...rest].slice(0, n * 2);
  for (let i = top.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [top[i], top[j]] = [top[j], top[i]]; }
  return { pick: top.slice(0, n), spare: [...hard, ...rest].filter(w => !top.slice(0, n).includes(w)), total: c.length };
}
function bossQ() {
  const b = ui.boss;
  while (b.i < b.ids.length && !words.get(b.ids[b.i])) b.i++;
  const w = words.get(b.ids[b.i]);
  if (!w) return null;
  const S = b.rules.includes('trick') ? uniq(['fr', ...cfg.filt.on]).sort(() => Math.random() - .5) : answerLangs();
  let qs = questions(w, S, cpIndex());
  if (b.rules.includes('trick') && qs.length > 1) { const al = qs[Math.floor(Math.random() * qs.length)].al; qs = qs.filter(q => q.al === al); }
  const q = qs.length ? { id: w.id, ...qs[Math.floor(Math.random() * qs.length)] } : { id: w.id, prompt: w.en, pl: wLang(w), answers: w.fr, al: 'fr' };
  if (b.rules.includes('chrono')) b.deadline = Date.now() + CHRONO_S * 1000;
  return q;
}
let bossTimer = null;
function stopBossTimer() { clearInterval(bossTimer); bossTimer = null; }
function bossTick() {
  const b = ui.boss;
  if (!b || b.state !== 'run' || !b.rules.includes('chrono') || view !== 'rev' || ui.mode !== 'boss') return stopBossTimer();
  if (b.phase !== 'ask') return;
  const left = Math.max(0, (b.deadline - Date.now()) / 1000), t = $('#btime'), bar = $('#tbar');
  if (t) t.textContent = Math.ceil(left);
  if (bar) { bar.style.width = (left / CHRONO_S * 100) + '%'; bar.classList.toggle('low', left <= 3); }
  if (left <= 0) bossAnswer('', true);
}
function bossStart() {
  const be = drawBeast();
  if (!be) { toast('Aucune créature disponible pour l\'instant.'); return; }
  const rules = be.rules, n = rules.includes('colossus') ? 20 : 10;
  const pool = bossPool(n);
  if (pool.total < BOSS_MIN) { toast(`Il faut au moins ${BOSS_MIN} mots dans ta sélection pour partir en chasse.`); return; }
  const lives = rules.includes('fragile') ? 1 : rules.includes('colossus') ? 5 : 3;
  ui.boss = { state: 'intro', beast: be.id, rules, ids: pool.pick.map(w => w.id), spare: pool.spare.map(w => w.id), i: 0, lives, maxLives: lives, hits: 0, phase: 'ask' };
  // the creature that fled is only kept away for this one hunt
  cfg.stats.fled = null;
  const bs = { ...(cfg.beasts || {}) }; bs[be.id] = { ...(bs[be.id] || {}), seen: bs[be.id]?.seen || Date.now() }; cfg.beasts = bs; saveCfg();
  document.activeElement?.blur?.();
  render();
}
function bossFight() {
  const b = ui.boss;
  b.state = 'run'; b.cur = bossQ(); ui.toCard = true;
  stopBossTimer(); if (b.rules.includes('chrono')) bossTimer = setInterval(bossTick, 200);
  render();
}
function bossEnd(win) {
  const b = ui.boss;
  stopBossTimer();
  b.state = 'end'; b.win = win;
  const st = cfg.stats, k = ymd(Date.now());
  const bs = { ...(cfg.beasts || {}) }, e = { ...(bs[b.beast] || {}) };
  if (win) {
    if (st.bossDays === undefined) st.bossDays = st.bossWins || 0;
    st.bossWins = (st.bossWins || 0) + 1;
    if (st.bossDay !== k) { st.bossDay = k; st.bossDays++; }
    if (b.lives === 1 && b.maxLives > 1) award('phenix');
    if (st.bossLost) award('vengeance');
    st.bossLost = false;
    b.newBeast = !e.wins;
    e.wins = (e.wins || 0) + 1; if (!e.first) e.first = Date.now();
    confetti();
  } else { st.bossLost = true; st.fled = b.beast; e.lost = (e.lost || 0) + 1; }
  bs[b.beast] = e; cfg.beasts = bs;
  saveCfg();
  document.activeElement?.blur?.();
  render();
  celebrate();
}
function bossAnswer(val, timeout) {
  const b = ui.boss;
  if (!b || b.state !== 'run') return;
  if (b.phase === 'res') {
    if (b.lives <= 0) return bossEnd(false);
    b.i++;
    if (b.i >= b.ids.length) return bossEnd(true);
    b.cur = bossQ();
    if (!b.cur) return bossEnd(true);
    b.phase = 'ask'; ui.toCard = true; render(); return;
  }
  if (!timeout && !val.trim()) return;
  const q = b.cur, w = words.get(q.id);
  const ok = !timeout && (b.rules.includes('strict') ? q.answers.flatMap(variants).some(t => normT(t, q.al) === normT(val, q.al)) : check(val, q));
  q.given = timeout ? '' : val; q.ok = ok; q.timeout = !!timeout;
  if (ok) b.hits++;
  else {
    b.lives--;
    // hydra: a new head (one more word); greedy: the missed word comes back at the end
    if (b.rules.includes('hydra') && b.spare.length && b.ids.length < 30) b.ids.push(b.spare.shift());
    if (b.rules.includes('greedy')) b.ids.push(q.id);
  }
  if (w) applyResult(w, ok);
  secretsAfterAnswer({ ok, q });
  b.phase = 'res';
  render();
  celebrate();
}
const beastImg = (be, cls) => `<img class="${cls || 'beast'}" src="boss-${be.id}.webp" alt="${esc(be.name)}">`;
const rarChip = be => `<span class="rar" style="--rc:${RAR_COL[be.rar]}">${esc(be.rar)}</span>`;
const hearts = (n, max) => Array.from({ length: max }, (_, i) => `<svg width="20" height="18" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 21 2.5 11.5A5.5 5.5 0 0 1 12 4a5.5 5.5 0 0 1 9.5 7.5z" fill="${i < n ? 'var(--red)' : 'none'}" stroke="var(--red)" stroke-width="2"/></svg>`).join('');
function renderBoss() {
  const b = ui.boss || (ui.boss = { state: 'ready' });
  const got = BEASTS.filter(x => x.has && (cfg.beasts || {})[x.id]?.wins).length, tot = BEASTS.filter(x => x.has).length;
  const bestBtn = `<button class="btn ghost" data-a="bestiary">Bestiaire ${got}/${tot}</button>`;
  if (b.state === 'ready') {
    const fled = cfg.stats.fled && beast(cfg.stats.fled);
    return `<div class="card done game"><div class="beasts-q">${['?', '?', '?'].map(x => `<i>${x}</i>`).join('')}</div><b class="big">Chasse aux monstres</b><p>Des créatures du folklore du monde entier rôdent. Certaines sont communes, d'autres ne sortent que la nuit, à la pleine lune ou à certaines saisons. Bats-les pour les ajouter à ton bestiaire.</p>${fled ? `<p class="hint">${esc(fled.name)} s'est enfui lors du dernier combat.</p>` : ''}<div class="row center"><button class="btn" data-a="bossgo">Partir en chasse</button>${bestBtn}</div></div>`;
  }
  const be = beast(b.beast);
  if (b.state === 'intro') {
    const known = (cfg.beasts || {})[be.id]?.wins;
    return `<div class="card done game beastcard">${beastImg(be, 'beast big appear')}<p class="hint" style="margin:0">Une créature apparaît !</p><b class="big">${esc(be.name)}</b><p style="margin:0">${rarChip(be)} <span class="hint">${esc(be.from)}</span></p>${known ? '<p class="hint">Déjà dans ton bestiaire.</p>' : '<p class="hint"><b>Nouvelle créature !</b></p>'}<div class="rules">${b.rules.map(r => `<span>${esc(RULES[r])}</span>`).join('')}</div><div class="row center"><button class="btn" data-a="bossfight">Combattre</button></div></div>`;
  }
  if (b.state === 'end') {
    const msg = b.win ? `${b.newBeast ? `<b>${esc(be.name)}</b> rejoint ton bestiaire !` : `Encore une victoire contre ${esc(be.name)}.`} ${plural(b.hits, 'bonne réponse', 'bonnes réponses')}${b.maxLives > 1 ? `, ${plural(b.lives, 'vie restante', 'vies restantes')}` : ''}.` : `${esc(be.name)} s'est enfui. Tu ne le recroiseras pas au prochain combat. Les mots ratés sont repassés en case Nouv. : révise-les avant de repartir en chasse.`;
    return `<div class="card done game beastcard">${beastImg(be, 'beast big' + (b.win ? ' beaten' : ' flee'))}<b class="big">${b.win ? esc(be.name) + ' vaincu !' : 'Il s\'est enfui…'}</b><p>${msg}</p><div class="row center"><button class="btn" data-a="bossgo">Repartir en chasse</button>${bestBtn}</div></div>`;
  }
  const q = b.cur, n = b.ids.length, res = b.phase === 'res', chrono = b.rules.includes('chrono');
  const hp = `<div class="hp" aria-label="Vie de la créature">${b.ids.map((_, i) => `<i class="${i < b.i + (res && q.ok ? 1 : 0) ? 'gone' : ''}"></i>`).join('')}</div>`;
  const left = chrono ? Math.max(0, Math.ceil((b.deadline - Date.now()) / 1000)) : 0;
  if (chrono && !res && !bossTimer) bossTimer = setInterval(bossTick, 200);
  return `<div class="card ${res ? (q.ok ? 'ok' : 'ko') : ''}">
    <div class="arena">${beastImg(be, 'beast mid' + (res && q.ok ? ' hit' : ''))}<div class="arena-top"><b>${esc(be.name)}</b><div class="lives">${hearts(b.lives, b.maxLives)}</div></div>${hp}</div>
    <div class="dir" style="margin-top:10px"><span class="flag">${esc(flagOf(q))}</span><span>Mot ${b.i + 1}/${n}${chrono && !res ? ` · <b id="btime">${left}</b> s` : ''}</span></div>
    ${chrono && !res ? `<div class="tbar"><i id="tbar" style="width:${left / CHRONO_S * 100}%"></i></div>` : ''}
    <div class="word" lang="${esc(langCode(q.pl))}">${esc(q.prompt.join(' / '))}</div>${sayBtn(q.prompt[0], q.pl)}
    ${res ? (q.timeout ? `<div class="flash ko">Trop lent ! La réponse était <b>${esc(q.answers.join(' ou '))}</b></div>` : resultBox(q, q.ok)) : ''}
    <form id="bf" autocomplete="off" style="margin-top:14px">${answerInput(q, res ? (b.lives <= 0 ? 'Entrée pour voir le résultat' : 'Entrée pour continuer') : 'En ' + langName(q.al) + '…', res ? 'next' : 'done')}<div class="row"><button class="btn grow" type="submit">${res ? (b.lives <= 0 || b.i + 1 >= n ? 'Voir le résultat' : 'Continuer') : 'Attaquer'}</button></div></form>
  </div>`;
}

/* bestiary: every creature, numbered; "?" if never met, silhouette if met but not beaten */
function renderBest() {
  const list = BEASTS.filter(x => x.has), bs = cfg.beasts || {};
  const got = list.filter(x => bs[x.id]?.wins).length;
  const card = be => {
    const e = bs[be.id] || {}, num = String(list.indexOf(be) + 1).padStart(3, '0');
    if (!e.seen) return `<button class="bcard" data-a="beast" data-k="${be.id}"><span class="num">N° ${num}</span><div class="bq">?</div><b>???</b></button>`;
    return `<button class="bcard${e.wins ? ' on' : ''}" data-a="beast" data-k="${be.id}"><span class="num">N° ${num}</span>${beastImg(be, 'bimg2' + (e.wins ? '' : ' locked'))}<b>${esc(be.name)}</b>${e.wins ? rarChip(be) : '<span class="hint">Pas encore vaincu</span>'}</button>`;
  };
  // sorting: by number, origin, rarity or type of fight (a creature with two rules is in both groups)
  const sort = ui.bestSort || 'num';
  const groups = sort === 'origin' ? REGIONS.map(r => [r, list.filter(b => REGION(b.from) === r)])
    : sort === 'rar' ? RARS.map(r => [r, list.filter(b => b.rar === r)])
    : sort === 'rule' ? Object.keys(RULE_NAMES).map(r => [RULE_NAMES[r], list.filter(b => b.rules.includes(r))])
    : [['', list]];
  const cards = groups.filter(g => g[1].length).map(([t, l]) => `${t ? `<h3 class="bgh">${esc(t)} <span class="note">${l.filter(b => bs[b.id]?.wins).length}/${l.length}</span></h3>` : ''}<div class="bgrid">${l.map(card).join('')}</div>`).join('');
  const sorts = [['num', 'Numéro'], ['origin', 'Origine'], ['rar', 'Rareté'], ['rule', 'Type de combat']].map(([k, n]) => `<button class="chip" data-a="bestsort" data-k="${k}" aria-pressed="${sort === k}">${n}</button>`).join('');
  return `<section><div class="row" style="justify-content:space-between;align-items:center"><h2 style="margin:0">Bestiaire <span class="note">${got}/${list.length}</span></h2><button class="btn ghost" data-a="bestback">Retour</button></div>
    <p class="note">Chaque créature battue rejoint ton bestiaire. Certaines sont rares, d'autres ne sortent que la nuit, à la pleine lune ou à certaines périodes de l'année.</p>
    <div class="fl" style="margin:8px 0 4px">${sorts}</div>
    ${cards}</section>${renderBeastView()}`;
}
function renderBeastView() {
  const id = ui.beastView, be = id && beast(id);
  if (!be) return '';
  const e = (cfg.beasts || {})[id] || {}, num = String(BEASTS.filter(x => x.has).indexOf(be) + 1).padStart(3, '0');
  const date = t => new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  let body;
  if (!e.seen) body = `<div class="q">?</div><b class="big2">N° ${num} · ???</b><p>Tu n'as pas encore croisé cette créature. Continue la chasse !</p>`;
  else if (!e.wins) body = `${beastImg(be, 'locked')}<b class="big2">${esc(be.name)}</b><p>N° ${num} · ${esc(be.from)}</p><p>Rencontrée, mais pas encore vaincue.</p>`;
  else body = `${beastImg(be, '')}<b class="big2">${esc(be.name)}</b><p>N° ${num} · ${esc(be.from)} · ${rarChip(be)}</p><p class="ltxt">${esc(be.txt)}</p><div class="rules">${be.rules.map(r => `<span>${esc(RULES[r])}</span>`).join('')}</div><p>${plural(e.wins, 'victoire', 'victoires')} · première le ${date(e.first)}</p>`;
  return `<div class="bview" data-a="bclose"><div>${body}<div class="row center" style="margin-top:10px"><button class="btn" data-a="bclose">Fermer</button></div></div></div>`;
}

/* duel */
function duelStart() {
  const n1 = ($('#d-n1')?.value || '').trim() || cfg.duelNames?.[0] || 'Joueur 1';
  const n2 = ($('#d-n2')?.value || '').trim() || cfg.duelNames?.[1] || 'Joueur 2';
  if (n1 !== cfg.duelNames?.[0] || n2 !== cfg.duelNames?.[1]) { cfg.duelNames = [n1, n2]; saveCfg(); }
  const qs = [], used = [];
  for (let i = 0; i < 10; i++) { const q = pickQ(used); if (!q || used.includes(q.id)) break; used.push(q.id); qs.push(q); }
  if (qs.length < 3) { toast('Il faut au moins 3 mots dans ta sélection pour un duel.'); return; }
  ui.duel = { state: 'turn', p: 0, qs, i: 0, scores: [0, 0], phase: 'ask', names: [n1, n2] };
  document.activeElement?.blur?.();
  render();
}
function duelPlay() { const d = ui.duel; d.state = 'play'; d.i = 0; d.phase = 'ask'; d.given = ''; ui.toCard = true; render(); }
function duelAnswer(val) {
  const d = ui.duel;
  if (!d || d.state !== 'play') return;
  if (d.phase === 'res') {
    d.i++;
    if (d.i >= d.qs.length) {
      if (d.p === 0) { d.p = 1; d.state = 'turn'; }
      else { d.state = 'end'; cfg.stats.duels = (cfg.stats.duels || 0) + 1; if (d.qs.length === 10 && Math.min(...d.scores) === 0 && Math.max(...d.scores) === 10) award('fair-play'); saveCfg(); confetti(); celebrate(); }
      document.activeElement?.blur?.();
      render(); return;
    }
    d.phase = 'ask'; ui.toCard = true; render(); return;
  }
  if (!val.trim()) return;
  const q = d.qs[d.i];
  d.ok = check(val, q); d.given = val;
  if (d.ok) d.scores[d.p]++;
  d.phase = 'res';
  render();
}
function renderDuel() {
  const d = ui.duel || (ui.duel = { state: 'setup' });
  const sword = `<svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="var(--btn)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2M9.5 17.5 21 6V3h-3L6.5 14.5M11 19l-6-6M8 16l-4 4M5 21l-2-2"/></svg>`;
  const names = cfg.duelNames || ['Joueur 1', 'Joueur 2'];
  if (d.state === 'setup') return `<div class="card done game">${sword}<b class="big">Duel</b><p>Les mêmes 10 mots pour chacun, chacun son tour sur ce téléphone. Le meilleur score gagne. Le duel ne change pas ta progression.</p>
    <div class="two" style="text-align:left"><div><label for="d-n1">Joueur 1</label><input id="d-n1" value="${esc(names[0])}"></div><div><label for="d-n2">Joueur 2</label><input id="d-n2" value="${esc(names[1])}"></div></div>
    <div class="row center"><button class="btn" data-a="duelgo">Lancer le duel</button></div></div>`;
  if (d.state === 'turn') return `<div class="card done game">${sword}<p class="hint">${d.p === 0 ? 'Premier joueur' : `Passe le téléphone. ${esc(d.names[0])} a fait ${d.scores[0]}/${d.qs.length}.`}</p><b class="big">À ${esc(d.names[d.p])} de jouer</b><p>${plural(d.qs.length, 'mot', 'mots')} à traduire.</p><div class="row center"><button class="btn" data-a="duelplay">C'est parti</button></div></div>`;
  if (d.state === 'end') {
    const [a, b2] = d.scores, win = a === b2 ? null : a > b2 ? 0 : 1;
    return `<div class="card done game">${sword}<b class="big">${win === null ? 'Égalité !' : `${esc(d.names[win])} gagne !`}</b><div class="duelscore"><div><span>${esc(d.names[0])}</span><b>${a}</b></div><div><span>${esc(d.names[1])}</span><b>${b2}</b></div></div><div class="row center"><button class="btn" data-a="duelgo">Revanche</button><button class="btn ghost" data-a="duelsetup">Changer les joueurs</button></div></div>`;
  }
  const q = d.qs[d.i], res = d.phase === 'res';
  const qq = { ...q, given: d.given };
  return `<div class="card ${res ? (d.ok ? 'ok' : 'ko') : ''}">
    <div class="dir"><span class="flag">${esc(d.names[d.p])} · ${esc(flagOf(q))}</span><span>Mot ${d.i + 1}/${d.qs.length} · <b>${d.scores[d.p]}</b> pt${d.scores[d.p] > 1 ? 's' : ''}</span></div>
    <div class="word" lang="${esc(langCode(q.pl))}">${esc(q.prompt.join(' / '))}</div>
    ${res ? resultBox(qq, d.ok) : ''}
    <form id="df" autocomplete="off" style="margin-top:14px">${answerInput(q, res ? 'Entrée pour continuer' : 'En ' + langName(q.al) + '…', res ? 'next' : 'done')}<div class="row"><button class="btn grow" type="submit">${res ? (d.i + 1 >= d.qs.length ? 'Terminer' : 'Mot suivant') : 'Valider'}</button></div></form>
  </div>`;
}
const modeBar = () => `<div class="modes">${MODES.map(([k, l]) => `<button class="mode" data-a="mode" data-k="${k}" aria-pressed="${(ui.mode || 'rev') === k}">${l}</button>`).join('')}</div>`;

/* ---------- backup ---------- */
const backupJSON = () => JSON.stringify({ app: 'mon-vocabulaire', v: 1, savedAt: new Date().toISOString(), cfg, words: [...words.values()] });
function readBackup(text) {
  try { const b = JSON.parse(String(text).trim()); if (b && b.app === 'mon-vocabulaire' && Array.isArray(b.words)) return b; } catch (e) {}
  return null;
}
function applyBackup(b) {
  [...words.values()].forEach(w => backend.del(w));
  words = new Map();
  b.words.forEach(w => { if (w && w.id && Array.isArray(w.en) && Array.isArray(w.fr)) { words.set(w.id, w); backend.put(w); } });
  const rev = cfg.rev || 0;
  cfg = mergeCfg(b.cfg || {}); cfg.rev = rev; saveCfg();
  applyTheme(); restartSession();
}
function downloadBackup() {
  const blob = new Blob([backupJSON()], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'sauvegarde-vocabulaire-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  toast('Sauvegarde téléchargée');
}

/* ---------- render ---------- */
function renderHeader() {
  const all = [...words.values()];
  const sc = score();
  $('#sScore').textContent = fmt(sc);
  $('#score').classList.toggle('pop', popScore); popScore = false;
  const st = streakNow(), g = goalOf(), tc = todayCount();
  const flame = '<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M7 0c1 3 5 5 5 9.5A5 5 0 0 1 2 9.5C2 7 4 6 4 4c1.5 1 2 2.5 2 3.5C7.5 6 7.5 3 7 0z" fill="var(--accent)"/></svg>';
  $('#sStreak').innerHTML = `${ring(tc / g, 20, 3.5)}<span><b>${Math.min(tc, g)}/${g}</b> aujourd'hui</span><span class="sep">·</span>${flame}<span>${st ? `<b>${plural(st, 'jour', 'jours')}</b> d'affilée` : 'série à lancer'}</span>`;
  const lb = cfg.lastBadge;
  $('#sBest').textContent = 'points · ' + titleOf(sc);
  $('#lastBtn').innerHTML = lb ? `<img src="badge-${esc(lb.img)}.webp" alt=""><small>Dernier badge</small>` : '';
  $('#lastBtn').style.visibility = lb ? '' : 'hidden';
  const counts = INTER.map((_, i) => all.filter(w => w.lvl === i).length);
  const max = Math.max(1, ...counts);
  const crown = '<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 11 2 2l4.5 4L9 0l2.5 6L16 2l1 9z" fill="var(--accent)"/></svg>';
  $('#boxes').innerHTML = counts.map((c, i) => `<div class="bx${i === TOP ? ' trophy' : ''}${i === popBox ? ' pop' : ''}" title="${plural(c, 'mot', 'mots')} · ${PTS[i]} pts chacun"><i style="height:${Math.round(c / max * 100)}%"></i>${i === TOP ? crown : ''}<b>${c}</b><small>${BOXL[i]}</small></div>`).join('');
  popBox = -1;
  document.querySelectorAll('nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === view));
  $('#gear').setAttribute('aria-pressed', view === 'set');
}
function ansChips() {
  const f = cfg.filt, act = cfg.langs.filter(l => f.on.includes(l.id)), S = answerLangs();
  const opts = [['fr', 'Français'], ...act.map(l => [l.id, l.name])].map(([v, l]) => [v, l, !f.mix && S.includes(v)]);
  opts.push(['mix', 'Mélange', f.mix]);
  return opts.map(([v, l, p]) => `<button class="chip" data-a="ans" data-val="${v}" aria-pressed="${p}">${esc(l)}</button>`).join('');
}
function renderFilters() {
  const f = cfg.filt, on = f.on;
  const arrow = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;
  if (f.hide) {
    const th = on.length === 1 && ui.theme !== 'all' ? getLib(ui.theme).name : 'tous les thèmes';
    const S = f.mix ? 'mélange' : answerLangs().map(langName).join(', ');
    const sum = `${cfg.langs.filter(l => on.includes(l.id)).map(l => l.name).join(', ')} · ${th} · réponse en ${S}`;
    return `<button class="fsum" data-a="fold" aria-expanded="false"><span>${esc(sum)}</span>${arrow}</button>`;
  }
  let h = `<div class="filters"><button class="fold" data-a="fold" aria-expanded="true" aria-label="Cacher les choix">${arrow}</button>`;
  if (cfg.langs.length > 1) h += `<div class="fl"><span>Bibliothèques</span>${cfg.langs.map(l => `<button class="chip" data-a="tog" data-l="${l.id}" aria-pressed="${on.includes(l.id)}">${esc(l.name)}</button>`).join('')}</div>`;
  if (on.length === 1 && libsOf(on[0]).length > 1) {
    const tri = `<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style="transform:rotate(${ui.themeOpen ? 90 : 0}deg)"><path d="M3 1.5 9.5 6 3 10.5z" fill="currentColor"/></svg>`;
    const all = [['all', 'Tous'], ...libsOf(on[0]).map(l => [l.id, l.name])];
    const shown = ui.themeOpen ? all : all.filter(([v]) => v === ui.theme);
    h += `<div class="fl"><button class="tlab" data-a="topen" aria-expanded="${!!ui.themeOpen}">Thème ${tri}</button>${shown.map(([v, l]) => `<button class="chip" data-a="theme" data-val="${v}" aria-pressed="${ui.theme === v}">${esc(l)}</button>`).join('')}</div>`;
  }
  h += `<div class="fl"><span>Répondre en</span>${ansChips()}</div>`;
  return h + '</div>';
}
function renderRev() {
  if (!words.size) return `<div class="empty"><h2>Ta boîte est vide</h2><p>Ajoute tes premiers mots pour commencer à réviser.</p><button class="btn" data-a="goadd">Ajouter des mots</button></div>`;
  if (!MODES.some(m => m[0] === ui.mode)) ui.mode = 'rev';
  const mode = ui.mode;
  if (mode !== 'rev') return modeBar() + renderFilters() + (mode === 'sprint' ? renderSprint() : mode === 'boss' ? renderBoss() : renderDuel());
  const s = session;
  const head = modeBar() + renderFilters();
  if (!s || s.state === 'done') {
    const any = [...words.values()].some(inFilter);
    return head + `<div class="card done"><b class="big">${s && s.done ? 'Bravo !' : 'Tout est à jour'}</b>
      ${s && s.done ? `<div class="sum"><span>${plural(s.done, 'réponse', 'réponses')}</span><span>${s.good} justes</span><span>meilleure série : ${s.bestCombo}</span><span class="pts">${s.gained >= 0 ? '+' : ''}${s.gained} pts</span></div>` : `<p class="hint">${any ? "Aucun mot à revoir aujourd'hui dans cette sélection." : 'Aucun mot dans cette sélection.'}</p>`}
      ${any ? `<p>Les mots du jour sont faits. Continue sur toute ta sélection : les mots les plus fragiles sortent plus souvent.</p>
      <button class="btn" data-a="extra">Continuer l'entraînement</button>` : ''}</div>`;
  }
  const w = words.get(s.cur.id);
  if (!w) { next(); return renderRev(); }
  const q = s.cur, ansName = langName(q.al);
  const prompt = q.prompt.join(' / ');
  const cls = s.state === 'right' ? 'ok' : s.state === 'wrong' ? 'ko' : '';
  const move = q.to !== q.from ? ` · case ${BOXL[q.to]}` : '';
  const flagTxt = (q.pl === 'fr' ? 'Français' : getLang(q.pl).name) + ' → ' + ansName;
  let fb = '';
  if (s.state === 'right') fb = `<div class="fb ok">Juste ! <span class="pts">${q.delta > 0 ? '+' + q.delta + ' pts' : ''}</span>${move}${q.to === TOP && q.from !== TOP ? ' · mot maîtrisé !' : ''}${q.loose ? `<small>Bonne réponse ! Orthographe exacte : ${esc(q.answers.join(' ou '))}</small>` : q.answers.length > 1 ? `<small>Toutes les réponses : ${esc(q.answers.join(' ou '))}</small>` : ''}</div>`;
  if (s.state === 'wrong') fb = `<div class="fb ko">Ta réponse : <span class="yours">${esc(q.given)}</span><span class="right">${esc(q.answers.join(' ou '))}</span><small>${q.delta < 0 ? `<span class="pts">${q.delta} pts</span> · ` : ''}retour en case Nouv.</small>${mustRetype(q) ? `<small><b>Recopie ${q.answers.flatMap(variants).length > 1 ? 'une de ces réponses' : 'la bonne réponse'} pour continuer.</b></small>` : ''}</div>`;
  const retype = s.state === 'wrong' && mustRetype(q);
  if (s.state === 'ask') autoSay('q' + s.done + q.id, q.prompt[0], q.pl); else autoSay('a' + s.done + q.id, q.answers[0], q.al);
  const ph = s.state === 'ask' ? 'En ' + ansName + '…' : retype ? 'Recopie en ' + ansName + '…' : 'Entrée pour le mot suivant';
  const prog = s.extra ? `Entraînement libre · ${s.done}` : `Encore ${s.queue.length + (s.state === 'ask' ? 1 : 0)} à revoir`;
  const party = ui.celebrate ? `<div class="party"><b>Ton premier mot maîtrisé !</b><p>Ça fait au moins 2 mois que tu révises régulièrement. Bravo, continue comme ça.</p>${SUPPORT_URL ? `<p>Si l'appli t'aide à progresser, tu peux soutenir son développement.</p><div class="row"><a class="btn" href="${esc(SUPPORT_URL)}" target="_blank" rel="noopener">Soutenir l'appli</a><button class="btn ghost" type="button" data-a="party">Plus tard</button></div>` : `<div class="row"><button class="btn" type="button" data-a="party">Merci !</button></div>`}</div>` : '';
  return head + party + `<div class="card ${cls}">
    <div class="dir"><span class="flag">${esc(flagTxt)}</span><span>${s.combo >= 3 ? `<span class="combo">Série de ${s.combo}</span> · ` : ''}${prog}</span></div>
    <div class="word" lang="${esc(langCode(q.pl))}">${esc(prompt)}</div>${sayBtn(q.prompt[0], q.pl)}
    ${fb}${s.state !== 'ask' ? sayBtn(q.answers[0], q.al, 'Écouter la réponse') : ''}
    <form id="f" autocomplete="off" style="margin-top:14px">
      <input id="ans" lang="${esc(langCode(q.al))}" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${s.state === 'ask' || retype ? 'done' : 'next'}" placeholder="${esc(ph)}" aria-label="Ta réponse en ${esc(ansName)}">
      <div class="row">${s.state === 'ask' ? `<button class="btn grow" type="submit">Vérifier</button>` : retype ? `<button class="btn grow" type="submit">Valider</button>` : `<button class="btn grow" type="submit" id="nextBtn">Mot suivant</button>`}</div>
      ${s.state === 'wrong' && q.addTo ? `<div class="row"><button class="btn link" type="button" data-a="mine">Ma réponse était juste aussi : l'ajouter</button></div>` : ''}
    </form>
  </div>`;
}
function libOptions(lang, sel) {
  return libsOf(lang).map(l => `<option value="${l.id}"${l.id === sel ? ' selected' : ''}>${esc(l.name)}</option>`).join('');
}
function renderLib() {
  if (!ui.libLang || !cfg.langs.some(l => l.id === ui.libLang)) ui.libLang = cfg.langs[0].id;
  const lang = ui.libLang, L = getLang(lang), q = norm(ui.q);
  const ws = [...words.values()].filter(w => wLang(w) === lang && (!q || [...w.en, ...w.fr].some(x => norm(x).includes(q))));
  const libs = libsOf(lang);
  const orphan = ws.filter(w => !libs.some(l => l.id === wLib(w)));
  const when = w => isDue(w) ? "à revoir aujourd'hui" : (d => d <= 1 ? 'demain' : `dans ${d} jours`)(Math.round((midnight(w.due) - midnight(Date.now())) / DAY));
  const row = w => `<li><button class="item" data-a="open" data-id="${w.id}" aria-expanded="${ui.openId === w.id}"><span class="t" lang="${esc(L.code)}">${esc(w.en.join(' / '))}</span><span class="fr">${esc(w.fr.join(' / '))}</span>
      <span class="lv" aria-label="Case ${BOXL[w.lvl]}">${INTER.slice(1).map((_, i) => `<i class="${i < w.lvl ? 'on' : ''}${i === TOP - 1 && w.lvl === TOP ? ' top' : ''}"></i>`).join('')}</span></button>
      ${ui.openId === w.id ? `<form class="edit" data-id="${w.id}" id="ef">
        <div class="two"><div><label for="e-t">${esc(L.name)}</label><input id="e-t" value="${esc(w.en.join(' / '))}"></div>
        <div><label for="e-fr">Français (sépare par /)</label><input id="e-fr" value="${esc(w.fr.join(' / '))}"></div></div>
        <label for="e-lib">Thème</label><select id="e-lib">${libOptions(lang, wLib(w))}</select>
        <div class="meta">${when(w)} · case ${BOXL[w.lvl]} · ${w.ok} juste(s), ${w.ko} erreur(s)</div>
        <div class="row"><button class="btn" type="submit">Enregistrer</button><button class="btn ghost" type="button" data-a="del" data-id="${w.id}">Supprimer</button></div>
      </form>` : ''}</li>`;
  const libBlock = l => {
    // numbers in increasing order (1, 2, 3… then 1er, 2e…), everything else alphabetical
    const num = w => { const f = w.fr.find(x => /^\s*\d/.test(x)); if (!f) return null; const m = f.replace(/\s/g, '').match(/^(\d+)(er|re|e|ème)?/i); return m ? (m[2] ? 1e12 : 0) + Number(m[1]) : null; };
    const lw = ws.filter(w => wLib(w) === l.id).sort((a, b) => { const x = num(a), y = num(b); if (x !== null && y !== null) return x - y; if (x !== null) return -1; if (y !== null) return 1; return a.en[0].localeCompare(b.en[0]); });
    if (q && !lw.length) return '';
    const n = [...words.values()].filter(w => wLib(w) === l.id).length;
    const editing = ui.editLib === l.id;
    return `<div class="libh"><h3>${esc(l.name)} <small>${n}</small></h3><button class="btn ghost small" data-a="editlib" data-id="${l.id}">${editing ? 'Fermer' : 'Modifier'}</button></div>
      ${editing ? `<form class="panel" id="lf" data-id="${l.id}"><label for="l-n" style="margin-top:0">Nom du thème</label><input id="l-n" value="${esc(l.name)}">
        <div class="row"><button class="btn small" type="submit">Enregistrer</button>${ui.confirm === 'lib:' + l.id ? `<button class="btn danger small" type="button" data-a="dellib" data-id="${l.id}">Confirmer : supprimer ${plural(n, 'mot', 'mots')}</button>` : `<button class="btn ghost small" type="button" data-a="askdel" data-k="lib:${l.id}">Supprimer le thème</button>`}</div></form>` : ''}
      <ul class="list">${lw.map(row).join('')}</ul>`;
  };
  return `<section>
    <div class="fl" style="margin-bottom:12px">${cfg.langs.map(l => `<button class="chip" data-a="liblang" data-id="${l.id}" aria-pressed="${l.id === lang}">${esc(l.name)}</button>`).join('')}<button class="chip add" data-a="golang">+ Langue</button></div>
    <input id="q" type="search" placeholder="Chercher un mot…" value="${esc(ui.q)}" aria-label="Chercher">
    ${ui.newLib ? `<form class="panel" id="nl"><label for="n-n" style="margin-top:0">Nouveau thème en ${esc(lower(L.name))}</label><input id="n-n" placeholder="ex. Chantier, Leçon 6, Verbes…"><div class="row"><button class="btn small" type="submit">Créer</button><button class="btn ghost small" type="button" data-a="newlib">Annuler</button></div></form>`
      : `<div class="row"><button class="btn ghost small" data-a="newlib">Nouveau thème</button><button class="btn ghost small" data-a="autosort">Ranger automatiquement</button></div>`}
    ${libs.map(libBlock).join('')}
    ${orphan.length ? `<div class="libh"><h3>Sans thème</h3></div><ul class="list">${orphan.map(row).join('')}</ul>` : ''}
    ${!ws.length ? `<p class="note">${q ? 'Aucun mot ne correspond.' : 'Aucun mot dans cette bibliothèque pour l’instant.'}</p>` : ''}
  </section>`;
}
function renderAdd() {
  if (!cfg.langs.some(l => l.id === ui.addLang)) ui.addLang = cfg.langs[0].id;
  if (ui.addLib !== '__auto' && !libsOf(ui.addLang).some(l => l.id === ui.addLib)) ui.addLib = '__auto';
  const L = getLang(ui.addLang);
  const enCount = [...words.values()].filter(w => wLang(w) === 'en').length;
  return `<section><h2>Où ajouter ?</h2>
    <div class="two"><div><label for="a-lang">Bibliothèque</label><select id="a-lang">${cfg.langs.map(l => `<option value="${l.id}"${l.id === ui.addLang ? ' selected' : ''}>${esc(l.name)}</option>`).join('')}</select></div>
    <div><label for="a-lib">Thème</label><select id="a-lib"><option value="__auto"${ui.addLib === '__auto' ? ' selected' : ''}>Automatique</option>${libOptions(ui.addLang, ui.addLib)}<option value="__new">+ Nouveau thème…</option></select></div></div>
    ${ui.addLib === '__auto' ? '<p class="hint">L’appli range chaque mot dans un thème selon sa traduction. Tu pourras le déplacer dans « Mes mots ».</p>' : ''}
    ${ui.addNew ? `<form id="at" class="row"><input id="at-n" placeholder="Nom du nouveau thème" style="flex:1"><button class="btn" type="submit">Créer</button></form>` : ''}
  </section>
  <section><h2>Ajouter un mot</h2>
    <form id="af" autocomplete="off">
      <div class="two"><div><label for="a-t">${esc(L.name)}</label><input id="a-t" lang="${esc(L.code)}" autocapitalize="off" spellcheck="false"></div>
      <div><label for="a-fr">Français</label><input id="a-fr" autocapitalize="off" placeholder="ex. en fait / en réalité"></div></div>
      <p class="hint">Plusieurs traductions possibles ? Sépare-les par « / ».</p>
      <div class="row"><button class="btn" type="submit">Ajouter</button></div>
    </form></section>
  ${renderGen()}
  <section><h2>Importer une liste</h2>
    <p class="note" style="margin-top:0">Colle la liste que je te donne à la fin d'un cours. Un mot par ligne : <b>${esc(lower(L.name))} = français</b>. Une ligne <b># Chantier</b> range les mots qui suivent dans ce thème.</p>
    <form id="if"><textarea id="imp" rows="8" placeholder="to drive = conduire&#10;truck = camion">${esc(ui.importText)}</textarea>
    <div class="row"><button class="btn" type="submit">Importer</button>${L.code === 'en' && enCount < 5 ? `<button class="btn ghost" type="button" data-a="starter">Mots de mes premières leçons</button>` : ''}</div></form>
  </section>`;
}
function renderProg() {
  const sc = score(), nt = nextTitle(sc), g = goalOf(), tc = todayCount(), st = streakNow(), S = cfg.stats, days = S.days || {};
  const prevT = [...TITLES].reverse().find(x => x[0] <= sc);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const dow = (today.getDay() + 6) % 7, WEEKS = 18;
  const start = new Date(today); start.setDate(start.getDate() - dow - 7 * (WEEKS - 1));
  let cells = '';
  for (let i = 0; i < WEEKS * 7; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    if (d > today) { cells += '<i class="c future"></i>'; continue; }
    const k = ymd(d), n = days[k] || 0, dg = dayGoal(k), lv = !n ? 0 : n < dg / 2 ? 1 : n < dg ? 2 : 3;
    cells += `<i class="c l${lv}" style="--gc:${goalCol(dg)}" title="${d.toLocaleDateString('fr-FR')} : ${n} / ${dg}"></i>`;
  }
  const vals = achValues();
  const nGot = ACH.reduce((n, a) => n + tierOf(a, vals[a.id]), 0);
  const achCard = a => {
    const v = vals[a.id], t = tierOf(a, v), nx = a.steps[t];
    const from = t ? a.steps[t - 1] : 0;
    const pic = `<button class="bpic" data-a="bview" data-k="${a.id}" data-t="${Math.max(1, t)}" aria-label="Voir le badge">${t ? `<img class="bimg" src="badge-${a.img}-${t}.webp" alt="" loading="lazy">` : '<span class="qbox">?</span>'}</button>`;
    return `<div class="badge${t ? ' on' : ''}${t === a.steps.length ? ' maxed' : ''}">${pic}<b>${t ? esc(a.names[t - 1]) : esc(a.label)}</b><span>${t ? esc(a.label) : `${fmt(a.steps[0])} ${esc(a.unit)}`}</span>
      ${nx ? `<div class="bar3"><i style="width:${Math.min(100, Math.round((v - from) / (nx - from) * 100))}%"></i></div><span>${fmt(Math.min(v, nx))} / ${fmt(nx)} pour <b>${esc(a.names[t])}</b></span>` : '<span><b>Niveau maximum !</b></span>'}</div>`;
  };
  const sec = cfg.secrets || {}, nSec = SECRETS.filter(x => sec[x[0]]).length;
  const secGrid = SECRETS.map(([id, name]) => sec[id] ? `<button class="on" data-a="bview" data-k="secret" data-t="${id}" aria-label="${esc(name)}"><img src="badge-secret-${id}.webp" alt="" loading="lazy"></button>` : `<button data-a="bview" data-k="secret" data-t="${id}" aria-label="Badge secret">?</button>`).join('');
  const lb = cfg.lastBadge;
  const last = lb ? `<button class="lastb" data-a="bview" data-k="last"><img src="badge-${esc(lb.img)}.webp" alt=""><span>Dernier badge gagné<b>${esc(lb.name)}</b></span></button>` : '';
  const topMsg = nt ? `encore ${fmt(nt[0] - sc)} points pour devenir <b>${esc(nt[1])}</b>` : sc >= 20000 ? 'Titre secret débloqué. Bienvenue chez les immortels !' : 'Tu as atteint le plus haut titre… officiel.';
  return `<section class="prog">
    <div class="ptitle"><div><span class="note">Ton titre</span><b class="tname">${esc(titleOf(sc))}</b><span class="note">${topMsg}</span></div>
      ${nt ? `<div class="bar2"><i style="width:${Math.round((sc - prevT[0]) / (nt[0] - prevT[0]) * 100)}%"></i></div>` : ''}${last}</div>
    <div class="pgoal">${ring(tc / g, 96, 10, 'var(--btn)')}<div><b class="big2">${Math.min(tc, g)} / ${g}</b><p style="margin:2px 0 8px">${tc >= g ? 'Défi du jour réussi !' : `bonnes réponses aujourd'hui, encore ${g - tc} pour réussir le défi`}</p>
      <div class="fl"><span>Objectif</span>${[10, 20, 30, 50].map(v => `<button class="chip gchip" data-a="goal" data-val="${v}" aria-pressed="${g === v}" style="--gc:${goalCol(v)}">${v}</button>`).join('')}</div></div></div>
  </section>
  <section><h2>${st ? `${plural(st, 'jour', 'jours')} d'affilée` : 'Ta série'}</h2>
    <p class="note" style="margin-top:0">Un jour compte quand tu réussis ton défi du jour.${S.best ? ` Record : ${plural(S.best, 'jour', 'jours')}.` : ''}</p>
    <div class="cal">${cells}</div>
    <div class="legend"><span>Moins</span><i class="c l0"></i><i class="c l1" style="--gc:${goalCol(g)}"></i><i class="c l2" style="--gc:${goalCol(g)}"></i><i class="c l3" style="--gc:${goalCol(g)}"></i><span>Défi réussi</span></div>
    <div class="legend"><span>Défi de</span>${[10, 20, 30, 50].map(v => `<i class="c l3" style="--gc:${goalCol(v)}"></i><span>${v}</span>`).join('')}</div>
  </section>
  <section><h2>Records</h2>
    <div class="recs"><div><b>${S.sprintBest || 0}</b><span>meilleur sprint</span></div><div><b>${S.bestCombo || 0}</b><span>meilleure série de bonnes réponses</span></div><div><b>${S.bossWins || 0}</b><span>${(S.bossWins || 0) > 1 ? 'boss battus' : 'boss battu'}</span></div><div><b>${fmt(S.bestScore || 0)}</b><span>meilleur score</span></div></div>
  </section>
  <section><h2>Succès <span class="note">${nGot}/${ACH.reduce((n, a) => n + a.steps.length, 0)}</span></h2>
    <p class="note" style="margin-top:0">Touche un badge pour le voir en grand.</p>
    <div class="row" style="margin-bottom:12px"><button class="btn ghost grow" data-a="coll">Voir toute la collection</button></div>
    <div class="badges">${ACH.map(achCard).join('')}</div>
  </section>
  <section><h2>Badges secrets <span class="note">${nSec}/${SECRETS.length}</span></h2>
    <p class="note" style="margin-top:0">Ils se débloquent en faisant des choses inattendues. À toi de les trouver !</p>
    <div class="secrets">${secGrid}</div>
  </section>${renderBview()}`;
}
// the whole collection: one row of 6 boxes per family, then every secret; missing ones are empty "?" boxes
function renderColl() {
  const vals = achValues(), sec = cfg.secrets || {};
  const nGot = ACH.reduce((n, a) => n + tierOf(a, vals[a.id]), 0) + SECRETS.filter(x => sec[x[0]]).length;
  const nAll = ACH.reduce((n, a) => n + a.steps.length, 0) + SECRETS.length;
  const rows = ACH.map(a => { const t = tierOf(a, vals[a.id]); return `<div class="crow"><b>${esc(a.label)}</b><div class="cgrid">${a.steps.map((_, i) => `<button data-a="bview" data-k="${a.id}" data-t="${i + 1}" class="${i < t ? 'on' : ''}" aria-label="${esc(i < t ? a.names[i] : 'Badge à découvrir')}">${i < t ? `<img src="badge-${a.img}-${i + 1}.webp" alt="" loading="lazy">` : '?'}</button>`).join('')}</div></div>`; }).join('');
  const secs = SECRETS.map(([id, name]) => sec[id] ? `<button class="on" data-a="bview" data-k="secret" data-t="${id}" aria-label="${esc(name)}"><img src="badge-secret-${id}.webp" alt="" loading="lazy"></button>` : `<button data-a="bview" data-k="secret" data-t="${id}" aria-label="Badge secret">?</button>`).join('');
  return `<section><div class="row" style="justify-content:space-between;align-items:center"><h2 style="margin:0">Collection <span class="note">${nGot}/${nAll}</span></h2><button class="btn ghost" data-a="collback">Retour</button></div>
    <div class="bar2" style="margin:12px 0"><i style="width:${Math.round(nGot / nAll * 100)}%"></i></div>
    ${rows}
    <div class="crow"><b>Badges secrets</b><div class="cgrid">${secs}</div></div>
  </section>${renderBview()}`;
}
// big view of one badge (family tier, secret, or the last one won)
function renderBview() {
  const bv = ui.bview;
  if (!bv) return '';
  let img = '', name = '', sub = '', info = '', locked = false, q = false;
  const when = t => t ? 'Obtenu le ' + new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  let k = bv.k, t = bv.t;
  if (k === 'last') { const lb = cfg.lastBadge; if (!lb) return ''; const m = lb.img.match(/^secret-(.+)$/); if (m) { k = 'secret'; t = m[1]; } else { const a = ACH.find(x => lb.img.startsWith(x.img + '-')); if (!a) return ''; k = a.id; t = Number(lb.img.split('-').pop()); } }
  if (k === 'secret') {
    const x = secretOf(t), got = (cfg.secrets || {})[t];
    if (!x) return '';
    if (got) { img = 'secret-' + t; name = x[1]; sub = 'Badge secret'; info = `<p>${esc(x[2])}</p><p>${when(got)}</p>`; }
    else { q = true; name = 'Badge secret'; info = '<p>Celui-là se cache encore. Continue de réviser, tu finiras par tomber dessus.</p>'; }
  } else {
    const a = ACH.find(x => x.id === k); if (!a) return '';
    const v = achValues()[a.id], cur = tierOf(a, v); t = Number(t);
    locked = t > cur; img = a.img + '-' + t; name = locked ? 'Niveau ' + t + ' · ???' : a.names[t - 1]; sub = a.label;
    info = `<p>${fmt(a.steps[t - 1])} ${esc(a.unit)}</p>${a.hint ? `<p>${esc(a.hint)}</p>` : ''}<p>${locked ? `Encore ${fmt(a.steps[t - 1] - v)} pour l'obtenir.` : (when((cfg.tierDates || {})[a.id + '-' + t]) || 'Obtenu')}</p>`;
  }
  return `<div class="bview" data-a="bclose"><div>${q || locked ? '<div class="q">?</div>' : `<img src="badge-${img}.webp" alt="">`}<b class="big2">${esc(name)}</b>${sub ? `<p>${esc(sub)}</p>` : ''}${info}<div class="row center" style="margin-top:10px"><button class="btn" data-a="bclose">Fermer</button></div></div></div>`;
}
function renderHelp() {
  const arrowR = c => `<svg width="120" height="22" viewBox="0 0 120 22" aria-hidden="true"><path d="M4 11h104" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M104 4l10 7-10 7" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const arrowL = c => `<svg width="120" height="22" viewBox="0 0 120 22" aria-hidden="true"><path d="M116 11H12" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M16 4 6 11l10 7" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `<section><h2>Comment marchent les points ?</h2>
    <p style="margin:0">Chaque mot est rangé dans une case. Plus il avance, plus il revient tard, et plus il rapporte de points.</p>
    <div class="hbox">${BOXL.map((l, i) => `<div class="hb${i === TOP ? ' crown' : ''}"><small>${l}</small><b>${PTS[i]}</b><small>pt${PTS[i] > 1 ? 's' : ''}</small></div>`).join('')}</div>
    <div class="harrow hok">${arrowR('var(--green)')}<span><b>Juste</b> : le mot avance d'une case</span></div>
    <div class="harrow hko">${arrowL('var(--red)')}<span><b>Raté</b> : retour en case Nouv.</span></div>
    <ul class="hlist">
      <li>Ton <b>score</b>, c'est la somme des points de tous tes mots.</li>
      <li>Un mot raté perd tous ses points, mais il revient vite pour que tu le rattrapes.</li>
      <li>La case <b>3 mois</b> (avec la couronne) vaut 40 points : un mot qui y arrive est <b>maîtrisé</b>.</li>
      <li>Il faut au moins 2 mois de bonnes réponses (1, 3, 7, 16 puis 35 jours) pour qu'un mot arrive dans la case 3 mois.</li>
      <li>Le <b>défi du jour</b> (le petit cercle sous le titre) : un nombre de bonnes réponses à atteindre chaque jour. La <b>série</b> compte les jours d'affilée où tu le réussis.</li>
      <li>Ton <b>titre</b> (Débutant, Apprenti, Explorateur…) évolue avec ton score. Appuie sur la ligne du défi pour voir ta progression et tes succès.</li>
    </ul>
    <div class="row"><button class="btn" data-a="gorev">Réviser</button></div>
  </section>`;
}
function renderSet() {
  const t = cfg.theme;
  const p = t.preset === 'custom' ? t : (PRESETS[t.preset] || PRESETS.foret);
  const avail = LANG_PRESETS.filter(([n, c]) => !cfg.langs.some(l => l.code === c));
  return `<section><h2>Couleurs</h2>
    <div class="sw">${Object.entries(PRESETS).map(([k, v]) => `<button class="swb" data-a="preset" data-k="${k}" aria-pressed="${t.preset === k}"><div class="c" style="background:${v.main}"><i style="background:${v.accent}"></i></div><span>${v.name}</span></button>`).join('')}
    <button class="swb" data-a="preset" data-k="custom" aria-pressed="${t.preset === 'custom'}"><div class="c" style="background:${t.main}"><i style="background:${t.accent}"></i></div><span>Perso</span></button></div>
    <h3 style="margin-top:20px">Personnaliser</h3>
    <div class="row"><label style="margin:0;display:flex;gap:10px;align-items:center"><input type="color" id="c-main" value="${p.main}"> Couleur principale</label>
    <label style="margin:0;display:flex;gap:10px;align-items:center"><input type="color" id="c-acc" value="${p.accent}"> Couleur du score</label></div>
    <h3 style="margin-top:20px">Affichage</h3>
    <div class="fl" style="margin-top:8px">${[['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => `<button class="chip" data-a="scheme" data-k="${v}" aria-pressed="${t.mode === v}">${l}</button>`).join('')}</div>
    <h3 style="margin-top:20px">Écoute des mots</h3>
    ${canSpeak() ? `<p class="note" style="margin-top:0">Le bouton haut-parleur lit le mot avec la voix du téléphone. La qualité dépend des voix installées (surtout pour le coréen).</p><div class="fl"><button class="chip" data-a="ttsauto" aria-pressed="${!!cfg.ttsAuto}">Lecture automatique</button>${cfg.langs.map(l => `<button class="chip" data-a="say" data-t="${esc(l.code === 'ko' ? '안녕하세요' : l.code === 'en' ? 'Hello, how are you?' : l.name)}" data-l="${l.id}">Tester : ${esc(l.name)}</button>`).join('')}</div>` : '<p class="note" style="margin-top:0">Ce navigateur ne sait pas lire les mots à voix haute.</p>'}
    <h3 style="margin-top:20px">Présentation</h3>
    <div class="row"><button class="btn ghost" data-a="welcome">Revoir l'écran d'accueil</button></div>
    <h3 style="margin-top:20px">Couleurs du calendrier</h3>
    <p class="note" style="margin-top:0">Une couleur par objectif du défi : 10, 20, 30 et 50.</p>
    <div class="caltheme">${Object.entries(CAL_THEMES).map(([k, [n, c]]) => `<button data-a="caltheme" data-k="${k}" aria-pressed="${(cfg.calTheme || 'feu') === k}"><span>${c.map(x => `<i style="background:${x}"></i>`).join('')}</span>${n}</button>`).join('')}</div>
  </section>
  <section id="langs"><h2>Langues</h2>
    <ul class="langs">${cfg.langs.map(l => { const n = [...words.values()].filter(w => wLang(w) === l.id).length; return `<li><span><b>${esc(l.name)}</b> <span class="note">${plural(n, 'mot', 'mots')} · ${plural(libsOf(l.id).length, 'thème', 'thèmes')}</span></span>
      ${cfg.langs.length > 1 ? (ui.confirm === 'lang:' + l.id ? `<button class="btn danger small" data-a="dellang" data-id="${l.id}">Confirmer : tout supprimer</button>` : `<button class="btn ghost small" data-a="askdel" data-k="lang:${l.id}">Supprimer</button>`) : ''}</li>`; }).join('')}</ul>
    <h3 style="margin-top:18px">Ajouter une langue</h3>
    <div class="fl" style="margin-top:8px">${avail.map(([n, c]) => `<button class="chip" data-a="addlang" data-n="${n}" data-c="${c}">+ ${n}</button>`).join('')}</div>
    <form id="nlang" class="row"><input id="nl-n" placeholder="Autre langue (ex. Thaï)" style="flex:1"><button class="btn" type="submit">Ajouter</button></form>
  </section>
  ${canUpdate() ? `<section><h2>Mise à jour</h2><p class="note" style="margin-top:0">Version installée : ${APP_VERSION}</p><div class="row"><button class="btn ghost" data-a="checkupd">Vérifier les mises à jour</button><button class="btn ghost" data-a="update">Forcer la mise à jour</button></div></section>` : ''}
  ${SUPPORT_URL ? `<section><h2>Soutenir l'appli</h2><p class="note" style="margin-top:0">L'appli t'aide à progresser ? Tu peux soutenir son développement avec un petit don.</p><div class="row"><a class="btn" href="${esc(SUPPORT_URL)}" target="_blank" rel="noopener">Soutenir l'appli</a></div></section>` : ''}
  <section><h2>Sauvegarde</h2>
    <p class="note" style="margin-top:0">${backend && !framed ? "Tes mots sont enregistrés sur cet appareil. Fais une sauvegarde de temps en temps : elle te permet de tout récupérer sur un autre téléphone." : "Tes mots, ton score et tes réglages sont enregistrés dans ton compte. Si tu partages l'appli, chaque personne a sa propre boîte. La sauvegarde te permet de les transférer vers la version installée sur ton téléphone."}</p>
    <div class="row">${!framed ? '<button class="btn" data-a="backup">Sauvegarder (fichier)</button>' : ''}<button class="btn ghost" data-a="backuptext">Copier la sauvegarde (texte)</button>
    <span class="btn ghost filebtn">Restaurer un fichier<input type="file" id="restorefile" accept=".json,application/json,text/plain"></span></div>
    ${ui.backupText ? `<label for="bt">Sélectionne et copie ce texte :</label><textarea id="bt" rows="4" readonly>${esc(ui.backupText)}</textarea>` : ''}
    <details style="margin-top:12px"><summary class="note" style="cursor:pointer">Restaurer une sauvegarde copiée (texte)</summary><textarea id="restore" rows="4" placeholder="Colle ici ta sauvegarde" style="margin-top:8px"></textarea><div class="row"><button class="btn ghost" data-a="restoretext">Restaurer ce texte</button></div></details>
    ${ui.restore ? `<div class="panel"><p style="margin-top:0">Cette sauvegarde va <b>remplacer</b> tous tes mots actuels (${plural(ui.restore.words.length, 'mot', 'mots')} dans la sauvegarde).</p><div class="row"><button class="btn danger" data-a="restoreok">Oui, restaurer</button><button class="btn ghost" data-a="restorecancel">Annuler</button></div></div>` : ''}
  </section>`;
}
function render(fromSnap) {
  renderHeader();
  const ae = document.activeElement, keep = ae?.id;
  if (fromSnap && ae && /INPUT|TEXTAREA|SELECT/.test(ae.tagName) && ae.id !== 'ans') return;
  const ansVal = fromSnap ? $('#ans')?.value : null;
  if (view !== 'rev') $('#main').style.paddingBottom = '';
  const banner = !ui.newVersion ? '' : ui.updFailed
    ? `<div class="upd"><span>La version ${esc(ui.newVersion)} ne s'installe pas : sur GitHub, <b>app.js</b> ou <b>style.css</b> n'ont pas été remplacés (version installée : ${APP_VERSION}). Renvoie tous les fichiers, attends la coche verte, puis réessaie.</span><button class="btn small" data-a="update">Réessayer</button></div>`
    : `<div class="upd"><span>Nouvelle version disponible (${esc(ui.newVersion)})</span><button class="btn small" data-a="update">Mettre à jour</button></div>`;
  $('#main').innerHTML = banner + (view === 'rev' ? renderRev() : view === 'lib' ? renderLib() : view === 'add' ? renderAdd() : view === 'help' ? renderHelp() : view === 'prog' ? renderProg() : view === 'best' ? renderBest() : view === 'coll' ? renderColl() : renderSet()) + renderWelcome();
  if (view === 'rev') {
    const a = $('#ans');
    const card = document.querySelector('.card');
    // enough room below the card so it can always sit at the top of the screen, above the keyboard
    $('#main').style.paddingBottom = card ? Math.max(90, innerHeight - card.offsetHeight - 20) + 'px' : '';
    if (ui.toCard && card) { ui.toCard = false; card.scrollIntoView({ block: 'start' }); }
    if (a) { if (ansVal && session?.state === 'ask') a.value = ansVal; a.focus({ preventScroll: true }); }
  } else if (keep === 'q' && $('#q')) { const q = $('#q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

/* ---------- listening (speech synthesis of the phone, works offline) ---------- */
const SPEAK = { fr: 'fr-FR', en: 'en-GB', ko: 'ko-KR', es: 'es-ES', de: 'de-DE', it: 'it-IT', ja: 'ja-JP', zh: 'zh-CN', pt: 'pt-PT', ru: 'ru-RU', ar: 'ar-SA', nl: 'nl-NL' };
const canSpeak = () => 'speechSynthesis' in window;
function say(text, langId) {
  if (!canSpeak() || !text) return;
  const code = langCode(langId), tag = SPEAK[code] || code;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/\([^)]*\)/g, '').split(/[\/;]/)[0].trim());
  u.lang = tag; u.rate = .9;
  const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith(code.toLowerCase()));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
const sayBtn = (text, langId, label) => langId === 'fr' || !canSpeak() ? '' : `<button type="button" class="say" data-a="say" data-t="${esc(text)}" data-l="${esc(langId)}" aria-label="${esc(label || 'Écouter')}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>${label ? `<span>${esc(label)}</span>` : ''}</button>`;
// automatic reading: the foreign word when it appears, the foreign answer once revealed
function autoSay(key, text, langId) {
  if (!cfg.ttsAuto || langId === 'fr' || ui.saidKey === key) return;
  ui.saidKey = key; setTimeout(() => say(text, langId), 60);
}

/* ---------- welcome screen for a new user ---------- */
const WELCOME = [
  ['Bienvenue !', 'Mon vocabulaire t\'aide à retenir les mots de tes cours. Commence par ajouter tes mots dans l\'onglet <b>Ajouter</b> : un par un, en collant une liste, ou en demandant une liste toute prête à une IA (l\'appli te prépare la demande).'],
  ['Réviser au bon moment', 'Traduis chaque mot en écrivant ta réponse. Juste : le mot monte d\'une case et revient plus tard (1 jour, 3 jours, 1 semaine… jusqu\'à 3 mois). Raté : il revient vite. Plus un mot monte, plus il rapporte de points.'],
  ['Jouer', 'En plus de la révision : le <b>Sprint</b> (un maximum de bonnes réponses en 60 secondes), la <b>chasse aux monstres</b> (bats les créatures du folklore pour remplir ton bestiaire) et le <b>Duel</b> à deux sur le même téléphone.'],
  ['Progresser', 'Chaque jour, un défi : 10, 20, 30 ou 50 bonnes réponses. Enchaîne les jours, gagne des titres, des badges… et trouve les badges secrets. Touche la ligne du défi en haut pour voir ta progression.']
];
function renderWelcome() {
  if (ui.welcome == null) return '';
  const i = ui.welcome, [t, p] = WELCOME[i], last = i === WELCOME.length - 1;
  return `<div class="bview welcome"><div><span class="note">${i + 1} / ${WELCOME.length}</span><b class="big2">${t}</b><p class="ltxt">${p}</p><div class="dots">${WELCOME.map((_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div><div class="row center" style="margin-top:10px">${last ? '' : '<button class="btn ghost" data-a="wskip">Passer</button>'}<button class="btn" data-a="${last ? 'wskip' : 'wnext'}">${last ? 'C\'est parti !' : 'Suivant'}</button></div></div></div>`;
}
function firstRun() {
  if (cfg.welcomed !== undefined) return;
  cfg.welcomed = words.size > 0;
  if (!cfg.welcomed) ui.welcome = 0;
  saveCfg();
}

/* ---------- list generator: a ready-made request to paste into an AI ---------- */
function aiPrompt() {
  const L = getLang(ui.addLang), g = ui.gen || {}, n = g.n || 30, lvl = g.lvl || 'débutant', theme = (g.theme || '').trim() || 'la vie quotidienne';
  const name = lower(L.name), extra = [];
  if (L.code === 'en') extra.push('- Les verbes avec « to » devant (ex. « to drive = conduire »).');
  if (L.code === 'ko') extra.push('- Les mots coréens en hangeul uniquement, sans romanisation.');
  return `Donne-moi une liste de ${n} mots de vocabulaire en ${name} sur le thème « ${theme} », niveau ${lvl}, pour un francophone.

Réponds uniquement avec la liste, sans introduction, sans numéros et sans mise en forme. Une ligne par mot, exactement sous cette forme :
mot en ${name} = traduction en français

Règles :
- Commence par une ligne « # ${theme.charAt(0).toUpperCase() + theme.slice(1)} ».
- S'il y a plusieurs traductions françaises, sépare-les par « / ».
${extra.length ? extra.join('\n') + '\n' : ''}- Si un mot est ambigu, ajoute un indice entre parenthèses, ex. « bat = chauve-souris (animal) ».
- Les nombres en chiffres du côté français.
- Seulement des mots ou des expressions courtes, pas de phrases.`;
}
function renderGen() {
  const g = ui.gen || (ui.gen = {}), L = getLang(ui.addLang);
  return `<section><h2>Créer une liste avec une IA</h2>
    <p class="note" style="margin-top:0">Pas de liste sous la main ? L'appli prépare une demande toute faite pour Claude, ChatGPT ou Gemini.</p>
    <ol class="steps"><li>Choisis un thème, un nombre de mots et un niveau.</li><li>Appuie sur <b>Copier la demande</b>.</li><li>Colle-la dans l'IA de ton choix et envoie.</li><li>Copie sa réponse et colle-la ci-dessous dans <b>Importer une liste</b>.</li></ol>
    <label for="g-theme">Thème (en ${esc(lower(L.name))})</label><input id="g-theme" placeholder="ex. la cuisine, le chantier, les voyages" value="${esc(g.theme || '')}">
    <div class="two"><div><label for="g-n">Nombre de mots</label><select id="g-n">${[10, 20, 30, 50].map(v => `<option${(g.n || 30) === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div>
    <div><label for="g-lvl">Niveau</label><select id="g-lvl">${['débutant', 'intermédiaire', 'avancé'].map(v => `<option${(g.lvl || 'débutant') === v ? ' selected' : ''}>${v}</option>`).join('')}</select></div></div>
    <div class="row"><button class="btn" type="button" data-a="gencopy">Copier la demande</button><button class="btn ghost" type="button" data-a="genshow">${g.show ? 'Masquer' : 'Voir'} la demande</button></div>
    ${g.show ? `<textarea rows="10" readonly id="g-out">${esc(aiPrompt())}</textarea>` : ''}
  </section>`;
}

function readGen() { const g = ui.gen || (ui.gen = {}); if ($('#g-theme')) { g.theme = $('#g-theme').value; g.n = Number($('#g-n').value); g.lvl = $('#g-lvl').value; } }
/* ---------- toast ---------- */
let toastTimer, toastUndo;
function toast(t, undo) {
  $('#toastT').textContent = t; toastUndo = undo;
  $('#toastB').style.display = undo ? '' : 'none';
  $('#toast').style.display = 'flex';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').style.display = 'none', 5000);
}
$('#toastB').addEventListener('click', () => { toastUndo?.(); $('#toast').style.display = 'none'; });

/* ---------- events ---------- */
const go = v => { view = v; ui.bview = null; ui.beastView = null; if (v !== 'rev') stopBossTimer(); ui.openId = null; ui.editLib = null; ui.confirm = null; ui.newLib = false; ui.addNew = false; ui.restore = null; ui.backupText = ''; if (v === 'rev') startSessionIfNeeded(); render(); };
document.querySelector('nav').addEventListener('click', e => { const b = e.target.closest('button'); if (b) go(b.dataset.v); });
$('#gear').addEventListener('click', () => go(view === 'set' ? 'rev' : 'set'));
$('#score').addEventListener('click', () => go(view === 'help' ? 'rev' : 'help'));
$('#bestBtn').addEventListener('click', () => go(view === 'best' ? 'rev' : 'best'));
$('#lastBtn').addEventListener('click', () => { go('prog'); ui.bview = { k: 'last' }; render(); });
$('#sStreak').addEventListener('click', () => go(view === 'prog' ? 'rev' : 'prog'));

$('#main').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (f.id === 'f') submit($('#ans')?.value || '');
  if (f.id === 'sf') sprintAnswer($('#ans')?.value || '');
  if (f.id === 'bf') bossAnswer($('#ans')?.value || '');
  if (f.id === 'df') duelAnswer($('#ans')?.value || '');
  if (f.id === 'af') {
    const t = split($('#a-t').value), fr = split($('#a-fr').value);
    if (!t.length || !fr.length) { toast('Remplis les deux champs.'); return; }
    const r = addWords([[t, fr]], ui.addLang, ui.addLib);
    toast(r.added ? `« ${t[0]} » ajouté` : `« ${t[0]} » existait déjà : traductions fusionnées`);
    $('#a-t').value = ''; $('#a-fr').value = ''; $('#a-t').focus(); renderHeader();
    if (!session || session.state === 'done') restartSession();
    celebrate();
  }
  if (f.id === 'at') {
    const name = $('#at-n').value.trim(); if (!name) { toast('Donne un nom au thème.'); return; }
    const l = { id: uid(), lang: ui.addLang, name };
    cfg.libs.push(l); saveCfg(); ui.addLib = l.id; ui.addNew = false; toast(`Thème « ${name} » créé`); render();
  }
  if (f.id === 'if') {
    const { pairs, bad } = parseImport($('#imp').value);
    if (!pairs.length) { toast('Aucune ligne « mot = traduction » trouvée.'); return; }
    const r = addWords(pairs, ui.addLang, ui.addLib);
    ui.importText = bad.join('\n');
    toast(`${plural(r.added, 'mot ajouté', 'mots ajoutés')}${r.merged ? `, ${r.merged} complété(s)` : ''}${bad.length ? `, ${bad.length} ligne(s) non comprise(s)` : ''}`);
    if (!session || session.state === 'done') restartSession();
    render();
    celebrate();
  }
  if (f.id === 'ef') {
    const w = words.get(f.dataset.id);
    const t = split($('#e-t').value), fr = split($('#e-fr').value);
    if (!t.length || !fr.length) { toast('Il faut au moins un mot de chaque côté.'); return; }
    const nl = $('#e-lib').value;
    if (nl !== wLib(w)) { cfg.learn = { ...(cfg.learn || {}) }; fr.forEach(f => cfg.learn[frKey(f)] = getLib(nl).name); saveCfg(); }
    update(w, { en: t, fr, lib: nl }); ui.openId = null; toast('Modifié'); render();
  }
  if (f.id === 'lf') {
    const l = cfg.libs.find(x => x.id === f.dataset.id);
    l.name = $('#l-n').value.trim() || l.name;
    saveCfg(); ui.editLib = null; render();
  }
  if (f.id === 'nl') {
    const name = $('#n-n').value.trim(); if (!name) { toast('Donne un nom au thème.'); return; }
    const l = { id: uid(), lang: ui.libLang, name };
    cfg.libs.push(l); saveCfg(); ui.newLib = false; ui.addLang = l.lang; ui.addLib = l.id; toast(`Thème « ${name} » créé`); render();
  }
  if (f.id === 'nlang') {
    const name = $('#nl-n').value.trim();
    if (!name) { toast('Écris le nom de la langue.'); return; }
    if (cfg.langs.some(l => norm(l.name) === norm(name))) { toast(`${name} existe déjà.`); return; }
    const p = LANG_PRESETS.find(x => norm(x[0]) === norm(name));
    addLanguage(p ? p[0] : name, p ? p[1] : '');
    toast(`Bibliothèque « ${name} » créée`); render();
  }
});
$('#main').addEventListener('click', e => {
  const b = e.target.closest('[data-a]'); if (!b) return;
  const a = b.dataset.a;
  if (a === 'next') { next(); render(); }
  if (a === 'mine') acceptMine();
  if (a === 'extra') { session = newSession(true); next(); render(); }
  if (a === 'goadd') go('add');
  if (a === 'gorev') go('rev');
  if (a === 'mode') { stopSprint(); stopBossTimer(); ui.mode = b.dataset.k; ui.sprint = null; ui.boss = null; ui.duel = null; if (ui.mode === 'rev') startSessionIfNeeded(); render(); }
  if (a === 'sprintgo') sprintStart();
  if (a === 'bossgo') bossStart();
  if (a === 'bossfight') bossFight();
  if (a === 'coll') go('coll');
  if (a === 'collback') go('prog');
  if (a === 'bestiary') go('best');
  if (a === 'bestback') { go('rev'); }
  if (a === 'bestsort') { ui.bestSort = b.dataset.k; render(); }
  if (a === 'beast') { ui.beastView = b.dataset.k; render(); }
  if (a === 'duelgo') duelStart();
  if (a === 'duelplay') duelPlay();
  if (a === 'duelsetup') { ui.duel = { state: 'setup' }; render(); }
  if (a === 'goal') { cfg.stats.goal = Number(b.dataset.val); cfg.stats.goals = { ...(cfg.stats.goals || {}), [ymd(Date.now())]: cfg.stats.goal }; if (todayCount() >= cfg.stats.goal && (cfg.stats.days || {})[ymd(Date.now())]) ui.goalDone = false; saveCfg(); render(); celebrate(); }
  if (a === 'party') { ui.celebrate = false; render(); }
  if (a === 'bview') { ui.bview = { k: b.dataset.k, t: b.dataset.t }; render(); }
  if (a === 'bclose' && (e.target === b || e.target.closest('button[data-a="bclose"]'))) { ui.bview = null; ui.beastView = null; render(); }
  if (a === 'golang') { go('set'); document.getElementById('langs')?.scrollIntoView(); }
  if (a === 'starter') { ui.importText = STARTER; render(); }
  if (a === 'tog') {
    const id = b.dataset.l, on = cfg.filt.on;
    if (on.includes(id)) { if (on.length === 1) { toast('Garde au moins une bibliothèque active.'); return; } cfg.filt.on = on.filter(x => x !== id); }
    else cfg.filt.on = cfg.langs.map(l => l.id).filter(x => x === id || on.includes(x));
    ui.theme = 'all';
    if (!cfg.filt.to.some(x => x === 'fr' || cfg.filt.on.includes(x))) cfg.filt.to = ['fr'];
    saveCfg(); restartSession(); render();
  }
  if (a === 'fold') { cfg.filt.hide = !cfg.filt.hide; saveCfg(); render(); }
  if (a === 'topen') { ui.themeOpen = !ui.themeOpen; render(); }
  if (a === 'theme') { if (!ui.themeOpen) { ui.themeOpen = true; render(); return; } ui.theme = b.dataset.val; ui.themeOpen = false; restartSession(); render(); }
  if (a === 'ans') {
    const v = b.dataset.val, f = cfg.filt;
    if (v === 'mix') { f.mix = true; }
    else if (f.mix) { f.mix = false; f.to = [v]; }
    else {
      const cur = answerLangs();
      if (cur.includes(v)) { if (cur.length === 1) { toast('Garde au moins une langue de réponse.'); return; } f.to = cur.filter(x => x !== v); }
      else f.to = [...cur, v];
    }
    saveCfg(); restartSession(); render();
  }
  if (a === 'open') { ui.openId = ui.openId === b.dataset.id ? null : b.dataset.id; render(); }
  if (a === 'del') {
    const w = words.get(b.dataset.id); words.delete(w.id); backend.del(w); ui.openId = null; render();
    toast(`« ${w.en[0]} » supprimé`, () => { words.set(w.id, w); backend.put(w); render(); });
  }
  if (a === 'autosort') {
    const r = autoSort(ui.libLang); ui.editLib = null; render();
    toast(r.moved ? `${plural(r.moved, 'mot rangé', 'mots rangés')} par thème` : 'Tout est déjà rangé', r.moved ? () => { r.undo(); render(); } : null);
  }
  if (a === 'liblang') { ui.libLang = b.dataset.id; ui.editLib = null; ui.newLib = false; render(); }
  if (a === 'newlib') { ui.newLib = !ui.newLib; render(); if (ui.newLib) $('#n-n')?.focus(); }
  if (a === 'editlib') { ui.editLib = ui.editLib === b.dataset.id ? null : b.dataset.id; ui.confirm = null; render(); }
  if (a === 'askdel') { ui.confirm = b.dataset.k; render(); }
  if (a === 'addlang') { addLanguage(b.dataset.n, b.dataset.c); toast(`Bibliothèque « ${b.dataset.n} » créée`); render(); }
  if (a === 'dellib' || a === 'dellang') {
    const id = b.dataset.id;
    const gone = [...words.values()].filter(w => a === 'dellib' ? wLib(w) === id : wLang(w) === id);
    gone.forEach(w => { words.delete(w.id); backend.del(w); });
    if (a === 'dellib') cfg.libs = cfg.libs.filter(l => l.id !== id);
    else {
      cfg.langs = cfg.langs.filter(l => l.id !== id); cfg.libs = cfg.libs.filter(l => l.lang !== id);
      cfg.filt.on = cfg.filt.on.filter(x => x !== id); if (!cfg.filt.on.length) cfg.filt.on = [cfg.langs[0].id];
      cfg.filt.to = cfg.filt.to.filter(x => x !== id); if (!cfg.filt.to.length) cfg.filt.to = ['fr'];
    }
    if (ui.theme === id) ui.theme = 'all';
    ui.confirm = null; ui.editLib = null; saveCfg(); restartSession(); render();
    toast(plural(gone.length, 'mot supprimé', 'mots supprimés'));
  }
  if (a === 'preset') {
    const k = b.dataset.k;
    if (k !== 'custom' && PRESETS[k]) { cfg.theme.main = PRESETS[k].main; cfg.theme.accent = PRESETS[k].accent; }
    cfg.theme.preset = k; applyTheme(); saveCfg(); render();
  }
  if (a === 'say') { say(b.dataset.t, b.dataset.l); return; }
  if (a === 'ttsauto') { cfg.ttsAuto = !cfg.ttsAuto; saveCfg(); render(); }
  if (a === 'welcome') { ui.welcome = 0; render(); }
  if (a === 'wnext') { ui.welcome++; render(); }
  if (a === 'wskip') { ui.welcome = null; cfg.welcomed = true; saveCfg(); render(); }
  if (a === 'genshow') { readGen(); ui.gen.show = !ui.gen.show; render(); }
  if (a === 'gencopy') { readGen(); const t = aiPrompt(); (navigator.clipboard?.writeText(t) || Promise.reject()).then(() => toast('Demande copiée : colle-la dans ton IA.'), () => { ui.gen.show = true; render(); toast('Copie impossible : sélectionne le texte et copie-le.'); }); }
  if (a === 'caltheme') { cfg.calTheme = b.dataset.k; saveCfg(); render(); }
  if (a === 'scheme') { cfg.theme.mode = b.dataset.k; applyTheme(); saveCfg(); render(); }
  if (a === 'backup') downloadBackup();
  if (a === 'update') hardUpdate();
  if (a === 'checkupd') checkUpdate(true);
  if (a === 'backuptext') {
    const txt = backupJSON();
    const p = navigator.clipboard?.writeText(txt);
    if (p) p.then(() => toast('Sauvegarde copiée : colle-la dans tes notes'), () => { ui.backupText = txt; render(); });
    else { ui.backupText = txt; render(); }
  }
  if (a === 'restoretext') { const bk = readBackup($('#restore').value); if (!bk) { toast("Ce texte n'est pas une sauvegarde valide."); return; } ui.restore = bk; render(); }
  if (a === 'restoreok') { applyBackup(ui.restore); ui.restore = null; toast('Sauvegarde restaurée'); render(); }
  if (a === 'restorecancel') { ui.restore = null; render(); }
});
$('#main').addEventListener('input', e => {
  const id = e.target.id;
  if (id === 'q') { ui.q = e.target.value; render(); }
  if (id === 'imp') ui.importText = e.target.value;
  if (id === 'c-main' || id === 'c-acc') {
    cfg.theme.preset = 'custom';
    cfg.theme[id === 'c-main' ? 'main' : 'accent'] = e.target.value;
    applyTheme();
  }
});
$('#main').addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'c-main' || id === 'c-acc') { saveCfg(); render(); }
  if (id === 'a-lang') { ui.addLang = e.target.value; ui.addLib = '__auto'; ui.addNew = false; render(); }
  if (id === 'a-lib') {
    if (e.target.value === '__new') { ui.addNew = true; render(); $('#at-n')?.focus(); }
    else { ui.addLib = e.target.value; ui.addNew = false; render(); }
  }
  if (id === 'restorefile' && e.target.files[0]) {
    const rd = new FileReader();
    rd.onload = () => { const bk = readBackup(rd.result); if (!bk) { toast("Ce fichier n'est pas une sauvegarde valide."); return; } ui.restore = bk; render(); };
    rd.readAsText(e.target.files[0]);
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && view === 'rev' && (ui.mode || 'rev') === 'rev' && (session?.state === 'right' || (session?.state === 'wrong' && !mustRetype(session.cur))) && !/BUTTON|INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) { e.preventDefault(); next(); render(); }
});

applyTheme();
render();
boot();
}
