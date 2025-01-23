import Link from "next/link";

const BlogPostTitle = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return (
        <div className="lg:w-11/12 mx-auto mt-5">
            <ul className="pl-10 md:pl-14 lg:pl-0">
                {
                    posts.map(post => <Link href={`/blog/${post.id}`}><li key={post.id} className="list-disc mt-4 text-cyan-900">{post.title}</li></Link>)
                }
            </ul>
        </div>
    );
};

export default BlogPostTitle;