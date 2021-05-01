import { Form, List } from "semantic-ui-react";
function Project({ index, register }) {
  return (
    <>
      <Form.Field>
        <label>Project Name</label>
        <input
          name={`${index}nameproject`}
          ref={register}
          placeholder="Project Name"
        ></input>
      </Form.Field>
      <Form.Field>
      <label>Highlights</label>
      <List bulleted>
        
        <List.Item>
          <input
            name={`${index}ahighlightproject`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
        <List.Item>
          <input
            name={`${index}bhighlightproject`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
        <List.Item>
          <input
            name={`${index}chighlightproject`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
      </List>
      </Form.Field>
    </>
  );
}
export default Project;
