
document.getElementById("d1").style.width = "260px";
document.getElementById("d2").style.width = "260px";
document.getElementById("d3").style.width = "260px";
document.getElementById("d4").style.width = "260px";
document.getElementById("EmployeeInfo").style.width = "72.5em";

document.addEventListener("DOMContentLoaded", function(event) {

const showNavbar = (toggleId, navId, bodyId, headerId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId),
bodypd = document.getElementById(bodyId),
headerpd = document.getElementById(headerId)


// Validate that all variables exist
if(toggle && nav && bodypd && headerpd){
toggle.addEventListener('click', ()=>{
// show navbar
nav.classList.toggle('show')
// change icon
toggle.classList.toggle('bx-x')
// add padding to body
bodypd.classList.toggle('body-pd')
// add padding to header
headerpd.classList.toggle('body-pd')

document.getElementById("EmployeeInfo").style.width = "100%";
document.getElementById("d1").style.width = "240px";
document.getElementById("d2").style.width = "240px";
document.getElementById("d3").style.width = "240px";
document.getElementById("d4").style.width = "240px";
})
}
}

showNavbar('header-toggle','nav-bar','body-pd','header')

document.getElementById("d1").style.width = "260px";
document.getElementById("d2").style.width = "260px";
document.getElementById("d3").style.width = "260px";
document.getElementById("d4").style.width = "260px";
document.getElementById("EmployeeInfo").style.width = "72.5em";
/*===== LINK ACTIVE =====*/
const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
if(linkColor){
linkColor.forEach(l=> l.classList.remove('active'))
this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

// Your code to run since DOM is loaded and ready
});