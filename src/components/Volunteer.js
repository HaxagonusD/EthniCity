import { Form, List } from "semantic-ui-react";
function Volunteer({ index, register }) {
  return (
    <>
      
      <Form>
        <Form.Field>
          <label>Organization</label>
          <input
            name={`${index}organizationvolunteer`}
            ref={register}
            placeholder="Organization"
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Cause</label>
          {/*This might be a drop down*/}
          <input
            name={`${index}causevolunteer`}
            ref={register}
            placeholder="Cause"
          ></input>
        </Form.Field>
        <Form.Field>
        <label>Highlights</label>
        <List bulleted>
          
          <List.Item>
            <input
              name={`${index}ahighlightvolunteer`}
              ref={register}
              placeholder="Highlight"
            ></input>
          </List.Item>
          <List.Item>
            <input
              name={`${index}bhighlightvolunteer`}
              ref={register}
              placeholder="Highlight"
            ></input>
          </List.Item>
          <List.Item>
            <input
              name={`${index}chighlightvolunteer`}
              ref={register}
              placeholder="Highlight"
            ></input>
          </List.Item>
        </List>
        </Form.Field>
      </Form>
    </>
  );
}

export default Volunteer;
