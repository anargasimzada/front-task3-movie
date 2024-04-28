var div = document.getElementById("div1");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
  div.innerHTML = `
      <div class="card mb-3" style="max-width: 800px;">
        <div class="row justify-content-center align-items-center ps-4 g-0">
          <div class="col-md-4">
            <img src="${response.data.image.medium}" class="img-fluid rounded-start" alt="${response.data.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1>${response.data.name}</h1>
              ${response.data.summary}
              <span>${response.data.rating.average}</span> <br/>
            </div>
          </div>
        </div>
      </div>`;
});

// <h1>${response.data.name}</h1>
// <span>${response.data.rating.average}</span> <br/>
// <img src="${response.data.image.medium}" alt="${response.data.name}">
// ${response.data.summary}
