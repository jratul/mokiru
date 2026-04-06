import { Link } from "react-router-dom";
import character from "@/assets/character.png";
import { NavTree } from "./NavTree";

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 border-r border-[var(--color-border)] bg-[var(--color-background)] z-30">
      {/* 로고 */}
      <Link
        to="/"
        className="flex items-center gap-2.5 px-4 py-4 border-b border-[var(--color-border)] shrink-0 hover:bg-[var(--color-muted)] transition-colors"
      >
        <img src={character} alt="mokiru" className="w-8 h-8 rounded-lg object-cover" />
        <span className="text-lg font-bold text-[var(--color-foreground)]">mokiru</span>
      </Link>

      {/* 네비게이션 */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <NavTree />
      </div>
    </aside>
  );
}
