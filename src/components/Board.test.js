import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Board url="https://inspiration-board.herokuapp.com/"
    boardName={`boards/eln-board`} />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});