import { useSelector } from "react-redux";
import { selectAllPosts } from "../store/postsSlice";
export default function PostsList() {
  //getting all the posts that are defined in the state
  const posts = useSelector(selectAllPosts);
  //maping over the posts and creating an article for each post
  const renderedPosts = posts.map((item) => (
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}
