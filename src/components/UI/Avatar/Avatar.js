import { getRandomHexColor, getContrast } from 'utilities/utilities';
import { AvatarStyled } from './Avatar.styled';

export const Avatar = ({ text }) => {
  const words = text.split(' ');
  const filteredLetters = words.slice(0, 2).map(word => word[0].toUpperCase());

  const bgColor = getRandomHexColor();
  const color = getContrast(bgColor);
  return (
    <AvatarStyled $bgColor={bgColor} $color={color}>
      {filteredLetters}
    </AvatarStyled>
  );
};
