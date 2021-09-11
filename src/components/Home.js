import useFetch from "../helper/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList title={"All Blogs"} blogs={blogs} />}
    </div>
  );
};

export default Home;
