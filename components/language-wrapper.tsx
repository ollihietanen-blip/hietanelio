"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}

