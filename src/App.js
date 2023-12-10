import styles from "./index.scss";
import Menu from "./components/SideMenu/Menu";
import Layout from "./components/Pages/layout/Layout";

function App() {
  return (
    <div className="application">
      <Menu />
      <Layout>

      </Layout>
    </div>
  );
}

export default App;
