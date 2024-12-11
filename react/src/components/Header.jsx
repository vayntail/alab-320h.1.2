import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Navbar
        navitemsList={[
          "Women's",
          "Men's",
          "on the Street",
          "The Catwalk",
          "AdWatch",
          "About",
        ]}
        itemsColor={"tomato"}
      />
    </header>
  );
}

export default Header;
