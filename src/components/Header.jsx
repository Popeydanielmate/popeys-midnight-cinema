import PMCLogo from '../assets/PMC03.png';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">


        <div className="header-block">
          <img src={PMCLogo} alt="PMC Logo" className="logo" />
        </div>

        <div className="header-block">
          <p>
            A free streaming corner for lovers of 
            cult, horror, exploitation, arthouse, and everything weird in-between.
            If your taste sits somewhere between <em>Mubi</em> and <em>Shudder</em>, you’re home.
          </p>
        </div>

        <div className="header-block">
          <p>
            Got a film suggestion or found a broken link?<br />
            Email us at: <a href="mailto:popeydaniel@hotmail.com">popeydaniel@hotmail.com</a>
          </p>
        </div>

        <div className="header-block">
          <p>
            This site will always be free — but if you'd like to help with upkeep and 
            support the hunt for more cult cinema gems, consider buying us a coffee.
          </p>
          <a 
            href="https://www.buymeacoffee.com/" 
            target="_blank" 
            rel="noreferrer"
            className="donate-button"
          >
            ☕ Buy Me a Coffee
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;


