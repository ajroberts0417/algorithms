import { describe, it, expect } from 'vitest';
import { quickSort } from './quickSort';

const TEST_CASES = [
    { arr: [5, 2, 8, 1, 9, 4], expected: [1, 2, 4, 5, 8, 9] },
    { arr: ['e', 'b', 'd', 'a', 'c'], expected: ['a', 'b', 'c', 'd', 'e'] },
    { arr: [], expected: [] },
    { arr: [5], expected: [5] },
    { arr: [5, 2, 5, 1, 2, 4], expected: [1, 2, 2, 4, 5, 5] },
    { arr: [-5, -2, -8, -1, -9, -4], expected: [-9, -8, -5, -4, -2, -1] },
    { arr: [-5, 2, -8, 1, -9, 4], expected: [-9, -8, -5, 1, 2, 4] },
    { arr: [1.1, 5.5, 2.2, 4.4, 3.3], expected: [1.1, 2.2, 3.3, 4.4, 5.5] },
    { arr: ['apple', 'banana', 'cherry'], expected: ['apple', 'banana', 'cherry'] },
    { arr: [3, 1, 4, 1, 5, 9, 2, 6], expected: [1, 1, 2, 3, 4, 5, 6, 9] },
    { arr: [10, 5, 8, 1, 9, 2, 7, 3, 6, 4], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { arr: [4, 3, 2, 1], expected: [1, 2, 3, 4] },
    { arr: [1, 2, 3, 4], expected: [1, 2, 3, 4] },
    { arr: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
    { arr: [2, 1, 2, 1], expected: [1, 1, 2, 2] },
];

describe('quickSort', () => {
    TEST_CASES.forEach(({ arr, expected }) => {
        it(`should sort [${arr}] to [${expected}]`, () => {
            const sortedArr = quickSort(arr as number[]); // test the case where a lazy programmer typecasts strings to numbers
            expect(sortedArr).toEqual(expected);
        });
    });
});
