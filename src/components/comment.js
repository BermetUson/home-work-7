import UserInfo from "./UserInfo";
import { dateFormat } from "../helpers/general";
import "./comment.css";

import CommentWrapper from "./CommentWrapper";
const Comment = (props) => {
  console.log(props);
  return (
    <div className="Comment">
      <div className="commentUserInfo">
        <UserInfo author={props.author} />
      </div>
      <CommentWrapper>
        <div className="commentText">
          <p>{props.text}</p>
          {dateFormat(props.date)}
        </div>
      </CommentWrapper>
    </div>
  );
};

export default Comment;