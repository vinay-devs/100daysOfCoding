const gridData = document.querySelector(".grid_api");

async function fetchAPI() {
  const data = await fetch("https://api.publicapis.org/entries").then((data) =>
    data.json()
  );
  if (data.count !== 0) {
    paginate(data.entries, data.count);
  }
}

function showItems(dataApi) {
  console.log(dataApi);

  gridData.innerHTML = "";
  dataApi.forEach((element) => {
    const item = document.createElement("a");
    item.setAttribute("href", element.Link);
    item.classList.add("api_item");
    item.innerHTML = `<h2>${element.API}</h2>
    <h3>${element.Category}</h3>
    <p>${element.Description}</p>`;
    gridData.append(item);
  });
}

function paginate(items, itemLength) {
  let itemPerPage = 8;
  let currentPage = 1;
  let totalNumberOfPages = Math.ceil(itemLength / itemPerPage);

  page = [];
  for (let i = 0; i < totalNumberOfPages; i++) {
    page.push(i);
  }

  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");

  previous.addEventListener("click", () => {
    if (currentPage == 1) {
      return false;
    }
    currentPage--;
    filterItem();
  });

  next.addEventListener("click", () => {
    if (currentPage == totalNumberOfPages) {
      return false;
    }
    currentPage++;
    filterItem();
  });
  function filterItem() {
    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const filteredItems = items.slice(firstItem, lastItem);
    showItems(filteredItems);
  }
  filterItem();
}
async function searchAPI(query) {
  const data = await fetch(
    `https://api.publicapis.org/entries?Category=${query}&https=true`
  ).then((res) => {
    return res.json();
  });
  console.log(data);

  if (data.count !== 0) {
    paginate(data.entries, data.count);
  }
}
const input = document.querySelector(".input");
input.addEventListener("keyup", (e) => {
  const value = e.target.value;
  searchAPI(value);
});
fetchAPI();
