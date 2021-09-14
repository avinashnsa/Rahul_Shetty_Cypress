/// <reference types='cypress'/>

describe('hi',function()
{
    it("hello",function()
    {
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.visit('https://example.com/')
        cy.title().should('include','Example')
        /*cy.get('a').then((str)=>
        {
            cy.visit(str.prop('href'))
        })*/
        cy.get('a').should('include.text','More information')
        cy.on('uncaught:exception',(err,runnable) =>
        {
            return false
        })

        //cy.get('#opentab').invoke('removeAttr','target').click()
        /*cy.get('#opentab').then((str)=>
        {
            cy.visit(str.prop('href'))
        })
        cy.wait(3000)
        cy.url().should('not.include','AutomationPractice')
        cy.go(-1)

        cy.get('td:nth-child(2)').each(($el,index,$lis)=>
        {
            const txt=$el.text()
            if(txt.includes('Python'))
            {
                cy.log(index)
                cy.get('td:nth-child(2)').eq(index).next().then(function(my)
                {
                    expect(my.text()).to.eq('25')
                })
            }

        })*/
        
    })
})