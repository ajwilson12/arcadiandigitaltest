// styles
import styles from './App.module.scss'
// pages
import Home from './components/pages/Home';
// components
import Navigation from './components/layout/Navigation';

// functions
import getWindowDimensions from './functions/getWindowDimensions';

function App() {

  const { width } = getWindowDimensions();

  return (
    <div className={styles.App} style={{width: {width} + "px", minWidth: "300px"}}>
      <Navigation clientWidth={width}/>
      <Home clientWidth={width}/>
    </div>
  );
}

export default App;
