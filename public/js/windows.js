

function newWindow(name) {
var offsetx
var offsety
var fs = false
    function movefunction() {
        div.style.position = "absolute";
        onmousemove = function(e){
          if (offsetx + e.clientX >= 0) {
            if (offsetx + e.clientX > window.innerWidth) {
              div.style.left = window.innerWidth + 'px'
            } else {
            div.style.left = offsetx + e.clientX+'px';
            }
          } else {
            div.style.left = window.screenX
          }
            div.style.top = offsety + e.clientY+'px';
        }
    }
    const div = document.createElement("div")
    div.style = 'position:absolute; z-index: 9;'
    div.setAttribute('class','windowheads')
    const closebutton = document.createElement("div")
    closebutton.setAttribute("id","closebutton")
    closebutton.innerHTML = 'x'
    closebutton.onclick = function() {
      this.parentNode.remove()
    }
    div.appendChild(closebutton)
    const maxbutton = document.createElement("div")
    maxbutton.setAttribute("id","maxbutton")
    maxbutton.innerHTML = "+"
      var oldleft
      var oldtop
      var oldheight
      var oldwidth
    maxbutton.onclick = function() {
      if (fs == false) {
        console.log(fs)
        oldleft = div.style.left
        oldtop = div.style.top
        oldheight = iframe.offsetHeight
        oldwidth = div.style.width
        console.log(div.offsetHeight)
        console.log(oldheight)
        div.style.width = '100vw';
        fs = true
        console.log(fs)
        iframe.style.width = div.style.width
        iframe.style.height = '92vh'
        div.style.top = 0
        div.style.left = 0
        maxbutton.style.left = '93%'
        maxbutton.innerHTML = "-"
      } else {
        console.log('amonger')
        console.log(oldleft)
        div.style.left = oldleft
        div.style.top = oldtop
        iframe.style.height = oldheight + 'px'
        div.style.width = oldwidth
        iframe.style.width = oldwidth
        maxbutton.style.left = '90%'
        fs = false
      }
    }
    div.appendChild(maxbutton)
    const iframe = document.createElement('iframe')
    iframe.setAttribute('class','windows')
    iframe.src = 'https://example.com'
    iframe.scrolling = 'no';
    div.appendChild(iframe)
    document.body.appendChild(div)
    div.addEventListener('mousedown', function(test) {
      if (fs == false) {
        offsetx = div.getBoundingClientRect().x - test.clientX
        offsety = div.getBoundingClientRect().y - test.clientY
        div.onmousemove = movefunction(div)
      }
    })
    onmouseup = function() {
        onmousemove = null
    }
}