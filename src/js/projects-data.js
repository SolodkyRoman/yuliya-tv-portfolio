const PROJECT_IDS = new Map([
  ['elia', 'elia'],
  ['utopia', 'utopia-house'],
  ['limozh', 'limozh'],
  ['peppy', 'peppy'],
  ['posters', 'posters'],
  ['experiments', 'experiments'],
  // ['justgo', 'justgo'],
    [
        'suntouched', ['suntouched']
    ]
]);

const PROJECTS_IMAGES = new Map([
  [
    PROJECT_IDS.get('elia'),
    [
      {
        animation: true,
        alt: 'Elia animation bubbles',
        src: 'static/images/projects/elia/1_bubbles_video',
      },
      {
        alt: 'glass table',
        src: 'static/images/projects/elia/2_on_the_glass_table.webp',
      },
      {
        animation: true,
        alt: 'Elia animation bubbles',
        src: 'static/images/projects/elia/4_flavors',
      },
      {
        alt: 'Floating cans',
        src: 'static/images/projects/elia/05_floating.webp',
      },
      {
        alt: 'grid',
        src: 'static/images/projects/elia/06_grid.webp',
      },
      {
        alt: 'poster',
        src: 'static/images/projects/elia/07_wide_poster.webp',
      },
      {
        alt: 'grid',
        src: 'static/images/projects/elia/08_grid.webp',
      },
      {
        animation: true,
        alt: 'labels',
        src: 'static/images/projects/elia/09_labels',
      },
      {
        alt: 'posters',
        src: 'static/images/projects/elia/10_posters.webp',
      },

      {
        alt: '3d render',
        src: 'static/images/projects/elia/11_dark_render.webp',
      },
      {
        alt: 'grid',
        src: 'static/images/projects/elia/12_grid.webp',
      },
      {
        alt: '13',
        src: 'static/images/projects/elia/13_stationery.webp',
      },
      {
        alt: 'tshirt',
        src: 'static/images/projects/elia/14_tshirt.webp',
      },
      {
        alt: 'video3d',
        animation: true,
        src: 'static/images/projects/elia/15_video',
      },
      {
        alt: 'insta_stories',
        src: 'static/images/projects/elia/16_instagram_stories.webp',
      },
      {
        alt: 'behance',
        src: 'static/images/projects/elia/17_behance.webp',
      },
      {
        alt: 'website',
        src: 'static/images/projects/elia/18_web_site.webp',
      },
      {
        alt: 'stickers',
        src: 'static/images/projects/elia/19_stickers.webp',
      },
    ],
  ],
  [
    PROJECT_IDS.get('utopia'),
    [
      {
        animation: true,
        alt: 'Utopia animation',
        src: 'static/images/projects/utopia/utopia-animation',
      },
      {
        alt: 'Utopia Box',
        src: 'static/images/projects/utopia/utopia-box.png',
      },
      {
        id: 'stickers-gif',
        alt: 'Utopia stickers',
        src: 'static/images/projects/utopia/utopia-stickers-animation.gif',
      },
      {
        alt: 'Utopia smiles',
        src: 'static/images/projects/utopia/utopia-smiles.png',
      },
      {
        alt: 'Utopia web',
        src: 'static/images/projects/utopia/utopia-checkered.webp',
      },
      {
        multiple: [
          {
            alt: 'Utopia Illustration',
            src: 'static/images/projects/utopia/utopia-left.webp',
          },
          {
            alt: 'Utopia Illustration',
            src: 'static/images/projects/utopia/utopia-right.webp',
          },
        ],
      },
      {
        alt: 'Utopia Boxes',
        src: 'static/images/projects/utopia/utopia-box-smiles.webp',
      },
      {
        alt: 'Utopia Box',
        src: 'static/images/projects/utopia/utopia-box-hand.png',
      },
    ],
  ],
  [
    PROJECT_IDS.get('limozh'),
    [
      {
        alt: 'Limozh candles',
        src: 'static/images/projects/limozh/some-candles.png',
      },
      {
        alt: 'Limozh logo',
        src: 'static/images/projects/limozh/limozh-logo.png',
      },
      {
        alt: 'Limozh logo',
        src: 'static/images/projects/limozh/limozh-box.png',
      },
      {
        id: 'stickers-gif',
        alt: 'Limozh opened candle',
        src: 'static/images/projects/limozh/limozh-open-candle.png',
      },
      {
        alt: 'Limozh box',
        src: 'static/images/projects/limozh/limozh-box-unpacked.png',
      },
      {
        alt: 'Limozh bags',
        src: 'static/images/projects/limozh/limozh-bags.png',
      },
      {
        alt: 'Limozh cards',
        src: 'static/images/projects/limozh/limozh-cards.png',
      },
      {
        alt: 'Limozh animation',
        animation: true,
        src: 'static/images/projects/limozh/limozh-animation.webm',
      },
    ],
  ],
  [
    PROJECT_IDS.get('peppy'),
    [
      { alt: 'Peppy', src: 'static/images/projects/peppy/peppy-happy.png' },
      {
        alt: 'Peppy logo',
        src: 'static/images/projects/peppy/peppy-logo-animation.gif',
      },
      {
        alt: 'Peppy tubes',
        src: 'static/images/projects/peppy/peppy-tubes.png',
      },
      {
        alt: 'Peppy eyeshadow',
        src: 'static/images/projects/peppy/peppy-eyeshadow.png',
      },
      {
        alt: 'Peppy lipstick',
        src: 'static/images/projects/peppy/peppy-lipsticks.png',
      },
      {
        alt: 'Peppy lotion',
        src: 'static/images/projects/peppy/peppy-open-lotion.png',
      },
      {
        alt: 'Peppy lotion',
        src: 'static/images/projects/peppy/peppy-lotion.png',
      },
      {
        alt: 'Peppy hair',
        src: 'static/images/projects/peppy/peppy-hair.png',
      },
      {
        alt: 'Peppy bag',
        src: 'static/images/projects/peppy/peppy-shopping-bag.png',
      },
      {
        alt: 'Peppy thanks',
        src: 'static/images/projects/peppy/peppy-thanks.png',
      },
      {
        alt: 'Peppy phone',
        src: 'static/images/projects/peppy/peppy-phone.png',
      },
    ],
  ],
  [
    PROJECT_IDS.get('posters'),
    [
      {
        multiple: [
          {
            src: 'static/images/projects/posters/independence_blue.png',
            alt: 'Independence day poster 1',
          },
          {
            src: 'static/images/projects/posters/independence_yellow.png',
            alt: 'Independence day poster 2',
          },
          {
            src: 'static/images/projects/posters/this_is_war.png',
            alt: 'This is war poster',
          },
        ],
      },
      {
        multiple: [
          {
            src: 'static/images/projects/posters/warship.png',
            alt: 'Russian warship poster',
          },
          {
            src: 'static/images/projects/posters/putler.png',
            alt: 'Putler poster',
          },
          {
            src: 'static/images/projects/posters/mariupol.png',
            alt: 'Mariupol poster',
          },
        ],
      },
    ],
  ],
  [
    // PROJECT_IDS.get('justgo'),
    // [
    //   {
    //     animation: true,
    //     alt: 'JustGo Animation',
    //     src: 'static/images/projects/justgo/1',
    //   },
    //   {
    //     alt: 'JustGo Description',
    //     src: 'static/images/projects/justgo/2.webp',
    //   },
    //   {
    //     alt: 'JustGo Illustration',
    //     src: 'static/images/projects/justgo/3.gif',
    //   },
    //   {
    //     alt: 'JustGo Avocado Pattern',
    //     src: 'static/images/projects/justgo/4.webp',
    //   },
    //   {
    //     animation: true,
    //     alt: 'JustGo Pattern Animation',
    //     src: 'static/images/projects/justgo/5',
    //     className: 'justgo-cut-borders',
    //   },
    //   { alt: 'JustGo Font', src: 'static/images/projects/justgo/6.webp' },
    //   { alt: 'JustGo Example', src: 'static/images/projects/justgo/7.webp' },
    //   { alt: 'JustGo Title', src: 'static/images/projects/justgo/8.webp' },
    //   {
    //     alt: 'JustGo Bikes Photo',
    //     src: 'static/images/projects/justgo/9.webp',
    //   },
    //   {
    //     animation: true,
    //     alt: 'JustGo Socials',
    //     src: 'static/images/projects/justgo/10',
    //     className: 'justgo-cut-borders',
    //   },
    //   { alt: 'JustGo Banner', src: 'static/images/projects/justgo/11.webp' },
    //   {
    //     alt: 'JustGo App Illustration',
    //     src: 'static/images/projects/justgo/16.webp',
    //     className: 'justgo-cut-bottom-border',
    //   },
    //   { alt: 'JustGo App', src: 'static/images/projects/justgo/17.webp' },
    //   { alt: 'JustGo Title', src: 'static/images/projects/justgo/18.webp' },
    //   { alt: 'JustGo T-Shirt', src: 'static/images/projects/justgo/19.webp' },
    //   {
    //     animation: true,
    //     alt: 'JustGo Website',
    //     src: 'static/images/projects/justgo/20',
    //   },
    //   { alt: 'JustGo Bag', src: 'static/images/projects/justgo/21.webp' },
    //   { alt: 'JustGo Van', src: 'static/images/projects/justgo/22.webp' },
    //   { alt: 'JustGo Clothes', src: 'static/images/projects/justgo/23.webp' },
    //   { alt: 'JustGo Market', src: 'static/images/projects/justgo/24.webp' },
    // ],
  ],
    [PROJECT_IDS.get('suntouched'),
    [
        {
        src: 'static/images/projects/suntouched/1.jpg',
        alt: 'Conditioner',
      },
      {
        src: 'static/images/projects/suntouched/split.webp',
        alt: 'All-seasons products',
      },
      {
        src: 'static/images/projects/suntouched/4.webp',
        alt: 'Suntouched Illustration',
      },
      {
        src: 'static/images/projects/suntouched/5.webp',
        alt: 'Presentations',
      },
      {
        multiple: [
          {
            src: 'static/images/projects/suntouched/6.webp',
            alt: 'Carbon neutral',
          },
          {
            src: 'static/images/projects/suntouched/7.webp',
            alt: 'Zero Emissions',
          }
        ]
      },
      {
        multiple: [
          {
            src: 'static/images/projects/suntouched/8.webp',
            alt: 'How to use - step 1',
          },
          {
            src: 'static/images/projects/suntouched/9.webp',
            alt: 'How to use - step 2',
          },
          {
            src: 'static/images/projects/suntouched/10.webp',
            alt: 'How to use - step 3',
          }
        ]
      },
      {
        multiple: [
          {
            src: 'static/images/projects/suntouched/ocean.webp',
            alt: '1% For the planet member',
          },
          {
            src: 'static/images/projects/suntouched/superette.webp',
            alt: 'Superette',
          }
        ]
      },
      {
        multiple: [
          {
            src: 'static/images/projects/suntouched/11.webp',
            alt: 'Suntouched 1',
          },
          {
            src: 'static/images/projects/suntouched/12.webp',
            alt: 'Suntouched 2',
          },
          {
            src: 'static/images/projects/suntouched/13.webp',
            alt: 'Suntouched 3',
          },
        ]
      },
      {
        multiple: [
          {
            src: 'static/images/projects/suntouched/15.gif',
            alt: 'Suntouched 2',
          },
          {
            src: 'static/images/projects/suntouched/14.webp',
            alt: 'Suntouched 2',
          }
        ]
      },

    ]]

]);

