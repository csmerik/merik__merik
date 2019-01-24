var transport = new XMLHttpRequest ()
transport.open (
  "GET",
  "sample.html"
 )
 transport.onload = function (event) {
    if (this.status === 200){
      var container = document.createElement ("main")
      document.body.apendChild (container)
      container.innerHTML = this.responceText
    }
 }
 transport.send()
