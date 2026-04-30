import Link from 'next/link';
import { isExternalLink } from '@/lib/utils';

type SmartLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  sponsored?: boolean;
};

export function SmartLink({ href, children, className, sponsored = false }: SmartLinkProps) {
  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel={sponsored ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
