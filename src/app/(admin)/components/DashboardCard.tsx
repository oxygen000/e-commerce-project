"use client";
import { motion } from "framer-motion";

interface DashboardCardProps {
  title: string;
  value: string | number;
  Icon: React.ComponentType<{ className?: string }>;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, Icon }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow p-5 rounded-lg flex items-center gap-4">
      <Icon className="text-3xl text-primary" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
};

export default DashboardCard;