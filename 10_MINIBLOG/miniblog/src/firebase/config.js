import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhtDx_k67cnkPKL1R_FQ9fOeFPjLgTKJ8",
  authDomain: "miniblog-fa6e8.firebaseapp.com",
  projectId: "miniblog-fa6e8",
  storageBucket: "miniblog-fa6e8.appspot.com",
  messagingSenderId: "214754094692",
  appId: "1:214754094692:web:ce72e238334483bbcf3971"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };