// src/components/test/Board.test.js
import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const url = "https://inspiration-board.herokuapp.com/boards/";
    const boardName= "Sopheary";
    const wrapper = shallow( <Board 
        url={url}
        boardName={boardName} />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});