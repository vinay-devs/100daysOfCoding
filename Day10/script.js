const mode=document.getElementById('mode');
const addBtn=document.getElementById('addBtn');
const note_grid=document.querySelector('.note_grid')

mode.addEventListener('click',()=>{
    document.body.classList.toggle('lightMode')
    if(mode.innerHTML=="Light Mode"){
        mode.innerHTML="Dark Mode"
        
    }else{
        mode.innerHTML="Light Mode"
    }
})
const notes=JSON.parse(localStorage.getItem("Notes"))
if(notes){
notes.forEach((note)=>addNewNote(note));
}
addBtn.addEventListener('click',()=>{
    addNewNote()
})
function addNewNote(text=''){
    const note=document.createElement('div')
    note.classList.add('Note');
    note.innerHTML=`
    <div class="action">
            <button class="edit"><i class="fas fa-pencil-alt">Edit</i></button>
            <button class="delete"><i class="fas fa-trash"></i>Delete</button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `
    note_grid.append(note)

    const textarea=document.querySelector('textarea')
    const main = note.querySelector('.main');
    textarea.value=text;
    main.innerHTML = text;
    updateLc()

    textarea.addEventListener('input',(e)=>{
        const {value}=e.value
        console.log(value);
        
        main.innerHTML=value
        updateLc()
    })

}

function updateLc() {
	const notesText = document.querySelectorAll('textarea');
	const notes = [];
	notesText.forEach((note) => notes.push(note.value));
	localStorage.setItem('Notes', JSON.stringify(notes));
}