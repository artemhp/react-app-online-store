export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="index.html">
            <img src="images/logo.png" alt="logo" height="45" />
          </a>
          <div className="header__info">
            Hi,{" "}
            <a href="login.html" className="header__user" id="headerUser">
              Log in
            </a>
            <div className="header__shop">
              <a href="login.html" id="headerFavourites">
                <img src="images/favourite.png" alt="favourite" height="20" />
                <span
                  className="header__shop--count"
                  id="headerFavouritesCount"
                >
                  0
                </span>
              </a>
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
