import { describe, it, expect } from 'vitest';
import { binarySearch } from './binarySearch';
import { linearSearch } from './linearSearch';


const TEST_CASES = [
    { arr: [2, 5, 7, 8, 11, 12], target: 11, expected: 4 },
    { arr: [2, 5, 7, 8, 11, 12], target: 13, expected: -1 },
    { arr: [2, 5, 7, 8, 11, 12], target: 2, expected: 0 },
    { arr: [2, 5, 7, 8, 11, 12], target: 12, expected: 5 },
    { arr: [], target: 5, expected: -1 },
    { arr: [5], target: 5, expected: 0 },
    { arr: [5], target: 6, expected: -1 },
    { arr: [2, 5, 5, 7, 8, 11, 12], target: 5, expected: 1 },
    { arr: [-5, -2, 0, 2, 5, 7, 8, 11, 12], target: -2, expected: 1 },
    { arr: [2.1, 5.2, 7.3, 8.4, 11.5, 12.6], target: 7.3, expected: 2 },
    { arr: ['a', 'b', 'c', 'd', 'e'], target: 'c', expected: 2 },
];

describe('binarySearch', () => {
    TEST_CASES.forEach(({ arr, target, expected }) => {
        it(`should return ${expected} when searching for ${target} in [${arr}]`, () => {
            expect(binarySearch(arr, target)).toBe(expected);
        });
    });
});

describe('linearSearch', () => {
    TEST_CASES.forEach(({ arr, target, expected }) => {
        it(`should return ${expected} when searching for ${target} in [${arr}]`, () => {
            expect(linearSearch(arr, target)).toBe(expected);
        });
    });
});
