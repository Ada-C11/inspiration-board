import React from 'react';
import { shallow } from 'enzyme';

import NewCardForm from './NewCardForm';

describe('New Card Form', () => {
  test('it matches snapshot', () => {

    const wrapper = shallow(<NewCardForm
      addCardCallback={() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})