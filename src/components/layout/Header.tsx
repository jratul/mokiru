import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer } from "@components/Drawer";
import character from "@/assets/character.png";
import { NavTree } from "./NavTree";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-14 border-b border-[var(--color-border)] bg-[var(--color-background)]">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-1.5 text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)] transition-colors"
          aria-label="메뉴 열기"
        >
          <Menu size={22} />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <img src={character} alt="mokiru" className="w-7 h-7 rounded-md object-cover" />
          <span className="text-base font-bold text-[var(--color-foreground)]">mokiru</span>
        </Link>

        {/* 오른쪽 여백 (버튼 너비만큼) */}
        <div className="w-9" />
      </header>

      <Drawer open={open} onOpenChange={setOpen} side="left" title="목차">
        <NavTree onNavigate={() => setOpen(false)} />
      </Drawer>
    </>
  );
}
