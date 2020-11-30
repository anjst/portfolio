
function replaceword(that, word, oword) {
    if (that.textContent === word) {
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const contenta = ':)';
        li.appendChild(document.createTextNode(contenta));
        ul.appendChild(li);
        that.textContent = oword;
    } else {
        let ul = document.getElementById('list');
        ul.removeChild(ul.lastChild);
        that.textContent = word;
    }
}

