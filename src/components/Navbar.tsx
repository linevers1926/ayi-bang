import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <h1 className="text-xl font-bold text-rose-500">家务达人</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索技巧和经验"
              className="bg-gray-100 rounded-full py-1.5 px-4 pl-10 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;