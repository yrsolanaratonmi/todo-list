import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TasksBlock from "./UI/TasksBlock"





function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        TODO LIST made by roma baranik
          <TasksBlock info = {props.info} render = {props.render}/>
      </header>

    </div>
  );
}

export default App;
