export default async function getSinglePost(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Error fetching Single post");
    }

    return response.json();
}