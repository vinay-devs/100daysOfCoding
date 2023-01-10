const postContainer=document.querySelector('.post_container')
const loading=document.querySelector('.loader')
const filters=document.getElementById('search_post')

let limit=5;
let page=1;
async function fetchPost(){
    const data= fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`).then(response=>response.json());    
    return data
}

async function showPosts(){
    const posts=await fetchPost();
    
    posts.forEach(post=>{
        const postElm=document.createElement('div');
        postElm.classList.add("post");
        postElm.innerHTML=`
            <div class="postNumber">${post.id}</div>
            <div class="post-info">
                <div class="postTitle">
                 <h3>${post.title}</h3>
                </div>
                 <div class="postContent">
                    <p>${post.body}</p>
                  </div>
            </div>
        `
        postContainer.append(postElm);
    })
}

showPosts();

function showLoader(){
    setTimeout(()=>{
        loading.classList.add("show");

        setTimeout(()=>{
            page++;
            loading.classList.remove('show');
            showPosts();
        },1000)
    },300)
}
function filtersPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
        const title = post.querySelector('.postTitle').innerText.toUpperCase();
        const body = post.querySelector('.postContent').innerText.toUpperCase();

        if (title.indexOf(term) > -1 || body.indexOf(term)) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    })

}

window.addEventListener('scroll',()=>{

    const totalPageHeight=document.body.scrollHeight;
    const scrollPoint=window.scrollY+window.innerHeight;


    if(scrollPoint>=totalPageHeight){
        showLoader()
    }
})
filters.addEventListener('keyup', filtersPosts);