import { Form, List } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
function WorkExperience({ register, index }) {
  return (
    <>
      WorkExperience
      <Form.Field>
        <label>Company</label>
        <input
          name={`${index}companywork`}
          ref={register}
          placeholder="Company"
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input
          name={`${index}locationwork`}
          ref={register}
          placeholder="City"
        ></input>
      </Form.Field>
      {/*   <Form.Field>
                <label>Start Date</label>
                <SemanticDatepicker />
                <label>End Date</label>
                <SemanticDatepicker />
              </Form.Field>
          */}
      <Form.Field>
        <label>Industry</label>
        <input
          name={`${index}industrywork`}
          ref={register}
          placeholder="Industry"
        ></input>
      </Form.Field>
      <List bulleted>
        <label>Highlights</label>
        <List.Item>
          <input
            name={`${index}ahighlightwork`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
        <List.Item>
          <input
            name={`${index}bhighlightwork`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
        <List.Item>
          <input
            name={`${index}chighlightwork`}
            ref={register}
            placeholder="Highlight"
          ></input>
        </List.Item>
      </List>
    </>
  );
}
export default WorkExperience;
