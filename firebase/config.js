import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQSiYoYcm4-a2672XHJDvi2wYzXfgKxk8",
  authDomain: "waggy-tails-8d2ab.firebaseapp.com",
  projectId: "waggy-tails-8d2ab",
  storageBucket: "waggy-tails-8d2ab.appspot.com",
  messagingSenderId: "1035325280279",
  appId: "1:1035325280279:web:9237427e574de9e4ae0c52",
  measurementId: "G-XJGCMKWQHK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);