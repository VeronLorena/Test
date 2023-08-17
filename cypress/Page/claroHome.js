/// <reference types="cypress" />

class claroHome {

    getButtonIngresa (){

        return cy.get("p.MenuTienda_text_button__ocMYe");
     }
     getMiUsuario (){
        return cy.get('[data-test="mt-open-modal"]');
     }
};
module.exports = new claroHome ();



