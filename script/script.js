
function replaceword(that, word, oword) {
    if (that.textContent === word) {
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const x = document.createElement("IMG");
        x.setAttribute("src", "./lol.gif");
        x.setAttribute("width", "100");
        x.setAttribute("height", "80");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
        ul.appendChild(x);
        that.textContent = oword;
    } else {
        let ul = document.getElementById('list');
        ul.removeChild(ul.lastChild);
        that.textContent = word;
    }
}

