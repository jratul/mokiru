import { useLocation, Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@utils/cn";
import { navigation } from "@/config/navigation";
import type { NavItem } from "@t/navigation";

function NavLeaf({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  return (
    <Link
      to={item.path ?? "#"}
      onClick={onNavigate}
      className={cn(
        "block rounded-md px-3 py-1.5 text-sm transition-colors",
        isActive
          ? "bg-[var(--color-primary)] text-white font-medium"
          : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)] hover:text-[var(--color-foreground)]",
      )}
    >
      {item.label}
    </Link>
  );
}

function NavGroup({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const isChildActive = item.children?.some((c) => pathname === c.path);

  return (
    <Accordion.Item value={item.id}>
      <Accordion.Trigger
        className={cn(
          "flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm font-medium",
          "transition-colors hover:bg-[var(--color-muted)]",
          isChildActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-foreground)]",
          "[&[data-state=open]>svg]:rotate-180",
        )}
      >
        {item.label}
        <ChevronDown
          size={14}
          className="shrink-0 text-[var(--color-muted-foreground)] transition-transform duration-200"
        />
      </Accordion.Trigger>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <ul className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-[var(--color-border)] pl-3 pb-1">
          {item.children?.map((child) => (
            <li key={child.id}>
              <NavLeaf item={child} onNavigate={onNavigate} />
            </li>
          ))}
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export function NavTree({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav>
      {navigation.map((section) => (
        <div key={section.id} className="mb-4">
          <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            {section.label}
          </p>
          <Accordion.Root type="multiple" className="flex flex-col gap-0.5">
            {section.items.map((item) =>
              item.children ? (
                <NavGroup key={item.id} item={item} onNavigate={onNavigate} />
              ) : (
                <NavLeaf key={item.id} item={item} onNavigate={onNavigate} />
              ),
            )}
          </Accordion.Root>
        </div>
      ))}
    </nav>
  );
}
