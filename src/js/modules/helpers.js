export default class Helpers {

    $$(elements) {
        return document.querySelectorAll(elements)
    }

    $(element) {
        return document.querySelector(element)
    }

}