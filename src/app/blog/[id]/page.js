// import getSinglePost from "@/lib/getSinglePost";
import blogData from "../../data/blogData";

const singleBlog = ({params}) => {
    let post = blogData.find((id) => (id === params.id));
    console.log(post)

  return (
    <section>
        <div className="border border-slate-500 p-2 rounded">
          
            {/* <h1>Blog Id: {post.id}</h1> */}
            <h1 className="mb-[20px] font-bold"> The title: </h1>
            <h2 className="">The Body:</h2>
            <div className=""></div>
        </div>
    </section>
  )
}

export default singleBlog;