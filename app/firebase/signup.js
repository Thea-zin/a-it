import firebase_app from '@/app/firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

const auth = getAuth(firebase_app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase_app);

export default async function signUp(email, password,firstName,lastName) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        
    } catch (e) {
        error = e;
    }

    try {
        const docRef = await setDoc(doc(db, "users",email), {
          firstName: firstName,
          lastName: lastName,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      

    return { result, error };
}