import AppRoutes from "./components/layout/AppRouter/AppRoutes";
import Layout from "./components/layout/Layout/Layout";
import Card from './components/sliders/Card/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./assets/font-awesome/css/font-awesome.css"
import "./assets/font-awesome/css/font-awesome.min.css"



function App() {
  return (
    <Layout>
      <Card />
      <AppRoutes/>
    </Layout>
  );
}

export default App;
