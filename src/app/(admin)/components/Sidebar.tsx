"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
  FaHome, FaUsers, FaChartBar, FaBullhorn, FaEnvelope, FaShoppingCart, 
  FaLock, FaCog, FaFileAlt, FaBell, FaCreditCard, FaNewspaper
} from "react-icons/fa";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/Dashboard", label: "Dashboard", icon: <FaHome /> },
  { href: "/Users", label: "Users", icon: <FaUsers /> },
  { href: "/admin/reports", label: "Reports", icon: <FaChartBar /> },
  { href: "/admin/ads", label: "Ads", icon: <FaBullhorn /> },
  { href: "/admin/complaints", label: "Complaints", icon: <FaEnvelope /> },
  { href: "/admin/orders", label: "Orders", icon: <FaShoppingCart /> },
  { href: "/admin/security", label: "Security", icon: <FaLock /> },
  { href: "/admin/settings", label: "Settings", icon: <FaCog /> },
  { href: "/admin/analytics", label: "Analytics", icon: <FaFileAlt /> },
  { href: "/admin/customers", label: "Customers", icon: <FaUsers /> },
  { href: "/admin/articles", label: "Articles", icon: <FaNewspaper /> },
  { href: "/admin/payments", label: "Payments", icon: <FaCreditCard /> },
  { href: "/admin/notifications", label: "Notifications", icon: <FaBell /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <motion.aside
      transition={{ type: "spring", stiffness: 100 }}
      className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0 shadow-lg flex flex-col overflow-y-auto"
    >
      {/* العنوان */}
      <motion.h2 
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold py-5 text-center border-b border-gray-700"
      >
        Admin Panel
      </motion.h2>
      
      {/* القائمة */}
      <nav className="flex-grow p-4 space-y-2">
        {menuItems.map(({ href, label, icon }) => (
          <motion.div
            key={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                pathname === href
                  ? "bg-primary text-white font-semibold shadow-md"
                  : "hover:bg-gray-700 hover:shadow-sm"
              }`}
            >
              <motion.span
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg"
              >
                {icon}
              </motion.span>
              <span>{label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
      
      {/* حقوق النشر */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-gray-400 pb-4"
      >
        &copy; {new Date().getFullYear()} Admin Panel
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
