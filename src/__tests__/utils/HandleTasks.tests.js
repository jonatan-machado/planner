import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = null;
import ListTasks from '../../components/ListTasks';

jest.mock(ListTasks, () => {
  const MockedList = () => {
    const data = { text: 'louça', day: 'sabadou' };
    return data;
  };
  return MockedList;
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders', () => {
  act(() => {
    render(<ListTasks />, container);
  });
  console.log(MockedList);
});
