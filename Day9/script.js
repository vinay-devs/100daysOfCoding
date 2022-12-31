const containerPopUp=document.querySelector('.pop_up-container')
const popUp=document.querySelector('.popup')

formUrl.addEventListener("submit",(e)=>{
    e.preventDefault();
    const value=e.target.URL.value;
    fetchUrl(value)
})

async function fetchUrl(url){
    const data=await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(response => response.json());
    const ulPopup = document.createElement('ul');
    ulPopup.innerHTML=`
    <li>Long URL: <a href=${data.result.original_link}
    target="_blank">${data.result.original_link}</a></li>
    <li>Short URL: <a href=${data.result.full_short_link} target="_blank">${data.result.full_short_link}</a></li>
`
    popUp.append(ulPopup);
    console.log(data.ok);
    
    if(data.ok){
        containerPopUp.classList.add("show")   
    }
   
    
}

containerPopUp.addEventListener('click',(e)=>{
    if(e.target.classList.contains("pop_up-container")){
        e.target.classList.remove("show")
    }
})