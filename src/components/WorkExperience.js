import { Form, List } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
function WorkExperience() {
  return (
    <>
      <Form.Field>
        <label>Company</label>
        <input placeholder="Company"></input>
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input placeholder="City"></input>
      </Form.Field>
      <Form.Field>
        <label>Start Date</label>
        <SemanticDatepicker />
        <label>End Date</label>
        <SemanticDatepicker />
      </Form.Field>
      <Form.Field>
        <label>Industry</label>
        <input placeholder="Industry"></input>
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
export default WorkExperience;
