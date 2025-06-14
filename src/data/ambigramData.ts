
export const fonts = [
  { value: 'playfair', label: 'Playfair Display', class: 'font-playfair', category: 'serif' },
  { value: 'inter', label: 'Inter', class: 'font-inter', category: 'sans-serif' },
  { value: 'serif', label: 'Times New Roman', class: 'font-serif', category: 'serif' },
  { value: 'mono', label: 'Courier New', class: 'font-mono', category: 'monospace' },
  { value: 'creepster', label: 'Creepster', class: 'font-creepster', category: 'tattoo' },
  { value: 'nosifer', label: 'Nosifer', class: 'font-nosifer', category: 'tattoo' },
  { value: 'metal', label: 'Metal Mania', class: 'font-metal', category: 'tattoo' },
  { value: 'eater', label: 'Eater', class: 'font-eater', category: 'tattoo' },
  { value: 'arial', label: 'Arial', class: 'font-sans', category: 'sans-serif' },
  { value: 'georgia', label: 'Georgia', class: 'font-serif', category: 'serif' },
  { value: 'helvetica', label: 'Helvetica', class: 'font-sans', category: 'sans-serif' },
  { value: 'verdana', label: 'Verdana', class: 'font-sans', category: 'sans-serif' },
  { value: 'orbitron', label: 'Orbitron', class: 'font-orbitron', category: 'blocky' },
  { value: 'audiowide', label: 'Audiowide', class: 'font-audiowide', category: 'blocky' },
  { value: 'press-start', label: 'Press Start 2P', class: 'font-press-start', category: 'pixel' },
];

export const fontCategories = [
  { value: 'all', label: 'All Fonts' },
  { value: 'serif', label: 'Serif' },
  { value: 'sans-serif', label: 'Sans Serif' },
  { value: 'monospace', label: 'Monospace' },
  { value: 'tattoo', label: 'Tattoo Style' },
  { value: 'blocky', label: 'Blocky' },
  { value: 'pixel', label: 'Pixel Art' },
];

export const colors = [
  '#8B5CF6', '#3B82F6', '#6366F1', '#EC4899', 
  '#EF4444', '#F59E0B', '#10B981', '#6B7280',
  '#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4',
  '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'
];

export const backgroundColors = [
  '#FFFFFF', '#000000', '#F8F9FA', '#343A40',
  '#FFF3CD', '#D4EDDA', '#D1ECF1', '#F8D7DA',
  '#E2E3E5', '#F5F5F5', '#FFEAA7', '#DDA0DD'
];

export const examples = [
  'LOVE', 'HOPE', 'PEACE', 'DREAM', 'MAGIC', 'POWER',
  'FAITH', 'ANGEL', 'FAMILY', 'INFINITY', 'DESTINY', 'HONOR'
];

export const presets = [
  { name: 'Classic', font: 'playfair', color: '#000000', bg: '#FFFFFF', size: 48 },
  { name: 'Modern', font: 'inter', color: '#6366F1', bg: '#F8F9FA', size: 52 },
  { name: 'Tattoo Dark', font: 'creepster', color: '#FFFFFF', bg: '#000000', size: 44 },
  { name: 'Gothic', font: 'nosifer', color: '#8B0000', bg: '#2F2F2F', size: 50 },
  { name: 'Metal', font: 'metal', color: '#FFD700', bg: '#1A1A1A', size: 46 },
  { name: 'Horror', font: 'eater', color: '#FF4500', bg: '#000000', size: 48 }
];
