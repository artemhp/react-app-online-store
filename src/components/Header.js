import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const user = useSelector((state) => state.account.value);
  console.log(user);
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <Link to="/">
            <img src="images/logo.png" alt="logo" height="45" />
          </Link>
          <div className="header__info">
            Hi,{" "}
            {!user.name && (
              <Link to="/account" className="header__user">
                Log in
              </Link>
            )}
            {user.name}
            <div className="header__shop">
              <Link to="/favourites">
                <img src="images/favourite.png" alt="favourite" height="20" />
                <span
                  className="header__shop--count"
                  id="headerFavouritesCount"
                >
                  {user.favourites.length}
                </span>
              </Link>
            </div>
            <button className="header__logout" id="headerLogout">
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
