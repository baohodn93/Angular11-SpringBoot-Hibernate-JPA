package in.bushansirgur.expensetracker.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import in.bushansirgur.expensetracker.model.Expense;

class ExpenseServiceImplTest {

	private ExpenseService expenseService;
	@Test
	void testFindAll() {
		List<Expense> expenses = expenseService.findAll();
		
		for (Expense expense : expenses) {
			System.out.println(expense);
		}
		assertTrue(!expenses.isEmpty());
	}

}
