window.addEventListener("load", () => { 
  // should be server side geneated instead of user configurable
  var targetURL = "http://192.168.1.10:8080/"
  var imgEl = document.createElement("img")
  imgEl.id = "send-to-ml"
  imgEl.src = "https://holo-one.com/static/image/Logos/magic_leap.png"
  imgEl.style.position = "absolute"
  imgEl.style.bottom = "10px"
  imgEl.style.left = "10px"
  imgEl.style.width = "22px"
  imgEl.style.height = "22px"
  imgEl.style.zIndex = "100"
  imgEl.alt = "Send to MagicLeap"
  imgEl.title = "Send to MagicLeap"
  imgEl.onclick = () => { window.open(targetURL + "?url=" + window.location) }
  console.log( imgEl )
  document.body.appendChild( imgEl )
});
