/* `import firebase from "firebase";` is importing the Firebase module, which provides access to the
Firebase SDK and its various services, such as authentication, database, storage, and more. This
allows the code to interact with Firebase and use its services in the application. */
import firebase from "firebase";


/* `firebaseConfig` is an object that contains the configuration settings for the Firebase project.
These settings include the API key, authentication domain, database URL, project ID, storage bucket,
messaging sender ID, and app ID. These settings are used to initialize the Firebase app and connect
it to the project's services, such as the Firestore database. */
const firebaseConfig = {
  apiKey: "AIzaSyDfSNiPHC_z5NpM98S2Ycoq4lR2vKt-I-A",
  authDomain: "e-library-3c841.firebaseapp.com",
  projectId: "e-library-3c841",
  storageBucket: "e-library-3c841.appspot.com",
  messagingSenderId: "667293390647",
  appId: "1:667293390647:web:e1a861e3d5ffde4d41acb2"
};

/* `firebase.initializeApp(firebaseConfig);` initializes the Firebase app with the provided
configuration settings (`firebaseConfig`). This connects the app to the Firebase project and its
services, such as the Firestore database, and allows the app to interact with them. */
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

/* `export default firebase.firestore();` is exporting the Firestore database instance from the
Firebase SDK as the default export of the module. This allows other modules to import and use the
Firestore instance in their code by simply importing this module. */
export default firebase.firestore();
