const user = "USERNAME";
const apiKey = "API_KEY";
const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&api_key=" + apiKey + "&limit=1&user=" + user;

console.log("lastfmHTML.js started");

async function GetJSON(url) {
    try{
        const response = await fetch(url);

        if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
    }catch (error) {
        console.error("Failed to fetch JSON:", error);
      }
}

async function modify() {
    const res = await GetJSON(url);
    let link = document.createElement("a");
    link.href = res.recenttracks.track[0].url;
    link.id = "musicname";
    link.textContent = res.recenttracks.track[0].name;
    let target = document.getElementById("lastplayed");
    target.textContent = ("Last Played : ");
    target.appendChild(link);
    let targetart = document.getElementById("byart");
    targetart.textContent = "By "+ res.recenttracks.track[0].artist["#text"];
}

modify();