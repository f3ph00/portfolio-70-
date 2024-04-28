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

////////////////////////////////////////////////////////////////////////

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
            traduzirParaPortugues();
            localStorage.setItem('idiomaSelecionado', 'portugues');
            idiomaSelecionado = 'portugues';
        }
    });

    bandeiraInglaterra.addEventListener('click', function() {
        if (idiomaSelecionado !== 'ingles') {
            traduzirParaIngles();
            localStorage.setItem('idiomaSelecionado', 'ingles');
            idiomaSelecionado = 'ingles';
        }
    });

    function traduzirParaPortugues() {
        document.getElementById('textoIdioma').innerHTML = `
        <h1 class="apresentacao__conteudo__titulo">Meus <strong>Projetos</strong></h1>
        <p class="apresentacao__conteudo__texto">Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.</p>
        <a class="apresentacao__links__certificado" href="https://cursos.alura.com.br/user/12andre-games/fullCertificate/40ae06640a619ae8607b647a0e47fdc5"><img src="/imagens/documento.png">Certificado</a>
        <img src="/imagens/gifhab.gif">
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
        <h1 class="apresentacao__conteudo__titulo">My <strong style="color: #FF3030;">Skills</strong></h1>
        <p class="apresentacao__conteudo__texto">Vivamus urna nisi, lobortis ut euismod in, sollicitudin ac ipsum. Mauris a libero id velit pulvinar scelerisque at quis magna. Aliquam erat volutpat.</p>
        <a class="apresentacao__links__certificado" href="https://cursos.alura.com.br/user/12andre-games/fullCertificate/40ae06640a619ae8607b647a0e47fdc5"><img src="/imagens/documento.png">Certificate</a>
        <img src="/imagens/gifhab.gif">
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


