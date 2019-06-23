import React from 'react';
import { shallow } from 'enzyme'
import Board  from '../Board';


describe ('Board', () => {
  it ('matches corresponding snapshot', () => {
    const component = shallow(<Board 
                                boardUrl="https://inspiration-board.herokuapp.com/boards/"
                                boardName='tatiana-q'
                                baseURL='https://inspiration-board.herokuapp.com/cards/'/
                              >);
    expect(component).toMatchSnapshot();
  })
})