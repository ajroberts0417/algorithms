import { describe, it, expect } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
    it('should return the index of the target element when it is in the array', () => {
        expect(binarySearch([2, 5, 7, 8, 11, 12], 11)).toBe(4);
    });

    it('should return -1 when the target element is not in the array', () => {
        expect(binarySearch([2, 5, 7, 8, 11, 12], 13)).toBe(-1);
    });

    it('should return the index of the target element when it is the first element in the array', () => {
        expect(binarySearch([2, 5, 7, 8, 11, 12], 2)).toBe(0);
    });

    it('should return the index of the target element when it is the last element in the array', () => {
        expect(binarySearch([2, 5, 7, 8, 11, 12], 12)).toBe(5);
    });

    it('should return -1 for an empty array', () => {
        expect(binarySearch([], 5)).toBe(-1);
    });

    it('should work with an array of one element', () => {
        expect(binarySearch([5], 5)).toBe(0);
        expect(binarySearch([5], 6)).toBe(-1);
    });

    it('should work with an array of duplicate elements', () => {
        expect(binarySearch([2, 5, 5, 7, 8, 11, 12], 5)).toBe(1); // Returns the first occurence
    });

    it('should work with negative numbers', () => {
        expect(binarySearch([-5, -2, 0, 2, 5, 7, 8, 11, 12], -2)).toBe(1);
    });

    it('should work with floating point numbers', () => {
        expect(binarySearch([2.1, 5.2, 7.3, 8.4, 11.5, 12.6], 7.3)).toBe(2);
    });

    it('should work with strings', () => {
        expect(binarySearch(['a', 'b', 'c', 'd', 'e'], 'c')).toBe(2);
    });
});
