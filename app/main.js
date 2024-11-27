import { Domselectors } from "/dom";
import "./style.css";
const url = "https://valorant-api.com/v1/sprays";

async function getdata() {
  //fetch returns a promise
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
      Cards(data);
    }
  } catch (error) {
    console.log(error);
    alert("Sorry, could not find this.");
  }
}

getdata();

function Cards(data) {
  const apidata = data.data;
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-100 h-100 bg-red-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
        <h1 class="text-x2 text-white">${item.displayName}</h1>
        <img src="${item.displayIcon}" alt="${item.displayName}" class="card-img rounded-3xl  w-50% h-50%">
      </div>`
    );
  });
}
