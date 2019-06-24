import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Board deleteButtonCallback={() => {}  } url="" boardName=""/>);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});