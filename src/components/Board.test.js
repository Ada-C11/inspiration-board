import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Board url='https://inspiration-board.herokuapp.com/boards/' boardName='ElisePham' />);

    expect(wrapper).toMatchSnapshot();
  });
});