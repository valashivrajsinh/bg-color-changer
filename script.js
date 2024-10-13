const colors=["red" , "blue" , "cyan" , "green" , "yellow"];

const btn=document.getElementById('btn');

const colortext=document.querySelector(".colorname");

btn.addEventListener('click',function()
{
    let index=randomindex();
    document.body.style.backgroundColor=colors[index];
    colortext.textContent=colors[index];
});

function randomindex()
{
    return (Math.floor(Math.random()*colors.length));
}