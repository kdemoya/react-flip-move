/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import FlipMoveWrapper from './helpers/FlipMoveWrapper';


storiesOf('Hooks', module)
  .add('Storybook actions (see console)', () => (
    <FlipMoveWrapper
      flipMoveProps={{
        duration: 1000,
        onStart(...args) { console.info('Element start', ...args); },
        onStartAll(...args) { console.info('All elements start', ...args); },
        onFinish(...args) { console.info('Element finish', ...args); },
        onFinishAll(...args) { console.info('All elements finished', ...args); },
      }}
    />
  ));
