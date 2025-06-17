let leftButton=document.getElementById("left")
let rightButton=document.getElementById("right")
let Bgc=document.querySelector("#body")
console.log(Bgc);


rightButton.addEventListener("click",function(){
checkRight()
})

leftButton.addEventListener("click",function(){
    checkleft()
})

function checkRight(){
    let boxes=document.querySelectorAll(".box")
    let size=boxes.length-1
    for (let i = 0; i <=size; i++) {
        if(boxes[size].classList.contains("upper")){
            boxes[size].classList.remove("upper")
            boxes[0].classList.add("upper")
            Bgc.className=""
            Bgc.classList.add(`bgc${1}`)
            Bgc.classList.add("bgPos")
            console.log(Bgc);
            break
        }
        if(boxes[i].classList.contains("upper")){
            boxes[i].classList.remove("upper")
            boxes[i+1].classList.add("upper")
            console.log(boxes[i+1]);
            Bgc.className=""
            Bgc.classList.add(`bgc${i+2}`)
            Bgc.id="bgPos"
            
            break
        }   
    }
}

function checkleft(){
    let boxes=document.querySelectorAll(".box")
    let size=boxes.length-1
    for (let i=size;i>=0; i--) {
        if(boxes[0].classList.contains("upper")){
            boxes[0].classList.remove("upper")
            boxes[size].classList.add("upper")
            console.log(boxes[size]);
            Bgc.className=""
            Bgc.classList.add(`bgc${size+1}`)
            Bgc.classList.add("bgPos")
            break
        }
        if(boxes[i].classList.contains("upper")){
            boxes[i].classList.remove("upper")
            boxes[i-1].classList.add("upper")
            console.log(boxes[i-1]);
            Bgc.className=""
            Bgc.classList.add(`bgc${i}`)
            Bgc.classList.add("bgPos")
            break
        }  
    }
}
