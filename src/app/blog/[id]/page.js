// import getSinglePost from "@/lib/getSinglePost";
import blogData from "../../data/blogData";

const singleBlog = ({params}) => {
  const id = params.id;
    // let post = blogData.find(({id}) => (id === params.id));
    console.log(id);
  return (
    <section>
        <div className="border border-slate-500 p-2 rounded">
          
            <h1 className="mb-[15px]">Blog Id: {blogData[id].id}</h1>
            <h2 className="mb-[15px]">The Title: {blogData[id].title}</h2>
            <p className="">The Body: {blogData[id].body}</p>
        </div>
    </section>
  )
}

export default singleBlog;