# Technologies used for this project

1. NextJS as Fullstack application
2. TypeScript in place of Javascript
3. Zustand as State Management Tool
4. Mantine UI for Frontend UI
5. Hasura GraphQL as the Backend

# Gitpod Setup

1. Open your branch using `gitpod` => https://gitpod.io/#{your-branch-url-with-out-curly-braces} or click this [link](https://gitpod.io/#https://github.com/akhil-naidu/portal) to open gitpod on the master branch
2. Now open `gitpod` using desktop vscode from the settings tab or via the helper command
3. Within your desktop vscode expose the following ports, `3000`, `8080`, `9693`, `9695`
4. now run turn on your hasura console using the command `npx hasura console`

# Yarn

1. Used yarn set version stable
2. Extended `.gitignore` by adding `.yarn/cache` and `.yarn/install-state.gz`

# Vercel

This project will be hosted on vercel, but the folder `hasura` has nothing to with the frontend. So, I created a `.vercelignore` file to not upload any content of it.

Also, I would not like to trigger a vercel build, if only the files in `hasura` folder were updated. For that reason, I added a special check in vercel project settings to ignore build based on `hasura` folder. Using the command `bash ignore-build.sh`

# Hasura

> Anything related to Hasura should be done in the `hasura` folder.

```
cd hasura
```

There exists a `docker-compose.yml` in the `hasura` folder of the repository, which will allow us to run Hasura locally.

Apart from this, there is a folder named `hasura` which allows us to work with GitHub integrations.

## Installing Hasura CLI (Not Mandatory)

This project comes with a `hasura-cli` as a dev dependency, i.e., to use `hasura-cli` you can always use `npx hasura` within the `hasura` folder.

If you are interested in installing `hasura-cli` globally, follow the below instructions.

```
curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
```

After installing the Hasura CLI, use the following [documentation](https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_completion/) to set up the auto-completion.

## Using Hasura CLI

Before using the Hasura CLI, you need to first turn on the local Hasura instance.

### Turning on the Hasura instance

Anything related to Hasura should be done in the `hasura` folder.

```
cd hasura
```

In your root directory, use the below command to start the Hasura instance

```
docker compose up -d
```

Similarly to turn off the Hasura instance

```
docker compose down
```

This will trigger a Hasura instance on port 8080, but I made sure the console is disabled by default for a better team-based development experience.

### Accessing the Hasura Console on the web

As mentioned above, turning on the Hasura instance using the command `docker compose up -d` in the `hasura` directory will start the Hasura instance on port 8080, but will not allow you to access the console from the browser.

For you to access the console on the web and simultaneously track the state of the Hasura instance within our `hasura` folder.

> This way whatever changes you have done can be uploaded to git and can be replicated with other developers.

Use the following command in the `hasura` folder to spin up a Hasura console that can be accessed via the web and simultaneously track the `metadata`(changes made in Hasura Console UI) and `migrations`(Changes made in our Database)

```
cd hasura
npx hasura console
```

> The command should take care of the applying database migrations and apply metadata changes.

## Manually migrating and Applying metadata changes

As mentioned multiple times, to use the `hasura-cli` you should be in the `hasura` folder.

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

```
npx husky add .husky/pre-commit "yarn lint"
```
