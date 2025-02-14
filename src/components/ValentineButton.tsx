interface ValentineButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant: 'yes' | 'no';
}

export default function ValentineButton({ text, onClick, href, variant }: ValentineButtonProps) {
  const buttonClass = `valentine-btn ${variant}-btn`;
  
  if (href) {
    return (
      <a href={href}>
        <button className={buttonClass}>{text}</button>
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}