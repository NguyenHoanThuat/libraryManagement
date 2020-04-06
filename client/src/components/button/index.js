import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  width:  303px;
  height: 72px;
  background-color: #D062A8;
  color: #fff;
  font-size: 20px;
  border-radius: 30px;
  &:hover {
    background-color: #D062A8;
    opacity: .9;
  };
`

export default function ContainedButtons() {
  return (
    <div style={{width: '303px', margin: 'auto'}}>
      <StyledButton >
        Login
      </StyledButton>
    </div>
  );
}
