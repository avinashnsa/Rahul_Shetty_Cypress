/// <reference types="cypress"/>

describe('My First Suite testing branch',function()
{
    before(()=>{
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/differentdropdowntypes')
    })
    it('Window test commands',function()
    {
        cy.window().should(win=>{
           const loc= win.location
           expect(loc.hash).to.eql("")
           expect(loc.host).to.eq("qaboxletstestcypresspracticesite.netlify.app")
           expect(loc.hostname).to.eq("qaboxletstestcypresspracticesite.netlify.app")
        })
    })
        it('Window test commands using cy',()=>
    {
        cy.hash().should("eq","")
        cy.location('host').should('eq',"qaboxletstestcypresspracticesite.netlify.app")
        cy.location('protocol').should('eq','https:')
        })
        it('Window Test Commands - Page Reload',()=>{
            cy.window().should(win => {
                win.location.reload()
            })
        })
        it('Window command using CY',()=>{
            cy.reload()
        })
        it('Navigation commands',()=>{
            //cy.go('back')
            //cy.contains('Topics').should('eq','Topics')
        })
    })
