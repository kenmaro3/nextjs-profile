import { PartEntry } from '@/lib/content';
import { SmartLink } from '@/components/site/smart-link';

type PartsListProps = {
  title?: string;
  items: PartEntry[];
};

export function PartsList({ title = 'Parts list', items }: PartsListProps) {
  return (
    <section className="parts-card">
      <div className="parts-header">
        <h3>{title}</h3>
        <p>Core components used in this build.</p>
      </div>
      <ul className="parts-list">
        {items.map((item) => (
          <li key={item.name} className="parts-item">
            <div>
              <strong>{item.name}</strong>
              {item.note ? <p>{item.note}</p> : null}
            </div>
            {item.url ? (
              <SmartLink href={item.url} sponsored={item.affiliate} className="parts-link">
                {item.affiliate ? 'Buy link' : 'Reference'}
              </SmartLink>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
