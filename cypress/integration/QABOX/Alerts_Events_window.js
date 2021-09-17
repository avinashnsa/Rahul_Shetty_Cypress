/// <reference types="Cypress"/>
describe("Alert test",()=>
{
before(()=>
{
    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html')
        cy.on("uncaught:exception", (err, runnable) => {
            return false;
          });
          
})
    it('Alert test',()=>
    {
        cy.on("window:alert",(str)=>
        {
            expect(str).to.equal('I\'m an Alert Box')
        })
        cy.get('#alert').click().should("contain",'RAISE ALERT BOX')
    })

    it('Alerts second way',()=>
    {
        const stub=cy.stub()
        cy.on('window:alert',stub)
        cy.get('#miltiplealert').click().then(()=>
            {
                expect(stub.getCall(0)).to.be.calledWithExactly('First Alert Box')
            })


    })


    it("confirm test",()=>
    {
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('I\'m a Confirm Box')
            return false;
        })
        cy.get('#confirm').click().should("contain",'RAISE CONFIRM BOX')
    })

    it.only('confirm second way',()=>
    {
        const stub=cy.stub()
        //stub.onFirstCall().returns(true)
        cy.on('window:confirm',stub)
        cy.get('#confirm').click().then(()=>
        {
            expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')
        })
        
    })





    it('promt',()=>
    {
        cy.window().then(str => 
            {
                cy.stub(str,"prompt").returns('Avi')
                cy.get('#prompt').click()
            })
    })
})