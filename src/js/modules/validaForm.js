const regexs = {
    email: {
        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
        message: 'Digite um e-mail válido'
    }
}

export default class ValidaForm {
    constructor(form, inputs) {
        this.form = document.querySelector(form)
        this.inputs = document.querySelectorAll(inputs)

        this.buttonEnvia = document.querySelector(`${form} #submit`)
    }

    $$(els) { return document.querySelectorAll(els) }

    submitForm(e) {
        e.preventDefault();
        
        const isPreenchido = this.validaSeEstaoPreenchidos();
        if (!isPreenchido) return;

        const isValidos = this.validaSeSaoValidos();
        if (!isValidos) return;

        this.buttonEnvia.innerHTML = 'Enviando...';

        setTimeout(() => {
            const aviso = this.aviso('E-mail enviado com sucesso', 'message__send')
            // this.form.append(aviso);
            // ou
            this.form.insertBefore(aviso, this.buttonEnvia.nextElementSibling)
            
            this.buttonEnvia.innerHTML = 'Enviar'
            this.inputs.forEach(i => i.value = '')

            setTimeout(() => {
                this.form.querySelector('.message__send').remove()
            }, 3000)

        }, 3000)


    }

    validaSeEstaoPreenchidos() {
        let isValid = true;

        this.inputs.forEach(i => {
            if(i.value === '') {
                i.classList.add('warning');
                setTimeout(() => i.classList.remove('warning'), 2000)
                
                isValid = false;
            } else {
                i.classList.remove('warning');
            }
        })

        return isValid
    }

    validaSeSaoValidos() {
        let isValidos = true;

        this.inputs.forEach(i => {
            if (i.hasAttribute('data-regex')) {
                const parentElement = i.parentNode;
                const tipoRegex = i.getAttribute('data-regex');

                if (!regexs[tipoRegex].regex.test(i.value)) {
                    isValidos = false;
                    i.classList.add('warning');

                    const aviso = this.aviso(regexs[tipoRegex].message, 'message__invalid');

                    if (!parentElement.querySelector('.message__invalid')) {
                        parentElement.append(aviso);
                    }

                } else {
                    if (parentElement.querySelector('.message__invalid')) {
                        parentElement.querySelector('.message__invalid').remove();
                        i.classList.remove('warning');
                    }
                }

            }
        })

        return isValidos
    }

    aviso(text, classe) {
        const span = document.createElement('span')
        span.classList.add(classe)
        span.innerHTML = text

        return span;

    }

    bindEvents() {
        this.submitForm = this.submitForm.bind(this)
    }

    init() {
        this.bindEvents();
        this.form.addEventListener('submit', this.submitForm)

    }
}