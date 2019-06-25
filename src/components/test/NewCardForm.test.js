import React from 'react';
import NewCardForm from '../NewCardForm';
import {shallow} from 'enzyme';


describe('newcardform',()=>{
  it('will match the newcardform Snapshot', ()=>{
    const wrapper = shallow(<NewCardForm
      addCardCallback={()=>{}}

       />);
    expect(wrapper).toMatchSnapshot();
  });
});