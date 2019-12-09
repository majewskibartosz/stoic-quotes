import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

beforeAll(() => {
  // Lock Time
  jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
});

afterAll(() => {
  // Unlock Time
  jest.spyOn(Date, 'now').mockRestore();
});


describe('<App />', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('renders dom structure without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

