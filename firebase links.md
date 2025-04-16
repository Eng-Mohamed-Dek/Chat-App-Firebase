

Database:- https://firebase.google.com/docs/firestore/manage-data/add-data

Update User Data:- https://firebase.google.com/docs/auth/web/manage-users

Search User:- https://firebase.google.com/docs/firestore/query-data/queries

add user to the userChats:- https://firebase.google.com/docs/firestore/manage-data/add-data

realtime data:- https://firebase.google.com/docs/firestore/query-data/listen

Update Array:- https://firebase.google.com/docs/firestore/manage-data/add-data

Storing Data

firebase.js 

```js
import { getFirestore } from "firebase/firestore";

// firebase database 
const db = getFirestore(app); // ✅ Correct way to get Firestore instance

export { db };

```

File-ka 

```js
import { doc, setDoc } from "firebase/firestore"; 
```

You're importing two Firestore functions:
- `doc()` – creates a reference to a document in a Firestore collection.
- `setDoc()` – writes data to that document (overwrites or merges).

---

### 🔍 Line by Line Breakdown

```js
const userRef = doc(db, 'users', res.user.uid);

// store to Database 
await setDoc(userRef, {
    uid: res.user.uid,
    name,
    email
})

```
