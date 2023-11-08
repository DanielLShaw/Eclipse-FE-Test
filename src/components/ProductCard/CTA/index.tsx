interface CTAProps {
  text: string;
  onClick: () => void;
}

export default function CTA({ text, onClick }: CTAProps) {
  return <button onClick={onClick}>{text}</button>;
}
