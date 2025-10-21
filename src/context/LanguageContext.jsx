import { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

// Define text translations
const translations = {
  en: {
    title: "My Microsoft Office Services",
    intro:
      "I help individuals and businesses organize, visualize, and present their work efficiently using the power of Microsoft tools. From data analysis to stunning presentations — I make productivity seamless and impactful.",
    services: [
      {
        title: "Microsoft Word",
        description:
          "Professional document creation and formatting — from reports to proposals — designed with precision, consistency, and style.",
      },
      {
        title: "Microsoft Excel",
        description:
          "Data organization, formulas, pivot tables, and automation for insightful and efficient decision-making.",
      },
      {
        title: "Microsoft PowerPoint",
        description:
          "Impactful presentations with clean visuals, animations, and professional storytelling to communicate ideas clearly.",
      },
      {
        title: "Microsoft Access",
        description:
          "Database design and management for tracking, analyzing, and maintaining data with easy-to-use interfaces.",
      },
      {
        title: "Microsoft Power BI",
        description:
          "Interactive dashboards and data visualization that transform numbers into actionable business insights.",
      },
    ],
  },

  fr: {
    title: "Mes Services Microsoft Office",
    intro:
      "J’aide les particuliers et les entreprises à organiser, visualiser et présenter leur travail efficacement grâce à la puissance des outils Microsoft. De l’analyse de données aux présentations percutantes — je rends la productivité fluide et inspirante.",
    services: [
      {
        title: "Microsoft Word",
        description:
          "Création et mise en forme de documents professionnels — rapports, propositions, et plus — avec précision et cohérence.",
      },
      {
        title: "Microsoft Excel",
        description:
          "Organisation des données, formules, tableaux croisés dynamiques et automatisation pour une prise de décision efficace.",
      },
      {
        title: "Microsoft PowerPoint",
        description:
          "Présentations percutantes avec visuels clairs, animations et narration professionnelle pour communiquer vos idées avec impact.",
      },
      {
        title: "Microsoft Access",
        description:
          "Conception et gestion de bases de données pour suivre, analyser et maintenir vos informations facilement.",
      },
      {
        title: "Microsoft Power BI",
        description:
          "Tableaux de bord interactifs et visualisations de données qui transforment les chiffres en informations exploitables.",
      },
    ],
  },
};

// Create the provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const value = {
    language,
    switchLanguage,
    text: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// Hook to use language context
export function useLanguage() {
  return useContext(LanguageContext);
}
