
const blogDetails = async ({ params }) => {
    const { id } = params;
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json();
    console.log(post);

    return (
        <div>
            <h2 className="text-center text-2xl font-bold py-5">Blog Details</h2>
            <div className="card bg-emerald-700 shadow-xl w-11/12 lg:w-5/12 mx-auto border-2 border-gray-500 text-white">
                <div className="card-body">
                    <p>Blog Id: {post.id}</p>
                    <p>User Id: {post.userId}</p>
                    <h2 className="card-title">{post.title}</h2>
                    <p className="text-gray-300">{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default blogDetails;