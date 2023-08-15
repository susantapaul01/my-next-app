// import getSinglePost from "@/lib/getSinglePost";
import blogData from "../../data/blogData";

const singleBlog = ({params}) => {
  const i = parseInt(params.id);
  const post = blogData.find((item) => item.id === i);
  console.log("Hello")
  // console.log(post.title);
  if(!post) {
    return <div>No data found</div>
  }
  else {
    return (
      <section>
          <div className="border border-slate-500 p-2 rounded">
              {/* <h1 className="mb-[15px]">Blog Id: {blogData[i].id}</h1>
              <h2 className="mb-[15px]">The Title: {blogData[i].title}</h2>
              <p className="">The Body: {blogData[i].body}</p> */}
              <h1 className="mb-[15px]">Blog Id: {post.id}</h1>
              <h2 className="mb-[15px]">The Title: {post.title}</h2>
              <p className="">The Body: {post.body}</p>
          </div>
      </section>
    )
  }
}

export default singleBlog;