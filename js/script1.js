document.getElementById("forMen1").style.display = "none";
document.getElementById("forWomen1").style.display = "none";

function show1() {
  document.getElementById("forMen1").style.display = "none";
  document.getElementById("forMen2").style.display = "block";
  document.getElementById("forWomen1").style.display = "none";
  document.getElementById("forWomen2").style.display = "block";
}

function show2() {
  document.getElementById("forMen1").style.display = "block";
  document.getElementById("forMen2").style.display = "block";
  document.getElementById("forWomen1").style.display = "none";
  document.getElementById("forWomen2").style.display = "none";
}

function show3() {
  document.getElementById("forMen1").style.display = "none";
  document.getElementById("forMen2").style.display = "none";
  document.getElementById("forWomen1").style.display = "block";
  document.getElementById("forWomen2").style.display = "block";
}
