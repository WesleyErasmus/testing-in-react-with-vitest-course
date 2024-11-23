import { describe, expect, it } from 'vitest';
import { sum, multiply } from '../src/math';

describe('Should add and multiply numbers', () => {
    // Add function
    it('Should add two numbers', () => {
        expect(sum(10,10)).toBe(20);
    })

    // Multiply function
    it('Should multiply two numbers', () => {
        expect(multiply(10,10)).toBe(100);
    })
})