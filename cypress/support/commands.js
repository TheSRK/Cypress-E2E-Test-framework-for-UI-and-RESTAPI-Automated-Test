// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('visitProductPage', ()=>{
    cy.visit('https://store.briklshop.com/en/coffee%20mug')
    cy.title().should('eq', 'Coffee Mug')
    cy.location('protocol').should('eq', 'https:')
    cy.contains('Coffee Mug').should('be.visible')
})

Cypress.Commands.add('clickBtnDesignNow', ()=>{
    cy.get('[data-cy="add-to-cart"]',{ timeout: 10000 }).should("be.visible").click()
    cy.url().should('include', '/studio')
    //cy.xpath('//p[contains(text(),"Select a design")]',{timeout:10000}).should('be.visible')
    cy.contains('Select a design').should('be.visible')
})