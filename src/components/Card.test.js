import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {

  test('it renders when passed text and emoji fields', () => {
    const wrapper = shallow(
      <Card
        card={
          {
            card: {
              text: "test text",
              emoji: "beer"
            }
          }
        }
        />);

    expect(wrapper).toMatchSnapshot();
  });
});