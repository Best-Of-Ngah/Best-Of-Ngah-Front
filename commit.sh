#!/bin/bash

# Demande les variables d'entrée
read -p "Entrez le type de commit (par exemple, 'feat', 'fix', 'docs','style','chore','refactor'): " type_commit
read -p "Entrez le message de commit: " message_commit

# Exécute les commandes de lint, lint:fix et format
npm run lint
npm run lint:fix
npm run format

# Ajoute les changements et crée le commit
git add .
git commit -m "$type_commit: $message_commit"