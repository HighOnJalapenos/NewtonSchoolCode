
function apply(){
    const color = document.getElementById("wall_color").value;
    const wallNo = document.getElementById("wall_id").value;

    const targetDiv = document.getElementById(wallNo);
    targetDiv.style.backgroundColor = color;
}

function reset(){
    const divArr = Array.from(document.getElementsByClassName("block"));
    divArr.forEach((div)=>{
        div.style.backgroundColor = "transparent";
    })
}