import { Container } from "./styles";

interface IconButtonProps {
  className?: string;
  icon: () => JSX.Element;
}

export function IconButton({ className, icon }: IconButtonProps) {
  return (
    <Container className={className}>{icon()}</Container>
  );
}
