import React from 'react';
import { RowContainer, Label, Info } from './styles';

const RowList = (props) => {
  return (
        <RowContainer>
            <Label>
                {props.label}:
            </Label>
            <Info>
                {props.info}
            </Info>
        </RowContainer>
  );
}

export default RowList;