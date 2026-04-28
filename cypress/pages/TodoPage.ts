export default class TodoPage {
	private get welcomeMessage() {
		return '[data-testid="welcome"]';
	}

	private get deleteButton() {
		return '[data-testid="delete"]';
	}

	private get noTodosMessage() {
		return '[data-testid="no-todos"]';
	}

	private get todoItem() {
		return '[data-testid="todo-item"]';
	}

	load() {
		cy.visit('/todo');
	}

	getWelcomeMessage() {
		return cy.get(this.welcomeMessage);
	}

	deleteTodo() {
		cy.get(this.deleteButton).click();
	}

	getNoTodosMessage() {
		return cy.get(this.noTodosMessage);
	}

	getTodoItem() {
		return cy.get(this.todoItem);
	}
}