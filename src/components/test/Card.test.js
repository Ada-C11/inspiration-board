import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Card addCardCallback={() => {} } />);

    expect(wrapper).toMatchSnapshot();
  });
});