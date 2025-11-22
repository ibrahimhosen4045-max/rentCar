import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setPost(found);
      });
  }, [id]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="container mx-auto grid lg:grid-cols-2 gap-10 py-15">
      <div>
        <img src={post.image} className="w-full rounded-xl mb-4" />
      </div>
      <div className="flex flex-col justify-around">
        <div className=" border border-black/20 lg:py-6 lg:px-6 rounded-2xl">
          <h1 className="text-2xl font-bold mb-2 font-jalano">{post.title}</h1>
          <p className="text-gray-600 mb-4 font-semibold">{post.excerpt}</p>
          <p className="text-lg">Price: ${post.pricePerDay}/day</p>
          <p className="text-sm text-gray-500 mt-4">Date: {post.date}</p>
        </div>
        <div className="flex flex-col gap-3 border p-5 rounded-2xl text-gray-600 font-medium border-black/20">
          <h1 className="text-lg font-bold text-black">More Things</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, amet reprehenderit. Numquam ratione unde illo sapiente quae vitae maxime dolorum dolores ullam eos sequi, nam culpa animi sunt veniam, et aspernatur accusamus facere ipsum modi nihil illum vero? Repellat tenetur quis magni enim autem veniam sapiente cupiditate aut, debitis incidunt alias ab at eum itaque! Aperiam eligendi obcaecati dignissimos ducimus quia accusantium, nulla quo nam consequuntur veritatis dolores maiores. Dicta provident animi odit assumenda suscipit quisquam mollitia porro rerum blanditiis explicabo unde nemo voluptates deleniti atque ad nisi iure voluptas aspernatur voluptatum nostrum, consequuntur autem architecto ea tenetur. Similique, dolorem.</p>
        </div>
      </div>
    </div>
  );
}
