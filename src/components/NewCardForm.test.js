import React from 'react';
import NewCardForm from './NewCardForm.js';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  
});