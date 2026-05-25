import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import StockCommentForm from "./StockCommentForm";
import StockCommentList from "../StockCommentList/StockCommentList";
import { CommentGet } from "../../Models/Comment";


type Props = {
  stockSymbol: string;
  mockComments?: CommentGet[];
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol, mockComments }: Props) => {
    const [comments, setComment] = useState<CommentGet[] | null>(
      mockComments ?? null,
    );
    const [loading, setLoading] = useState<boolean>();
  
    useEffect(() => {
      if (mockComments) {
        setComment(mockComments);
        setLoading(false);
        return;
      }

      getComments();
    }, [mockComments, stockSymbol]);
  const handleComment = (e: CommentFormInputs) => {
    if (mockComments) {
      toast.info(`Mock comment "${e.title}" submitted.`);
      return;
    }

    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully!");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };
  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComment(res?.data!);
    });
  };
  return (
    <div className="flex flex-col">
      {loading ? <div>Loading...</div> : <StockCommentList comments={comments ?? []} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;