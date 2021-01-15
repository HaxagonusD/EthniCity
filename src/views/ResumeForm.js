import WorkExperience from "../components/WorkExperience";
import Volunteer from "../components/Volunteer";
import Project from "../components/Project";
import { Form, Icon, Button, Input } from "semantic-ui-react";

function ResumeForm() {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input placeholder="Email" icon="at" />
        </Form.Field>

        <Project />
        <Volunteer />
        <WorkExperience />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ResumeForm;
