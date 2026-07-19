import Link from "next/link";
import type { RootLayoutProps } from "@/app/types";
import { getAllCategories } from "@/app/lib/categories";
import type { Category } from "@/app/types";
import type { ReactNode } from "react";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories();
  return (
    <div>
      <nav>
        <Link href="/3d-models">All</Link>
        {categories.map((category) => (
          <Link
            href={`/3d-models/categories/${category.slug}`}
            key={category.slug}
          >
            {category.displayName}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
