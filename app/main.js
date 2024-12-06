import { Domselectors } from "/dom";
import "./style.css";
const url = "https://valorant-api.com/v1/agents";

async function getdata() {
  //fetch returns a promise
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

function Cards(apidata) {
  apidata.forEach((item) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card w-1/6 h-[400px] bg-red-500 rounded-3xl flex flex-col items-center justify-evenly m-2 border-2 border-black">
      <h1 class="text-x2 text-white">${item.displayName}</h1>
        <img src="${item.fullPortraitV2}" alt="${item.displayName}" class="card-img rounded-3xl  w-50% h-50%">
        <button class="moreinfo button bg-white" value="ore Info">
        More Info
      </button>
      </div>`
    );
  });
}

function filterCards(apidata) {
  Domselectors["button"].addEventListener("click", function (event) {
    let value = event.target.value;
    Domselectors.box.innerHTML = "";
    console.log(value);
    let newValue;
    console.log(apidata.role);
    newValue = apidata.filter((item) => item.role.displayName == value);
    Cards(newValue);
  });
}
