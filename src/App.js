// styles
import styles from './App.module.scss'
// pages
import Home from './components/pages/Home';
// components
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
