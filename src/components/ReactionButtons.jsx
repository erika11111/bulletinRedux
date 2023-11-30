import { useDispatch } from "react-redux";
import { reactionsAdded } from "../store/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};

export default function ReactionButtons({ item }) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionsAdded({ postId: item.id, reaction: name }))
        }
      >
        {emoji} {item.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
}
