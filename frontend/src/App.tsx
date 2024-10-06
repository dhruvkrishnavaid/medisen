import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ page }: { page: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  );
}

export default App;
