import { Grid } from '@mui/material';
import FormProps, { FieldProps } from './Form.d';

function FormItem() {

}

function Form(props: FormProps) {
  const { fields } = props;

  const handleSubmit = () => {};

  const renderField = (field: FieldProps) => {

    return (
      <Grid item xs={field.weight}>

      </Grid>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container {...props}>
        {
          fields.map(renderField)
        }
      </Grid>
    </form>
  );
}

export default Form;
