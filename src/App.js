//eslint-disable-next-line
import styles from "./index.scss";
import Menu from "./components/SideMenu/Menu";
import Layout from "./components/Pages/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Product from "./components/Pages/Product";
import AllCustomers from "./components/Pages/Customers";
import Income from "./components/Pages/Income";
import Promote from "./components/Pages/Product";
import Help from "./components/Pages/Help";


function App() {
  return (
    <div className="application">
      <Menu />
      <Routes>
        <Route path="/" element={ <Layout> <Dashboard /> </Layout> }/>
        <Route path="/product" element={ <Layout> <Product /> </Layout> }/>
        <Route path="/customers" element={ <Layout> <AllCustomers /> </Layout> }/>
        <Route path="/income" element={ <Layout> <Income /> </Layout> }/>
        <Route path="/promote" element={ <Layout> <Promote /> </Layout> }/>
        <Route path="/help" element={ <Layout> <Help /> </Layout> }/>
      </Routes>
    </div>
  );
}

export default App;
