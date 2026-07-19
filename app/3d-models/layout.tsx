import NavLink from "@/app/components/NavLink";
import CategoriesNav from "../components/CategoriesNav";
import type { ReactNode } from "react";
import { getAllCategories } from "@/app/lib/categories";
import type { Category } from "@/app/types";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  const categories: Category[] = getAllCategories();
  console.log(categories);
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      <CategoriesNav />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
