import { Container } from "./styles";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  pressed?: boolean;
  icon: () => JSX.Element;
}

export function IconButton({ className, icon, ...rest }: IconButtonProps) {
  return (
    <Container className={className} {...rest}>{icon()}</Container>
  );
}
