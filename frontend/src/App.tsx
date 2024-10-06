import { ScrollRestoration } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ page }: { page: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
