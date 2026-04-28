import UserAPI from "../api/UserApi";
import User from "../models/User";

export default class RegisterPage {
  get firstNameInput() {
    return '[data-testid="first-name"]';
  }

  get lastNameInput() {
    return '[data-testid="last-name"]';
  }

  get emailInput() {
    return '[data-testid="email"]';
  }

  get passwordInput() {
    return '[data-testid="password"]';
  }

  get confirmPassword() {
    return '[data-testid="confirm-password"]';
  }

  get submit() {
    return '[data-testid="submit"]';
  }

  load() {
    cy.visit("/signup");
  }

  register(user: User) {
    cy.get(this.firstNameInput).type(user.getFirstName());
    cy.get(this.lastNameInput).type(user.getLastName());
    cy.get(this.emailInput).type(user.getEmail());
    cy.get(this.passwordInput).type(user.getPassword());
    cy.get(this.confirmPassword).type(user.getPassword());
    cy.get(this.submit).click();
  }

  registerUsingApi(user: User){
    return new UserAPI().register(user).then((response) => {
        user.setToken(response.body.access_token);
    });
  }
}
