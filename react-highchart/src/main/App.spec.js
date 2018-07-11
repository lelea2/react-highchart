import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render and not crash', () => {
    window.APP_NAME = 'Test app name';
    window.VERSION = '1.0.0';
    shallow(<App />);
  });
});