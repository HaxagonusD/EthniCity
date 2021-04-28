import { Form, Checkbox, Button } from "semantic-ui-react";

function Education({ register, index }) {
  return (
    <>
      <Form.Field>
        <label>Institution Name</label>
        <input
          name={`${index}institutioneducation`}
          ref={register}
          placeholder="Institution"
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Type of degree</label>
        <input
          name={`${index}degreeeducation`}
          ref={register}
          placeholder="Degree"
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Concetration</label>
        <input
          name={`${index}concentrationeducation`}
          ref={register}
          placeholder="Concetration"
        ></input>
      </Form.Field>
    </>
  );
}

export default Education;
