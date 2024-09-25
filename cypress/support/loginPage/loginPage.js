export class LoginPage {

    escribirUsuario(usuario){
        return cy.get('#user');
    }

    escribirContraseña(password){
        return cy.get('#pass');
    }

    submitFormButton(submitFormButton){
        cy.get('#submitForm').click();
    }
    
}