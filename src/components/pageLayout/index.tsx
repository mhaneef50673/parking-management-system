import Header from "@/components/header";
import Footer from "@/components/footer";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <Header></Header>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
