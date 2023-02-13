import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';
import {
  Button,
  DialogActions,
} from '@material-ui/core';
import { ICustomer } from '../../models/customer';
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format (XXX-XXX-XXXX)'),
  emailAddress: Yup.string().email('Invalid email address').required('Email address is required'),
});

interface ICustomerFormProps {
  initialValues: ICustomer | null;
  onSave: (customer: Partial<ICustomer>) => void;
  onClose: () => void;
}

const CustomerForm = ({initialValues, onSave, onClose }: ICustomerFormProps) => {
  return (
    <Formik
      initialValues={initialValues ?? { name: '', address: '', phoneNumber: '', emailAddress: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSave(values)
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Field
                fullWidth
                as={TextField}
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </div>
            <div>
              <Field
                fullWidth
                as={TextField}
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />
            </div>
            <div>
              <Field
                fullWidth
                as={TextField}
                label="Phone Number (XXX-XXX-XXXX)"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
            </div>
            <div>
              <Field
                fullWidth
                as={TextField}
                label="Email Address"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emailAddress && Boolean(errors.emailAddress)}
                helperText={touched.emailAddress && errors.emailAddress}
              />
            </div>
          </div>
          <DialogActions>
          <Button onClick={onClose} >Cancel</Button>
          <Button type="submit"  variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
