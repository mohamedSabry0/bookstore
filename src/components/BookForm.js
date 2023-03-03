import { Form } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

export default function BookForm() {
  return (

    <Form>
      <Input name="title" />
      <Input name="author" />
      <Button label="Add Book" />
    </Form>
  );
}
