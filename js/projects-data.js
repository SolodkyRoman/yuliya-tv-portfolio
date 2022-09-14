const PROJECT_IDS = new Map([
  ['utopia', 'utopia-house'],
  ['limozh', 'limozh'],
  ['peppy', 'peppy'],
]);

const PROJECTS_IMAGES = new Map([
  [
    PROJECT_IDS.get('utopia'),
    [
      {
        alt: '',
        src: 'images/projects/utopia/final-hope-so.gif',
      },
      {
        alt: '',
        src: 'images/projects/utopia/utopia_box.png',
      },
      {
        id: 'stickers-gif',
        alt: '',
        src: 'images/projects/utopia/utopia-house-portfolio-project.gif',
      },
      {
        alt: '',
        src: 'images/projects/utopia/utopia_smiles.png',
      },
      {
        alt: '',
        src: 'images/projects/utopia/utopia_web.png',
      },
      {
        alt: ['', ''],
        src: [
          'images/projects/utopia/utopia_left.png',
          'images/projects/utopia/utopia_right.png',
        ],
      },
      {
        alt: '',
        src: 'images/projects/utopia/utopia_box_smiles.png',
      },
      {
        alt: '',
        src: 'images/projects/utopia/utopia_box_hand.png',
      },
    ],
  ],
  [
    PROJECT_IDS.get('limozh'),
    [
      {
        alt: '',
        src: 'images/projects/limozh/some-candles.png',
      },
      {
        alt: '',
        src: 'images/projects/limozh/limozh-logo.png',
      },
      {
        id: 'stickers-gif',
        alt: '',
        src: 'images/projects/limozh/limozh-open-candle.png',
      },
      {
        alt: '',
        src: 'images/projects/limozh/limozh-box-unpacked.png',
      },
      {
        alt: '',
        src: 'images/projects/limozh/limozh-bags.png',
      },
      {
        alt: '',
        src: 'images/projects/limozh/limozh-cards.png',
      },
      {
        alt: '',
        src: 'images/projects/limozh/limozh-animation.gif',
      },
    ],
  ],
  [
    PROJECT_IDS.get('peppy'),
    [
      { alt: '', src: 'images/projects/peppy/peppy-happy.png' },
      { alt: '', src: 'images/projects/peppy/peppy-logo-animation.gif' },
      { alt: '', src: 'images/projects/peppy/peppy-tubes.png' },
      { alt: '', src: 'images/projects/peppy/peppy-eyeshadow.png' },
      { alt: '', src: 'images/projects/peppy/peppy-lipsticks.png' },
      { alt: '', src: 'images/projects/peppy/peppy-open-lotion.png' },
      { alt: '', src: 'images/projects/peppy/peppy-lotion.png' },
      { alt: '', src: 'images/projects/peppy/peppy-hair.png' },
      { alt: '', src: 'images/projects/peppy/peppy-shopping-bag.png' },
      { alt: '', src: 'images/projects/peppy/peppy-thanks.png' },
      { alt: '', src: 'images/projects/peppy/peppy-phone.png' },
    ],
  ],
]);

const PROJECT_LABELS = new Map([
  ['logo', 'Logo'],
  ['identity', 'Identity'],
  ['packaging', 'Packaging design'],
]);

const PROJECTS_DATA = [
  {
    id: PROJECT_IDS.get('utopia'),
    name: 'Utopia Haus',
    thumbnailSmall: 'images/others/gallette.png',
    thumbnailBig: 'images/projects/utopia/final-hope-so.gif',
    labels: [PROJECT_LABELS.get('packaging')],
    descriptionBlocks: [
      'Utopia Haus is a party rental company from Sacramento, California. It delivers smiles with luxury party equipment and bounce houses for different type of celebration in your own unique way.',
      "Utopia Haus' brand and packaging stickers design was meant to create a unique experience and transport client to a different place - a utopia, a place of one's dreams and fantasies, where everything he can imagine is real. The idea was brought to life by whimsical word mark, distorted typography and graphics with optical illusions.",
    ],
    credentials: [
      {
        key: 'Client',
        value: 'Utopia Haus',
      },
      {
        key: 'Role',
        value: 'Art Direction/Graphic Design',
      },
      {
        key: 'Photography Assistance',
        value: 'Alina Zhelepa',
      },
    ],
  },
  {
    id: PROJECT_IDS.get('limozh'),
    name: 'Limozh',
    thumbnailSmall: 'images/others/limoge.png',
    thumbnailBig: 'images/projects/limozh/limozh-animation.gif',
    labels: [
      PROJECT_LABELS.get('logo'),
      PROJECT_LABELS.get('identity'),
      PROJECT_LABELS.get('packaging'),
    ],
    descriptionBlocks: [
      "Limozh is a brand that produces high-quality scented candles for people, that value aestatics in everyday life. The concept of identity and packaging is based on the custom experimental typeface. A tender color palette together with a clean and uncluttered layout enhances the feeling of brand's elegance and sophistication.",
    ],
    credentials: [
      {
        key: 'Client',
        value: 'Personal Project',
      },
      {
        key: 'Role',
        value: 'Art Direction/Graphic Design',
      },
    ],
  },
  {
    id: PROJECT_IDS.get('peppy'),
    name: 'Peppy',
    thumbnailSmall: 'images/others/limoge.png',
    thumbnailBig: 'images/projects/peppy/peppy-happy.png',
    labels: [PROJECT_LABELS.get('logo'), PROJECT_LABELS.get('identity')],
    descriptionBlocks: [
      'Peppy Cosmetics is a brand of teen makeup. The identity and packaging was inspired by the teen girl magazines and TV show aesthetics of late 90s and early 00s. The task was to create a standout branding that could translate the spirit of teenagers - the spirit of freedom, creativity and individuality. It is so crucial for our packaging to stand out, same as for teens who dye their hair, experiment with makeup and clothes to find their unique style.',
    ],
    credentials: [
      {
        key: 'Client',
        value: 'Personal Project',
      },
      {
        key: 'Role',
        value: 'Art Direction/Graphic Design',
      },
    ],
  },
];

const PROJECTS = PROJECTS_DATA.map((project) => ({
  ...project,
  images: PROJECTS_IMAGES.get(project.id) || [],
}));

export { PROJECTS };
