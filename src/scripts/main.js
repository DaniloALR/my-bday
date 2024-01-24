AOS.init();

const contaAsHoras = setInterval(function(){
    const dataDoEvento = new Date("Jul 23, 2024 00:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const dataAtual = new Date();
    const timeStampDaDataAtual = dataAtual.getTime();
    
    const tempoAteOEvento = timeStampDoEvento - timeStampDaDataAtual;
    
    const diasEmMs = (1000 * 60 * 60 * 24);
    const horasEmMs = (1000 * 60 * 60);
    const minutosEmMs = (1000 * 60);

    const diaDoEvento = Math.floor(tempoAteOEvento / diasEmMs);
    const horaDoEvento = Math.floor((tempoAteOEvento % diasEmMs) / horasEmMs);
    const minutoDoEvento = Math.floor((tempoAteOEvento % horasEmMs) / minutosEmMs);
    const segundoDoEvento = Math.floor((tempoAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diaDoEvento}d ${horaDoEvento}h ${minutoDoEvento}m ${segundoDoEvento}s`

    if(tempoAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('event-message').innerHTML = 'O evento já começou!';
    }
}, 1000)