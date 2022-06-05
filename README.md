# How to utilize this repository

First, add a remote to the repository of your project.

```
git remote add -f portal-hasura https://github.com/akhil-naidu/portal-hasura
```

Now let's make this a subtree

```
git subtree add --prefix hasura portal-hasura master --squash
```

# How to update this subtree repository from the parent repository

Let's assume you added a few changes in the `hasura` folder of the parent repository and also git push those changes to the parent repository

Also, the moment you push the changes to the parent repository, they will not get in sync with this subtree repository. You need to manually push the changes to the subtree repository

```
git subtree push --prefix hasura portal-hasura master
```

# How to update the parent repository if the subtree repository was updated

First change to the subtree directory (mandatory)

```
cd hasura
```

Pulling the changes as a merge commit (I prefer to squash)

```
git subtree pull --prefix hasura portal-hasura master --squash
```
