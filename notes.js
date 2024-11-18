// gets data
//shows the data

async function getdata() {
  //fetch return a promise

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
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
