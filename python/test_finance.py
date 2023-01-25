import unittest
from finance import selectStock


class TestFinance(unittest.TestCase):
    def setUp(self) -> None:
        return super().setUp()
    
    def test_finance_works(self):
        saving = 250
        current_value = [175,133,109,210,97]
        future_value = [200,125,128,228,133]
        result = selectStock(saving, current_value, future_value)
        self.assertEqual(result, 55)