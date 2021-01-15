import { Form, List } from "semantic-ui-react";
function Volunteer() {
  return (
    <>
      <Form>
        <Form.Field>
          <label>Organization</label>
          <input placeholder="Organization"></input>
        </Form.Field>
        <Form.Field>
          <label>Cause</label>
          {/*This might be a drop down*/}
          <input placeholder="Cause"></input>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea placeholder="Description"></Form.TextArea>
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
      </Form>
    </>
  );
}

export default Volunteer;
