import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "../page";
import { notFound } from "next/navigation";
import { BG } from "@/components/BG";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPost(props: PageProps) {
  const params = await props.params;
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
    <BG/>
      <div className=" z-20 relative">
        <Link
          href="/stories"
          className="relative md:top-[55px] top-6 inline-flex items-center md:left-[49px] left-4 text-[#898989]  hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Link>
        <article className="min-h-screen text-white pb-20 w-full md:w-[58.1875rem] mx-auto px-4 md:px-0">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <header className="py-10 md:py-6">
              <div className="mt-2">
                <span className="text-orange-500">Blog</span>
              </div>
            </header>

            {/* Title Section */}
            <div className="mt-6 md:mt-8 mb-8 md:mb-12">
              <h1 className="text-2xl md:text-[3.125rem] font-bold leading-tight mb-4 md:mb-6">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-[#898989] text-sm mb-6 md:mb-8">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8 md:h-10 md:w-10">
                  <AvatarImage
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] mb-8 md:mb-12">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#898989] leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
