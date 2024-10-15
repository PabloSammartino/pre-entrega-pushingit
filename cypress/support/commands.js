import { CheckoutPage } from "../support/pages/checkoutPage"
/* const checkoutPage = new CheckoutPage(); */

/* Cypress.Commands.add('completarCheckout', (nombre, apellido, tarjeta) => {
    checkoutPage.escribirNombre(nombre);
    checkoutPage.escribirApellido(apellido);
    checkoutPage.escribirNumeroTarjeta(tarjeta);
}) */



Cypress.Commands.add('loginWithAPI', (username, password) => {
    cy.request({
            method: "POST",
            url: 'https://pushing-it-3.onrender.com/api/login',
            headers: {
                authorization: `Bearer ${Cypress.env().token}`
            },
            body:{
                "username": username,
                "password": password
            }
    }).then(response => {
        window.localStorage.setItem('token', response.body.token);
        window.localStorage.setItem('user', response.body.user);
    })
})