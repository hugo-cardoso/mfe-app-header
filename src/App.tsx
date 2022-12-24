import { useState } from "react";
import { AppProps } from "./types";
import "./App.css";

type Props = {
  props: AppProps;
};

function App(props: Props) {
  const MENU_ITEMS: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);

  function handleClickChangeLink(path: string) {
    props.props.changeRoute(path);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            handleClickChangeLink("/");
          }}
        >
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsActiveHamburger(!isActiveHamburger)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${ isActiveHamburger && 'is-active' }`}>
        <div className="navbar-start">
          {MENU_ITEMS.map((item, index) => (
            <a
              key={index}
              className="navbar-item"
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                handleClickChangeLink(item.href);
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default App;
