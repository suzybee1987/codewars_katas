from bjss_practice import solution
import unittest

class TestSolution(unittest.TestCase):
    def test_solution(self):
        a_list = [1, 2, 4, 5]
        expected = solution(a_list)
        self.assertEqual(expected, 3)

if __name__ == '__main__':
    unittest.main()