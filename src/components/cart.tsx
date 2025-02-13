import { useState } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartProps {
  cartItems: Product[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems = [], onRemoveItem, onUpdateQuantity, onClearCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* زر العربة في الناف بار */}
      <button
        onClick={toggleCart}
        className="relative flex items-center justify-center p-2 rounded-full bg-primary hover:bg-primary-dark transition-all"
      >
        <FaShoppingCart className="h-8 w-8 hover:text-gray-800 transition-colors duration-300 dark:hover:text-gray-300" />
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* نافذة العربة مع الأنيميشن */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 mt-4 w-96 bg-background dark:bg-gray-900 p-5 shadow-lg rounded-lg z-50 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">🛒 عربة التسوق</h3>
              <button 
                onClick={toggleCart} 
                className="text-gray-500 hover:text-red-500 transition-colors text-lg"
              >
                ✖
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">🛒 العربة فارغة</p>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {cartItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-4">
                      <img src={item.imageUrl} alt={item.name} className="w-14 h-14 rounded-lg object-cover shadow" />
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">ج.م {item.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="w-12 text-center bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded shadow-sm"
                        onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                      />
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* الإجمالي وزر الدفع */}
            {cartItems.length > 0 && (
              <div className="mt-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span className="text-foreground">الإجمالي:</span>
                  <span className="text-primary">ج.م {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                </div>
                <button
                  className="mt-3 block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-all shadow"
                >
                  إتمام الشراء
                </button>
                <button
                  onClick={onClearCart}
                  className="mt-2 block w-full text-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all shadow"
                >
                  مسح العربة 🗑
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
