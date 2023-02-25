import { Form } from 'react-router-dom';
import Input from './Input';

export default function BookForm() {
  return (

    <Form>
      <Input name="title" />
      <Input name="author" />
    </Form>
  );
}
