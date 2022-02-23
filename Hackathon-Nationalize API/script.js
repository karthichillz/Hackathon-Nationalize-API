
//create heading by using h1 element
const h1 = document.createElement("h1");
h1.innerText = "Nationalize API"
h1.setAttribute("id","h1")
document.getElementById("container").appendChild(h1)

//const b1 = document.createElement("br")
//document.getElementById("container").appendChild(b1)

//create subheading by using h3 element
const h3 = document.createElement("h3");
h3.innerText = "Idetifying Nationality based on the Name"
h3.setAttribute("id","h3")
document.getElementById("container").appendChild(h3)

//function to get input data
function inputData(){
    const input = document.getElementById("name").value;
    get(input);
  }
  
  //fetching nationalize API using async await
  async function get(inputData) {
    try{
    const getNationalizeApi = await fetch(`https://api.nationalize.io/?name=${inputData}`);
    const data = await getNationalizeApi.json();
    const response =  create(data);
    console.log(response);
  //catch for error handling
  }catch (error) {
    console.log(error)
  }
  }
  
   //function to display API response
  function create(response) {
    const result = document.querySelector("#result");
    result.innerText =
     ` ${response.country[0]["country_id"]} : ${response.country[0].probability}
       ${response.country[1]["country_id"]} : ${response.country[1].probability}`;
    document.body.append(result);
  }






  
















