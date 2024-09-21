// import "bootstrap/dist/css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./Components/LoadingSpinner";


function App() {


 const fetchStatus =  useSelector(store=>store.fetchStatus)

  return (
    <>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <Footer />
    </>
  );
}

export default App;
