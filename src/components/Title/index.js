import React from 'react';

import { TitleContainer, TitleText, SubtitleText } from './styles';

const Title = (props) => {
  return (
        <TitleContainer>
            <TitleText>
                {props.title}
            </TitleText>
            {props.subtitle ? <SubtitleText>{props.subtitle}</SubtitleText> : null}
        </TitleContainer>
  );
}

export default Title;