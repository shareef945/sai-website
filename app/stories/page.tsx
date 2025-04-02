import { GridBackground } from "@/components/GridBackground";
import { BlogPostHeader } from "@/components/story-card";
import { posts } from "@/content/posts";


export default function StoriesPage() {
  return (
    <>
      <GridBackground size="sm" />
      <main className="mx-auto px-4 sm:px-6 md:px-8 lg:px-[180px] min-h-screen relative pt-8  md:mt-6">
        <h1 className="mb-8 sm:mb-12 lg:mb-16 text-xl sm:text-2xl lg:text-[1.875rem]  font-medium tracking-tight text-white">
          Stories
        </h1>

        <div className="grid gap-8 sm:gap-12 lg:gap-[3.75rem]">
          {posts.map((post) => (
            <BlogPostHeader key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}
