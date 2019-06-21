import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  test('it matches snapshot', () => {
  
    const wrapper = shallow(<Card
                              id = { 1 }
                              text = "You've got this!"
                              emoji = "clap"
                              onDeleteCard = {() => { }}
                            />);
    expect(wrapper).toMatchSnapshot();
  });
})