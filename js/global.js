document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. SCROLL REVEAL (INTERSECTION OBSERVER)
       ========================================================================== */
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // 15% do elemento precisa estar visivel para disparar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    /* ==========================================================================
       2. BOTÃO VOLTAR AO TOPO (Injetado via JS)
       ========================================================================== */
    // Cria o botão dinamicamente e injeta no body para limpar o HML
    const btnTop = document.createElement('button');
    btnTop.id = 'btnTop';
    btnTop.title = 'Voltar ao topo';
    btnTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btnTop);

    // Mostrar/ocultar conforme o scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnTop.classList.add('show');
        } else {
            btnTop.classList.remove('show');
        }
    });

    // Evento de clique para voltar ao topo suavemente
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
