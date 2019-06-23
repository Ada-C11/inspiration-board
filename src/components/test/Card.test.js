import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Card from '../Card';


describe('Card', () => {
  it('should render correctly in "debug" mode', () => {
    const testCard = {id: 1, text: "Hello Tester", emoji: ":-)"}
    const component = shallow(<Card 
      card={ testCard }
      cardIndex={1} 
      deleteCardCallback={() => {}}/>);
  
    expect(component).toMatchSnapshot();
  });
});
