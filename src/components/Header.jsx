const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-3 fixed top-0 left-0 z-50 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">MiApp Camionero</h1>
      <nav>
        <NavLink to="/" className="text-white hover:text-blue-400 mr-4">Home</NavLink>
      </nav>
    </header>
  );
};

export default Header;
