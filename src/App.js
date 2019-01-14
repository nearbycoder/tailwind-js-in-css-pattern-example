/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled/macro';
import { Component } from 'react';
import { space, fontSize, color } from 'styled-system';

const Box = styled.div`
  ${space}
  ${fontSize}
  ${color}
`;

class App extends Component {
  render() {
    return (
      <Box m="4" color="red-light" fontSize="5xl">
        test
      </Box>
    );
  }
}

export default App;
