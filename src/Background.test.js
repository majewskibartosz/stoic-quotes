import React from 'react';
import renderer from 'react-test-renderer';
import Background from './Background'

describe('<Background />', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Background />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})