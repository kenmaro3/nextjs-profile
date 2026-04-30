'use client';

import { usePathname } from 'next/navigation';
import { SmartLink } from '@/components/site/smart-link';
import { getCopy } from '@/lib/copy';
import { getLocaleFromPathname, withLocale } from '@/lib/locale';

export function SiteNav() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPathname(pathname);
  const copy = getCopy(locale);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <SmartLink href={withLocale('/', locale)} className="legacy-brand">
          <img
            className="legacy-brand-avatar"
            src="https://pbs.twimg.com/profile_images/1646290921103962113/pCinLyv5_400x400.jpg"
            alt="Kenmaro"
            width={48}
            height={48}
          />
          <span className="legacy-brand-copy">
            <strong>Kenmaro</strong>
            <small>kenmaro.about.me</small>
          </span>
        </SmartLink>

        <nav className="legacy-nav-links" aria-label="Primary">
          <SmartLink href={withLocale('/', locale)} className="legacy-nav-link">
            {copy.nav.home}
          </SmartLink>
          <SmartLink href={withLocale('/blog', locale)} className="legacy-nav-link">
            {copy.nav.blog}
          </SmartLink>
          <div className="language-switch">
            <SmartLink href={withLocale(pathname, 'ja')} className={`language-link ${locale === 'ja' ? 'active' : ''}`}>
              {copy.nav.languageJa}
            </SmartLink>
            <SmartLink href={withLocale(pathname, 'en')} className={`language-link ${locale === 'en' ? 'active' : ''}`}>
              {copy.nav.languageEn}
            </SmartLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
