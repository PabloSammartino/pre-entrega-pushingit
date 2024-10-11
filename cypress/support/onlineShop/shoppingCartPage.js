export class ShoppingCartPage {


    goShoppingCart() {
        cy.get('#goShoppingCart').click();
    }

    verificarProducto (productName) {
        return cy.get('p[data-cy=productName]').contains(`${productName}`);
    }

    verificarCantidad (productAmount) {
        return cy.get('p[data-cy=productAmount]').contains(`${productAmount}`);
    }

    verificarPrecioUnitario (name, unitPrice) {
        cy.contains(name).siblings('#unitPrice').should('have.text',`$${unitPrice}`);
    }

    verificarPrecioTotalLinea (name, totalPrice) {
        cy.contains(name).siblings('#totalPrice').should('have.text',`$${totalPrice}`);
    }

    verificarPrecioTotal (totalPrice) {
        cy.get('.css-1i1ynt3').contains('Show total price').click();
        cy.get('#price').should('have.text', `${totalPrice}`);
    }

}