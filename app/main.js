import { Domselectors } from "./dom";
import "./style.css";

const agentsUrl = "https://valorant-api.com/v1/agents";
const bundlesUrl = "https://valorant-api.com/v1/bundles";

async function getAgentsData() {
  try {
    const response = await fetch(agentsUrl);
    if (response.status !== 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const agentsData = data.data;
      console.log("Agents Data:", agentsData);
      Cards(agentsData);
    }
  } catch (error) {
    console.error("Error fetching agents:", error);
    alert("Sorry, could not fetch agent data.");
  }
}

async function getBundlesData() {
  try {
    const response = await fetch(bundlesUrl);
    if (response.status !== 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const bundlesData = data.data;
      console.log("Bundles Data:", bundlesData);
      CardsForBundles(bundlesData);
    }
  } catch (error) {
    console.error("Error fetching bundles:", error);
    alert("Sorry, could not fetch bundle data.");
  }
}

function Cards(apidata) {
  Domselectors.box.innerHTML = '';
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/6 h-[400px] bg-red-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
        <h1 class="text-xl text-white">${item.displayName}</h1>
        <img src="${item.fullPortraitV2}" alt="${item.displayName}" class="card-img rounded-3xl w-3/4 h-1/2">
      </div>`
    );
  });
}

function CardsForBundles(bundleData) {
  Domselectors.box.innerHTML = '';
  bundleData.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/6 h-[400px] bg-blue-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
        <h1 class="text-xl text-white">${item.displayName}</h1>
        <img src="${item.displayIcon}" alt="${item.displayName}" class="card-img rounded-3xl w-3/4 h-1/2">
      </div>`
    );
  });
}

Domselectors.bundlesBtn.addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  getBundlesData();
});

Domselectors.agentsBtn.addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  getAgentsData();
});

getAgentsData();
