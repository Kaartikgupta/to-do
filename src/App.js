import './App.css';
import Aux from './hoc/Auxiliary';
import Toolbar from './Components/Navigation/Toolbar/Toolbar'
import Todo from './Containers/to-do/to-do';
function App() {
  return (
    <Aux>
      <Toolbar />
      <Todo />
    </Aux>
  );
}

export default App;
