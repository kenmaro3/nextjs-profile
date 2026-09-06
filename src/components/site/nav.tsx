'use client';

import { usePathname } from 'next/navigation';
import { SmartLink } from '@/components/site/smart-link';
import { getCopy, navCopy } from '@/lib/copy';
import { getLocaleFromPathname, withLocale } from '@/lib/locale';
import { primaryNav } from '@/lib/site-config';

type NavCopyKey = keyof typeof navCopy.ja;

// Maps a primaryNav href to the locale-aware copy key that should label it.
// Labels must come from `copy.nav` (translated per locale), never from
// primaryNav's own `label` field, which is English-only. An href with no
// entry here falls back to that item's `label` instead of rendering undefined.
const navCopyKeyByHref: Partial<Record<string, NavCopyKey>> = {
  '/': 'home',
  '/blog': 'blog',
  '/projects': 'projects',
};

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
          {primaryNav.map((item) => {
            const copyKey = navCopyKeyByHref[item.href];
            const label = copyKey ? copy.nav[copyKey] : item.label;

            return (
              <SmartLink key={item.href} href={withLocale(item.href, locale)} className="legacy-nav-link">
                {label}
              </SmartLink>
            );
          })}
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
