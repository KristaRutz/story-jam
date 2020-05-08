import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function CreateProject() {
  return (
    <Container>
      <h1>Begin a new project</h1>
      <hr />
      <Form>
        <Form.Group>
          <Form.Label>Working Title</Form.Label>
          <Form.Control type="text" placeholder="Give your project a title" />
          <Form.Text className="text-muted">
            This title will be visible to contributors, and it can be changed
            later.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" placeholder="Create something amazing" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="warning" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default CreateProject;
