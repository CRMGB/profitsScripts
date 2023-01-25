import unittest
from finance import select_stock_comprehension, selectStock


class TestFinance(unittest.TestCase):
    def setUp(self) -> None:
        return super().setUp()
    
    def test_finance_works_250_savings(self) -> None:
        savings = 250
        current_value = [175,133,109,210,97]
        future_value = [200,125,128,228,133]
        result = selectStock(savings, current_value, future_value)
        self.assertEqual(result, 55)

    def test_finance_works_720_savings(self) -> None:
        savings = 450
        current_value = [220,135,209,110,84]
        future_value = [95,299,201,99,147]
        result = selectStock(savings, current_value, future_value)
        self.assertEqual(result, 227)

    def test_finance_works_comprehension_250_savings(self) -> None:
        savings = 250
        current_value = [175,133,109,210,97]
        future_value = [200,125,128,228,133]
        result = select_stock_comprehension(savings, current_value, future_value)
        self.assertEqual(result, 55)
        
    def test_finance_works_comprehension_720_savings(self) -> None:
        savings = 450
        current_value = [220,135,209,110,84]
        future_value = [95,299,201,99,147]
        result = select_stock_comprehension(savings, current_value, future_value)
        self.assertEqual(result, 227)