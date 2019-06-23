import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../Components/Card';

// describe('Card', () => {

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Card />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

// });
 
//   test('that it renders App with shallow rendering', () => {
//     const wrapper = shallow(<Card />);
//     expect(wrapper).toMatchSnapshot();
//   });
describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = shallow( <Card          
        key={i}
        id={card["card"].id}
        text={card["card"].text}
        emoji={card["card"].emoji}
        onDeleteCard={this.onDeleteCard} />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });
});