import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import HeaderPost from '../headerPost';


describe('Testing Component headerPost', () => {

    const dataObj = {
        name: "Jhon Doe",
        picture: "https://res.cloudinary.com/dd0myqhyb/image/upload/v1662308282/OnlyPost/user.jpg"
    }
    const wrapper = shallow(<HeaderPost name={dataObj.name} />);

    test('component must exist', () => {
        expect(wrapper).toBeTruthy();
    });
});