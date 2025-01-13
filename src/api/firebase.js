// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.NEXT_REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("app__", app);

export async function addUserInfo(userInfo) {
  console.log("useInfo", userInfo);
  const id = uuid();
  const now = new Date();

  const formattedDate = now.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  await set(ref(database, `info/${id}`), {
    ...userInfo,
    id,
    timestamp: formattedDate,
  });
}
