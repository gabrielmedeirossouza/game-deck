import { Container } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  pressed?: boolean;
  label: string;
}

export function Button({ className, label, ...rest }: ButtonProps) {
  return (
    <Container className={className} {...rest}>{label}</Container>
  );
}
