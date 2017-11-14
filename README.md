# es6-cheat-sheet
Fiche récapitulative ES6 - Utilisable en cours
  

## Note sur le rendu visuel
Pour un soucis de lisibilité sur Github, le tableau est rendu sur 1 seule colonne.

Pour une génération html/pdf, changer la variable `nbColonnes` à 3 ou 4.  


## Génération html
Ce document est rédigé en AsciiDoc, vous pouvez générer divers formats à partir de cette source (html, pdf, ...).

Plus d'informations sur le site de l'outil de génération [AsciiDoctor](http://asciidoctor.org/).

Pour générer correctement le document il faudra également installer [Pygments](http://asciidoctor.org/docs/user-manual/#pygments), utilisé pour la coloration syntaxique du code.

Pour générer la version html :  
`asciidoctor -a stylesheet=cheat-sheet.css es6-cheat-sheet.adoc`.
