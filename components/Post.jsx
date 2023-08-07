import Link from "next/link";

const Post = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <div>
      <section className="">
        <h1 className="">
          <span className="">{type} Meow</span>
        </h1>
        <p className="">{type} a post and use AI to transform it into a meow post.</p>

        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <div className="m-5 flex flex-col gap-7 p-5 rounded-md glassmorphism">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="post">
                Post
              </label>
              <textarea
                value={post.meow}
                onChange={(e) => setPost({ ...post, meow: e.target.value })}
                className="shadow-sm flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your post here..."
                name="comment"
                rows="5"
                cols="80"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                Tag
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">#</span>
                </div>
                <input
                  value={post.tag}
                  onChange={(e) => setPost({ ...post, tag: e.target.value })}
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                  placeholder="meow"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse items-center">
              <button
                type="submit"
                disabled={submitting}
                className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-4"
              >
                {submitting ? `${type}...` : type}
              </button>
              <Link href="/" className="text-gray-500 text-sm">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Post;
