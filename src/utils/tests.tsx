import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../components/PostComments';

test('deve adicionar dois comentários', () => {

  render(<Post />);


  const textarea = screen.getByRole('textbox');
  const submitButton = screen.getByRole('button', { name: /comentar/i });


  fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);

 
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();


  fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);


  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

  const comments = screen.getAllByRole('listitem');
  expect(comments.length).toBe(2); 
});