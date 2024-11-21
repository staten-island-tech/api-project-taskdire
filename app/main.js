import "./style.css";
import { Domselectors } from "/dom";
const url = "https://valorant-api.com/v1/sprays";

async function getdata() {
  //fetch return a promise

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
    alert("sorry coud not find this");
  }
}

getdata();

function Cards(data) {
  const apidata = data.data;
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${item.displayName}</h2>
        <img src="${item.displayIcon}" alt="${item.displayName}" class="card-img">
      </div>`
    );
  });
}
