let body = document.querySelector("HTML body");
let btn = document.querySelector("#btn");
dekh == 0;

btn.addEventListener("click",function(){
    if (dekh===0){
        body.style.backgroundColor = white;
        body.style.color = black;
        dekh= 1;
        btn.innerHTML = "black";
        console.log("chalu kar le")
    }
    else{
        body.style.backgroundColor = black;
        body.style.color = white;
        dekh = 0;
        btn.innerHTML = "white";
        console.log("band kar le")
    }
})