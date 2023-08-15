import Link from "next/link";
import blogData from "../data/blogData";

const blog = () => {
  return (
    <section>
      <div>
        <h1 className="text-bold mb-[20px]">List of JSON data</h1>
        <ol>
          {
            blogData.map((post) => {
              return (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.id}. {post.title}</Link>  
              </li>
              )
            }) 
          }
          </ol>
      </div>
    </section>
  )
}

export default blog;















// import getAllpost from "@/lib/getAllPost";
// import Link from "next/link";

// const Blog = async () => {
//   const posts = await getAllpost();
//   return (
//     <section>
//         <h1 className="ml-[30px] mb-[50px] font-bold">All Blog post list</h1>
//         <div>
//           <ol className="ml-[30px]">
//               {
//                 posts.map(post => {
//                   return (
//                         <li className="mb-5" key={post.id}>
//                             <Link href={`/blog/${post.id}`}>{post.id} - {post.title}</Link>
//                         </li>
//                   )
//                 })
//               }
//           </ol>
//         </div>
//     </section>
//   )
// }

// export default Blog;