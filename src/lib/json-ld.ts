import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type BlogPostingInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
};

export function blogPostingJsonLd(input: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    keywords: input.tags.join(', '),
  };
}

type CreativeWorkInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  tags: string[];
};

export function creativeWorkJsonLd(input: CreativeWorkInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    url: absoluteUrl(input.path),
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    keywords: input.tags.join(', '),
  };
}

type TechArticleInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
};

export function techArticleJsonLd(input: TechArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    keywords: input.tags.join(', '),
  };
}
