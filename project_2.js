let section = document.getElementById('section')
let search = document.getElementById('search')
let insearch =document.querySelector('#insearch')
document.querySelector('#bars-btn').onclick = () =>{
    section.classList.toggle('active');
    search.classList.remove('active');
    insearch.classList.remove('active')
    console.log("hello");
}
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    insearch.classList.toggle('active')
    section.classList.remove('active');
    console.log("hello");
}

window.onscroll = () =>{
    section.classList.remove('active');
    search.classList.remove('active');
    insearch.classList.remove('active')
}
let x = 0;
const searchElement = document.getElementById('search');
// const insearchElement = document.getElementById('insearch');

if (document.activeElement === searchElement) {
    x = 1;
}
if(x=1){
    insearch.classList.toggle('.remove');
}

// window.onclick = (ev) =>{
//     if (ev.target.classname !== 'icons')
//         {
//             insearch.classList.remove('active')
//             search.classList.remove('active');
//             section.classList.remove('active');
//         }
// }
