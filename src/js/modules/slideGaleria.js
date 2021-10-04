export default class Galeria {
    constructor(slideImgs, imgPrincipal) {
        this.slideImgs = document.querySelector(slideImgs)
        this.imgPrincipal = document.querySelector(imgPrincipal)
    }


    preencheAsFotos() {
        for (let i = 1; i <= 8; i++) {
            const divSlideItem = document.createElement('div');
            const img = document.createElement('img');
            divSlideItem.classList.add('slide__item')
            img.src = `src/assets/images/foto${i}.jpg`;
            
            divSlideItem.append(img);

            divSlideItem.addEventListener('click', this.mudaImgPrincipal)
            this.slideImgs.append(divSlideItem);
        }

        this.colocaUmaFotoPadrao();
    }   

    mudaImgPrincipal({currentTarget}) {
        const srcImg = currentTarget.querySelector('img').src
        this.imgPrincipal.querySelector('img').src = srcImg

        this.slideImgs.querySelectorAll('div').forEach(i => i.classList.remove('active'));
        currentTarget.classList.add('active');
    }
 
    colocaUmaFotoPadrao() {
        const primeiroItem = this.slideImgs.children[0]
        const primeiraFoto = primeiroItem.querySelector('img').src

        this.imgPrincipal.querySelector('img').src = primeiraFoto;
        primeiroItem.classList.add('active');
    }

    bindEvents() {
        this.mudaImgPrincipal = this.mudaImgPrincipal.bind(this)
    }

    init() {
        this.bindEvents()
        this.preencheAsFotos();
    }
}