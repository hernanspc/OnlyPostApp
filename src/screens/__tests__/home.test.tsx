import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../home';
import PostCard from '../../components/post';
import { FlashList } from '@shopify/flash-list';

describe('Testing Component Home', () => {
    const wrapper = shallow(<Home />);

    test('component must exist', () => {
        expect(wrapper).toBeTruthy();
    });
    test('component Icon must exist', () => {
        expect(wrapper.children().find('View')).toHaveLength(1);
        expect(wrapper.children().find('Title')).toHaveLength(1);
        expect(wrapper.children().find('SearchBox')).toHaveLength(1);
        expect(wrapper.children().find('FlashList')).toHaveLength(1);
    });

    test('Read async-storage', async () => {
        // const flatList = wrapper.find(FlashList);
        console.log('wrapper.find ', wrapper.find('FlashList').debug())
        wrapper.find('FlashList').simulate('endReach');

    });

    // it('should flatlist return keyExtractor correctly', () => {
    //     const key = wrapper
    //         .find('FlashList')
    //         .props().keyExtractor({ id: 3 });

    //     expect(key).toEqual('3')
    // });
});