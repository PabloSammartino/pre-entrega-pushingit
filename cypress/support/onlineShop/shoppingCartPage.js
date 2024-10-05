export class ShoppingCartPage {


    goShoppingCart (data) {
        cy.get('#goShoppingCart').click();
        this.data = data;
    }

    verificarProducto (productName) {
        return cy.get('p[data-cy=productName]').contains(`${productName}`);
    }

    verificarCantidad (productAmount) {
        return cy.get('p[data-cy=productAmount]').contains(`${productAmount}`);
    }

    verificarPrecioUnitario () {
        cy.contains(this.data.productos[0].name).siblings('#unitPrice').should('have.text',`$${this.data.productos[0].precioUnitario}`);
        cy.contains(this.data.productos[1].name).siblings('#unitPrice').should('have.text',`$${this.data.productos[1].precioUnitario}`);
        cy.contains(this.data.productos[0].cantidad).siblings('#totalPrice').should('have.text',`$${this.data.productos[0].cantidad * this.data.productos[0].precioUnitario}`);  
    }

    verificarPrecioTotal () {
        cy.get('.css-1i1ynt3').contains('Show total price').click();
        let sumaTotal = this.data.productos[0].precioUnitario * this.data.productos[0].cantidad + this.data.productos[1].precioUnitario;
        cy.get('#price').should('have.text', `${sumaTotal}`);
    }

}