export default function Asterisk({ className = "", strokeWidth = 11 }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
      <line x1="50" y1="4" x2="50" y2="96" />
      <line x1="4" y1="50" x2="96" y2="50" />
      <line x1="17" y1="17" x2="83" y2="83" />
      <line x1="83" y1="17" x2="17" y2="83" />
    </svg>
  );
}
