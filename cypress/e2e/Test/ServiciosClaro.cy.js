/// <reference types="cypress" />

describe("Test de servicios de Claro", () =>{
    
    it ("Verificar servicio de accesorios", () =>{
        cy.request({
            method: "GET",
            url:"https://tienda.claro.com.ar/_next/data/R8q8PVuM1ssfdNocwnaa1/plp/accesorios.json?index=plp&index=accesorios"   
        }).then((respuesta) => {
            cy.log(`Respuesta del servicio de accesorios de tienda claro:${JSON.stringify(respuesta)}`);
            expect(respuesta.status).to.eq(200);
            cy.writeFile("cypress/fixtures/autogenerado/categorias.json", respuesta
            ["body"]);
        });
    });
});