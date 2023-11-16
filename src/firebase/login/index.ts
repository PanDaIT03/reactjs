import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, collection, getDocs, deleteDoc, doc, setDoc, updateDoc }
    from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyD1vKFxreHpUZNy96W1o3fhz-_POR2hiDY',
    authDomain: 'vcpmc-project.firebaseapp.com',
    projectId: 'vcpmc-project.firebaseapp.com',
    storageBucket: "vcpmc-project.appspot.com",
    messagingSenderId: "935382553518",
    appId: "1:935382553518:web:be80da886d76f9d8eaee3f",
    measurementId: "G-76QWQMFJFG"
},
    app = initializeApp(firebaseConfig),
    db = getFirestore(app);