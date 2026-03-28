"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-[#9999b3] select-none">/</span>
            )}
            {isLast || !item.href ? (
              <span className="text-[#e4e4ef]">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-[#9999b3] transition-colors hover:text-[#7c6cf0]"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
