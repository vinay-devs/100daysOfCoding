const newQuote=document.getElementById('newquote');
const tweetbtn=document.getElementById('tweet');
async function fetchQuote(){
    const quote=await fetch('https://api.quotable.io/random').then(response=>response.json())
    const quotediv=document.querySelector('.quote');
    quotediv.classList.add('container')
    quotediv.innerHTML='';
    if(quote){
        const newDiv=document.createElement('div');
        newDiv.innerHTML=`
        <p>${quote.content}</p>
        <span>${quote.author}</span>
        `
        quotediv.append(newDiv);
    }
    tweetbtn.addEventListener('click',()=>{
        window.open(`https://twitter.com/intent/tweet/?text=${quote.content}`)
    })
}

newQuote.addEventListener('click',()=>{
   fetchQuote()
})
fetchQuote()
