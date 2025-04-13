"use client";

import { Search, Bell, User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-blue-950/90 backdrop-blur-sm border-b border-blue-800 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex-1">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
            <input
              type="search"
              placeholder="What do you want to listen to?"
              className="w-full bg-blue-900 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-blue-400 hover:text-white transition">
            <Bell size={20} />
          </button>
          <button className="text-blue-400 hover:text-white transition">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}