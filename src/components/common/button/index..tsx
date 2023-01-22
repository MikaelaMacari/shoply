import { StyledButton } from "./index.styled";

// interface ButtonInterface {
//   variant?: string;
//   color?: string;
//   title?: string;
// }

const Button = ({ variant, color, title }: any) => {
  return (
    <StyledButton variant={variant} color={color}>
      {title}
    </StyledButton>
  );
};

export default Button;
