/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ExampleComponent2Component from 'components//ExampleComponent2Component.js';

describe('ExampleComponent2Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ExampleComponent2Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('examplecomponent2-component');
  });
});
