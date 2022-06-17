# Technologies used for this project

1. NextJS as Fullstack application
2. TypeScript in place of Javascript
3. Zustand as State Management Tool
4. Mantine UI for Frontend UI
5. Hasura GraphQL as the Backend
6. Doppler for team-based ENV Management

## Doppler for sharing ENV variables (Mandatory to run the development instance)

1. Use this official [documentation](https://docs.doppler.com/docs/install-cli) to install the doppler cli
2. Once the installation was done, contact `Akhil`` to add you as a doppler team member
3. Login to doppler using `login doppler`
4. Navigate to `root` folder and use `doppler setup` and chose `portal` as project and then use `dev` as config
5. Navigate to `root/hasura` folder and use `doppler setup` and chose `hasura-portal` and then choose `dev` as config

## Gitpod Setup

1. Open your branch using `gitpod` => https://gitpod.io/#{your-branch-url-with-out-curly-braces} or click this [link](https://gitpod.io/#https://github.com/akhil-naidu/portal) to open gitpod on the master branch
2. Now open `gitpod` using desktop vscode from the settings tab or via the helper command
3. Within your desktop vscode expose the following ports, `3000`, `8080`, `9693`, `9695`
4. now run turn on your hasura console using the command `npx hasura console`

## Yarn

1. Used yarn set version stable
2. Extended `.gitignore` by adding `.yarn/cache` and `.yarn/install-state.gz`

## Vercel

This project will be hosted on vercel, but the folder `hasura` has nothing to with the frontend. So, I created a `.vercelignore` file to not upload any content of it.

Also, I would not like to trigger a vercel build, if only the files in `hasura` folder were updated. For that reason, I added a special check in vercel project settings to ignore build based on `hasura` folder. Using the command `bash ignore-build.sh`

## Hasura

> Anything related to Hasura should be done in the `hasura` folder.

```
cd hasura
```

There exists a `docker-compose.yml` in the `hasura` folder of the repository, which will allow us to run Hasura locally.

Apart from this, there is a folder named `hasura` which allows us to work with GitHub integrations.

## Installing Hasura CLI (Not Mandatory)

## Using Hasura CLI

Before using the Hasura CLI, you need to first turn on the local Hasura instance.

### Turning On and Off, the Hasura instance

To start Hasura

```
yarn hasura-start
```

To stop hasura

```
yarn hasura-stop
```

This will trigger a Hasura instance on port 8080, but I made sure the console is disabled by default for a better team-based development experience.

### Accessing the Hasura Console on the web

```
yarn hasura-console
```

> The command should take care of the applying database migrations and apply metadata changes.

## Manually migrating and Applying metadata changes

```
cd hasura
```

To apply the metadata changes

```
npx hasura metadata apply
```

Also, to check if the migrations were applied properly

```
npx hasura migrate status
```

Similarly to apply migrations

```
npx hasura migrate apply
```

or if you have multiple databases

```
npx hasura migrate apply --database-name <database-name>
```

Finally reloading the metadata is considered a good practice

```
npx hasura metadata reload
```

## Exceptions in Hasura migrations

> Most probable you will never come across this issue in this particular repository, but in case fist contact someone who is aware of migrations and try to under stand before proceeding further.

Sometimes you might have an old migration table, i.e., you have a table name `todos` already in your database and the Hasura migration is trying to create it again which might result in some execution errors.

To avoid this, we can manually tell the migration to ignore if there was an error while applying the migration.

```
npx hasura migrate apply --skip-execution
```

For more information, see this [documentation](https://hasura.io/docs/latest/graphql/core/migrations/advanced/resetting-migrations/)

> Usually this is a case when you start a project which already has some migrations and metadata.

## Triggering a Hasura build in production

Even though we see the `hasura` folder in this repository, it is actually a subtree for this repository from another [repository](https://github.com/akhil-naidu/portal-hasura)

So we need to first create a remote named `portal-hasura` for having a better developers experience.

```
git remote add -f portal-hasura https://github.com/akhil-naidu/portal-hasura
```

Once you have the remote within your git, you need to push the changes made in this repository, especially within the `hasura` folder to its master repository to trigger a `hasura` build

> This following command can be executed directly in the root of your repository

```
git subtree push --prefix hasura portal-hasura master
```

## Exceptions in Production Hasura Build

There might be some random occasion when you are supposed to get the updates from the master `portal-hasura` repository.

> I highly discourage this scenario, and would like to never update the `portal-hasura` repository directly

To get the latest version of `portal-hasura` as subtree

Once again, you need to be in the `hasura` directory/folder before you run any commands related to Hasura.

```
cd hasura
```

```
git subtree pull --prefix hasura portal-hasura master --squash
```

## Husky Configurations

Making lint mandatory before doing any commit

```
npx husky add .husky/pre-commit "yarn lint"
```

Before pushing the code, making sure I have a working production build

```
npx husky add .husky/pre-push "yarn build"
```

Linting the commit message

```
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

## GraphQL Codegen

Install the VSCode extension `graphql`

```
yarn add @graphql-codegen/cli
yarn graphql-codegen init
yarn
```

Extra plugin for `urql` support

```
yarn add @graphql-codegen/typescript-urql
```

After installing add `typescript-urql` plugin to the list of other plugins in `codegen.yaml`

```
overwrite: true
schema:
  - http://localhost:8080/v1/graphql:
      headers:
        x-hasura-admin-secret: ravanasura
        Content-Type: 'application/json'
documents: 'graphql/**/*.graphql'
generates:
  generated/graphql.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'urql-introspection'
      - 'typescript-urql'

```

### How to use codegen

Open a new terminal

```
yarn generate --watch
```
