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

Cypress.Commands.add('productDetailsPageCurrency', (index, currency)=>{
    //click product 
    cy.get('[data-cy="product-card-link"]').eq(index).should('be.visible').click()
    //check currency conversion in the product details page
    cy.get('[data-cy="product-price"]').scrollIntoView().should('contain', currency)

    //Go back and then check product row should be visible
    cy.go('back').get('.css-z3zsio').scrollIntoView().should('be.visible')
})