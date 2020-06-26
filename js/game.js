
const evil_links = [
    'https://geektyper.com/shield/',
    'https://geektyper.com/umbrella/',
    'https://geektyper.com/fsociety/',
    'https://geektyper.com/anon/',
    'https://geektyper.com/fallout/',
    'https://geektyper.com/matrix/',
    'https://geektyper.com/hey/',
    'https://geektyper.com/hey/',
    'https://geektyper.com/hey/',
    'https://geektyper.com/hey/',
    'https://www.youtube.com/watch?v=gAjR4_CbPpQ',
    'https://www.youtube.com/watch?v=htgr3pvBr-I',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
];

const good_links = [
    'btn btn-primary ',
    'btn btn-secondary',
    'btn btn-success',
    'btn btn-info',
    'btn btn-light text-black',
    'btn btn-dark',
    'btn btn-link text-black',
    'btn btn-outline-primary text-black',
    'btn btn-outline-secondary text-black',
    'btn btn-outline-success text-black',
    'btn btn-outline-info text-black',
    'btn btn-outline-light text-black',
    'btn btn-outline-dark text-black',
    'badge badge-pill badge-primary',
    'badge badge-pill badge-secondary',
    'badge badge-pill badge-success',
    'badge badge-pill badge-info'
]

function createEvilButton() {
    const randomLink = evil_links[Math.floor(Math.random() * evil_links.length)];
    const randomImage = Math.floor(Math.random() * 12) + '.jpg';
    const response = `<a id="btn0" target="_blank" onclick="btn0Click();" href="${randomLink}"><img class="img-fluid" src="images/game/${randomImage}"></a>`
    return response;
}

function createGoodBotton() {
    const randomLink = good_links[Math.floor(Math.random() * good_links.length)];
    const response = '<a id="btn1" target="_blank" onclick="btn1Click();" href="https://mystifying-northcutt-fd448f.netlify.app/download/myfile.mp4" type="button" class="' + randomLink + '">Download</a>'
    return response;
}

function init() {
    console.log('init')
    var goodButton = false;

    for (let i = 0; i < 4; i++) {
        let newButton = document.getElementById("slot" + i)

        if (i == 3 && !goodButton) {
            newButton.innerHTML = createGoodBotton()
        } else if (Math.floor(Math.random() * Math.floor(4)) == i && !goodButton) {
            newButton.innerHTML = createGoodBotton()
            goodButton = !goodButton
        } else if (Math.floor(Math.random() * Math.floor(4)) == i && !goodButton) {
            newButton.innerHTML = createGoodBotton()
            goodButton = !goodButton
        }
        else if (Math.floor(Math.random() * Math.floor(4)) == i && !goodButton) {
            newButton.innerHTML = createGoodBotton()
            goodButton = !goodButton
        }
        else if (Math.floor(Math.random() * Math.floor(4)) == i && !goodButton) {
            newButton.innerHTML = createGoodBotton()
            goodButton = !goodButton
        } else {
            newButton.innerHTML = createEvilButton()
        }
        Math.floor(Math.random() * Math.floor(4))
    }
}
init()

function btn0Click() {
    init()
    const randomLink = evil_links[Math.floor(Math.random() * evil_links.length)];
    Swal.fire({
        title: 'Botão errado!',
        text: 'Você foi hackeado',
        icon: 'error',
        confirmButtonText: 'Ok',
    })
}

function btn1Click() {
    init()
    Swal.fire({
        title: 'Botão certo!',
        text: 'Parabéns, você acertou',
        icon: 'success',
        confirmButtonText: 'Ok',
    })
}
