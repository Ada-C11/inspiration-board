import React from 'react';
import { shallow } from 'enzyme'
import NewCardForm  from '../NewCardForm';


describe('NewCardForm', () => {
  it('should render correctly in "debug" mode', () => {
    
    const component = shallow(<NewCardForm 
                                addNewCardCallback={ () => {} }
                             />);
  
    expect(component).toMatchSnapshot();
  });
});
