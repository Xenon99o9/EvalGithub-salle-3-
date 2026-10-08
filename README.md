# EvalGithub-salle-3-

étapes de développement :
	-préparartion du project
    -Architecture 
    -developement des pages
    -mise en page
    -résolution des problèmes
    -Production du release

Workflow
	-Main(production)
    -Develop(mise en commun du travail de developement)
    -Realease(version livrable stable)
    -Fix(Correction)
    -Hotfix(Correction en prod)

Conflit
	-Conflit avec le css

Résolution
	-fusion et suppression des doublons

Versions 
	-0.01

difficulté
	-Difficulter organisationnel


| Pseudonyme GitHub | Nom | Prénom | Rôle |
| :--- | :--- | :--- | :--- |
| @Xenon99o9 | Paulus | Liam | Étudiant 1 (Présentation & Navigation) |
| @Rathallist | Greuzat | Raphael | Étudiant 2 (Catalogue Événements) |
| @mathis-aly | Lamartiniere | Mathis | Étudiant 3 (Inscription & Coordonnateur) |
 


Question : 

1. Quel est l’intérêt de séparer développements en cours et versions stables ?
    -Pouvoir revenir à une version stable si il y a un problème en dévelopement.(Raphaël)

2. Pourquoi imposer une revue de code avant intégration ?
    -Pour éviter de laisser passer des erreur simple qui pourrait être corriger avant de causer des problèmes et donc retard dans le projet.(Raphaël)

3. Quelles situations provoquent un conflit Git et pourquoi sa résolution n’est-elle pas toujours automatique ?
    -Lorsqu'eux deux personne modifie le même fichier.(Liam)

4. Quelle différence entre correction classique et correction urgente de production ?
    -fix et hotfix, si s'est sur une branch main/release ou develop.(Liam)

5. Pourquoi répercuter une correction de production dans les développements en cours ?
    -Car la correction sur prod doit être mit sur develop pour éviter que l'erreur se répéte dans les prochains developement(Liam)

6. Quel est le rôle d’une branche de release ?
    -Le rôle d’une branche release est de servir de passerelle de la branche develop vers la branche de production (main). Elle permet de faire les dernières vérifications et de s’assurer que tout fonctionne avant la mise en production. (Mathis)

7. Comment GitHub Projects et les Issues facilitent-ils organisation et traçabilité ?
    -GitHub Projects permet d’une part d’avoir une vue d’ensemble sur le projet grâce au dashboard ou la roadmap par exemple. De plus, chaque commit peut être associé à une issue dans le projet ce qui permet de savoir qui à fait quoi avec précision. Aussi d’un point de vue organisationnel, chaque tâche peut être triée, délimitée dans le temps, et potentiellement attachée à un milestones - donc un groupe de tâche - permettant de mieux structurer le projet. (Mathis)

8. Comment retrouver l’origine d’une modification dans l’historique GitHub ?
    -Il y a trois possibilités : soit en passant par l’outils Blame sur un fichier en particulier pour vérifier les modifications d’une ligne ; soit via le bouton history qui affiche l’historique complet du fichier ; soit via une numéro de pull resquest ou dans la liste des commit (Mathis).
