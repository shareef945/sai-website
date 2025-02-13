import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogPost {
  date: string
  readTime: string
  title: string
  description: string
  image: string
  author: {
    name: string
    avatar: string
  }
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-background h-[72rem] w-[23.9375rem] border-0">
      <CardHeader className="absolute inset-0 p-0">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
      </CardHeader>
      <CardContent className="absolute bottom-0 p-6 z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
          
          <h2 className="text-2xl font-bold leading-tight text-foreground">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
