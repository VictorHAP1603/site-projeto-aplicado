export default class MenuMobile {
    constructor(menuMobile, navLinks) {
        this.menuMobile = document.querySelector(menuMobile);
        this.navLinks = document.querySelector(navLinks);
        
    }   

    mudaMenu() {
        this.navLinks.classList.toggle('active');
    }

    verificaScrollWindow() {

        if (window.pageYOffset > 0) {
            if (this.navLinks.classList.contains('active')) {
                this.navLinks.classList.remove('active');   
            }
        }

    }

    bindEvents() {
        this.mudaMenu = this.mudaMenu.bind(this);
        this.verificaScrollWindow = this.verificaScrollWindow.bind(this);
    }

    init() {
        this.bindEvents();
        this.menuMobile.addEventListener('click', this.mudaMenu)    
        window.addEventListener('scroll', this.verificaScrollWindow)

    }
}