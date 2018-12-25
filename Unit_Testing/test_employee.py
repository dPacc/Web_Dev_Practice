import unittest
from employee import Employee
from unittest.mock import patch


class TestEmployee(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        print("Set Up Class")

    @classmethod
    def tearDownClass(cls):
        print("Tear Down Class ")

    def setUp(self):
        print("setUp")
        self.emp1 = Employee('Corey', 'Schafer', 50000)
        self.emp2 = Employee('Sue', 'Smith', 60000)

    def tearDown(self):
        print("tearDown\n")

    def test_email(self):
        print("Testing Email")
        self.assertEqual(self.emp1.email, 'Corey.Schafer@gmail.com')
        self.assertEqual(self.emp2.email, 'Sue.Smith@gmail.com')

        self.emp1.fname = 'John'
        self.emp2.fname = 'Jane'

        self.assertEqual(self.emp1.email, 'John.Schafer@gmail.com')
        self.assertEqual(self.emp2.email, 'Jane.Smith@gmail.com')

    def test_fullname(self):
        print("Testing Full Name")
        self.assertEqual(self.emp1.fullname, 'Corey Schafer')
        self.assertEqual(self.emp2.fullname, 'Sue Smith')

        self.emp1.fname = 'John'
        self.emp2.fname = 'Jane'

        self.assertEqual(self.emp1.fullname, 'John Schafer')
        self.assertEqual(self.emp2.fullname, 'Jane Smith')

    def test_apply_raise(self):
        print("Testing Raise")
        self.emp1.apply_raise()
        self.emp2.apply_raise()

        self.assertEqual(self.emp1.pay, 52500)
        self.assertEqual(self.emp2.pay, 63000)

    def test_monthly_schedule(self):
        with patch('employee.requests.get') as mocked_get:
            mocked_get.return_value.ok = True
            mocked_get.return_value.text = 'Success'

            Schedule = self.emp1.monthly_schedule('May')
            mocked_get.assert_called_with('http://company.com/Schafer/May')
            self.assertEqual(Schedule, 'Success')

            mocked_get.return_value.ok = False
            mocked_get.return_value.text = 'Failed!'

            Schedule = self.emp2.monthly_schedule('June')
            mocked_get.assert_called_with('http://company.com/Smith/June')
            self.assertEqual(Schedule, 'Bad Response!')

if __name__ == '__main__':
    unittest.main()