const PROJECT_LABELS = new Map([
  ['logo', 'Logo'],
  ['identity', 'Brand Identity'],
  ['packaging', 'Packaging design'],
  ['poster_design', 'Poster design'],
  ['zine', 'Zine'],
  ['social', 'Social'],
  ['illustration', 'Illustration'],
  ['3D', '3D'],
    ['email', 'Email'],
    ['guidelines', 'Guidelines'],
]);

const PROJECTS_DATA = [
  // {
  //   id: PROJECT_IDS.get('justgo'),
  //   name: 'JustGo',
  //   thumbnailSmall: 'static/images/projects/justgo/21.webp',
  //   thumbnailBig: {
  //     animation: 'static/images/projects/justgo/1',
  //   },
  //   labels: [
  //     PROJECT_LABELS.get('logo'),
  //     PROJECT_LABELS.get('identity'),
  //     PROJECT_LABELS.get('illustration'),
  //     PROJECT_LABELS.get('social'),
  //   ],
  //   descriptionBlocks: [
  //     'Identity system for JUSTGO delivery.',
  //     'JUSTGO is a company with a desire to make delivery affordable to everyone without sacrificing the quality of its produce. Their approach to delivery is bringing exceptionally fresh produce - the way you would pick it yourself.',
  //     "The identity's task was to unite people around food without compromises and create a community of like-minded people. The colors, typography, graphic shapes, and illustrations serve to create a friendly and bold look for JUSTGO.",
  //   ],
  //   credentials: [
  //     {
  //       key: 'Client',
  //       value: 'JUSTGO',
  //     },
  //     {
  //       key: 'Role',
  //       value: 'Art Direction/Graphic Design',
  //     },
  //   ],
  // },
  {
    id: PROJECT_IDS.get('elia'),
    name: 'Elia',
    thumbnailSmall: 'static/images/projects/elia/05_floating.webp',
    thumbnailBig: 'static/images/projects/elia/05_floating.webp',
    labels: [
      PROJECT_LABELS.get('identity'),
      PROJECT_LABELS.get('packaging'),
      PROJECT_LABELS.get('3D'),
    ],
    descriptionBlocks: [
      'The task was to create the visual identity and packaging for ELIA, a distinguished line of effervescent organic tonic waters crafted to elevate the experience of both cocktails and mocktails. ',
      "The identity draws its inspiration from the dynamic essence of bubbles, infused with youthful ease. We've crafted a design that's both eye-catching and straightforward with a striking combination of bold typography, unique graphics and vibrant colors. Our goal was to make a product that really pops off the shelf and looks just as good when you open it up for your cocktail party.",
    ],
    credentials: [],
  },
  {
    id: PROJECT_IDS.get('utopia'),
    name: 'Utopia Haus',
    thumbnailSmall: 'static/images/projects/utopia/utopia-smiles.webp',
    thumbnailBig: {
      animation: 'static/images/projects/utopia/utopia-animation',
    },
    labels: [PROJECT_LABELS.get('packaging'), PROJECT_LABELS.get('identity')],
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
    thumbnailSmall: 'static/images/projects/limozh/limoge-small.webp',
    thumbnailBig: {
      animation: 'static/images/projects/limozh/limozh-animation',
    },
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
    thumbnailSmall: 'static/images/projects/peppy/peppy-boxes.webp',
    thumbnailBig: 'static/images/projects/peppy/peppy-happy.png',
    labels: [
      PROJECT_LABELS.get('logo'),
      PROJECT_LABELS.get('identity'),
      PROJECT_LABELS.get('packaging'),
    ],
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
  {
    id: PROJECT_IDS.get('posters'),
    name: 'War in Ukraine',
    thumbnailSmall: 'static/images/projects/posters/war-in-ukraine.webp',
    thumbnailBig: {
      animation: 'static/images/projects/posters/war-in-ukraine',
    },
    labels: [PROJECT_LABELS.get('poster_design')],
    descriptionBlocks: [
      'On February 24th Russia started a full-scale war against Ukraine, killing and displacing thousands of people. Russia threatens the whole world with a nuclear weapon. The war has to be stopped by all measures. The guilty must be punished. The goal of this poster series was to attract attention to Ukraine and to the terror and unlawful actions that are being done by russians every day. Life will defeat death, while good will prevail over the darkness.',
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
    id: PROJECT_IDS.get('experiments'),
    name: 'Visual experiments',
    thumbnailSmall: 'static/images/projects/experiments/zin-thumbnail.webp',
    thumbnailBig: {
      animation: 'static/images/projects/experiments/experiments_animation',
    },
    labels: [
      PROJECT_LABELS.get('logo'),
      PROJECT_LABELS.get('poster_design'),
      PROJECT_LABELS.get('zine'),
    ],
    descriptionBlocks: [
      'The goal of this project was finding the borders of the ugly and beautiful, defining key features of one’s visual style, using new research techniques, looking for new approaches for expressing one’s visual language through experiments. ',
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
    id: PROJECT_IDS.get('suntouched'),
    name: 'Suntouched',
    thumbnailSmall: 'static/images/projects/experiments/zin-thumbnail.webp',
    thumbnailBig: {
      animation: 'static/images/projects/experiments/experiments_animation',
    },
    labels: [
      PROJECT_LABELS.get('packaging'),
      PROJECT_LABELS.get('social'),
      PROJECT_LABELS.get('email'),
      PROJECT_LABELS.get('guidelines'),
    ],
    descriptionBlocks: [
      'I helped the Suntouched team to extend their initial brand identity design through typographic selections and pairings, brand icons, the visual direction and design for social, email campaigns as well as visuals for paid ad campaigns. I updated the brand packaging and developed packaging for new products.',
    ],
    credentials: [
      {
        key: 'Client',
        value: 'Suntouched',
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

module.exports = { PROJECTS, PROJECT_IDS };
