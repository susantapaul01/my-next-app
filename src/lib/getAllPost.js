export default async function getAllpost() {
    console.log("Fetching data build...");
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Error fetching posts");
    }

    return response.json();
}