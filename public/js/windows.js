var offsetx
var offsety

function newWindow() {
    function movefunction() {
        div.style.position = "absolute";
        onmousemove = function(e){
            //console.log(offset + 'hi')
            div.style.left = offsetx + e.clientX+'px';
            div.style.top = offsety + e.clientY+'px';
        }
    }
    const div = document.createElement("div")
    div.style = 'background-color: blanchedalmond; position:absolute; z-index: 9;'
    div.setAttribute('class','windowheads')
    const iframe = document.createElement('iframe')
    iframe.setAttribute('class','windows')
    iframe.src = 'https://example.com'
    iframe.scrolling = 'no';
    div.appendChild(iframe)
    document.body.appendChild(div)
    div.addEventListener('mousedown', function(test) {
        offsetx = div.getBoundingClientRect().x - test.clientX
        offsety = div.getBoundingClientRect().y - test.clientY
        div.onmousemove = movefunction(div)
    })
    onmouseup = function() {
        onmousemove = null
    }
}