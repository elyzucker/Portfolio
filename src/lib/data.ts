import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'ergonomic-chair',
    title: 'Ergonomic Office Chair',
    description: 'A minimalist office chair designed for comfort and sustainability',
    thumbnail: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80'
    ],
    tools: ['Fusion 360', 'Rhino', 'KeyShot'],
    process: 'Starting with extensive ergonomic research, the design evolved through multiple iterations focusing on spine support and natural posture.',
    objectives: [
      'Maximize comfort for long working hours',
      'Use sustainable materials',
      'Create a timeless aesthetic'
    ]
  },
  {
    id: 'minimal-lamp',
    title: 'Ambient Light Collection',
    description: 'A series of minimalist lamps focusing on indirect lighting',
    thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80'
    ],
    tools: ['Rhino', 'KeyShot', 'Adobe CC'],
    process: 'The collection was inspired by natural light patterns and the way sunlight filters through leaves.',
    objectives: [
      'Create calming ambient lighting',
      'Minimize material waste',
      'Design for easy assembly'
    ]
  },
  {
    id: 'eco-kettle',
    title: 'Eco-Smart Kettle',
    description: 'Smart kettle with energy-saving features and minimal environmental impact',
    thumbnail: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522660517748-2931a7a3d508?auto=format&fit=crop&q=80'
    ],
    tools: ['Fusion 360', 'KeyShot', 'Arduino'],
    process: 'Developed with a focus on reducing energy consumption while maintaining rapid heating capabilities.',
    objectives: [
      'Minimize energy consumption',
      'Create intuitive user interface',
      'Use recycled materials'
    ]
  },
  {
    id: 'modular-shelf',
    title: 'Modular Storage System',
    description: 'Customizable shelving system for modern living spaces',
    thumbnail: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80'
    ],
    tools: ['SolidWorks', 'V-Ray', 'Adobe CC'],
    process: 'Designed with flexibility in mind, allowing users to create their perfect storage solution.',
    objectives: [
      'Create adaptable design',
      'Ensure sturdy construction',
      'Minimize packaging waste'
    ]
  },
  {
    id: 'smart-planter',
    title: 'Connected Plant Care',
    description: 'IoT-enabled planter with automated watering and monitoring',
    thumbnail: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80'
    ],
    tools: ['Fusion 360', 'Arduino', 'KeyShot'],
    process: 'Integrated smart technology with minimal design for optimal plant growth.',
    objectives: [
      'Simplify plant care',
      'Create aesthetic design',
      'Implement smart features'
    ]
  },
  {
    id: 'acoustic-panel',
    title: 'Sculptural Acoustics',
    description: 'Decorative acoustic panels that double as wall art',
    thumbnail: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1612547036242-77002603e5aa?auto=format&fit=crop&q=80'
    ],
    tools: ['Rhino', 'Grasshopper', 'V-Ray'],
    process: 'Combined acoustic engineering with parametric design for both function and beauty.',
    objectives: [
      'Optimize sound absorption',
      'Create visual interest',
      'Enable easy installation'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: '3D Design',
    items: [
      { name: 'Fusion 360', level: 90 },
      { name: 'Rhino', level: 85 },
      { name: 'SolidWorks', level: 80 }
    ]
  },
  {
    category: 'Visualization',
    items: [
      { name: 'KeyShot', level: 95 },
      { name: 'V-Ray', level: 85 },
      { name: 'Adobe CC', level: 90 }
    ]
  },
  {
    category: 'Digital Fabrication',
    items: [
      { name: '3D Printing', level: 88 },
      { name: 'CNC Machining', level: 82 },
      { name: 'Laser Cutting', level: 85 }
    ]
  }
];