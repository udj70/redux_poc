
//import ProductsContainer from './components/ProductsContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import MainRouter from './components/MainRouter';
function App() {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  );
}

export default App;
