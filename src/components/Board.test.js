import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Board key={1} id={1} text={"text"} emoji={"dog"} onDeleteCard={() => {}}/>);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});