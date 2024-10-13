const hexarr=[ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" ,"F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colorname");

btn.addEventListener('click',function()
{
    let hex="#";
    for(i = 0 ; i <  6; i ++)
    {
        hex += hexarr[generatehex()];
    }
    document.body.style.backgroundColor=hex;
    color.textContent=hex;
});

function generatehex(){
    return Math.floor((Math.random())*hexarr.length);
}

