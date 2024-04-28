let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected");
}

function start() {
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener("load", start);

// Código da borda
const borda = document.getElementById('slider');
let corAtual = 0;

setInterval(function() {
    corAtual = (corAtual + 1) % 3;
    if (corAtual === 0) {
        borda.style.borderColor = 'rgb(0,191,255)';
    } else if (corAtual === 1) {
        borda.style.borderColor = 'rgb(255,105,180)';
    } else {
        borda.style.borderColor = 'rgb(255, 255, 255)';
    }
}, 5000);

//CÓDIO MENU MOBILE
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/imagens/close_white_36dp.svg";
    }
}

////CÓDIGO IDIOMA

document.addEventListener('DOMContentLoaded', function() {
    const bandeiraBrasil = document.getElementById('bandeira-brasil');
    const bandeiraInglaterra = document.getElementById('bandeira-inglaterra');

    let idiomaSelecionado = localStorage.getItem('idiomaSelecionado');

    if (!idiomaSelecionado) {
        idiomaSelecionado = 'portugues';
        localStorage.setItem('idiomaSelecionado', idiomaSelecionado);
    }

    if (idiomaSelecionado === 'portugues') {
        traduzirParaPortugues();
    } else {
        traduzirParaIngles();
    }

    bandeiraBrasil.addEventListener('click', function() {
        if (idiomaSelecionado !== 'portugues') {
            document.querySelectorAll('.cabecalho__itens').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaPortugues();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            document.querySelectorAll('.cabecalho__itens').forEach(item => {
                item.style.pointerEvents = 'none';
            });

            traduzirParaIngles();

            setTimeout(() => {
                document.querySelectorAll('.cabecalho__itens').forEach(item => {
                    item.style.pointerEvents = 'auto';
                });
            }, 1000);

            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
            <main class="apresentacao__projeto">
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Olá! Sou André Felipe, tenho 22 anos e estou dedicando meu tempo ao estudo da cibersegurança na Anhanguera. Além disso, faço parte do Brazilian Advanced Team no San Jose Institute of Technology, participando ativamente do programa de formação profissional em Segurança da Informação Avançada. É um prazer compartilhar um pouco sobre minha trajetória e interesses na área.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Acesse minhas redes:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00"> <img src="/imagens/github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/"> <img src="/imagens/linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/"> <img src="/imagens/instagram.png">Instagram</a>
            </div>
        `;
        document.querySelectorAll('.cabecalho__itens')[0].innerText = 'Inicio';
        document.querySelectorAll('.cabecalho__itens')[1].innerText = 'Habilidades';
        document.querySelectorAll('.cabecalho__itens')[2].innerText = 'Projetos';
        document.querySelector('.rodape a').innerText = 'Desenvolvido por Andre Felipe';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = '/imagens/casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = '/imagens/computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = '/imagens/pasta2.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });

        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'inicio') {
                    window.location.href = '/htmls/index.html';
                } else if (link === 'habilidades') {
                    window.location.href = '/htmls/habilidades.html';
                } else if (link === 'projetos') {
                    window.location.href = '/htmls/projetos.html';
                }
            });
        });
    }

    function traduzirParaIngles() {
        document.getElementById('textoIdioma').innerHTML = `
            <h1 class="apresentacao__conteudo__titulo">Andre <strong>Felipe</strong></h1>
            <p class="apresentacao__conteudo__texto">Hello! I'm André Felipe, I'm 22 years old and I'm dedicating my time to studying cybersecurity at Anhanguera. Furthermore, I am part of the Brazilian Advanced Team at the San Jose Institute of Technology, actively participating in the professional training program in Advanced Information Security. It's a pleasure to share a little about my background and interests in the area.</p>
            <div class="apresentacao__links">
                <h2 class="apresentacao__conteudo__redes">Access my social networks:</h2>
                <a class="apresentacao__links__link" href="https://github.com/f3ph00"> <img src="/imagens/github.png">GitHub</a>
                <a class="apresentacao__links__link"  href="https://linkedin.com/in/andrefelipesilvar/"> <img src="/imagens/linkedin.png">Linkedin</a>
                <a class="apresentacao__links__link" href="https://www.instagram.com/f3ph0/"> <img src="/imagens/instagram.png">Instagram</a>
            </div>
        `;
        document.querySelectorAll('.cabecalho__itens')[0].innerText = 'Home';
        document.querySelectorAll('.cabecalho__itens')[1].innerText = 'Skills';
        document.querySelectorAll('.cabecalho__itens')[2].innerText = 'Projects';
        document.querySelector('.rodape a').innerText = 'Developed by Andre Felipe';

        // Adiciona os ícones aos links do menu
        document.querySelectorAll('.cabecalho__itens').forEach((item, index) => {
            let iconSrc = '';
            if (index === 0) {
                iconSrc = '/imagens/casa.png'; // Ícone para o primeiro item
            } else if (index === 1) {
                iconSrc = '/imagens/computador.png'; // Ícone para o segundo item
            } else if (index === 2) {
                iconSrc = '/imagens/pasta2.png'; // Ícone para o terceiro item
            }
        
            item.innerHTML = `<img src="${iconSrc}"> ${item.innerText}`;
        });

        // Redireciona para a página correta quando um item do menu é clicado
        document.querySelectorAll('.cabecalho__itens').forEach(item => {
            item.addEventListener('click', function() {
                const link = this.innerText.toLowerCase().trim();
                if (link === 'home') {
                    window.location.href = '/htmls/index.html';
                } else if (link === 'skills') {
                    window.location.href = '/htmls/habilidades.html';
                } else if (link === 'projects') {
                    window.location.href = '/htmls/projetos.html';
                }
            });
        });
    }
});
