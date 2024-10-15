export class LoginPage {

    escribirUsuario(){
        return cy.get('#user');
    }

    escribirContraseña(){
        return cy.get('#pass');
    }

    submitFormButton(){
        cy.get('#submitForm').click();
    }
    
}