import styles from "./index.scss";
import Menu from "./components/SideMenu/Menu";

function App() {
  return (
    <div className={styles.application}>
      <Menu />
    </div>
  );
}

export default App;
