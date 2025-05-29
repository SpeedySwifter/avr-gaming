import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  localImage?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {post.localImage && (
        <Image
          src={post.localImage}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{post.date}</p>
        <p className="text-gray-700 text-sm">{post.excerpt}</p>
        <Link
          href={`/news/${post.slug}`}
          className="block mt-4 text-avrblue font-medium hover:underline"
        >
          Weiterlesen →
        </Link>
      </div>
    </motion.div>
  );
}
