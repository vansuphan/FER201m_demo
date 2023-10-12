import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";

let FormContact = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const onSubmit = (values) => {
    // values.preventDefault();
    // handleSubmit(event);
    console.log(values);
  };

  console.log(props);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

const selector = formValueSelector("contact"); // <-- same as form name
FormContact = connect((state) => {
  // can select values individually
  const { firstName, sex, notes, employed } = selector(
    state,
    "firstName",
    "sex",
    "notes",
    "employed"
  );
  return {
    firstName,
    sex,
    notes,
    fullName: `${firstName || ""}`,
  };
})(FormContact);

export default reduxForm({
  form: "contact", // a unique identifier for this form
})(FormContact);
