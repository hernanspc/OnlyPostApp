import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import SearchBox from '../searchBox';

describe('TODO: TEST SearchBox', () => {
    const wrapper = shallow(<SearchBox />);

    test('should lenght', () => {
        console.log('first', wrapper.find('View').length)
        expect(wrapper.find('View')).toHaveLength(1);
    });
});