let elems = document.getElementsByClassName("icons")

for (let i = 0; i < elems.length; i++) {
    elems[i].style.backgroundImage = `url(../assets/${elems[i].getAttribute("icon") + '.svg'})`
}