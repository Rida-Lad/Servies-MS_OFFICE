import { motion } from "framer-motion";
import { FileText, BarChart3, Database, Sliders, Presentation } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { text, switchLanguage, language } = useLanguage();

  const icons = [
    <FileText size={40} className="text-blue-400" />,
    <Sliders size={40} className="text-green-400" />,
    <Presentation size={40} className="text-orange-400" />,
    <Database size={40} className="text-purple-400" />,
    <BarChart3 size={40} className="text-yellow-400" />,
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center p-8">
      {/* Language Toggle Button */}
      <div className="top-6 right-6">
        <button
          onClick={switchLanguage}
          className="bg-black text-sm px-4 py-2 rounded-xl border border-white hover:bg-gray-700 transition-all"
        >
          {language === "en" ? "Français" : "English"}
        </button>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mt-10 mb-4"
      >
        {text.title}
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 max-w-2xl text-center mb-10"
      >
        {text.intro}
      </motion.p>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {text.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 backdrop-blur-sm"
            style={{
              backgroundColor: index === 0 ? 'rgba(59, 130, 246, 0.05)' :
                index === 1 ? 'rgba(34, 197, 94, 0.05)' :
                  index === 2 ? 'rgba(251, 146, 60, 0.05)' :
                    index === 3 ? 'rgba(168, 85, 247, 0.05)' :
                      'rgba(234, 179, 8, 0.05)'
            }}          >
            <div className="mb-4 flex justify-center">{icons[index]}</div>
            <h2 className="text-xl font-semibold text-center mb-2">{service.title}</h2>
            <p className="text-gray-400 text-center text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>


    </div>
  );
}
