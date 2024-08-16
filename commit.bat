@echo off

:: Demande les variables d'entrée
set /p type_commit="Entrez le type de commit (par exemple, 'feat', 'fix', 'docs','style','chore','refactor'): "
set /p message_commit="Entrez le message de commit: "

:: Exécute les commandes de lint, lint:fix et format
npm run lint
npm run lint:fix
npm run format

:: Ajoute les changements et crée le commit
git add .
git commit -m "%type_commit%: %message_commit%"
