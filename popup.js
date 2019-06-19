
document.addEventListener('DOMContentLoaded', function () {
  const checkPage = document.getElementById('checkPage');
  checkPage.addEventListener('click', () => {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Hello</h1>";

    // my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, checkPage);
  });
}, false);