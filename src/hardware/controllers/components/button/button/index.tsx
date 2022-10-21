import { Container } from "./styles";

interface ButtonProps {
  className?: string;
  label: string;
}

export function Button({ className, label }: ButtonProps) {
  return (
    <Container className={className}>{label}</Container>
  );
}
