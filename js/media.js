const MEDIA = {
    carro: 'https://res.cloudinary.com/dxgbjynnw/image/upload/v1779930029/carro-eletrico_hctlcn.png',
    cronograma: 'https://res.cloudinary.com/dxgbjynnw/image/upload/v1779930029/fundo-cronograma_fxkmoe.png',
};

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.bg-hero');
    if (hero) {
        hero.style.backgroundImage = `url('${MEDIA.carro}')`;
    }

    const cronograma = document.querySelector('.bg-cronograma');
    if (cronograma) {
        cronograma.style.backgroundImage =
            `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('${MEDIA.cronograma}')`;
    }
});