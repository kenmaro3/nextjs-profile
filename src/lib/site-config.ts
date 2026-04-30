export const siteConfig = {
  name: 'Kenmaro',
  title: 'Kenmaro | Hardware Prototypes, Robots, and DIY Experiments',
  description:
    'A personal brand site for hardware DIY, robotics, prototyping logs, and YouTube companion articles.',
  url: 'https://kenmaro.com',
  locale: 'ja_JP',
  ogImage: '/images/og/kenmaro-site.svg',
  email: 'hello@kenmaro.com',
  author: {
    name: 'Kenmaro',
    role: 'Software Engineer / Hardware Prototyper',
    bio: 'Building hardware prototypes, robots, and DIY experiments while sharing the process as a learning log.',
  },
  social: {
    x: 'https://x.com/kenmaro4',
    github: 'https://github.com/kenmaro3',
    youtube: 'https://www.youtube.com/@kenmaro-prototyping',
    qiita: 'https://qiita.com/kenmaro',
    note: 'https://note.com/kenmaro',
  },
  featuredVideo: {
    title: 'Featured build log video',
    url: 'https://www.youtube.com/watch?v=NFdHFmavrVk',
  },
} as const;

export const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
] as const;
