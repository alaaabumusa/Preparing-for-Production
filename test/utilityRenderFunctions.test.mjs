import { strict as assert } from 'assert';
import { createElement } from '../starter/src/utilityRenderFunctions.js';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
global.document = dom.window.document;

describe('createElement()', () => {
  it('should create an element with the correct type and text content', () => {
    const el = createElement('p', 'Hello');
    assert.equal(el.tagName, 'P');
    assert.equal(el.textContent, 'Hello');
  });
});
