//
let errorparagraph = document.getElementById("error")
console.log(errorparagraph)


function purchase() {
    console.log("button was clicked")
    errorparagraph.textContent = "something went wrong please try again"
}