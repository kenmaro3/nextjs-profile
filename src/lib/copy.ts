import type { Locale } from '@/lib/locale';

export const navCopy = {
  ja: {
    home: 'ホーム',
    blog: 'ブログ',
    projects: '制作物',
    uses: '機材',
    sponsor: 'スポンサー',
    contact: '問い合わせ',
    languageJa: '日本語',
    languageEn: 'English',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    projects: 'Projects',
    uses: 'Uses',
    sponsor: 'Sponsor',
    contact: 'Contact',
    languageJa: '日本語',
    languageEn: 'English',
  },
} as const;

export const footerCopy = {
  ja: {
    heading: 'Social Media',
  },
  en: {
    heading: 'Social Media',
  },
} as const;

export const commonCopy = {
  ja: {
    home: 'ホーム',
    blog: 'ブログ',
    projects: '制作物',
    uses: '機材',
    sponsor: 'スポンサー',
    contact: '問い合わせ',
    published: '公開日',
    updated: '更新日',
    relatedPostsEyebrow: '関連記事',
    contents: '目次',
    sponsorTitle: 'スポンサー、レビュー、コラボの相談',
    sponsorDescription:
      '機材、部品、ツール、ハードウェア領域の相談があれば、レビュー・技術検証・スポンサード記事や動画の形で対応できます。',
    githubTitle: 'GitHub リポジトリ',
    githubDescription: 'コード、メモ、関連ファイルはこちらにまとめます。',
    moreFromSameThread: '同じ流れの関連記事',
    projectRelatedPosts: 'この制作物に関連するブログ記事',
    buildStatus: {
      Planning: 'Planning',
      Building: 'Building',
      Completed: 'Completed',
      'Failed / Archived': 'Failed / Archived',
    },
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    projects: 'Projects',
    uses: 'Uses',
    sponsor: 'Sponsor',
    contact: 'Contact',
    published: 'Published',
    updated: 'Updated',
    relatedPostsEyebrow: 'Related posts',
    contents: 'Contents',
    sponsorTitle: 'Support a build, review, or collaboration',
    sponsorDescription:
      'If your product fits this site, I am open to reviews, technical validation, sponsored articles, and video collaborations.',
    githubTitle: 'GitHub repository',
    githubDescription: 'Code, notes, and related files live here.',
    moreFromSameThread: 'More from the same thread',
    projectRelatedPosts: 'Build logs connected to this project',
    buildStatus: {
      Planning: 'Planning',
      Building: 'Building',
      Completed: 'Completed',
      'Failed / Archived': 'Failed / Archived',
    },
  },
} as const;

