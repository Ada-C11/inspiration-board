import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Card';


describe('Card', () => {
  it('should render correctly in "debug" mode', () => {
    const testCard = {id: 1, text: "Hello Tester", }
    const component = shallow(<Card 
      text={"Hello Tester"}
      emoji={":-)"}
      cardIndex={1}
      id={1}
      deleteCardCallback={() => {}}/>);
  
    expect(component).toMatchSnapshot();
  });
});
