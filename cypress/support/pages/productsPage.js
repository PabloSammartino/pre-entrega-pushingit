export class ProductsPage {

    addToCart (name) {
        cy.get(`button[name="${name}"]`).click({timeout: 2000});
    }

    clickProductsPage () {
        cy.get('#onlineshoplink').click({timeout: 2000});
    }

    closeModal (){
        cy.get('#closeModal').click({timeout: 2000});
    }

}