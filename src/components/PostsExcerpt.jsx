import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
export default function PostsExcerpt({ item }) {
  return (
    <article>
      <h3>{item.title}</h3>
      <p>{item.body.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={item.userId} />
        <TimeAgo timestamp={item.date} />
      </p>
      <ReactionButtons item={item} />
    </article>
  );
}
