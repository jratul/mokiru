import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import character from "@/assets/character.png";
import { NavTree } from "./NavTree";
import { useTheme } from "@/contexts/ThemeContext";

export function Sidebar() {
  const { dark, toggle } = useTheme();

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

      {/* 다크 모드 토글 */}
      <div className="px-3 py-3 border-t border-[var(--color-border)] shrink-0">
        <button
          onClick={toggle}
          className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
          aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
          {dark ? "라이트 모드" : "다크 모드"}
        </button>
      </div>
    </aside>
  );
}
