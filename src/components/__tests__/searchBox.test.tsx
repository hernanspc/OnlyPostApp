import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import SearchBox from '../searchBox';

describe('Testing SearchBox', () => {
    const wrapper = shallow(<SearchBox />);

    test('should View lenght', () => {
        expect(wrapper.find('View')).toHaveLength(1);
    });

    test('should TextInput lenght', () => {
        expect(wrapper.children().find('TextInput')).toHaveLength(1);
    });

    test('should Icon lenght', () => {
        expect(wrapper.children().find('Icon')).toHaveLength(1);
    });

});