export const pageCopy = {
  ja: {
    siteTitle: 'Kenmaro | Prototype your idea to the real world',
    siteDescription:
      'Kenmaro の個人サイト。ソフトウェア、個人開発、ハードウェアDIY、ロボット、試作ログをまとめて発信します。',
    home: {
      title: 'Kenmaro | Prototype your idea to the real world',
      description:
        'ソフトウェア、個人開発、ハードウェアDIY、ロボット、ESP32、3Dプリントの制作ログをまとめた個人ブランドサイトです。',
      heroTitle1: 'Prototype your idea',
      heroTitle2: 'to the real world',
      heroDescription:
        'ソフトウェア、個人開発、ハードウェア、ロボット実験までをまとめた個人の拠点です。',
      whoHeading: '4行で紹介すると',
      aboutHeading: 'About',
      whoImageCaption: 'Blenderで家のモデリングをした時の作品',
      hardwareNoteTitle: 'そして今は Hardware / Prototyping',
      hardwareNoteDescription:
        'ハードウェアDIY、ESP32、ロボット、センサー、3Dプリントの試作ログも、このサイトで少しずつ発信していきます。',
      projectsHeading: '個人開発プロジェクト',
      hardwareProjectsHeading: 'ハードウェア / プロトタイピング',
      blogsHeading: 'Qiita / note',
      blogsDescription: '以前からの Qiita / note の発信はそのまま残しています。',
      externalQiitaCount: 'articles on Qiita',
      externalNoteCount: 'articles on note',
      blogListButton: 'ブログ一覧を見る',
      youtubeHeading: 'YouTube',
      youtubeDescription:
        '今アップロードしている内容は、主にモバイルアプリやウェブアプリのプロトタイプ開発など、ソフトウェア寄りの制作物です。ハードウェア系の発信はこれから追加していきます。',
      youtubeButton: 'チャンネルを見る',
      profileTitle: 'ソフトウェア開発者',
      backgroundTitle: 'これまで',
      focusTitle: '取り組んできたこと',
      hardwareTitle: '最近の関心',
      linksTitle: 'リンク',
      workTitle: '仕事',
      academicTitle: '学歴',
      hackathonTitle: 'ハッカソン',
      talksTitle: '登壇 / 論文',
      youtubeChannelTitle: 'YouTube チャンネル',
      youtubeChannelBody:
        '現状のYouTubeチャンネルには、モバイルアプリやウェブアプリなどソフトウェア寄りのプロトタイプ開発が中心に上がっています。ハードウェアDIYやロボット系の内容は、これから追加していく予定です。',
    },
    blogList: {
      title: 'Blog',
      description: 'ハードウェア試作、実験ログ、YouTube補足記事をまとめたブログ一覧です。',
      heroEyebrow: 'Blog',
      heroTitle: '制作ログ、試行錯誤、補足記事',
      heroDescription:
        'MDXベースで管理している記事一覧です。カテゴリ、タグ、読了時間、部品リストやGitHubリンクの導線も含めて整理しています。',
    },
    projectsList: {
      title: 'Projects',
      description: '制作物をポートフォリオとして見せる一覧ページです。',
      heroEyebrow: 'Projects',
      heroTitle: '作ったものを見せるポートフォリオ',
      heroDescription:
        'ブログよりも制作物を主役にした一覧です。目的、技術、部品、関連ブログ記事をひと目で追えるようにしています。',
    },
    uses: {
      title: 'Uses',
      description: '使用機材、工具、よく使う部品の一覧ページです。',
      heroEyebrow: 'Uses',
      heroTitle: 'よく使う機材とおすすめツール',
      heroDescription:
        '機材紹介、アフィリエイト、スポンサー導線としても使えるように整理したページです。データ追加もしやすい構成にしています。',
      referenceLabel: '参考リンク',
      affiliateLabel: 'PR / affiliate link',
    },
    sponsor: {
      title: 'Sponsor',
      description: 'スポンサー、製品レビュー、機材提供、コラボ相談向けの案内ページです。',
      heroEyebrow: 'Sponsor / Collaboration',
      heroTitle: 'スポンサーやコラボ相談のためのページ',
      heroDescription:
        '個人の制作ログでありながら、企業やブランドが見ても内容と方針を理解しやすいように整理しています。',
      activityEyebrow: 'Activity',
      activityTitle: 'このサイトで扱う内容',
      activityBody:
        'ハードウェアDIY、小型ロボット、ESP32 / Arduino、センサー、3Dプリント、Raspberry Pi、YouTube制作物の補足記事を中心に発信しています。',
      availableEyebrow: 'Available',
      availableTitle: '対応できる内容',
      availableItems: ['製品レビュー', '機材提供', 'スポンサー動画 / 記事', '技術検証・試作テスト', 'コラボ制作'],
      policyEyebrow: 'Policy',
      policyTitle: '大事にしている方針',
      policyItems: [
        '実際に使って良いと思ったものだけ紹介します。',
        'ステルスマーケティングは行いません。',
        '提供やPRの表記は明確にします。',
      ],
      contactEyebrow: 'Contact',
      contactTitle: '相談時にあると助かる情報',
      contactBody:
        '製品カテゴリ、想定時期、想定読者、レビュー依頼かスポンサー案件か、技術検証かを最初に共有してもらえると進めやすいです。',
      contactButton: '問い合わせページへ',
    },
    contact: {
      title: 'Contact',
      description: '問い合わせページです。スポンサーやコラボ相談はこちらからどうぞ。',
      heroEyebrow: 'Contact',
      heroTitle: '内容に合う窓口から連絡してください',
      heroDescription: '現状はメールリンクが最も確実です。軽い連絡や補足はSNSでも受けられます。',
      emailEyebrow: 'Email',
      emailTitle: 'スポンサーやコラボ相談向け',
      emailBody:
        'どういう企画か、求める内容、時期感、レビューや表記条件などを最初に添えてもらえると助かります。',
      socialEyebrow: 'Social',
      socialTitle: '公開チャンネル',
      socialBody: '動画、リポジトリ、投稿への反応など、公開で問題ない短いやり取りはこちらでも大丈夫です。',
    },
  },
  en: {
    siteTitle: 'Kenmaro | Prototype your idea to the real world',
    siteDescription:
      'Kenmaro is a personal site for software work, indie projects, hardware DIY, robots, and prototyping logs.',
    home: {
      title: 'Kenmaro | Prototype your idea to the real world',
      description:
        'A personal brand site for software, indie product work, hardware DIY, robotics, ESP32, and 3D printing build logs.',
      heroTitle1: 'Prototype your idea',
      heroTitle2: 'to the real world',
      heroDescription:
        'A personal base for software, indie products, hardware, and robotics experiments.',
      whoHeading: 'Who I am in 4 Lines',
      aboutHeading: 'About',
      whoImageCaption: 'A Blender home modeling piece I made earlier',
      hardwareNoteTitle: 'And now: Hardware / Prototyping',
      hardwareNoteDescription:
        'This site is also where I will gradually publish build logs around hardware DIY, ESP32, robotics, sensors, and 3D printing.',
      projectsHeading: 'Personal Product History',
      hardwareProjectsHeading: 'Hardware Projects',
      blogsHeading: 'Blogs',
      blogsDescription: 'The older Qiita and note links stay visible here.',
      externalQiitaCount: 'articles on Qiita',
      externalNoteCount: 'articles on note',
      blogListButton: 'Browse all posts',
      youtubeHeading: 'YouTube',
      youtubeDescription:
        'The current uploads are still mostly software-focused, especially prototype work around mobile apps and web apps. Hardware-focused videos will be added later.',
      youtubeButton: 'Open channel',
      profileTitle: 'Software Developer',
      backgroundTitle: 'Background',
      focusTitle: 'Focus',
      hardwareTitle: 'Hardware / Creator',
      linksTitle: 'Links',
      workTitle: 'Work',
      academicTitle: 'Academic',
      hackathonTitle: 'Hackathon',
      talksTitle: 'Talk / Publication',
      youtubeChannelTitle: 'YouTube Channel',
      youtubeChannelBody:
        'Right now the channel is mostly about software-side prototyping, especially mobile apps and web apps. Hardware DIY and robotics content will be added next.',
    },
    blogList: {
      title: 'Blog',
      description: 'A list of build logs, experiments, and YouTube companion posts.',
      heroEyebrow: 'Blog',
      heroTitle: 'Learning logs, experiments, and companion notes',
      heroDescription:
        'An MDX-based article archive with categories, tags, reading time, and room for parts lists, GitHub links, and sponsor-safe disclosures.',
    },
    projectsList: {
      title: 'Projects',
      description: 'A portfolio-style index of what I have built.',
      heroEyebrow: 'Projects',
      heroTitle: 'A portfolio view of what I actually built',
      heroDescription:
        'Projects highlight purpose, technologies, parts, related posts, and the bigger context behind each build.',
    },
    uses: {
      title: 'Uses',
      description: 'Tools, boards, sensors, and parts I often use.',
      heroEyebrow: 'Uses',
      heroTitle: 'Tools and parts I keep returning to',
      heroDescription:
        'A structured uses page that also works as a sponsor- and affiliate-friendly recommendation list.',
      referenceLabel: 'Reference link',
      affiliateLabel: 'PR / affiliate link',
    },
    sponsor: {
      title: 'Sponsor',
      description: 'Information for sponsors, reviews, hardware support, and collaborations.',
      heroEyebrow: 'Sponsor / Collaboration',
      heroTitle: 'A clean place for sponsor and collaboration inquiries',
      heroDescription:
        'This is still a personal build log, but it is structured so brands can quickly understand the work, fit, and review policy.',
      activityEyebrow: 'Activity',
      activityTitle: 'What this site covers',
      activityBody:
        'Hardware DIY, small robots, ESP32 and Arduino builds, sensors, 3D printing, Raspberry Pi experiments, and YouTube companion articles.',
      availableEyebrow: 'Available',
      availableTitle: 'Collaboration formats',
      availableItems: ['Product reviews', 'Equipment or sample provision', 'Sponsored videos or articles', 'Technical validation and prototype testing', 'Collaborative build content'],
      policyEyebrow: 'Policy',
      policyTitle: 'Non-negotiables',
      policyItems: [
        'I only feature products I genuinely think are worth recommending after use.',
        'I do not do stealth marketing.',
        'Provided gear and paid promotion will be clearly labeled.',
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'What to include when reaching out',
      contactBody:
        'Sharing the product category, expected timing, target audience, and whether the request is a review, sponsorship, or technical validation helps a lot.',
      contactButton: 'Go to contact page',
    },
    contact: {
      title: 'Contact',
      description: 'Contact page for sponsor inquiries, collaborations, and project-related messages.',
      heroEyebrow: 'Contact',
      heroTitle: 'Use the contact channel that matches the request',
      heroDescription: 'For now, email is the most reliable option. Social channels are fine for lightweight public follow-ups.',
      emailEyebrow: 'Email',
      emailTitle: 'Best for sponsor and collaboration inquiries',
      emailBody:
        'Please include the project context, the kind of support you are proposing, timing, and any disclosure or review requirements.',
      socialEyebrow: 'Social',
      socialTitle: 'Public channels',
      socialBody: 'Useful for short public follow-ups tied to a video, repository, or post.',
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return {
    nav: navCopy[locale],
    footer: footerCopy[locale],
    common: commonCopy[locale],
    page: pageCopy[locale],
  };
}
