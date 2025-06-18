
let leftButton = document.getElementById("left")
let rightButton = document.getElementById("right")
let Bgc = document.querySelector("#body")

let boxes = document.querySelectorAll(".box")
let size = boxes.length - 1

let names=document.querySelectorAll(".name")


rightButton.addEventListener("click", function () {
    checkRight()
    Bgc.id = "bgPos"
})

leftButton.addEventListener("click", function () {
    checkleft()
    Bgc.id = "bgPos"
})

function checkRight() {

    for (let i = 0; i <= size; i++) {
        if ((boxes[size].classList.contains("upper")) && (names[size].classList.contains("upper"))) {
            boxes[size].classList.remove("upper")
            names[size].classList.remove("upper")
            boxes[0].classList.add("upper")
            names[0].classList.add("upper")
            Bgc.className = ""
            Bgc.classList.add(`bgc${1}`)
            break
        }
        if ((boxes[i].classList.contains("upper")) && (names[i].classList.contains("upper"))) {
            boxes[i].classList.remove("upper")
            names[i].classList.remove("upper")
            boxes[i + 1].classList.add("upper")
            names[i+1].classList.add("upper")
            console.log(boxes[i + 1]);
            Bgc.className = ""
            Bgc.classList.add(`bgc${i + 2}`)
            break
        }
    }
}

function checkleft() {
    for (let i = size; i >= 0; i--) {
        if ((boxes[0].classList.contains("upper")) && (names[0].classList.contains("upper"))) {
            boxes[0].classList.remove("upper")
            names[0].classList.remove("upper")
            boxes[size].classList.add("upper")
            names[size].classList.add("upper")
            console.log(boxes[size]);
            Bgc.className = ""
            Bgc.classList.add(`bgc${size + 1}`)
            break
        }
        if ((boxes[i].classList.contains("upper")) && (names[i].classList.contains("upper"))) {
            boxes[i].classList.remove("upper")
            names[i].classList.remove("upper")
            boxes[i - 1].classList.add("upper")
            names[i - 1].classList.add("upper")
            console.log(boxes[i - 1]);
            Bgc.className = ""
            Bgc.classList.add(`bgc${i}`)
            break
        }
    }
}
