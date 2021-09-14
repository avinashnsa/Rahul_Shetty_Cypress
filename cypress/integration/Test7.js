/// <reference types='cypress'/>
describe('My First Suite',function()
{
    it("Mouse hover",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#opentab').then((str)=>
        {
            cy.visit(str.prop('href'))
            cy.url().should('include','index')
            cy.go(-1)
            cy.url().should('not.be.include','index')

        })
    })
})