export default class PreencheComodidade {
    constructor(containerComodidade, templateCard) {
        this.containerComodidade = document.querySelector(containerComodidade);
        this.templateCard = document.querySelector(templateCard);
    }

    async buscaComodidades() {
        const comodidades =[...await (await fetch('public/comodidades.json')).json()];
        
        comodidades.forEach(cm => {
            const card = this.templateCard.cloneNode(true)

            card.querySelector('i').className += cm.classFA
            card.querySelector('h2').innerHTML = cm.title
            card.querySelector('p').innerHTML = cm.description

            this.containerComodidade.append(card)
        })
    }

    init() {
        this.buscaComodidades()
    }
}