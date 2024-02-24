import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
// Importing data from fire base ^^
const firebaseConfig = {
  apiKey: "AIzaSyAb0D6Mr9QZkTJsoO07c6jtQZM1ams04kw",
  authDomain: "flappy-bird-efae1.firebaseapp.com",
  projectId: "flappy-bird-efae1",
  storageBucket: "flappy-bird-efae1.appspot.com",
  messagingSenderId: "13119345544",
  appId: "1:13119345544:web:eedea482ffc4b6accce03d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore

const db = getFirestore(app);

const table = document.getElementById("playerTable");

async function getScoresData() {
  const scoresCollection = collection(db, "scores");
  const tableBody = document.createElement("tbody");
  try {
    const querySnapshot = await getDocs(scoresCollection);

    // Sort the query snapshot by score in descending order
    const sortedData = querySnapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => b.score - a.score);
    const top10Players = sortedData.slice(0, 10);

    top10Players.forEach((data, i) => {
      const tr = document.createElement("tr");
      const tdRank = document.createElement("td");
      const tdName = document.createElement("td");
      const tdScore = document.createElement("td");
      const tdDate = document.createElement("td");
      //   this code changes the timestamp format
      const formattedDate = new Date(data.timestamp.toDate()).toLocaleString();
      tdDate.textContent = formattedDate;
      tdName.textContent = data.playerName;
      tdScore.textContent = data.score;

      tdRank.textContent = i + 1;
      tr.appendChild(tdRank);
      tr.appendChild(tdName);
      tr.appendChild(tdScore);
      tr.appendChild(tdDate);
      tableBody.appendChild(tr);
    });
    table.appendChild(tableBody);
  } catch (error) {
    console.error("Error getting scores data: ", error);
  }
}

// Call the function to retrieve scores data
getScoresData().then(() => {
  // Hide the loading screen
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
});
