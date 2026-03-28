"use client";

import Link from "next/link";
import Breadcrumb, { type BreadcrumbItem } from "./Breadcrumb";

interface HeaderStats {
  score: number;
  streak: number;
  progress: string;
}

interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  stats?: HeaderStats;
}

export default function Header({ breadcrumbs, stats }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#2e2e4a] bg-[#0f0f13]/95 px-4 py-3 backdrop-blur-sm sm:px-6">
      <Link href="/" className="shrink-0">
        <span className="bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa] bg-clip-text text-xl font-bold text-transparent">
          Language Quizer
        </span>
      </Link>

      <div className="mx-4 hidden sm:block">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {stats && (
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-[#fbbf24]">&#9733;</span>
            <span className="text-[#e4e4ef] font-medium">{stats.score}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#f87171]">&#128293;</span>
            <span className="text-[#e4e4ef] font-medium">{stats.streak}</span>
          </div>
          <div className="text-[#9999b3]">{stats.progress}</div>
        </div>
      )}
    </header>
  );
}
