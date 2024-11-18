import "./style.css";
const url = "https://valorant-api.com/v1/maps";

async function getdata() {
  //fetch return a promise

  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    alert("sorry coud not find this");
  }
}

getdata();
