import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { coffeeItems, bakeryItems, giftItems } from '../data/menuData';
import { MenuItem } from '../context/AppContext';
import { motion } from 'motion/react';

export function MenuPage() {
  const { category } = useParams<{ category: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  const getItems = (): MenuItem[] => {
    switch (category) {
      case 'coffee':
        return coffeeItems;
      case 'bakery':
        return bakeryItems;
      case 'gift':
        return giftItems;
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (category) {
      case 'coffee':
        return 'Coffee Menu';
      case 'bakery':
        return 'Bakery Menu';
      case 'gift':
        return 'Gift Shop';
      default:
        return 'Menu';
    }
  };

  const items = getItems();
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900" aria-label="Go back to home">
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="text-2xl">{getTitle()}</h1>
        </div>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Items Grid */}
      <div className="px-5 py-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/item/${item.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {item.tag && (
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                        item.tag === 'buy again' ? 'bg-[#1a5c2e] text-white' :
                        item.tag === 'almost sold out' ? 'bg-orange-500 text-white' :
                        item.tag === 'weekly offer' ? 'bg-blue-500 text-white' :
                        'bg-gray-500 text-white opacity-75'
                      }`}>
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm mb-1 line-clamp-2">{item.name}</h3>
                    <p className="text-[#1a5c2e]">£{item.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}