import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Render ExpenseListItem with fixture data', () => {
    const exp = expenses[2];
    const wrapper = shallow(<ExpenseListItem
        {...exp}
    />);
    expect(wrapper).toMatchSnapshot();
});