
# Exercices Syntaxe Angular


### 1. Faire un compteur


- Il commence à 0
- On doit pouvoir l'incrémenter de 1 et de 5 (en positif et négatif)
- On doit pouvoir le reset (retour à 0)
- De plus, il change de couleur en fonction de sa valeur :
  - 0 : jaune
  - Entre 1 et 15, il sera vert clair (#4af778)
  - Entre 16 et 25, il sera vert (#00ff44)
  - 26 et plus, il sera vert foncé (#009c29)
  - Entre -1 et -15, il sera rouge clair (#c23844)
  - Entre -16 et -25, il sera rouge (#ff0016)
  - -26 et plus, il sera rouge foncé (#ab000f)


### 2. Students


Vous afficherez les Student avec leur moyenne dans une table HTML.
Vous aurez besoin de reprendre des éléments fait dans le src/index.ts :
- le tableau de **Student**
- l'interface **Student**
- la méthode **calcAverage**


### 3. Yatzee... le retour


Je vais modifier la classe Dice pour qu'elle introduise des images des valeurs des dés.

Vous devrez afficher les images des dés dans l'HTML.


# Exercices Component Angular


### 1. Faire un component 'compteur'

Créer un component 'compteur'

Il devra afficher le compteur (fait la semaine dernière)

Il faudra copier le code html et typescript afin qu'il fonctionne


### 2. Faire un component 'yahtzee'

Créer un component 'yahtzee'

Il devra afficher le yahtzee (fait la semaine dernière)

Il faudra copier le code html et typescript afin qu'il fonctionne


### 3. Faire un component 'navbar'

Créer un component 'navbar'

Il s'agira de notre component navbar, dans lequel nous allons ajouter des liens (par le biais des routes), vers les autres components de notre projet.

Pour cela nous ajouterons :
- Une route vers le component 'cours'
- Une route vers le component 'compteur'
- Une route vers le component 'yahtzee'

Et dans le component 'navbar', il faudra ajouter les liens vers les bons components.

Il faudra que le component 'app', le component principal :
- permette de rediriger l'utilisateur sur les bonnes routes
- inclus directement le component 'navbar'


### 4. Faire un component 'region-index'


Pour cet exercice, le 5 et le 6, nous utiliserons les classes que j'ai créées dans le dossier "models/regions".


Créer un component 'region-index'.

Ce component doit :
Afficher un tableau de Region (dans l'HTML), tous les attributs d'une Region seront affichés
Pour cela, il faut un attribut permettant de stocker plusieurs Region dans la partie typescript
Et une fois fait, il faut créer plusieurs objets de type Region et les ajouter dans cet attribut.

Voici une liste de région à créer :

- name : "Auvergne-Rhône-Alpes"
- code : "84"
<hr>

- name : "Île de France"
- code : "11"
<hr>

- name : "Hauts-de-France"
- code : "32"
<hr>


Le component devra avoir une route, et un lien depuis la NavBar, afin de le consulter.


### 5. Faire un component 'department-index'


Créer un component 'department-index'.

Ce component doit :
Afficher un tableau de Department (dans l'HTML), tous les attributs d'un Department seront affichés

Pour cela, il faut un attribut permettant de stocker plusieurs Department dans la partie typescript.

Et une fois fait, il faut créer plusieurs objets de type Department et les ajouter dans cet attribut.

Voici une liste de département à créer :

- "nom": "Puy-de-Dôme",
- "code": "63",
- "codeRegion": "84"
<hr>

- "nom": "Loire",
- "code": "42",
- "codeRegion": "84"
<hr>

- "nom": "Cantal",
- "code": "15",
- "codeRegion": "84"
<hr>


Le component devra avoir une route et un paramètre (nom : code), mais il n'aura pas de lien dans la navbar.

Afin d'accéder à ce component, on ajoutera un lien (routerLink) dans le tableau de region (il faudra donc modifier notre tableau), et faire un lien nommé "Les départements" qui permettra d'accéder au component 'department-index'.
Le paramètre 'code' de la route est le code de la région, il faudra afficher dans le 'department-index', uniquement les départements dont le code de la région est passé en paramètre.


### 6. Créer des services


Dorénavant, nous avons vu les bonnes pratiques pour la gestion de nos objets dans les différents components, nous allons crééer des 'services' permettant de stocker nos objets : Region, Department et City.

Comment vont fonctionner ces services ?


Ils vont avoir respectivement un tableau de l'objet qu'ils doivent stocker, 'region-service.ts' aura un tableau de Region, avec un getter.

Ce tableau sera le même que nous utilisions avant dans le component 'region-index', du coup vous pourrez l'enlever du 'region-index', ainsi vous utiliserez le 'region-service' dans le component 'region-index' et nous pourrons directement appeler le tableau depuis le service.


Il faut faire la même chose pour Department et City.

Pour les City, voilà quelques city à créer :

- "nom": "Aigueperse",
- "code": "63001",
- "codeDepartment": "63"
- "codesPostaux": ["63260"]
- "population": 2720

<hr>

- "nom": "Clermont-Ferrand",
- "code": "63113",
- "codeDepartement": "63",
- "codesPostaux": [
  "63100",
  "63000"
],
- "population": 142686
<hr>

- "nom": "Saint-Étienne",
- "code": "42218",
- "codeDepartement": "42",
"codesPostaux": [
  "42000",
  "42100",
  "42230"
],
- "population": 171924
<hr>

Si vous souhaitez en créer d'autres, voilà une URL : https://geo.api.gouv.fr/departements/63/communes


### 7. Création d'un component 'city-index'


Ce component doit :
Afficher un tableau de City (dans l'HTML), tous les attributs d'une City seront affichés.

Pour cela, il aura le 'city-service' récemment créé, et devra utiliser son tableau comme source pour afficher les city.


Le component devra avoir une route et un paramètre (nom : codeDepartment), mais il n'aura pas de lien dans la navbar.

Afin d'accéder à ce component, on ajoutera un lien (routerLink) dans le tableau de départment (il faudra donc modifier notre tableau) qui permettra d'accéder au component 'city-index'.
Le paramètre 'codeDepartment' de la route est le code du département, il faudra afficher dans le 'city-index', uniquement les city dont le code de département est passé en paramètre.


### 9. Exercice @Input


Créer un component 'all-multiplication-tables', il doit afficher toutes les tables de multiplication (**avec un joli CSS !**) de 1 à 9.

Chaque table de multiplication correspondra au component 'mult-table' créé hier, il faudra modifier ce component pour qu'il inclue non plus le chiffre de la table par paramètre de route, mais par la décoration @Input.


### 8. Breadcrumbs


Dans le city-component je veux voir un enchanement de liens :
- "Toutes les régions " => lien vers Region index
- " -> Département de la region xx " => lien formatté vers le Departement-index avec le codeRegion xx
- "-> villes du départment xx"


### 9. Travail des formulaires


Nous allons améliorer la classe User.

Pour cela on va ajouter les attributs suivants dans la classe User :
- lastname (string) : le nom du user
- firstname (string) : le prénom du user
- address (string) : adresse du user
- postalCode (string) : code postal de la ville du user
- city (string) : ville du user


Vous devez faire un service de nom "user".
Il doit stocker un tableau de User (comme pour les régions, départements et city), vous devrez créer quelques user afin de tester vos données.
Vous ajouterez une méthode "addUser" qui prend en paramètre un User et l'ajoute au tableau de User.
Vous ajouterez une méthode "findByEmail" qui prend en paramètre un string (email) et permet de récupérer un User qui possède la même e-mail.

Vous ferez un component "user-index".
Ce component doit inclure le UserService et afficher les users du tableau dans l'html.

L'html doit aussi inclure un lien vers le "form-user", fait en cours (faire la route du coup).
Vous ajouterez un comportement dans le "form-user", dans le "onSubmit" on va ajouter le user créé dans le "UserService" via la méthode addUser que vous avez fait précédemment.
Dans le "form-user", on le complètera pour inclure les attributs manquants.
MAIS seul le nickname et l'email sont obligatoire, les autres sont facultatifs.
(Si fait via l'éventuel @Input : alors on passe un user vide, un simple new User)

Vous ferez un component "user-account". Il doit afficher toutes les informations complémentaires de l'utilisateur.
Ce component aura donc un attribut User.

Dans le component "user-index" vous ajouterez un lien sur chaque user pour aller vers le "user-account", on passera en paramètre de la route l'email du user.
Il faudra récupérer l'email du User par la route et récupérer ensuite le User complet dans le Service.

Dans l'html du component "user-account", vous ajouterez un bouton "Modifier" qui permet d'afficher le "form-user".
(Il faudra peut-être, éventuellement voir fortement utiliser un @Input pour faire passer le user au formulaire...)
Ainsi, le component "user-account" permet d'afficher le User ou de le modifier au besoin, le tout sur la même page !


### 10. Le jeu d'échec


Les classes du jeu d'échec ont été modifiées pour inclure les images.

Vous devez afficher dans un component 'chess' le plateau du jeu d'échec avec ces pièces.

Une fois avoir crééer le plateau de jeu... Il faut faire bouger les pièces :D


### 11. Faire un jeu de 56 cartes


Faire une classe métier qui représente un jeu de carte, comment feriez vous ?

Vous ferez le component qui permet d'afficher votre jeu de carte.


### 12. Les héros... Le retour


Nous allons créer une classe 'Battleground', qui prendra en paramètre 2 noms de héros à créer (de type string).

Le constructeur de cette classe devra créer 2 héros **aléatoire** à partir des deux noms, et les sauvegarder dans des attributs de type 'Hero' et de nom 'heroOne' et 'heroTwo'.

La classe 'battleground' aura une méthode 'fight' avec ce code :

````
const heroes: Array<Hero> = [this.heroOne, this.heroTwo];
while (this.heroOne.isAlive() && this.heroTwo.isAlive()) {
  const index = getRandomBetween(0, 1);
  const first: Hero = heroes[index];
  const second: Hero = heroes[Math.abs(index - 1)];
  console.log('Le premier hero à attaquer est ' + first.name);
  first.attack(second);
  if (second.isAlive()) {
    second.attack(first);
  }
}
````

Afin de tester notre classe 'Battleground', nous allons créer un component 'battleground', qui aura un attribut de type 'Battleground' (la classe créée plus tôt).

Vous l'instancierez et lui donnerez 2 noms de votre convenance.

Une fois que vous vous êtes assuré que votre classe Battleground fonctionne, vous ferez un component : 'hero-card', ce component doit se contenter d'afficher un héro, une jolie card avec les images fournies dans le dossier 'assets/heroes' (trouvez une solution pour intégrer l'image du héro... ;) )

L'idée est que le component battleground puisse afficher deux components 'hero-card', vous ferez le nécessaire pour que cela fonctionne.


### 13. Les héros... le retour du comeback


Créer une classe nommée : Ability (dossier heroes)

Une Ability est composé de :
- name (string)
- manaCost (number)
- damage (number)
- criticalStrike (number)
- cooldown (number)
- currentCooldown (number)

Un héro aura dorénavant du mana (number), avec un attribut manaMax (number)

Un mage aura :
- 360 mana lelvel 1

Un Warrior aura : 
- 190 mana level 1

Un Rogue aura :
- 190 mana level 1

Lorsqu'un héro levelup :

Un Mage gagne : 
- 32 mana

Un Warrior gagne :
- 24 mana

Un Rogue gagne :
- 23 mana

Au niveau des capacités...

Un héro aura plusieurs ability

Par défaut, un Mage a la capacité :
- name (string) : Fireball
- manaCost (number) : 160 mana
- damage (number) : 120% des dégâts de base (arrondi entre le min et max)
- criticalStrike (number) : la même que le héro
- cooldown : 3

Par défaut, un Warrior a la capacité :
- name (string) : Mortal strike
- manaCost (number) : 100 mana
- damage (number) : 100% des dégâts de base (arrondi entre le min et max) + 30
- criticalStrike (number) : la même que le héro
- cooldown : 2

Par défaut, un Rogue a la capacité :
- name (string) : Shadowstrike
- manaCost (number) : 110 mana
- damage (number) : 100% des dégâts de base (arrondi entre le min et max) + 20
- criticalStrike (number) : 100%
- cooldown : 4


Lorsqu'un héro utilise sa capacité, on lui retire son coût en mana.
Une capacité utilisé devient "en cooldown", "currentCooldown devient à 0", à chaque action, il augmente de 1

















