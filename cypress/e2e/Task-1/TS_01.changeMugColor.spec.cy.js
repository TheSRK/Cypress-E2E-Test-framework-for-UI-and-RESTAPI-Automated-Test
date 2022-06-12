Cypress.config('pageLoadTimeout', 100000)

describe("User try out the Studio Demo by changing mug color", () => {
    it("should visit site url", () => {

        cy.visitProductPage()
    })

    it("should click Design Now button to access studio page", () => {
        cy.clickBtnDesignNow()
    })

    it('should select first pattern image', ()=>{
        //click first pattern image
        cy.get('[data-cy="studio-design-template-0"]').should('be.visible').click()
       
    })

    it('should click color menu', ()=>{
        cy.get('[data-cy="studio-menu-step-COLOR"]').should('be.visible').click()
        cy.xpath('//p[contains(text(),"Add a color")]').should('be.visible')

    })

    it('should select red for colorzone 1 ', ()=>{
        cy.get('[data-cy="studio-color-fill-selector"]').select(1).should('contain','COLORZONE-1')
        cy.get('[data-cy="color-index-3"]').should('be.visible').click()
        cy.get('[data-testid="check-icon"]').should('be.visible')

    })
    it('should select orange for colorzone 2 ', ()=>{          

        cy.get('[data-cy="studio-color-fill-selector"]',{timeout:3000}).select(2).should('contain','COLORZONE-2')
        cy.get('[data-cy="color-index-17"]').scrollIntoView().should('be.visible').click()
        cy.get('[data-testid="check-icon"]').should('be.visible')
        
    })

})