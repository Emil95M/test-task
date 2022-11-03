
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection,doc,getDocs,updateDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAuB9E5fL-KHk8IZXZulVa8fOrAtlKY7hQ",
  authDomain: "test-task-50037.firebaseapp.com",
  projectId: "test-task-50037",
  storageBucket: "test-task-50037.appspot.com",
  messagingSenderId: "898018838434",
  appId: "1:898018838434:web:5f1416988ab4d9365ed4fb"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)


  
export const getUsersThunk = createAsyncThunk("getUsersThunk", async (data, { rejectWithValue }) => {

    return getDocs(collection(db,"users")).then((res)=>{
                return  res._snapshot.docChanges
            })
            .catch((e)=>rejectWithValue(e))
           
}
);

export const updateUsersThunk = createAsyncThunk("updateUsersThunk", async (data, { rejectWithValue }) => {

  const docRef = doc(db, "users", data.uid)

  return updateDoc(docRef, data.userCollections)
        .then(res => {
        })
        .catch(e => {
          rejectWithValue(e);
        })
         
}
);




