## Settup environment
ng new <project name> --strict

## Add eslint & prettier
npm install --save-dev eslint
### Install additional plugins
npm install --save-dev @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier prettier-eslint eslint-config-prettier
### Install Prettier and Prettier-ESLint dependencies
npm install --save-dev prettier prettier-eslint eslint-config-prettier

## Remove tslint if exist
npm uninstall tslint
