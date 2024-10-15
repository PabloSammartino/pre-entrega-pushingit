export class CheckoutPage {

    goToBillingSummary(){
        cy.get('#goBillingSummary').click();
    }

    goToCheckOut(){
        cy.get('#goCheckout').click();
    }

    checkOutFirstName(firstName){
        cy.get('#FirstName').click().type(`${firstName}`);
    }

    checkOutLastName(lastName){
        cy.get('[data-cy="lastName"]').click().type(`${lastName}`);
    }

    checkOutCardNumber(cardNumber){
        cy.get('#cardNumber').click().type(`${cardNumber}`);
    }

    purchaseButton(){
        cy.get('[data-cy="purchase"]').click({timeout: 40000});
    }

    verificarFirstName(firstName){
        return cy.get('#name').should('contain.text', `${firstName}`);
    }

    verificarLastName(lastName){
        return cy.get('#name').should('contain.text', `${lastName}`);
    }

    verificarCardNumber(cardNumber){
        return cy.get('#creditCard').should('contain.text', `${cardNumber}`);
    }

    verificarProducto1(producto1){
        return cy.get('#product-1').should('contain.text', `${producto1}`);
    }

    verificarProducto2(producto2){
        return cy.get('#product-2').should('contain.text', `${producto2}`);
    }

    verificarPrecioTotal(totalPrice){
        return cy.get('#totalPrice').should('contain.text', `${totalPrice}`)
    }
}