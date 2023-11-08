import CardBlog from "./CardBlog";

const Blog = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl" id="blog">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">Blog</h1>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-row gap-4 m-12">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
};

export default Blog;
