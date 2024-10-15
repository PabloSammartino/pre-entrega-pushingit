import { CheckoutPage } from "../support/pages/checkoutPage"

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

Cypress.Commands.add('deleteUser', () =>{
    cy.request({
        method: "DELETE",
        url: 'https://pushing-it-3.onrender.com/api/deleteuser/pushingit',
        headers: {
            authorization: `Bearer ${Cypress.env().token}`
        },
    }).then(response => {
        expect(response.status).to.eq(202);
        expect(response).to.have.property('statusText', 'Accepted');
    });
})