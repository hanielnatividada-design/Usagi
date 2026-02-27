function showInfo(imgSrc, name, num, quote, extra) {
    const panel = document.getElementById('infoPanel');
    
    document.getElementById('infoImg').src = imgSrc;
    document.getElementById('infoName').innerText = name;
    document.getElementById('infoNum').innerText = num;
    document.getElementById('infoQuote').innerText = quote;
    document.getElementById('infoExtra').innerText = extra;
    
    panel.classList.add('show');
    
    const scrollArea = document.querySelector('.scroll-area');
    if (scrollArea) {
        scrollArea.scrollTop = 0;
    }
}

function hideInfo() {
    const panel = document.getElementById('infoPanel');
    panel.classList.remove('show');
}

function showInfoo(imgSrc, name, num, quote, extra) {
    const panel = document.getElementById('infooPanel');
    
    document.getElementById('infooImg').src = imgSrc;
    document.getElementById('infooName').innerText = name;
    document.getElementById('infooNum').innerText = num;
    document.getElementById('infooQuote').innerText = quote;
    document.getElementById('infooExtra').innerText = extra;
    
    panel.classList.add('show');
    
    const scrollArea = document.querySelector('.scroll-area');
    if (scrollArea) {
        scrollArea.scrollTop = 0;
    }
}

function hideInfoo() {
    const panel = document.getElementById('infooPanel');
    panel.classList.remove('show');
}