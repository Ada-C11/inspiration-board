import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card'; 


describe('Card', () => {
  test('it matches snapshot', () => {

// Mount the component in the DOM
    const wrapper = shallow(<Card
        key= {1}
        text= 'hello world'
        emoji= 'beer'
        id = {1}
        deleteCardCallback = {() => { }}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});