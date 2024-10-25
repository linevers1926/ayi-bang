import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, BookMarked, Search, Home, PlusSquare, Bell, User } from 'lucide-react';
import PostCard from './components/PostCard';
import Navbar from './components/Navbar';
import PublishModal from './components/PublishModal';
import { posts } from './data/posts';

function App() {
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-2xl mx-auto pt-16 pb-20 px-4">
        {/* Stories/Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {['日常保洁', '深度清洁', '育儿经验', '烹饪技巧', '整理收纳'].map((category) => (
            <div key={category} className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs text-gray-600">{category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <button className="flex flex-col items-center text-rose-500">
            <Home size={24} />
            <span className="text-xs mt-1">首页</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Search size={24} />
            <span className="text-xs mt-1">搜索</span>
          </button>
          <button 
            onClick={() => setIsPublishModalOpen(true)}
            className="flex flex-col items-center text-gray-500 hover:text-rose-500"
          >
            <PlusSquare size={24} />
            <span className="text-xs mt-1">发布</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Bell size={24} />
            <span className="text-xs mt-1">消息</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <User size={24} />
            <span className="text-xs mt-1">我的</span>
          </button>
        </div>
      </div>

      {/* Publish Modal */}
      <PublishModal 
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />
    </div>
  );
}

export default App;