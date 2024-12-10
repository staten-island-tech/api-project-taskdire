import { Domselectors } from "/dom";
import "./style.css";
const url = "https://valorant-api.com/v1/agents";
const tierurl = "https://valorant-api.com/v1/competitivetiers";

async function getdata() {
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const apidata = data.data;
      console.log(data.data);
      Cards(apidata);
      filterCards(apidata);
    }
  } catch (error) {
    console.log(error);
    alert("Sorry, could not find this.");
  }
}

getdata();

async function getTierdata() {
  try {
    const response = await fetch(tierurl);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      const apidata = data.data;
      console.log(data.data);
      getTierCards(apidata);
    }
  } catch (error) {
    console.log(error);
    alert("Sorry, could not find this.");
  }
}

getTierdata();

function Cards(apidata) {
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/6 h-[400px] bg-red-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
      <h1 class="text-x2 text-white">${item.displayName}</h1>
        <img src="${item.fullPortraitV2}" alt="${item.displayName}" class="card-img rounded-3xl  w-50% h-50%">
      </div>`
    );
  });
}

function getTierCards(apidata) {
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/6 h-[400px] bg-red-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
      <h1 class="text-x2 text-white">${item.tierName}</h1>
        <img src="${item.largeIcon}" alt="${item.largeIcon}" class="card-img rounded-3xl  w-50% h-50%">
      </div>`
    );
  });
}
