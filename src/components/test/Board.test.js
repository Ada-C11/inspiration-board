import React from 'react';
import Board from '../Board';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow( <Board deleteButtonCallback={() => {}  } url="" boardName=""/>);
    expect(wrapper).toMatchSnapshot();
  });
});