export class ProductsPage {

    addToCart (name) {
        cy.get(`button[name="${name}"]`).click();
    }

    clickProductsPage () {
        cy.get('#onlineshoplink').click();
    }

    closeModal (){
        cy.get('#closeModal').click();
    }

}