function Navbar({ navitemsList }) {
  return (
    <nav>
      <ul>
        {navitemsList.map((item) => {
          return (
            <li>
              <a href="/">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
