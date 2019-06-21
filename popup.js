
document.addEventListener('DOMContentLoaded', function () {
  const checkPage = document.getElementById('checkPage');
  checkPage.addEventListener('click', () => {
    // var newDiv = document.createElement("div");
    // newDiv.innerHTML = "<h1>Hello</h1>";
    // document.body.insertBefore(newDiv, checkPage);

    // chrome.tabs.query({
    //   // active: true,
    //   // lastFocusedWindow: true
    // }, function (tabs) {
    //   console.log('tabs', tabs);

    // });

    chrome.runtime.onMessage.addListener(
      function(message, callback) {
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });

        console.log(message);

     });




  });
}, false);