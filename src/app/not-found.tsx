import { SmartLink } from '@/components/site/smart-link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="panel">
          <p className="eyebrow">404</p>
          <h1 className="panel-title">That page is not here</h1>
          <p>The route may have changed, or the entry has not been published yet.</p>
          <div className="resource-links">
            <SmartLink href="/" className="button">
              Home
            </SmartLink>
            <SmartLink href="/blog" className="button button-secondary">
              Blog
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
