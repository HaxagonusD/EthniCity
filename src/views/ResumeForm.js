import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Volunteer from "../components/Volunteer";
import Project from "../components/Project";
import { Card, Form, Icon, Button, Input } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import parseResumeFormData from "../services/parseResumeFormData";
import postFormDataToServer from "../services/postFormDataToServer";

function ResumeForm({
  resumeFormWorkExperience,
  setResumeFormWorkExperience,
  resumeFormVolunteer,
  setResumeFormVolunteer,
  resumeFormProject,
  setResumeFormProject,
  resumeFormEducation,
  setResumeFormEducation,
}) {
  const { register, handleSubmit } = useForm();
  // Make a parser for this form's unstrcutred data
  const submitForm = (data) => {
    console.log(data);
    postFormDataToServer(parseResumeFormData(data));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Field>
          <label>First Name</label>
          <input name="firstName" ref={register} placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastName" ref={register} placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" ref={register} placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Gender</label>
          <input name="gender" ref={register} placeholder="gender" />
        </Form.Field>
        <Form.Field>
          <label>LGBTQ</label>
          <input name="LGBTQ" ref={register} placeholder="LGBTQ" />
        </Form.Field>
        <Form.Field>
          <label>Ethinicity</label>
          <input name="ethnicity" ref={register} placeholder="ethnicity" />
        </Form.Field>

        {resumeFormWorkExperience.map((current, index) => {
          return (
            <WorkExperience index={index} register={register} key={index} />
          );
        })}
        {resumeFormWorkExperience.length !== 0 && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              const newWork = [...resumeFormWorkExperience];
              newWork.pop();
              setResumeFormWorkExperience(newWork);
            }}
          >
            Remove Work Experience
          </Button>
        )}
        <Button
          onClick={(event) => {
            event.preventDefault();
            const newWork = [...resumeFormWorkExperience, {}];
            setResumeFormWorkExperience(newWork);
          }}
        >
          Add Work Experience
        </Button>
        {resumeFormVolunteer.map((current, index) => {
          return <Volunteer index={index} register={register} key={index} />;
        })}
        {resumeFormVolunteer.length !== 0 && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              const newWork = [...resumeFormVolunteer];
              newWork.pop();
              setResumeFormVolunteer(newWork);
            }}
          >
            Remove Volunteer Experience
          </Button>
        )}
        <Button
          onClick={(event) => {
            event.preventDefault();
            const newWork = [...resumeFormVolunteer, {}];
            setResumeFormVolunteer(newWork);
          }}
        >
          Add Volunteer Experience
        </Button>
        {resumeFormProject.map((current, index) => {
          return <Project index={index} register={register} key={index} />;
        })}
        {resumeFormProject.length !== 0 && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              const newWork = [...resumeFormProject];
              newWork.pop();
              setResumeFormProject(newWork);
            }}
          >
            Remove Project
          </Button>
        )}
        <Button
          onClick={(event) => {
            event.preventDefault();
            const newWork = [...resumeFormProject, {}];
            setResumeFormProject(newWork);
          }}
        >
          Add Project
        </Button>
        {resumeFormEducation.map((current, index) => {
          return <Education index={index} register={register} key={index} />;
        })}
        {resumeFormEducation.length !== 0 && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              const newWork = [...resumeFormEducation];
              newWork.pop();
              setResumeFormEducation(newWork);
            }}
          >
            Remove Education
          </Button>
        )}
        <Button
          onClick={(event) => {
            event.preventDefault();
            const newWork = [...resumeFormEducation, {}];
            setResumeFormEducation(newWork);
          }}
        >
          Add Education
        </Button>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ResumeForm;
