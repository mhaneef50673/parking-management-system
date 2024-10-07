"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? "dark" : ""}`}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}></Header>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
