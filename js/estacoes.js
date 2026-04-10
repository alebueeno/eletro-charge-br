document.addEventListener('DOMContentLoaded', () => {
    
    // Captura os botões de filtro e as seções de cidades
    const btnFiltros = document.querySelectorAll('.btn-filtro');
    const secoesCidades = document.querySelectorAll('.cidade-secao');

    btnFiltros.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove classe 'active' de todos os botões e adiciona no clicado
            btnFiltros.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const filtroAlvo = btn.getAttribute('data-filtro');

            secoesCidades.forEach(secao => {
                // Adiciona um efeitinho simples de opacidade antes de esconder
                secao.style.transition = 'opacity 0.4s ease';
                secao.style.opacity = 0;

                setTimeout(() => {
                    if (filtroAlvo === 'todas') {
                        secao.style.display = 'block';
                    } else if (secao.getAttribute('data-cidade') === filtroAlvo) {
                        secao.style.display = 'block';
                    } else {
                        secao.style.display = 'none';
                    }

                    // Força um reflow sutil e volta a opacidade
                    setTimeout(()=> {
                        secao.style.opacity = 1;
                    }, 50);
                    
                }, 400); // 400ms bate com a transicao de opacidade
            });
        });
    });
});
