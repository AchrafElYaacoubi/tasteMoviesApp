import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

const MoviesForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup for="movieName">
        <Label>What are you looking for today?</Label>
        <Input 
          type="text" 
          name="movieName" 
          id="movieName" 
          placeholder="favorite movie title..."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.amount}
        />
        {errors.movieName && touched.movieName &&  <Alert color="danger">{errors.movieName}</Alert>}
        <FormText className="text-muted">
          We'll try hard to find something similar to it =)
        </FormText>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}


const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    movieName: '',
  }),

  validationSchema: Yup.object().shape({
    movieName: Yup.string().required('Please enter a movie name you want to watch!'),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values.movieName)
    setSubmitting(false);
  },

  displayName: 'TasteMoviesForm',
})(MoviesForm);

export default MyEnhancedForm;
