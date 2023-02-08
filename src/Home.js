import UseFetch from "./UseFetch";
import BlogList from "./BlogList";

function Home() {
  const { data: blogs, isLoading, error } = UseFetch('http://localhost:3001/blogs')

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
