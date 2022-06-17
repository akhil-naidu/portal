# Firebase or Supabase

I'm loving Supabase for these reasons.

- Unlike object storage in the Firebase, supabase comes with postgres, which is the go to solution for Hasura
- Supabase also have same authentication as of Firebase
- Authentication data is automatically stored in the database, no need to sync
- Everything is at single place, Postgres database, Authentication System, File Storage and even edge functions, most probably I will use NextJS ede=geb functions.
- Last but not the least, this is open source.

## Core Authentication Ideology

- We are using firebase for our authentication
- For login, logout functionality we will directly use the Firebase API
- When coming to creating users, we will write our custom logic within the NextJS API. The main reason for this approach is to attach custom claims to the access token while user creation. For now, the only way we can add custom claims is using the Firebase Admin SDK.

## What about syncing the user data in Hasura This?

In my opinion, it is always a good practice to sync the firebase data within our Hasura postgres database. In order to achieve this, we will utilize the firebase function triggers.

- Firebase functions provides a feature called function triggers and one of them was [firebase authentication trigger](https://firebase.google.com/docs/functions/auth-events).
- This firebase authentication trigger allows us to write a custom logic in a firebase function.
- This will help us create a Hasura mutation(using REST API), which will allow us to add data simultaneously to our postgres database.
- Similarly we also need to create another mutation if the user was deleted, which essentially makes it more like syncing between both Firebase and Hasura.

### What type of data do we store in this process of syncing?

To be clear, we will not sync the access token, which is straight forward, but I would like to make it more obvious. The data which we are interested in storing were particularly of type, username, email, photoURL, custom claims like default role and allowed roles, which we assigned to the used at the time of user registration/creation.

### Do we allow users to update their data using Hasura? If yes, how are we planning to sync them in Firebase?

Yes, we will allow users to update their data using Hasura. Also, there are multiple ways we can achieve this. We can create our custom actions, which will trigger our NextJS API, which inturn will use Firebase Admin SDK to update the user's data. But there is a disadvantage in this approach.

Every Hasura action, will create a new Hasura view(GraphQL query/mutation) of its own. So, after updating the user we need to call this particular GraphQL mutation or manually trigger the respective NextJS API.

The Approach, I would prefer is to create use Hasura events rather than using Hasura actions. This way, the moment the user data was updated, we can trigger a webhook(our NextJS API) that will allow us to update the user using Firebase Admin SDK.

### Why I prefer Hasura events over actions in the syncing user updates from Hasura to Firebase

Following this approach will make my ideology consistent. Firebase syncing user updates using firebase functions using Firebase events. Similarly Hasura syncing user updates using NextJS functions using Hasura events.

The second reason, why I prefer Hasura events over actions is to update custom claims, if the user's role changed in Hasura postgres database. By the way, only super admins will have the ability to update the user's role.

Now the single truth of updating the user data is in the hands of Hasura and I can fully take advantage of the Hasura's Attribute based Authorization philosophy to the next level using the inbuilt permissions and the concept of inherited roles.
