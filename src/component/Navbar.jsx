const Navbar = () => {
  return (
    <div className="bg-red-500 w-full h-20 flex  items-center  justify-between ">
      {/* Logo */}
      <div className="ml-7 text-white hover:text-black duration-700 hover:cursor-pointer">
        <div className="text-2xl font-bold">
          <p>Logo</p>
        </div>
      </div>
      {/* Menu */}
      <div className="flex mr-10 ">
        <p className="text-2xl text-white">Home</p>
        <p className="text-2xl text-white mx-10">Product</p>
        <p className="text-2xl text-white  mx-10">Cart</p>
        <p className="text-2xl text-white  mx-10">Setting</p>
      </div>
    </div>
  );
};

export default Navbar;
