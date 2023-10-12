import React from 'react'
import FormContact from '../../components/form-contact/FormContact'
import { formValueSelector, formValues } from 'redux-form';

export default function ContactPage() {
  const selector = formValueSelector('contact')
  const ItemList = formValues('contact');
  const submit = (data) => {
    // print the form values to the console
    // data?.preventDefault();

    console.log(data);
  }
  return (
    <FormContact handleSubmit={submit}/>
  )
}
