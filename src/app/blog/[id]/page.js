import getSinglePost from "@/lib/getSinglePost";


const singleBlog = async ({params}) => {
    const id = params.id;
    const post = await getSinglePost(id);
  return (
    <section>
        <h1 className="mb-[50px] font-bold">{post.title}</h1>
        <div>
          <ol className="ml-[50px]">
              {post.body}
          </ol>
        </div>
    </section>
  )
}

export default singleBlog;