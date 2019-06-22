import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(
      <Card
        key={85}
        id={85}
        text={"tesxt"}
        emoji={"heart_eyes"}
        deleteCard={() => { }}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
