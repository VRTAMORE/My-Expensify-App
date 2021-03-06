import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('render the ExpenseDashboardPage component correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});