var usreInput = document.getElementById('inputt');
function okSearch() {
    console.log(usreInput.value);
    var webLink = "http://" + usreInput.value;
    var ifr = document.getElementById('website_div');
    ifr.style.display = "block";
    ifr.src = webLink;
}