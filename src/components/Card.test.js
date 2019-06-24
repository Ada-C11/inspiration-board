import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const props = {
      key: 1,
      id: 1,
      text: 'You got this!',
      emoji: '',
    }

    const wrapper = shallow( <Card {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});