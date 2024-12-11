import Navbar from "./Navbar";

function Footer() {
  return (
    <footer>
      <Navbar
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
      <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
}

export default Footer;
