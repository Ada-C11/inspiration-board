import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(<Card text="" emoji="heart_eyes" id="1" deleteHandler={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  
});