/// <reference types="cypress" />

class claroLogin {

    getEmail(){
        return cy.get("#username");
    }
    getPassword(){
        return cy.get("#password");
    }
    getLinea(){
        return cy.get('#select_button');
    }
    getMiNumero(){
        return cy.get('#dropdown_group > :nth-child(1) > :nth-child(1)');
    }
    getContinuarBtn(){
        return cy.get("#kc-login");
    }
    getValidarLinea(){
        return cy.get(".cardCustomerLines_button_continuar__3zyNw");
    }
}
module.exports = new claroLogin();