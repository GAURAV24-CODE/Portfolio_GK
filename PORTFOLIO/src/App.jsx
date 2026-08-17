import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Background from "./components/common/Background";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;