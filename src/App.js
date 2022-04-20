import './App.css';
import Form from './components/Form';
import TodoItem from "./components/TodoItem";
import { Container, List } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>    

        <Form />
        <List sx={{ bgcolor: 'background.paper' }}>
        <TodoItem />
        </List>
        </Container>

    </div>
  );
}

export default App;
