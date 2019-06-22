import React from 'react'
import { shallow } from 'enzyme'

import NewCardForm from './NewCardForm'

describe('New Pet Form', () => {
  test('it matches snapshot', () => {

    // Mount the component in the DOM
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});