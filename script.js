const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const voDoBranco = document.getElementById('voDoBranco').checked;
    const neuzinha = document.getElementById('neuza').checked;

    if (!voDoBranco && !neuzinha) {
        alert("TEM QUE ESCOLHER A MAIS SAFADINHA");
    } else if (voDoBranco && neuzinha) {
        alert("CALMA RAPAZ ESCOLHA UMA DE CADA VEZ ELAS NAO VAO FUGIR");
    } else {
        validacao(voDoBranco, neuzinha);
    }
});

function validacao(voDoBranco, neuzinha) {
    const exibirSafada = document.getElementById('exibirFoto');
    
    if (voDoBranco) {
        exibirSafada.innerHTML = `<img src="img/vo do brancoARRUMADO.png" alt="Vo do Branco">`;
    }
    if (neuzinha) {
        exibirSafada.innerHTML = `<img src="img/neuzinha do poARRUMADO.png" alt="Neuzinha do Po">`;
    }
}
