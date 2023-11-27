import "./App.css";
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
