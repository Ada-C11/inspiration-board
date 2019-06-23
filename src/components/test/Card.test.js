import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Card text="You can do it!" emoji="this is a test" />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});