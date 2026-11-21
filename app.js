/* Mon vocabulaire — toutes les données restent sur l'appareil (localStorage). */
{
const APP_VERSION = '1.8.1';
const DAY = 86400000;
const INTER = [0, 1, 3, 7, 16, 35, 90];
const PTS = [0, 1, 2, 4, 8, 16, 40];
const BOXL = ['Nouv.', '1 j', '3 j', '1 sem', '2 sem', '1 mois', '3 mois'];
const TOP = INTER.length - 1;
const GOALS = [5, 10, 25, 50, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 3000];
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
  stats: { day: '', streak: 0, best: 0, bestScore: 0 }
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
    if (first) { first = false; startSessionIfNeeded(); }
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
    applyTheme(); startSessionIfNeeded(); render();
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
    render();
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
  let changed = touchDay();
  s.done++;
  let to = from;
  if (good) {
    s.good++; s.combo++; s.bestCombo = Math.max(s.bestCombo, s.combo);
    if (s.extra && !isDue(w)) update(w, { ok: w.ok + 1 });
    else {
      to = s.missed.has(w.id) ? 1 : Math.min(from + 1, TOP);
      update(w, { lvl: to, due: midnight(Date.now() + INTER[to] * DAY), ok: w.ok + 1 });
    }
  } else {
    s.combo = 0; s.missed.add(w.id); to = 0;
    update(w, { lvl: 0, due: Date.now(), ko: w.ko + 1 });
    if (!s.extra) s.queue.splice(Math.min(3, s.queue.length), 0, w.id);
  }
  s.cur.from = from; s.cur.to = to; s.cur.delta = PTS[to] - PTS[from]; s.gained += s.cur.delta;
  popBox = to !== from ? to : -1;
  popScore = s.cur.delta > 0;
  const sc = score();
  if (sc > cfg.stats.bestScore) { cfg.stats.bestScore = sc; changed = true; }
  if (changed) saveCfg();
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
  const today = ymd(Date.now()), yest = ymd(Date.now() - DAY);
  const st = (cfg.stats.day === today || cfg.stats.day === yest) ? cfg.stats.streak : 0;
  const flame = '<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M7 0c1 3 5 5 5 9.5A5 5 0 0 1 2 9.5C2 7 4 6 4 4c1.5 1 2 2.5 2 3.5C7.5 6 7.5 3 7 0z" fill="var(--accent)"/></svg>';
  $('#sStreak').innerHTML = st ? `${flame}<span><b>${plural(st, "jour</b> d'affilée", "jours</b> d'affilée")}${cfg.stats.best > st ? ` · record ${cfg.stats.best}` : ''}</span>` : `${flame}<span>Révise aujourd'hui pour lancer ta série</span>`;
  const counts = INTER.map((_, i) => all.filter(w => w.lvl === i).length);
  const max = Math.max(1, ...counts);
  const crown = '<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><path d="M1 11 2 2l4.5 4L9 0l2.5 6L16 2l1 9z" fill="var(--accent)"/></svg>';
  $('#boxes').innerHTML = counts.map((c, i) => `<div class="bx${i === TOP ? ' trophy' : ''}${i === popBox ? ' pop' : ''}" title="${plural(c, 'mot', 'mots')} · ${PTS[i]} pts chacun"><i style="height:${Math.round(c / max * 100)}%"></i>${i === TOP ? crown : ''}<b>${c}</b><small>${BOXL[i]}</small></div>`).join('');
  popBox = -1;
  const m = counts[TOP], g = GOALS.find(x => x > m) || m + 1000, prev = [...GOALS].reverse().find(x => x <= m) || 0;
  $('#goal').innerHTML = `<span>${plural(m, 'mot maîtrisé', 'mots maîtrisés')}</span><div class="bar"><i style="width:${Math.round((m - prev) / (g - prev) * 100)}%"></i></div><span>palier ${g}</span>`;
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
  const s = session;
  const head = renderFilters();
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
  const ph = s.state === 'ask' ? 'En ' + ansName + '…' : retype ? 'Recopie en ' + ansName + '…' : 'Entrée pour le mot suivant';
  const prog = s.extra ? `Entraînement libre · ${s.done}` : `Encore ${s.queue.length + (s.state === 'ask' ? 1 : 0)} à revoir`;
  return head + `<div class="card ${cls}">
    <div class="dir"><span class="flag">${esc(flagTxt)}</span><span>${s.combo >= 3 ? `<span class="combo">Série de ${s.combo}</span> · ` : ''}${prog}</span></div>
    <div class="word" lang="${esc(langCode(q.pl))}">${esc(prompt)}</div>
    ${fb}
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
  <section><h2>Importer une liste</h2>
    <p class="note" style="margin-top:0">Colle la liste que je te donne à la fin d'un cours. Un mot par ligne : <b>${esc(lower(L.name))} = français</b>. Une ligne <b># Chantier</b> range les mots qui suivent dans ce thème.</p>
    <form id="if"><textarea id="imp" rows="8" placeholder="to drive = conduire&#10;truck = camion">${esc(ui.importText)}</textarea>
    <div class="row"><button class="btn" type="submit">Importer</button>${L.code === 'en' && enCount < 5 ? `<button class="btn ghost" type="button" data-a="starter">Mots de mes premières leçons</button>` : ''}</div></form>
  </section>`;
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
      <li>Les <b>paliers</b> (5, 10, 25, 50…) comptent tes mots maîtrisés.</li>
      <li>La <b>série</b> compte les jours d'affilée où tu as révisé.</li>
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
    <div class="fl" style="margin-top:8px">${[['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => `<button class="chip" data-a="mode" data-k="${v}" aria-pressed="${t.mode === v}">${l}</button>`).join('')}</div>
  </section>
  <section id="langs"><h2>Langues</h2>
    <ul class="langs">${cfg.langs.map(l => { const n = [...words.values()].filter(w => wLang(w) === l.id).length; return `<li><span><b>${esc(l.name)}</b> <span class="note">${plural(n, 'mot', 'mots')} · ${plural(libsOf(l.id).length, 'thème', 'thèmes')}</span></span>
      ${cfg.langs.length > 1 ? (ui.confirm === 'lang:' + l.id ? `<button class="btn danger small" data-a="dellang" data-id="${l.id}">Confirmer : tout supprimer</button>` : `<button class="btn ghost small" data-a="askdel" data-k="lang:${l.id}">Supprimer</button>`) : ''}</li>`; }).join('')}</ul>
    <h3 style="margin-top:18px">Ajouter une langue</h3>
    <div class="fl" style="margin-top:8px">${avail.map(([n, c]) => `<button class="chip" data-a="addlang" data-n="${n}" data-c="${c}">+ ${n}</button>`).join('')}</div>
    <form id="nlang" class="row"><input id="nl-n" placeholder="Autre langue (ex. Thaï)" style="flex:1"><button class="btn" type="submit">Ajouter</button></form>
  </section>
  ${canUpdate() ? `<section><h2>Mise à jour</h2><p class="note" style="margin-top:0">Version installée : ${APP_VERSION}</p><div class="row"><button class="btn ghost" data-a="checkupd">Vérifier les mises à jour</button><button class="btn ghost" data-a="update">Forcer la mise à jour</button></div></section>` : ''}
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
  $('#main').innerHTML = banner + (view === 'rev' ? renderRev() : view === 'lib' ? renderLib() : view === 'add' ? renderAdd() : view === 'help' ? renderHelp() : renderSet());
  if (view === 'rev') {
    const a = $('#ans');
    const card = document.querySelector('.card');
    // enough room below the card so it can always sit at the top of the screen, above the keyboard
    $('#main').style.paddingBottom = card ? Math.max(90, innerHeight - card.offsetHeight - 20) + 'px' : '';
    if (ui.toCard && card) { ui.toCard = false; card.scrollIntoView({ block: 'start' }); }
    if (a) { if (ansVal && session?.state === 'ask') a.value = ansVal; a.focus({ preventScroll: true }); }
  } else if (keep === 'q' && $('#q')) { const q = $('#q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}

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
const go = v => { view = v; ui.openId = null; ui.editLib = null; ui.confirm = null; ui.newLib = false; ui.addNew = false; ui.restore = null; ui.backupText = ''; if (v === 'rev') startSessionIfNeeded(); render(); };
document.querySelector('nav').addEventListener('click', e => { const b = e.target.closest('button'); if (b) go(b.dataset.v); });
$('#gear').addEventListener('click', () => go(view === 'set' ? 'rev' : 'set'));
$('#score').addEventListener('click', () => go(view === 'help' ? 'rev' : 'help'));

$('#main').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (f.id === 'f') submit($('#ans')?.value || '');
  if (f.id === 'af') {
    const t = split($('#a-t').value), fr = split($('#a-fr').value);
    if (!t.length || !fr.length) { toast('Remplis les deux champs.'); return; }
    const r = addWords([[t, fr]], ui.addLang, ui.addLib);
    toast(r.added ? `« ${t[0]} » ajouté` : `« ${t[0]} » existait déjà : traductions fusionnées`);
    $('#a-t').value = ''; $('#a-fr').value = ''; $('#a-t').focus(); renderHeader();
    if (!session || session.state === 'done') restartSession();
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
  if (a === 'mode') { cfg.theme.mode = b.dataset.k; applyTheme(); saveCfg(); render(); }
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
  if (e.key === 'Enter' && view === 'rev' && (session?.state === 'right' || (session?.state === 'wrong' && !mustRetype(session.cur))) && !/BUTTON|INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) { e.preventDefault(); next(); render(); }
});

applyTheme();
render();
boot();
}
