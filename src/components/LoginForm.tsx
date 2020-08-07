import { Box, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useLoginAssets, useSelectOption } from '../hooks';
import { SelectFormField } from '../util/form/SelectFormField';
import { TextFormFieldIcon } from '../util/form/TextFormFieldIcon';
import { TextFormFieldPassword } from '../util/form/TextFormFieldPassword';
export interface ILoginForm {
  financial_year: number;
  branch: number;
  user_name: string;
  user_password: string;
}
const initialValues: ILoginForm = {
  financial_year: 0,
  branch: 0,
  user_name: '',
  user_password: '',
};
const LoginSchema = Yup.object().shape({
  financial_year: Yup.number().required('Required'),
  branch: Yup.number().moreThan(0, 'Select Branch').required('Required'),
  user_name: Yup.string().required('Required'),
  user_password: Yup.string().required('Required'),
});
const LoginForm: React.FC = () => {
  const classes = useStyles();
  const { data, isLoading, isError } = useLoginAssets('login/assets');
  const years = useSelectOption(data?.years);
  const branches = useSelectOption(data?.branches);

  return (
    <Box component='section' className={classes.loginFormContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => {
          console.log('Submiting login form data ...', data);
        }}
        validationSchema={LoginSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <Field
              label='Financial Year'
              name='financial_year'
              options={years}
              component={SelectFormField}
              placeholder='Select'
            />
            <Field
              label='Branch'
              name='branch'
              options={branches}
              component={SelectFormField}
              placeholder='Select'
              autoFocus
            />
            <Field
              label='Username'
              name='user_name'
              component={TextFormFieldIcon}
              fullWidth
              required
              autoComplete='on'
              Icon={AccountCircle}
            />
            <TextFormFieldPassword name='user_password' label='Password' />
            <Button
              variant='outlined'
              type='submit'
              disabled={!dirty || !isValid}
              fullWidth
            >
              <Typography variant='body2'>Login</Typography>
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginFormContainer: {
      margin: theme.spacing(5, 3),
    },
  })
);
