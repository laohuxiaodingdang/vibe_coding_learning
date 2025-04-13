"use client";

import Link from "next/link"
import { Home, Search, Library, Plus, Heart } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-blue-950 border-r border-blue-800 flex flex-col h-full">
      <div className="p-6">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-white transition">
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link href="/search" className="flex items-center gap-2 text-blue-400 hover:text-white transition">
            <Search size={24} />
            <span>Search</span>
          </Link>
          <Link href="/library" className="flex items-center gap-2 text-blue-400 hover:text-white transition">
            <Library size={24} />
            <span>Your Library</span>
          </Link>
        </div>
        <div className="mt-6 pt-6 border-t border-blue-800 space-y-4">
          <button className="flex items-center gap-2 text-blue-400 hover:text-white transition">
            <Plus className="p-1 bg-blue-400 text-black rounded-sm" />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-2 text-blue-400 hover:text-white transition">
            <Heart className="p-1 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-sm" />
            <span>Liked Songs</span>
          </button>
        </div>
      </div>
      <div className="mt-auto p-6">
        <div className="flex flex-col gap-4 text-sm text-blue-400">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
        </div>
      </div>
    </div>
  )
}