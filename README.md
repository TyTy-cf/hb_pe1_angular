
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


### 4. Le jeu d'échec


Nous inclurons dans un premier temps les images des pièces du jeu d'échec.
Pour cela il faudra ajouter un attribut dans la classe "Piece" de nom "image" et de type string.
(Inspirez vous des dés du Yatzee)

Les images seront initialisés par défaut, dans leur classe respective.

Vous afficherez ensuite le plateau du jeu d'échec en HTML avec ses cases et les images de ses pièces.


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
Pour cela, il faut un attribut permettant de stocker plusieurs Department dans la partie typescript
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


### 7.. Breadcrumbs

Dans le city-component je veux voir :
- "Toutes les régions " => lien vers Region index
- " -> Département de la region xx " => lien formatté vers le Departement-index avec le codeRegion xx
- "-> villes du départment xx" 

















