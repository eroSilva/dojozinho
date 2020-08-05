import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faTrashAlt);
function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const input = useRef();

  const addToDoItems = () => {
    setToDoItems([...toDoItems, input.current.value]);
  };

  return (
    <Container className="p-3">
      <h1 className="mr-auto">Dojozinho MKT - Todo List</h1>
      <InputGroup className="mb-3">
        <FormControl
          data-testid="new-todo"
          key="olaInput"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={input}
        />
        <InputGroup.Append>
          <Button onClick={addToDoItems} variant="outline-secondary" data-testid="add">
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>

      {toDoItems.map((item, index) => (
        <InputGroup className="mb-3" key={index}>
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.Prepend>
          <p data-testid={`paragrafo-${index}`} className={`app-paragraph`}>{item}</p>
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={["fas", "trash-alt"]} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      ))}
    </Container>
  );
}

export default App;
