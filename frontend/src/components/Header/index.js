import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center pt-5">
        <img src={Logo} className="img-fluid" />
      </header>
    </div>
  );
};

export default Header;
