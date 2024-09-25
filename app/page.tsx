import About from "./_components/About";
import Blog from "./_components/Blog";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div>
      <Header isScroll />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}
