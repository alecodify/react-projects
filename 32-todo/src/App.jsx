import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, FormGroup, Input, InputGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { ADD_TODO, REMOVE_TODO } from './context/action.type';
import { useGolbalContext } from './context/Context';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const { todos, dispatch } = useGolbalContext();
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please Enter Todo");
    }

    const todo = {
      todoString,
      id: v4()
    }

    dispatch({ type: ADD_TODO, payload: todo })

    setTodoString("")
  }

  return (
    <main>
      <Container fluid>
        <h1>Todo Application</h1>

        <ListGroup className='mt-5 mb-2 items'>
          {todos.map(todo => (
            <ListGroupItem key={todo.id} className='d-flex justify-content-between align-items-center'>
              <span className='text-truncate' style={{ flex: 1 }}>
                {todo.todoString}
              </span>
              <span className='float-end' onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}><FaCheck /></span>
            </ListGroupItem>
          ))}
        </ListGroup>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <InputGroup>
              <Input type='text' name='todo' id='todo' placeholder='Enter your todo item' value={todoString} onChange={(e) => setTodoString(e.target.value)} />
              <Button color="warning">Add</Button>
            </InputGroup>
          </FormGroup>
        </Form>

      </Container>
    </main>
  )
}

export default App
