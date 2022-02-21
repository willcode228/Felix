import RouteMap from '../components/RouteMap/RouteMap';
import Navbar from '../components/Navbar/Navbar';
import './App.general.scss';
import Loading from '../components/Loading/Loading';

const App = () => {
  return (
    <>
      <Loading />
      <Navbar />
      <RouteMap />
    </>
  );
};

export default App;
