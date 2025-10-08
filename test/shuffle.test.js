import { strict as assert } from 'assert';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle()', () => {
  it('should return a new array with same elements', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle(original);

    assert.notStrictEqual(result, original); // different array
    assert.deepEqual([...result].sort(), [...original].sort()); // same values
  });

  it('should sometimes change the order of elements', () => {
    const original = [1, 2, 3, 4, 5];
    let changed = false;

    for (let i = 0; i < 5; i++) {
      const result = shuffle(original);
      if (result.join('') !== original.join('')) {
        changed = true;
        break;
      }
    }

    assert.equal(changed, true, 'Expected order to change at least once');
  });
});





