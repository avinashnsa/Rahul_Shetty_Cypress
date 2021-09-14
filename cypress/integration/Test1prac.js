/// <reference types='cypress'/>
describe('my first suite',function()
{
    before(function()
    {
        //runs before all tests
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
    })
    it('my first test',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type('c')
        cy.get(".product:visible").should('have.length',7)
        cy.get(".products").find(".product").as('prod')
        cy.get('@prod').eq(2).contains('ADD TO CART').click()
        cy.get('@prod').each(($el,index,$list)=>
        {
            console.log("hi i am index",index)
            const prodtext=$el.find('h4.product-name').text()
            const lis=['Carrot','Cashews','Corn','Cap','Cau','Br']
            for(let i=0;i<lis.length;i++)
            {
                if(prodtext.includes(lis[i])){
                    $el.find('Button').click()
                }
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(elem)
        {
         cy.log(elem.text())
        })
        cy.get('[alt="Cart"]').click()
        //cy.get('[type="button"]:nth-child(1)').click()
        cy.contains('PROCEED TO CHECKOUT').click().should('have.attr','type')
        cy.contains('Place Order').click()
        cy.get('.chkAgree').should("not.be.checked")
        cy.get('.chkAgree').check().should('be.checked')
        cy.get('select').select('India').should('have.value','India')
        
    })
})