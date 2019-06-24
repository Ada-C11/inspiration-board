// src/components/test/Card.test.js
import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const id = 1;
    const text = "testing";
    const emojiText = "heart_eyes";
    const wrapper = shallow( <Card
        id={id}
        text={text}
        emojiText={emojiText} 
        deleteCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});

