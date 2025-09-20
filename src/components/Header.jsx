import PMCLogo from '../assets/PMC03.png';


function Header() {
  return (
    <header className="header">
      <img src={PMCLogo} alt="PMC Logo" className="logo" />
    </header>
  );
}

export default Header;
