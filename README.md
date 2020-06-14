## Introduction

L'idée générale du projet viens d'un jour où je trouvais que j'étais trop lent pour lire mes partitions au piano.
Je me suis alors demandé s'il n'existait pas un "serious game" pour s'exercer. Effectivement, il en existait un, mais en mode solo, uniquement avec les notes anglaises (A, B, C, etc...), et archi moche.
J'ai donc décidé de créer mon propre jeu.

## Projet

Le projet serait de créer plusieurs minis-jeux. En fonction de notre résultat à chaque jeu, on gagne des points, et on peut voir notre position sur chaque jeu dans un classement général.

## Les jeux

Jeu numéro 1 : Trouver la note qui apparaît à l'écran sur une partition, le + rapidement possible. On clique alors sur le bouton qui contient la note. (Notes en français)

Jeu numéro 2 : Même principe, mais notes en anglais

Jeu numéro 3 : Les notes s'affichent sur la partition, il faut les jouer le plus rapidement possible sur un clavier midi qu'on a branché. Des accords peuvent arriver.

Jeu numéro 4 : Level supérieur, on affiche des accords

Jeu numéro 5 : L'utilisateur doit jouer les accords

## Tech

Les besoins sont : 

- Créer un système de register & auth (mongoDB ?)
- Créer un système qui détecte la note appuyée sur le piano
- Créer un système qui affiche des notes
- Créer un système de bouton qui renvoi une note
- Créer chacun des minis jeux

## Technos utilisées

React + MongoDB

**Pourquoi React ?** Pour une question de rapidité et facilité. J'ai commencé le projet très tard. J'avais de base créé un boilerplate, mais le projet n'était pas hyper intéressant techniquement.
Bim, gros virage à 180degrés, et 5 jours avant la date de rendu, changement de projet.

## TODO :

- Passer ce README en anglais
- Tout
