import { Form, List } from "semantic-ui-react";
function Project() {
  return (
    <>
      <Form.Field>
        <label>Project Name</label>
        <input placeholder="Project Name"></input>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder="Description"></input>
      </Form.Field>
      <List bulleted>
        <label>Highlights</label>
        <List.Item>
          <input placeholder="Highlight"></input>
        </List.Item>
        <List.Item>
          <input placeholder="Highlight"></input>
        </List.Item>
        <List.Item>
          <input placeholder="Highlight"></input>
        </List.Item>
      </List>
    </>
  );
}
export default Project;
