import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { motion } from 'framer-motion';

const Ourteam = () => {
  const { ourTeam } = useContext(AppContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <p className="text-center text-gray-900 text-lg font-medium mt-2">OUR TEAM</p>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 px-4">
        {
          ourTeam.map((item, index) => (
            <motion.div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden">
                <motion.img
                  className="w-full h-96  object-cover"
                  src={item.image}
                  alt={item.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-4">
                <p className="text-orange-500 text-lg font-medium mt-2">{item.name}</p>
                <p className="text-gray-600 text-sm font-semibold mb-1">{item.role}</p>
                <p className="text-gray-600 text-sm">{item.title}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Ourteam;
