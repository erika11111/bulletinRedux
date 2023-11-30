import { useSelector } from "react-redux";
import { selectAllPosts } from "../store/postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function PostsList() {
  //getting all the posts that are defined in the state
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  //maping over the posts and creating an article for each post
  const renderedPosts = orderedPosts.map((item) => (
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={item.userId} />
        <TimeAgo timestamp={item.date} />
      </p>
      <ReactionButtons item={item} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}
