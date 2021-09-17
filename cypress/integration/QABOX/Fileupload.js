/// <reference types='cypress'/>
describe('file upload test',()=>
{
    before(()=>
    {
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/fileupload.html')
        cy.on('uncaught:exception',(err,runnable)=>
        {
            return false
        })
    })
    it('file upload',()=>
    {
        cy.get('#file-upload1').attachFile('dog.jpg')
        cy.get("span#fileName1").should('have.text','dog.jpg')
    })
    it('fileupload dragdrop',()=>
    {
        cy.get('#holder').attachFile('yey.jpg',{subjectType:'drag-n-drop'})
    })
})