import { strict as assert } from 'assert';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle()', () => {
  it('should return a new array with same elements', () => {
    const original = [1, 2, 3];
    const result = shuffle(original);

    assert.notStrictEqual(result, original); // different array
    assert.deepEqual(result.sort(), original.sort()); // same values
  });
});


