import { Container } from "./styles";

interface AnalogProps {
  className?: string;
}

export function Analog({ className }: AnalogProps) {
  return (
    <Container className={className} />
  );
}
