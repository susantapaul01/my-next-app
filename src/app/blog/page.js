import getAllpost from "@/lib/getAllPost";
import Link from "next/link";

const Blog = async () => {
  const posts = await getAllpost();
  return (
    <section>
        <h1 className="mb-[50px] font-bold">All Blog post list</h1>
        <div>
          <ol className="ml-[50px]">
              {
                posts.map(post => {
                  return (
                        <li className="mb-5" key={post.id}>
                            <Link href={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
                        </li>
                  )
                })
              }
          </ol>
        </div>
    </section>
  )
}

export default Blog;