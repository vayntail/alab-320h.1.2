import "./App.css";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          date="2020-11-12"
          title="On the Street in Brooklyn"
          imgSrc="/imgs/blog-image-1.jpg"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur perferendis dolorum et in fugit animi excepturi. Consectetur nihil quaerat dignissimos. Tempora nesciunt odit cupiditate corporis doloremque facilis architecto dicta. "
        />
        <Article
          date="2020-11-11"
          title="Vintage in Vogue"
          imgSrc="/imgs/blog-image-2.jpg"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ratione delectus a nostrum voluptatem error eaque repudiandae perspiciatis quo, non dolorem? Modi ipsum adipisci sit! Odit optio asperiores modi. Quam. "
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
