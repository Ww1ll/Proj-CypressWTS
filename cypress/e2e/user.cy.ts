import { faker } from '@faker-js/faker'

it("should be able to register", ()=> {
    cy.visit('/signup');
    cy.get('[data-testid="first-name"]').type(faker.person.firstName());
    cy.get('[data-testid="last-name"]').type(faker.person.lastName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type('Test123456');
    cy.get('[data-testid="confirm-password"]').type('Test123456');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should('be.visible');
});