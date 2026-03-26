const devName = import.meta.env.VITE_Developer_Name as string | undefined;
const devEmail = import.meta.env.VITE_Developer_Email as string | undefined;
const devLinkedIn = import.meta.env.VITE_Developer_LinkedIn as string | undefined;

interface Props {
  className?: string;
}

export default function DeveloperCredit({ className = '' }: Props) {
  if (!devName && !devEmail && !devLinkedIn) return null;

  return (
    <p className={`text-[9px] leading-tight text-white/50 ${className}`}>
      Built by{devName ? ` ${devName}` : ''}
      {devEmail && (
        <>
          {' · '}
          <a href={`mailto:${devEmail}`} className="transition-colors hover:text-white/80">
            {devEmail}
          </a>
        </>
      )}
      {devLinkedIn && (
        <>
          {' · '}
          <a
            href={devLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/80"
          >
            LinkedIn
          </a>
        </>
      )}
    </p>
  );
}
