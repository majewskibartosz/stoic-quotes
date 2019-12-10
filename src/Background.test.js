import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Background, { getRandomIntInclusive, Container, Image } from './Background'


describe('getRandomIntInclusive function', () => {
  const randomInteger = getRandomIntInclusive(1, 7);

  it('returns a random integer 1 - 7 inclusive', () => {
    expect(randomInteger).toBeGreaterThan(0);
    expect(randomInteger).toBeLessThanOrEqual(7);
  });
  it('is defined and not return null', () => {
    expect(randomInteger).toBeDefined();
    expect(randomInteger).not.toBeNull();
  })
})
describe('<Background />', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Background />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
7
  it('renders <Container />', () => {
    const wrapper = mount(<Background />);
    expect(wrapper.find(Container).length).toEqual(1);
  })

  it('renders <Image />', () => {
    const wrapper = mount(<Background />);
    expect(wrapper.find(Image).length).toEqual(1);
  })
})


7