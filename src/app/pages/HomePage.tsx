import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { coffeeItems, bakeryItems, giftItems } from '../data/menuData';
import { motion } from 'motion/react';
import { ChevronRight, Coffee, Sparkles } from 'lucide-react';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a5c2e] to-[#1d6835] px-5 pt-8 pb-6 rounded-b-3xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl text-white mb-1 flex items-center gap-2">
                Magandang umaga! 
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
              </h1>
              <p className="text-white/80 text-sm">What can we brew for you today?</p>
            </div>
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -3, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Coffee className="size-8 text-white/90" aria-hidden="true" />
            </motion.div>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Coffee Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl flex items-center gap-2">
              <Coffee className="size-5 text-[#1a5c2e]" aria-hidden="true" />
              Coffee
            </h2>
            <Link 
              to="/menu/coffee" 
              className="text-[#1a5c2e] flex items-center gap-1 text-sm hover:underline group"
              aria-label="View all coffee items"
            >
              View all
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {coffeeItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/item/${item.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
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
                    <div className="p-4">
                      <h3 className="text-sm mb-1 line-clamp-2 group-hover:text-[#1a5c2e] transition-colors">{item.name}</h3>
                      <p className="text-[#1a5c2e] font-semibold">£{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bakery Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl flex items-center gap-2">
              <Sparkles className="size-5 text-amber-600" aria-hidden="true" />
              Bakery
            </h2>
            <Link 
              to="/menu/bakery" 
              className="text-[#1a5c2e] flex items-center gap-1 text-sm hover:underline group"
              aria-label="View all bakery items"
            >
              View all
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {bakeryItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/item/${item.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
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
                    <div className="p-4">
                      <h3 className="text-sm mb-1 line-clamp-2 group-hover:text-[#1a5c2e] transition-colors">{item.name}</h3>
                      <p className="text-[#1a5c2e] font-semibold">£{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gift Shop Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl flex items-center gap-2">
              🎁 Gift Shop
            </h2>
            <Link 
              to="/menu/gift" 
              className="text-[#1a5c2e] flex items-center gap-1 text-sm hover:underline group"
              aria-label="View all gift shop items"
            >
              View all
              <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {giftItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/item/${item.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-100 relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
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
                    <div className="p-4">
                      <h3 className="text-sm mb-1 line-clamp-2 group-hover:text-[#1a5c2e] transition-colors">{item.name}</h3>
                      <p className="text-[#1a5c2e] font-semibold">£{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}