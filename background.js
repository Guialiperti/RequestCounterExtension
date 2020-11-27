function addCount(){
    
  var s = document.getElementById("counter").value;
  var i = parseInt(s);
  i += 1;
  document.getElementById("counter").value = i;
}
function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
    if(requestDetails.url != requestDetails.originUrl){
      addCount();
    }
  }

  
  browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["<all_urls>"]}
  );
