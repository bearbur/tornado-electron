
var getButton = document.getElementById('get');
var tornadoResponse = document.getElementById('resp');
getButton.addEventListener('click', () => {
    fetch('http://localhost:3000').then(r=>{
        if(!!r && !!r.message && typeof r.message === 'string'){
            var goodResp = document.createElement('span');
            goodResp.innerHTML = r.message;
            tornadoResponse.appendChild(goodResp);
        }
        else{
            throw new Error('Wrong response from server.')
        }
    }).catch(e=>{
        var badResp = document.createElement('span');
        badResp.innerHTML = e.toString();
        tornadoResponse.appendChild(badResp);
    })
});
