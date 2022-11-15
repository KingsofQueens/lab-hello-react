import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Header() {
  return (
    <div className="App-header">
      <div>
        <img src={logo} alt="ironhack logo" />
      </div>
      <div>
        <img src={menu} alt="ironhack menu" />
      </div>
    </div>
  );
}

export default Header;
