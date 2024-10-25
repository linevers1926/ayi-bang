import React from 'react';
import { Heart, MessageCircle, Share2, BookMarked } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image: string;
  likes: number;
  comments: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img 
        src={post.image} 
        alt="Post content" 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">{post.author.name}</h3>
            <p className="text-xs text-gray-500">认证家政服务师</p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">{post.content}</p>
        <div className="flex items-center justify-between text-gray-500">
          <button className="flex items-center gap-1">
            <Heart size={20} />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1">
            <MessageCircle size={20} />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-1">
            <BookMarked size={20} />
            <span className="text-sm">收藏</span>
          </button>
          <button className="flex items-center gap-1">
            <Share2 size={20} />
            <span className="text-sm">分享</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;