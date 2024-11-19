import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get Items
export async function getItems(userid) {

    // Variables
    const Querysnapshot = await getDocs(collection(db, 'users', userid, 'items'))
    const Data = []

    Querysnapshot.forEach( doc => {

        Data.push({ id: doc.id, ...doc.data() })

    })

    return Data

}

// Add Items
export async function addItem(userid, itemToAdd) {

    const docRef = await addDoc(collection(db, 'users', userid, 'items'), itemToAdd)

    return docRef.id

}
