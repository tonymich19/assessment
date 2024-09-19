/// <reference types='cypress' />

describe('DuckDuck Go automation challenge', () => {

    it('first test case', () =>{
        //1. Open URL `https://duckduckgo.com`.
        cy.visit('https://duckduckgo.com/')

        //2. Enter `The dev-friendly football API` in the search box.
        cy.get('#searchbox_input').type('The dev-friendly football API');
        
        //3. Do the Search.
        cy.get('button[aria-label="Search"]').click();

        //4. Click on the first search result link.
        cy.scrollTo('top');
        cy.get(':nth-child(1) > [data-testid="result"]').click()

        //5. Check if the URL is `https://www.football-data.org/`.
        cy.origin('https://www.football-data.org', () => {
            cy.url().should('eq', 'https://www.football-data.org/');
        });
    })
})