/// <reference types="cypress" />

import claroHome from "../../Page/claroHome";
import claroLoguin from "../../Page/claroLogin";

describe("Inicio de sesion",() => {
    

    it("verificar inicio de sesion exitoso",() => {
        const user = Cypress.env()[0].user;
        const pass = Cypress.env()[0].pass;
        const cel = Cypress.env()[0].cel;
        
        cy.visit("https://tienda.claro.com.ar");
        claroHome.getButtonIngresa().click();
        claroLoguin.getEmail().type(user);

        //Este wait espera que pase a siguiente pantalla
        cy.wait(1000);
        claroLoguin.getContinuarBtn().click();
        claroLoguin.getPassword().type(pass);

        claroLoguin.getContinuarBtn().click();
        claroLoguin.getLinea().click();
        claroLoguin.getMiNumero().click();
        claroLoguin.getValidarLinea().click();
        //Este wait espera que pase a siguiente pantalla para hacer click en el mismo boton
        cy.wait(1000);
        claroLoguin.getValidarLinea().click();
        claroHome.getMiUsuario().should("have.text", cel);
    });

});