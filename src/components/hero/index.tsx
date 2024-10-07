const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 text-center z-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          ParkEase
        </h1>
        <p className="text-xl md:text-2xl text-white">
          Efficient parking solutions at your fingertips
        </p>
      </div>
    </div>
  );
};

export default Hero;
