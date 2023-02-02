<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="350" alt="Javascript logo" />
  <br />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/1280px-Axios_%28computer_library%29_logo.svg.png" width="350" alt="axios logo" />
  
</p>
<p align="center">
  <a title="MIT License" href="LICENSE">
    <img src="https://img.shields.io/github/license/gridsome/gridsome.svg?style=flat-square&label=License&colorB=6cc24a">
  </a>
  <a title="Follow on Twitter" href="https://twitter.com/javascript">
    <img src="https://img.shields.io/twitter/follow/Javascript?style=social&label=Follow%20@Javascript">
  </a>
  <br />
  <br />
</p>

# Call-API-Axios-Workshop-Readme

## Installer Node

### Ubuntu:

Ouvrez un terminal et mettez à jour les paquets en utilisant la commande :

```bash
sudo apt update
```

Installez les dépendances nécessaires pour installer Node.js en utilisant la commande :

```bash
sudo apt install curl software-properties-common
```

Ajoutez le dépôt de Node.js en utilisant la commande :

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

Installez Node.js en utilisant la commande :

```bash
sudo apt install nodejs
```

Vérifiez que Node.js est installé correctement en utilisant la commande :

```bash
node -v
```
---
### Fedora:

Ouvrez un terminal et mettez à jour les paquets en utilisant la commande :

```bash
sudo dnf update
```

Ajoutez le dépôt de Node.js en utilisant la commande :

```bash
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
```

Installez Node.js en utilisant la commande :

```bash
sudo dnf install nodejs
```

Vérifiez que Node.js est installé correctement en utilisant la commande :

```bash
node -v
```

Il est important de noter que ces instructions d'installation sont pour Node.js version 14.x , si vous voulez installer une version différente, il suffit de remplacer le numéro de version dans les commandes.

## Exercices

### Exercice 1: Récupérer des informations météos

> Rendez-vous sur [Open-meteo](https://open-meteo.com/en/docs) !

L’objectif de cet exercice est de vous familiariser avec axios afin de pouvoir récupérer des informations sur la météo. Pour valider cet exercice, vous devrez utiliser l’api du lien ci-dessus dans votre script afin d’afficher les informations météorologiques de votre ville. Voici une courte définition d'axios et de son utilité lors de cet exercice :

Axios est un module JavaScript qui permet de faire des requêtes HTTP (comme des requêtes GET, POST, PUT, etc.) facilement. Il est basé sur la bibliothèque Promise et prend en charge les navigateurs modernes ainsi que les environnements Node.js. Axios peut être utilisé pour envoyer des requêtes à une API REST, pour télécharger ou envoyer des fichiers, pour gérer les erreurs, les intercepteurs, etc. Il est très populaire et facile à utiliser.

> [Axios-Getting-Started](https://axios-http.com/docs/intro) | [Axios-Exemple](https://axios-http.com/docs/example)

---

### Exercice 2: Poster des informations sur une base de données

> [json-server](https://www.npmjs.com/package/json-server)

Ce deuxième exercice nécessite l’utilisation d’une nouvelle requête d'axios, vous allez découvrir le POST. La méthode "post" d'Axios permet de faire une requête HTTP de type "post" qui envoie des données au serveur pour être traitées. Cette méthode prend en entrée l'URL cible, les données à envoyer et des options (comme les entêtes) et renvoie une promesse qui se résout avec la réponse du serveur. Elle est utilisée pour envoyer des données au serveur pour créer ou mettre à jour des ressources.

1. Assurez-vous d'avoir Node.js et npm (le gestionnaire de paquets de Node.js) installés sur votre ordinateur.
2. Créez un nouveau répertoire pour votre projet et naviguez jusqu'à ce répertoire dans votre terminal.
3. Installez le package **`json-server`** en utilisant la commande **`npm install -g json-server`**. Cela installera le serveur JSON globalement sur votre ordinateur, de sorte que vous pourrez l'utiliser pour n'importe quel projet.
4. Créez un fichier **`db.json`** dans votre répertoire de projet. Ce fichier sera utilisé comme base de données pour votre serveur JSON. Il peut contenir toutes les données que vous souhaitez exposer via l'API.
5. Lancez le serveur JSON en utilisant la commande **`json-server --watch db.json`** dans votre terminal. Cela démarrera le serveur sur **`http://localhost:3000`** et il utilisera votre fichier **`db.json`** comme base de données.
    
    ```json
    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
    }
    ```
    
6. Utilisez Axios pour effectuer des requêtes HTTP au serveur JSON. Par exemple, pour effectuer une requête `POST` pour envoyer des éléments dans votre base de donées, vous pourriez utiliser la commande suivante:

    ```javascript
    axios.post(url, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    ```

---
    
### Exercice 3: Supprimer un post sur la base de données

Maintenant que vous avez posté avec succès vos infos sur la base de données, il vous reste plus qu’à le supprimer. Pour ça, vous devez vous y prendre exactement pareil que pour les exercices précédents, mais vous allez devoir utiliser une autre requête d'Axios vous permettant de supprimer votre précédent post.

⚠️ Pensez a indiquer l’id du post que vous souhaitez supprimer.
