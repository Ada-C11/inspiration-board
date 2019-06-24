import React from 'react';
import { shallow } from 'enzyme'
import NewCardForm  from '../NewCardForm';


describe('NewCardForm', () => {
  it('should match existing snapshot', () => {
    
    const component = shallow(<NewCardForm 
                                addNewCardCallback={ () => {} }
                             />);
  
    expect(component).toMatchSnapshot();
  });
});
