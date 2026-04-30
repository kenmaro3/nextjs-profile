import { cn } from '@/lib/utils';

type CalloutProps = {
  title?: string;
  tone?: 'default' | 'warning' | 'success';
  children: React.ReactNode;
};

export function Callout({ title, tone = 'default', children }: CalloutProps) {
  return (
    <aside className={cn('callout', tone !== 'default' && `callout-${tone}`)}>
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  );
}
