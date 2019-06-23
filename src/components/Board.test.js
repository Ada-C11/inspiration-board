import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from '../Components/Board';

describe('Board', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
 
  test('that it renders App with shallow rendering', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });