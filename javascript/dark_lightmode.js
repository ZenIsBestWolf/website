function lightmode() {
    document.getElementById("main").style.backgroundColor="rgb(100,100,100)";
    document.getElementById("main").style.color="white";
    document.getElementById("lightmodebtn").style.display="none";
    document.getElementById("darkmodebtn").style.display="block";
    document.getElementById("darkmodebtn").style.display="block";
}
function darkmode() {
    document.getElementById("main").style.backgroundColor="rgba(46, 45, 45, 0.781)";
    document.getElementById("main").style.color="white";
    document.getElementById("lightmodebtn").style.display="block";
    document.getElementById("darkmodebtn").style.display="none";
}
