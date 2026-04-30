'use client';

import { usePathname } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { siteConfig } from '@/lib/site-config';
import { SmartLink } from '@/components/site/smart-link';
import { getCopy } from '@/lib/copy';
import { getLocaleFromPathname } from '@/lib/locale';

export function SiteFooter() {
  const pathname = usePathname() ?? '/';
  const locale = getLocaleFromPathname(pathname);
  const copy = getCopy(locale);

  return (
    <footer className="site-footer">
      <div className="container legacy-footer-shell">
        <div className="legacy-footer-heading">
          <h2>{copy.footer.heading}</h2>
        </div>

        <div className="legacy-social-grid">
          <SmartLink href={siteConfig.social.x} className="legacy-social-card">
            <AiFillTwitterCircle size={40} color="#00acee" />
            <span>Twitter</span>
          </SmartLink>
          <SmartLink href={siteConfig.social.github} className="legacy-social-card">
            <FaGithub size={40} color="#4078c0" />
            <span>GitHub</span>
          </SmartLink>
          <SmartLink href={siteConfig.social.youtube} className="legacy-social-card">
            <AiFillYoutube size={40} color="#c4302b" />
            <span>YouTube</span>
          </SmartLink>
          <SmartLink href={siteConfig.social.qiita} className="legacy-social-card">
            <img src="/images/qiita-logo.png" alt="Qiita" width={40} height={40} />
            <span>Qiita</span>
          </SmartLink>
          <SmartLink href={siteConfig.social.note} className="legacy-social-card">
            <img src="/images/note-logo.png" alt="note" width={60} height={60} />
            <span>note</span>
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
