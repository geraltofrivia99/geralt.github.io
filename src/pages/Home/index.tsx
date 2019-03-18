import React from 'react';
import { Block, Wrapper } from './styled';

export default () => (
  <Wrapper>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(item => (
      <Block delay={item * 1.5} />
    ))}
  </Wrapper>
);
