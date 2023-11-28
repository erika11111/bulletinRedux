import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/usersSlice";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((item) => item.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
}
