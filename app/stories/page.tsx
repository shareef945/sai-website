import { GridBackground } from "@/components/GridBackground";
import { BlogPostHeader } from "@/components/story-card";

export const posts = [
  {
    id: "1",
    slug: "sustainability-through-technology",
    date: "10 December 2024",
    readTime: "6 minute read",
    title:
      "Sustainability Through Technology: Innovations for a Greener Future",
    description:
      "Technology plays a crucial role in addressing environmental challenges and promoting sustainability.",
    author: {
      name: "Samuel Jan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita culpa autem ea iste quia vitae ex repellendus nemo architecto facilis laboriosam pariatur numquam suscipit, aliquid blanditiis recusandae officiis. Odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit possimus, quis, consequuntur ex modi dolorum veritatis quo tenetur alias itaque! Culpa exercitationem at laboriosam voluptates ut possimus dolor illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita culpa autem ea iste quia vitae ex repellendus nemo architecto facilis laboriosam pariatur numquam suscipit, aliquid blanditiis recusandae officiis. Odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit possimus, quis, consequuntur ex modi dolorum veritatis quo tenetur alias itaque! Culpa exercitationem at laboriosam voluptates ut possimus dolor illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita culpa autem ea iste quia vitae ex repellendus nemo architecto facilis laboriosam pariatur numquam suscipit, aliquid blanditiis recusandae officiis. Odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit possimus, quis, consequuntur ex modi dolorum veritatis quo tenetur alias itaque! Culpa exercitationem at laboriosam voluptates ut possimus dolor illo?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore expedita culpa autem ea iste quia vitae ex repellendus nemo architecto facilis laboriosam pariatur numquam suscipit, aliquid blanditiis recusandae officiis. Odit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit possimus, quis, consequuntur ex modi dolorum veritatis quo tenetur alias itaque! Culpa exercitationem atlaboriosam voluptates ut possimus dolor illo?",
    featuredImage: "/image.png",
  },
];

export default function StoriesPage() {
  return (
    <>
      <GridBackground size="sm" />
      <main className="mx-auto px-[180px] h-screen relative top-[229px]">
        <h1 className="mb-16 text-[4.375rem] font-bold tracking-tight text-white">
          Stories
        </h1>

        <div className="grid gap-[3.75rem]">
          {posts.map((post) => (
            <BlogPostHeader key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}
