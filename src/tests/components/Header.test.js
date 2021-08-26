import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';

import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});