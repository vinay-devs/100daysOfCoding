let containerImage = document.querySelector(".images");
const searchTerm = ["city", "car", "bike", "apple", "bmw", "old", "school", "candlelight", "Amazon"];

// const getPhotos = async(url) => {
//     const data = await fetch(url)
//     return data.url;
// }


for (let i = 0; i < 9; i++) {
    const url = `https://source.unsplash.com/random/?${searchTerm[i]}`
        // const data = getPhotos(url);
        // console.log(data);

    let img = document.createElement('img');
    img.setAttribute('src', url);
    containerImage.appendChild(img);
}