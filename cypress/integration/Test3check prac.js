/// <reference types='Cypress'/>
describe("My third suite",function(){
    it('check box text',function(){
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html')
        cy.get('#alert').click()

        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal("I'm an Alert Box")
        })
        cy.get('#confirm').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal("I'm a Confirm Box")
        })
        
        //cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentdropdowntypes")
        //cy.get("#speed ").select('Slow')
        //cy.get('#files').select('Some unknown file')
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //cy.get("input[type='checkbox']").should('have.length','3')
        //cy.get("input[type='checkbox']").check()

        //Static DropDown
        //cy.get("select").select('option2').should('have.value','option2')
/*
        //Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if ($el.text()==='India')
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible') */


    })
})
