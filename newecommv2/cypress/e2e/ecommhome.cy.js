
describe('Testing if server where app is running can be accessed ', () => {
  it('should open the react app and be on server 3000', () => {
    cy.visit('http://localhost:3000');
  });
});



describe('Testing Hero Image section for homepage', () => {
  it('should load the Home page and contain the hero section', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Fresh Finds For The Summer').should('be.visible');
    cy.contains('Rediscover the joy of plants').should('be.visible');
    cy.contains('Shop New Arrivals!').should('be.visible');
  });
});

describe('testing philosphy section for homepage', () => {
  it('should display the philosophy section', () => {
    cy.visit('http://localhost:3000');
    cy.get('.ph-title').should('contain', 'Our Plant Philosophy');
    cy.get('.ph-text').should('be.visible');
  });
});

// this test will fail because the shop new arrivals button is not linked to the products page
describe('testing button located in hero image section', () => {
  it('should route to the products page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Shop New Arrivals!').click();
    cy.url().should('include', '/products'); 
  });
});
