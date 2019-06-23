import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const cardObject = {card: {id: 1497, text: "Growth isn't linear", emoji: null}};

    const wrapper = shallow(<Card card={cardObject.card} deleteCardCallback={() => {} } />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});