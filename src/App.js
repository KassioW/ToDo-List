import './App.css';
import Form from './components/Form';
import TodoItem from "./components/TodoItem";
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs" style={{backgroundcolor: red}}>
        <TodoItem />
        <Form />
        </Container>
    </div>
  );
}

export default App;
