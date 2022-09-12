import React from 'react';
import { View } from 'react-native'
import { shallow } from 'enzyme';
import ItemSkeleton from '../itemSkeleton';

describe('Testing Component ItemSkeleton', () => {
    const wrapper = shallow(<ItemSkeleton />);

    test('component must exist', () => {
        expect(wrapper).toBeTruthy();
    });
});