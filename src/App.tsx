import { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const shoes = [
  {
    id: 'munchen',
    name: 'München',
    collection: 'Heritage',
    colorway: 'Wonder White | Wonder Clay | Semi Blue Burst',
    price: 110,
    releaseYear: 1979,
    description: 'A terrace culture icon from the celebrated City Series',
    details: [
      'Premium suede upper',
      'Gold foil branding',
      'Gum rubber outsole',
      'Classic City Series design',
      'Terrace culture heritage'
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/ZXfpXjP/Screenshot-2024-11-11-at-14-09-10.png',
      hover: 'https://i.ibb.co/ZXfpXjP/Screenshot-2024-11-11-at-14-09-10.png'
    },
    category: 'Heritage'
  },
  {
    id: 'stan-smith',
    name: 'Stan Smith',
    collection: 'Heritage',
    colorway: 'Cloud White | Green',
    price: 95,
    releaseYear: 1965,
    description: 'The timeless tennis classic that transcended the courts',
    details: [
      'Premium leather upper',
      'Perforated 3-Stripes',
      'Rubber cupsole',
      'Green heel tab',
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/Pccn1Bj/Screenshot-2024-11-11-at-13-17-10.png',
      hover: 'https://i.ibb.co/Pccn1Bj/Screenshot-2024-11-11-at-13-17-10.png'
    },
    category: 'Lifestyle'
  },
  {
    id: 'superstar',
    name: 'Superstar',
    collection: 'Originals',
    colorway: 'Cloud White | Core Black',
    price: 85,
    releaseYear: 1970,
    description: 'The shell-toe legend that revolutionized street style',
    details: [
      'Full grain leather upper',
      'Rubber shell toe',
      'Herringbone-pattern cupsole',
      'Iconic 3-Stripes design',
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/fMv8DtZ/Screenshot-2024-11-11-at-13-28-09.png',
      hover: 'https://i.ibb.co/fMv8DtZ/Screenshot-2024-11-11-at-13-28-09.png'
    },
    category: 'Originals'
  },
  {
    id: 'samba',
    name: 'Samba',
    collection: 'Originals',
    colorway: 'Core Black | White',
    price: 90,
    releaseYear: 1950,
    description: 'From football training to streetwear essential',
    details: [
      'Leather and suede upper',
      'Gum rubber outsole',
      'Archive-inspired design',
      'Iconic T-toe overlay',
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/LRTbZfT/Screenshot-2024-11-11-at-13-38-31.png',
      hover: 'https://i.ibb.co/LRTbZfT/Screenshot-2024-11-11-at-13-38-31.png'
    },
    category: 'Sport'
  },
  {
    id: 'gazelle',
    name: 'Gazelle',
    collection: 'Originals',
    colorway: 'Blue | White',
    price: 100,
    releaseYear: 1966,
    description: 'The versatile trainer that defined an era',
    details: [
      'Suede upper',
      'Leather 3-Stripes',
      'Vintage-inspired design',
      'Classic gum sole',
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/r2FTBcg/Screenshot-2024-11-11-at-13-44-18.png',
      hover: 'https://i.ibb.co/r2FTBcg/Screenshot-2024-11-11-at-13-44-18.png'
    },
    category: 'Lifestyle'
  },
  {
    id: 'campus',
    name: 'Campus',
    collection: 'Originals',
    colorway: 'Carbon | Orange | Cloud White',
    price: 90,
    releaseYear: 1980,
    description: 'The basketball crossover that conquered street culture',
    details: [
      'Premium suede upper',
      'Leather lining',
      'Rubber cupsole',
      'Serrated 3-Stripes',
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    images: {
      main: 'https://i.ibb.co/jkFNGL5/Screenshot-2024-11-11-at-15-37-22.png',
      hover: 'https://i.ibb.co/jkFNGL5/Screenshot-2024-11-11-at-15-37-22.png'
    },
    category: 'Originals'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredShoe, setHoveredShoe] = useState<string | null>(null);
  const [selectedShoe, setSelectedShoe] = useState<null | typeof shoes[0]>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const categories = ['All', 'Originals', 'Sport', 'Lifestyle', 'Heritage'];

  const filteredShoes = selectedCategory === 'All' 
    ? shoes 
    : shoes.filter(shoe => shoe.category === selectedCategory);

  const handleHomeClick = () => {
    setSelectedCategory('All');
    setSelectedShoe(null);
    setSelectedSize(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 h-16">
            <div className="flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              >
                Adi Da°s
              </button>
              <nav className="hidden md:flex space-x-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm font-medium transition-all duration-300 relative ${
                      selectedCategory === category
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {category}
                    {selectedCategory === category && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-16">
          <div className="p-4">
            <nav className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Dad Shoes Are Actually Cool Now
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From school runs to footie training, pub gardens to parent's evenings. 
            Embrace your inner dad with the trainers that were cool before you were,
            and somehow still are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="group relative aspect-square bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredShoe(shoe.id)}
              onMouseLeave={() => setHoveredShoe(null)}
            >
              <div className="absolute inset-0 bg-white/60">
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16 transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-2">
                  <div className="relative w-full h-full">
                    <img
                      src={hoveredShoe === shoe.id ? shoe.images.hover : shoe.images.main}
                      alt={shoe.name}
                      className="object-contain w-full h-full transition-all duration-500 filter drop-shadow-xl group-hover:drop-shadow-2xl mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-white">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium tracking-wide">{shoe.collection}</p>
                    <p className="text-xs opacity-75">Est. {shoe.releaseYear}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{shoe.name}</h3>
                  <p className="text-sm mb-2">{shoe.colorway}</p>
                  <p className="text-xs mb-3 opacity-75 line-clamp-2">{shoe.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium">£{shoe.price}</p>
                    <button 
                      onClick={() => setSelectedShoe(shoe)}
                      className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedShoe && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl relative">
              <button 
                onClick={() => setSelectedShoe(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square bg-gradient-to-br from-white to-gray-50 rounded-xl p-8">
                  <img
                    src={selectedShoe.images.main}
                    alt={selectedShoe.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">{selectedShoe.collection}</p>
                  <h2 className="text-3xl font-bold mb-2">{selectedShoe.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedShoe.colorway}</p>
                  <p className="text-xl font-semibold mb-6">£{selectedShoe.price}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Select Size</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedShoe.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 rounded border transition-all ${
                            selectedSize === size
                              ? 'border-black bg-black text-white'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3">Product Details</h3>
                    <ul className="space-y-2">
                      {selectedShoe.details.map((detail, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}