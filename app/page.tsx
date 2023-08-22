import Other from "./(home)/Other";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Sidebar from "./(shared)/Sidebar";
import Subscribe from "./(shared)/Subscribe";
import { prisma } from "./api/client";
import { Post } from "@prisma/client";

export const revalidate = 60;

const getPost = async () => {
  const posts = await prisma.post.findMany();
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );
  return formattedPosts;
};

export default async function Home() {
  const posts = await getPost();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };
  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className='px-10 leading-7'>
      <Trending trendingPosts={trendingPosts}></Trending>
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
          <Tech techPosts={techPosts}></Tech>
          <Travel travelPosts={travelPosts}></Travel>
          <Other otherPosts={otherPosts}></Other>
          <div className='hidder md:block'>
            <Subscribe></Subscribe>
          </div>
        </div>
        <div className='basis-1/4'>
          <Sidebar></Sidebar>
        </div>
      </div>
    </main>
  );
}
