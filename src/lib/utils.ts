import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function formatDate(input: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(input));
}

export function absoluteUrl(path: string) {
  return new URL(path, 'https://kenmaro.com').toString();
}

export function isExternalLink(href: string) {
  return /^https?:\/\//.test(href);
}

export function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v');
      }

      if (parsed.pathname.startsWith('/live/')) {
        return parsed.pathname.split('/').pop() ?? null;
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return parsed.pathname.split('/').pop() ?? null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export function extractHeadings(source: string) {
  const body = source.replace(/^---[\s\S]*?---/, '').split('\n');
  const headings: Array<{ depth: 2 | 3; text: string; id: string }> = [];
  let insideCodeBlock = false;

  slugger.reset();

  for (const line of body) {
    if (line.trim().startsWith('```')) {
      insideCodeBlock = !insideCodeBlock;
      continue;
    }

    if (insideCodeBlock) {
      continue;
    }

    const match = line.match(/^(##|###)\s+(.+)/);

    if (!match) {
      continue;
    }

    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();

    headings.push({
      depth,
      text,
      id: slugger.slug(text),
    });
  }

  return headings;
}
