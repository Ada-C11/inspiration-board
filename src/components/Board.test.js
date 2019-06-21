import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

describe('Board', () => {
  test('it matches snapshot', () => {
  
    const wrapper = shallow(<Board
                              url = "http://google.com"
                              boardName = "My Board"
                            />);
    expect(wrapper).toMatchSnapshot();
  });
})