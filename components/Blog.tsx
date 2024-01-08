import CardBlog from "./CardBlog";

interface Props {
  t: any;
}

const Blog = (props: Props) => {
  return (
    <div className="mx-auto p-2 w-full max-w-7xl" id="blog">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">{props.t.BLOGS_CAP}</h1>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-col items-center  md:flex-row gap-5">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
};

export default Blog;
