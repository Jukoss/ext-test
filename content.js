chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    console.log('bla', request);
    document.body.classList.add('bla');

    // if( request.message === "clicked_browser_action" ) {
    //   var firstHref = document.querySelector[0].getAttribute("href");

    //   console.log('bla', firstHref);
    // }
  }
);