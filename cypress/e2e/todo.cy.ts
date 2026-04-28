import { faker } from '@faker-js/faker'

it.only("should be able to add a todo", ()=> {
    
    cy.request({
        method: "POST",
        url: '/api/v1/users/register',
        body: {
            firstName: faker.person.firstName() ,
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password:'Test12345',
        },
    }).then((response) => {
        let token = response.body.access_token;
        cy.request({
            method: 'POST',
            url: '/api/v1/tasks',
            body: {
                isCompleted: false,
                item: 'Learn Cypress'
            },
            headers: {
                Authorization: `Bearer${token}`,
            },
        });
    });





});

it("should be able to delete a todo", ()=> {
    cy.visit('/signup');
    cy.get('[data-testid="first-name"]').type(faker.person.firstName());
    cy.get('[data-testid="last-name"]').type(faker.person.lastName());
    cy.get('[data-testid="email"]').type(faker.internet.email());
    cy.get('[data-testid="password"]').type('Test123456');
    cy.get('[data-testid="confirm-password"]').type('Test123456');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should('be.visible');

    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type('Learn Cypress with typescript');
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').should('contain.text', 'Learn Cypress with typescript');

    cy.get('[data-testid="delete"]').click();
    cy.get('[data-testid="no-todos"]').should('be.visible');


});