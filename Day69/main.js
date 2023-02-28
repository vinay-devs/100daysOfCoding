let containerImage = document.querySelector(".images");

const url = "https://source.unsplash.com/random/"

// const getPhotos = async(url) => {
//     const data = await fetch(url).then((res) => { res.json() })
//     return data;
// }


for (let i = 0; i < 9; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', url);
    containerImage.appendChild(img);
}