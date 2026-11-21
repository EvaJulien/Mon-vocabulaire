# Mon vocabulaire

Appli pour réviser son vocabulaire en langues étrangères : bibliothèques par langue,
thèmes, révision espacée (les mots ratés reviennent vite, les mots réussis de plus en
plus tard), score, record et série de jours.
Toutes les données restent sur le téléphone (rien n'est envoyé en ligne).
Chaque personne qui installe l'appli a donc sa propre boîte de mots.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | La page de l'appli |
| `app.js` | Tout le fonctionnement (révision, mots, réglages, sauvegarde) |
| `style.css` | Le style |
| `manifest.webmanifest`, `sw.js` | Ce qui rend l'appli installable et utilisable hors connexion |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Les icônes de l'appli |

## Tester sur l'ordinateur

Double-cliquer sur `index.html` suffit pour voir l'appli dans le navigateur
(l'installation et le hors-connexion ne marchent qu'une fois l'appli en ligne).

## Mettre en ligne (gratuit) pour l'installer sur les téléphones

1. Sur github.com, créer un dépôt public (ex. `mon-vocabulaire`).
2. « Add file » → « Upload files » : sélectionner **tous les fichiers** de ce dossier et les glisser.
3. Settings → Pages → Branch : `main` → Save. Après 1-2 minutes, l'adresse
   `https://<ton-pseudo>.github.io/mon-vocabulaire/` est prête.
4. Sur iPhone : ouvrir l'adresse dans **Safari** → bouton Partager → « Sur l'écran d'accueil ».
   Sur Android : Chrome → menu ⋮ → « Installer l'application ».
5. Toujours ouvrir l'appli depuis l'icône (sur iPhone, Safari et l'icône ont des données séparées).

À chaque mise à jour : renvoyer **tous les fichiers** sur GitHub. Les numéros de version
(`version.json`, `APP_VERSION` en haut de `app.js`, `?v=` dans `index.html`, `VERSION` dans `sw.js`)
sont déjà changés par Claude. Quand le téléphone ouvre l'appli, un bandeau
« Nouvelle version disponible » apparaît : appuyer sur « Mettre à jour ».
Sinon : roue crantée → Mise à jour → « Forcer la mise à jour » (tes mots sont conservés).

## Récupérer les mots de la version Claude

Dans la version Claude : roue crantée → Sauvegarde → « Copier la sauvegarde (texte) ».
Dans l'appli installée : roue crantée → Sauvegarde → « Restaurer une sauvegarde copiée (texte) »,
coller, puis « Oui, restaurer ».

## Sauvegarde

Les mots sont gardés dans le téléphone. Pense à faire de temps en temps
roue crantée → « Sauvegarder (fichier) » : ça permet de tout récupérer sur un nouveau
téléphone ou après avoir vidé les données du navigateur.

## Importer des mots

Onglet Ajouter → choisir la bibliothèque (langue) et le thème → coller une liste,
un mot par ligne : `to drive = conduire`. Plusieurs traductions : `actually = en fait / en réalité`.
Avec le thème « Automatique », l'appli range chaque mot toute seule d'après sa traduction
(Verbes, Famille, Travail et chantier…). Une ligne `# Chantier` dans la liste range
les mots qui suivent dans ce thème. Dans « Mes mots », « Ranger automatiquement » re-trie
toute une bibliothèque.
