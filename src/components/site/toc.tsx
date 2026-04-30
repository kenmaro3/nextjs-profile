type TocProps = {
  items: Array<{ depth: 2 | 3; text: string; id: string }>;
  title?: string;
};

export function TableOfContents({ items, title = 'Contents' }: TocProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="toc-card">
      <h2>{title}</h2>
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item.id} className={`toc-depth-${item.depth}`}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
