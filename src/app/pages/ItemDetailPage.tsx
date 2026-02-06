import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Coffee, Cookie, ShoppingBag } from 'lucide-react';
import { coffeeItems, bakeryItems, giftItems } from '../data/menuData';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const allItems = [...coffeeItems, ...bakeryItems, ...giftItems];
  const item = allItems.find(i => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Item not found</p>
          <Link to="/" className="text-[#1a5c2e] hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  const hasSize = item.sizes && item.sizes.length > 0;
  const size = hasSize && selectedSize ? item.sizes?.find(s => s.name === selectedSize) : null;
  const displayPrice = size ? size.price : item.price;
  const totalPrice = displayPrice * quantity;

  const handleAddToCart = () => {
    if (hasSize && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    addToCart(item, quantity, selectedSize || undefined, size?.price);
    toast.success(`Added ${quantity} ${item.name} to basket`);
    setTimeout(() => navigate('/basket'), 500);
  };

  const getSizeIcon = (name: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'Small': <Coffee className="size-4" aria-hidden="true" />,
      'Medium': <Coffee className="size-5" aria-hidden="true" />,
      'Large': <Coffee className="size-6" aria-hidden="true" />
    };
    return icons[name] || <Coffee className="size-5" aria-hidden="true" />;
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 flex items-center gap-3 bg-white sticky top-0 z-10 border-b border-gray-100">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-600 hover:text-gray-900"
          aria-label="Go back"
        >
          <ArrowLeft className="size-6" />
        </button>
        <h1 className="text-xl">
          {item.category === 'coffee' ? 'Drinks Menu' : item.category === 'bakery' ? 'Bakery Menu' : 'Gift Shop'}
        </h1>
      </div>

      {/* Item Image */}
      <motion.div 
        className="aspect-[4/3] overflow-hidden bg-gray-100 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.tag && (
          <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-medium shadow-lg ${
            item.tag === 'buy again' ? 'bg-[#1a5c2e] text-white' :
            item.tag === 'almost sold out' ? 'bg-orange-500 text-white' :
            item.tag === 'weekly offer' ? 'bg-blue-500 text-white' :
            'bg-gray-500 text-white opacity-75'
          }`}>
            {item.tag}
          </div>
        )}
      </motion.div>

      {/* Item Details */}
      <div className="px-5 py-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl mb-2">{item.name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </motion.div>

        {/* Size Selection */}
        {hasSize && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm mb-3">Select size</h3>
            <div className="flex gap-3">
              {item.sizes?.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size.name)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                    selectedSize === size.name
                      ? 'border-[#1a5c2e] bg-[#1a5c2e]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  aria-pressed={selectedSize === size.name}
                  aria-label={`Select ${size.name} size for £${size.price.toFixed(2)}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    {getSizeIcon(size.name)}
                    <span className="text-xs">{size.name}</span>
                    <span className="text-sm">£{size.price.toFixed(2)}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-amber-50 rounded-lg"
          >
            <h3 className="text-sm mb-2">Allergen Information</h3>
            <p className="text-xs text-gray-600">
              Contains: {item.allergens.join(', ')}
            </p>
          </motion.div>
        )}

        {/* Quantity Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between py-4"
        >
          <span className="text-sm">Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="size-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              <Minus className="size-5" aria-hidden="true" />
            </button>
            <span className="text-lg w-8 text-center" aria-live="polite">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="size-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="size-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Add to Basket Button */}
      <div className="fixed bottom-20 left-0 right-0 p-5 bg-gradient-to-t from-white via-white to-transparent max-w-lg mx-auto z-40">
        <motion.button
          onClick={handleAddToCart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1a5c2e] text-white py-4 rounded-xl hover:bg-[#164925] transition-colors flex items-center justify-center gap-2 shadow-lg"
          aria-label={`Add ${quantity} items to basket for £${totalPrice.toFixed(2)}`}
        >
          <ShoppingBag className="size-5" aria-hidden="true" />
          Add to basket £{totalPrice.toFixed(2)}
        </motion.button>
      </div>
    </div>
  );
}