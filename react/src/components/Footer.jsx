import Navbar from "./Navbar";

function Footer() {
  return (
    <footer>
      <Navbar
        className="bottom-nav"
        navitemsList={[
          "Women's",
          "Men's",
          "on the Street",
          "The Catwalk",
          "AdWatch",
          "About",
          "Tips",
        ]}
      />
    </footer>
  );
}

export default Footer;
