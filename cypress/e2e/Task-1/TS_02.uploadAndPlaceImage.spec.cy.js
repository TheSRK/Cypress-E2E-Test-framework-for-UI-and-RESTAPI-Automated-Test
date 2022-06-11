describe('User able to upload image and place on model', ()=>{
    it("should visit site url", () => {

        cy.visitProductPage()
    })

    it("should click Design Now button to access studio page", () => {
        cy.clickBtnDesignNow()
    })

    it('should upload image', ()=>{
        //click image menu
        cy.get('[data-cy="studio-menu-step-IMAGE"]').should('be.visible').click()
        //insert image 
        cy.xpath('//button[contains(text(),"Upload")]').attachFile('inner-peace.png',{ subjectType: 'drag-n-drop' })
        //upload image by clicking upload button from the pop-up
        cy.get('[data-cy="modal-upload-button"]').scrollIntoView().should('be.visible').click({force:true})
        //check if uploaded image is visible
        cy.get('[data-cy="uploaded-image-section"][class="css-fpytre"]').should('be.visible')
        

    })

    it('should place image on coffee mug', ()=>{
        //click place image button
        cy.get('[data-cy="studio-image-dropzone-placeimage-button"]').eq(2).should('exist').click()
        //check if alert popup is visible 
        cy.get('.chakra-alert').should('be.visible')

        // cy.get('canvas').then($canvas => {
        //     const canvasWidth = $canvas.width()
        //     const canvasHeight = $canvas.height()

        //     const canvasWidthX = canvasWidth/2
        //     const canvasHeightX = canvasHeight/2

        //     cy.wrap($canvas).first().should('be.visible').click(canvasWidthX,canvasHeightX)

        // })

        //click on canvas mug to place image
        cy.get('#THREEJS canvas').scrollIntoView().should('be.visible').click()
       
    })

    it('should edit placed image', ()=>{
        cy.get('[data-cy="images-placed-section"]').scrollIntoView().should('be.visible').click()
        cy.get('[data-cy=studio-image-dropzone-placed-image]',{timeout:3000}).scrollIntoView().should('be.visible')
        cy.get('[data-cy=studio-image-dropzone-edit-placedimage-button]').should('be.visible').click({force:true})
        cy.get('[aria-label="Flip Horizontal"][data-cy=control-button]').should('be.visible').click()

        //cy.xpath('//button[contains(text(),"Back")]').should('be.visible').click()
        //cy.get('[data-cy="studio-Done-button"]').should('be.visible').click()
    })


})