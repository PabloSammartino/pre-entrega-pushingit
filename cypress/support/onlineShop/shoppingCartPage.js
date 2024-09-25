export class ShoppingCartPage {
    
    goShoppingCart () {
        cy.get('#goShoppingCart').click();
    }

    verificarProducto(index, nombreProducto) {
        cy.get('p[data-cy=productName]').eq(index).should('contain', nombreProducto);
    }

    verificarCantidad(index, cantidadProducto) {
        cy.get('p[data-cy=productAmount]').eq(index).should('contain', cantidadProducto);
    }

    verificarPrecio(index, precioProducto) {
        cy.get('p[data-cy=unitPrice]').eq(index).should('contain', precioProducto);
    }

    verificarPrecioTotal(index, precioTotalProducto) {
        cy.get('.css-1i1ynt3').contains('Show total price').click();
        cy.get('p[data-cy=totalPrice]').eq(index).should('contain', precioTotalProducto);
    }

}