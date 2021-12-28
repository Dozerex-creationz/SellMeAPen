const nav=document.querySelector("header");

const change=(element)=>
{
const val=window.scrollY;

if(val>525)
{
nav.classList.remove('trans');

nav.classList.add('yes');
}
else
{
nav.classList.remove('yes');

nav.classList.add('trans');

}
}

window.addEventListener('scroll', ()=>change());
