import User from '../models/User';
import TodoPage from '../pages/TodoPage';
import NewTodoPage from '../pages/NewTodoPage';
import RegisterPage from '../pages/RegisterPage';

describe('Todo Test cases', () => {
	let user: User;
	let registerPage: RegisterPage;
	let newTodoPage: NewTodoPage;
	let todoPage: TodoPage;

	beforeEach(() => {
		registerPage = new RegisterPage();
		todoPage = new TodoPage();
		newTodoPage = new NewTodoPage();
		user = new User();
		registerPage.registerUsingApi(user);
	});
	it('should be able to add a todo', () => {
		newTodoPage.load();
		newTodoPage.addTodo('Learn Cypress!!');
		todoPage.getTodoItem().should('contain.text', 'Learn Cypress');
	});

	it('should be able to delete a todo', () => {
		newTodoPage.addTodoUsingApi(user);
		todoPage.load();
		todoPage.deleteTodo();
		todoPage.getNoTodosMessage().should('be.visible');
	});
});