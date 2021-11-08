
    function calcular() {
        var txtv = window.document.querySelector('input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number(txtv.value)
        if (vel <= 0) {
            res.innerHTML = `<p>Por favor preencher a velocidade!!</p>`
        }else {
            res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>`
            if(vel > 60) {
                res.innerHTML += `Você está multado por exesso de velocidade!!!`
            }
            res.innerHTML += `<p>Dirija sempre com o cinto de segurança!!!</p>`
        }
    }