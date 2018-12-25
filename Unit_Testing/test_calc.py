import unittest
import calc

class testCalc(unittest.TestCase):

    def test_add(self):
        self.assertEqual(calc.addition(10, 5), 15)
        self.assertEqual(calc.addition(-1, 1), 0)
        self.assertEqual(calc.addition(-1, -1), -2)

    def test_sub(self):
        self.assertEqual(calc.subtraction(10, 5), 5)
        self.assertEqual(calc.subtraction(-1, 1), -2)
        self.assertEqual(calc.subtraction(-1, -1), 0)

    def test_mult(self):
        self.assertEqual(calc.multiplication(10, 5), 50)
        self.assertEqual(calc.multiplication(-1, 1), -1)
        self.assertEqual(calc.multiplication(-1, -1), 1)

    def test_div(self):
        self.assertEqual(calc.division(10, 5), 2)
        self.assertEqual(calc.division(-1, 1), -1)
        self.assertEqual(calc.division(-1, -1), 1)
        self.assertEqual(calc.division(5, 2), 2.5)

        with self.assertRaises(ValueError):
             calc.division(10, 0)

if __name__ == "__main__":
    unittest.main()
