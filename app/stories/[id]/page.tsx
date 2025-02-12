import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "../page";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link
        href="/stories"
        className="relative top-[55px] inline-flex items-center left-[49px] text-gray-400 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back</span>
      </Link>{" "}
      <article className="min-h-screen text-white pb-20 w-[58.1875rem] mx-auto">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header */}
          <header className="py-6">
            <div className="mt-2">
              <span className="text-orange-500">Blog</span>
            </div>
          </header>

          {/* Title Section */}
          <div className="mt-8 mb-12">
            <h1 className="text-[3.125rem] font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-12">
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
              <p key={index} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
