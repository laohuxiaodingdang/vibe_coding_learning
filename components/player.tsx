"use client";

import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react"

export function Player() {
  return (
    <div className="h-20 bg-blue-950 border-t border-blue-800 px-4 py-2">
      <div className="flex items-center justify-between h-full">
        {/* Left: Track Info */}
        <div className="flex items-center gap-4 w-72">
          <div className="w-14 h-14 bg-blue-900 rounded"></div>
          <div>
            <h4 className="text-sm font-medium">Track Title</h4>
            <p className="text-xs text-blue-400">Artist Name</p>
          </div>
        </div>

        {/* Center: Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-6">
            <button className="text-blue-400 hover:text-white transition">
              <Shuffle size={20} />
            </button>
            <button className="text-blue-400 hover:text-white transition">
              <SkipBack size={20} />
            </button>
            <button className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center hover:scale-105 transition">
              <Play size={20} className="text-blue-950 ml-0.5" />
            </button>
            <button className="text-blue-400 hover:text-white transition">
              <SkipForward size={20} />
            </button>
            <button className="text-blue-400 hover:text-white transition">
              <Repeat size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-blue-400">0:00</span>
            <div className="h-1 flex-1 bg-blue-900 rounded-full">
              <div className="h-1 w-1/3 bg-blue-400 rounded-full relative group">
                <div className="opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -right-1 -top-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-xs text-blue-400">3:45</span>
          </div>
        </div>

        {/* Right: Volume Control */}
        <div className="flex items-center gap-2 w-72 justify-end">
          <Volume2 size={20} className="text-blue-400" />
          <div className="h-1 w-24 bg-blue-900 rounded-full">
            <div className="h-1 w-2/3 bg-blue-400 rounded-full relative group">
              <div className="opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -right-1 -top-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}