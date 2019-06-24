import React from 'react';
import NewCardForm from './NewCardForm';
import { shallow } from 'enzyme';

describe('<Board />', () => {
  test('that it matches as existing snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => { }} />); 

    expect(wrapper).toMatchSnapshot();
  });
});