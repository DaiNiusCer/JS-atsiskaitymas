/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener("click", (e) => {
  console.log(e)
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => data)
    //data => console.log(data)
    .then(data => {
      let isvedimas = ""

      data.forEach(item => {
        isvedimas += `
        <div class="mainUsers">
<div class="users"> <img src="${item.avatar_url}" alt=""</div>
<br>
<div class="login"><p>Login: ${item.login} </p></div>
</div>
`
        document.querySelector("#output").innerHTML = isvedimas

      })


    })

  let mygtukas = document.querySelector("#btn");
  mygtukas.setAttribute("class", "hidden")


})