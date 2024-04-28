const row = document.querySelector(".row");

function filmCards() {
  const response = fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      data.sort((a, b) =>
        b.rating.average > a.rating.average
          ? 1
          : a.rating.average > b.rating.average
          ? -1
          : 0
      );

      let col3 = "";
      data.forEach((element) => {
        col3 += `
            <div class="card card-custom col-3 " style="width: 18rem;">
                <div class="card-custom-image">
                <img src="${element.image.medium}" class="card-img-top" alt="...">
                </div>
            <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="rating">${element.rating.average}</p>
            <div class="d-flex justify-content-between align-items-center">
                <a href="details.html?id=${element.id}" class="btnB">Details</a>
                <p class="card-text">TIME: ${element.runtime}</p>
            </div>
            </div>
            </div>
            `;
      });
      row.innerHTML = col3;
      console.log(data);
    })
    .catch((err) => {
      console.error("error", err);
    });
}
filmCards();

// var ol=document.getElementById("users")

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(data=>{

//     for (let i = 0; i < data.length; i++) {

//         if (data[i].name.includes("a")) {
//             ol.innerHTML+=`<li>${data[i].name} email:${data[i].email}}</li>`
//         }

//     }
// }).catch(ex=>console.log(ex))
