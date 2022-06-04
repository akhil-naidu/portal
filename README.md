# Hasura

There exists a docker-compose.yml in the root of the repository, which will allow us to run Hasura locally.

Apart from this, there is a folder named `hasura` which allows us to work with github integrations.

### Installing Hasura CLI

```
curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
```

After installing the Hasura CLI, use the following [documentation](https://hasura.io/docs/latest/graphql/core/hasura-cli/hasura_completion/) to set up the auto-completion.

# Things I have done while configuring this project

1. Used yarn set version stable
2. Extended `.gitignore` by adding `.yarn/cache` and `.yarn/install-state.gz`

# Technologies used for this project

1. NextJS as Fullstack application
2. TypeScript in place of Javascript
3. Zustand as State Management Tool
4. Mantine UI for Frontend UI
5. Hasura GraphQL as the Backend
