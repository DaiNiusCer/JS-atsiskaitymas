/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(res => res.json())
  .then(data => data)
  .then(data => {
    let isvedimas = ""

    data.forEach(modelis => {
      isvedimas += `
  <div class="brandModels">
  <p class="brand">${modelis.brand}</p>
  <br>
  <p class="models">${modelis.models}</p>
  
  </div>
  `
      document.querySelector("#output").innerHTML = isvedimas
    })






  })