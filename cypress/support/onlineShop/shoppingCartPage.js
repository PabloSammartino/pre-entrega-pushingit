export class ShoppingCartPage {
    
    goShoppingCart () {
        cy.get('#goShoppingCart').click();
    }

    verificarProducto () {
        return cy.get('p[data-cy=productName]');
    }

    verificarCantidad () {
        return cy.get('p[data-cy=productAmount]');
    }

    verificarPrecio () {
        return cy.get('p[data-cy=unitPrice]');
    }

    verificarPrecioTotal(precioTotalProductos) {
        return cy.get('.css-1i1ynt3').contains('Show total price').click();
    }

}