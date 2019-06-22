import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Card key={1} id={1} text={"text"} emoji={"dog"} onDeleteCard={() => {}}/>);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});