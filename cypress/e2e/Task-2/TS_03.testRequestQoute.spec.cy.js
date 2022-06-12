Cypress.config('pageLoadTimeout', 100000)

describe('test currency feature', () => {

    //buy now button count
    const btnCount = 4

    it('should visit salut-partner page', () => {
        cy.visit('https://store.briklshop.com/en/store/salut-partners/')
        cy.title().should('eq', 'Salut X Partners')
        cy.location('protocol').should('eq', 'https:')
        cy.contains('Salut X Partners').should('be.visible')

    })

    it('should check products\' currency for USD', () => {
        //select usd as currency
        cy.get('[data-cy="select-currency"]').select(0).should('have.value', 'USD')
        //product row should be visible
        cy.get('.css-z3zsio').scrollIntoView().should('be.visible')
        //check currency for all the products displayed in a row
        cy.get('[data-cy="product-sale-price-on-card"]').each(($product, $index) => {

            cy.wrap($product).scrollIntoView().should('contain', 'US$')

        })

        //iterate through each product details page to check currency
        for (let index = 0; index < btnCount; index++) {
            cy.productDetailsPageCurrency(index, 'US$')

        }

    })

    it('should check products\' currency for EUR', () => {
        //select eur as currency
        cy.get('[data-cy="select-currency"]').select(1).should('have.value', 'EUR')
        cy.get('.css-z3zsio').scrollIntoView().should('be.visible')
        cy.get('[data-cy="product-card-link"]').each(($product) => {
            cy.wrap($product).should('contain', '€')
        })
        //iterate through each product details page to check currency
        for (let index = 0; index < btnCount; index++) {
            cy.productDetailsPageCurrency(index, '€')

        }
    })

    it('should check products\' currency for GBP', () => {
        //select gbp as currency
        cy.get('[data-cy="select-currency"]').select(2).should('have.value', 'GBP')
        cy.get('.css-z3zsio').scrollIntoView().should('be.visible')
        cy.get('[data-cy="product-card-link"]').each(($product) => {
            cy.wrap($product).should('contain', '£')
        })
        //iterate through each product details page to check currency
        for (let index = 0; index < btnCount; index++) {
            cy.productDetailsPageCurrency(index, '£')

        }
    })


})