import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const StockCommentForm = ({ handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });

  return (
    <form className="mt-4 ml-4" onSubmit={handleSubmit(handleComment)}>
      <input
        type="text"
        id="title"
        className="input-field mb-3"
        placeholder="Title"
        {...register('title')}
      />
      {errors.title ? (
        <p className="mb-2 text-sm text-feedbackError">{errors.title.message}</p>
      ) : null}
      <div className="mb-4 rounded-card border border-line bg-surface p-4">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="w-full resize-none border-0 bg-transparent text-sm text-contentPrimary placeholder:text-contentMuted focus:outline-none focus:ring-0"
          placeholder="Write a comment..."
          {...register('content')}
        />
      </div>
      {errors.content ? (
        <p className="mb-2 text-sm text-feedbackError">{errors.content.message}</p>
      ) : null}
      <button type="submit" className="btn-primary text-sm">
        Post comment
      </button>
    </form>
  );
};

export default StockCommentForm;
