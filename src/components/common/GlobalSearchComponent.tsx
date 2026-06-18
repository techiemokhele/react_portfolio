import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Monitor,
  Smartphone,
  Gamepad2,
  Layout,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowRight,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import HighlightText from "@/components/common/HighlightText";
import type { SearchResult, GroupedResults } from "@/types";
import {
  experiences,
  projects,
  mobileProjects,
  gameProjects,
  cmsProjects,
  qualifications,
} from "@/data/portfolioData";
import { blogData } from "@/data/blogData";

const CATEGORY_META: Record<string, { label: string; icon: React.ReactNode }> =
  {
    website: {
      label: "Website Projects",
      icon: <Monitor className="w-3.5 h-3.5" />,
    },
    mobile: {
      label: "Mobile Projects",
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
    game: {
      label: "Game Projects",
      icon: <Gamepad2 className="w-3.5 h-3.5" />,
    },
    cms: { label: "CMS Projects", icon: <Layout className="w-3.5 h-3.5" /> },
    blog: { label: "Blog Posts", icon: <BookOpen className="w-3.5 h-3.5" /> },
    experience: {
      label: "Experience",
      icon: <Briefcase className="w-3.5 h-3.5" />,
    },
    qualification: {
      label: "Education",
      icon: <GraduationCap className="w-3.5 h-3.5" />,
    },
  };

const searchAll = (term: string): GroupedResults => {
  if (!term.trim()) return {};
  const q = term.toLowerCase();

  const match = (...fields: (string | string[] | undefined)[]) =>
    fields.some((f) =>
      Array.isArray(f)
        ? f.some((v) => v.toLowerCase().includes(q))
        : f?.toLowerCase().includes(q),
    );

  const grouped: GroupedResults = {};

  const websiteHits = projects
    .filter((p) => match(p.projectName, p.title, p.description, p.languages))
    .map(
      (p): SearchResult => ({
        id: p.id,
        title: p.projectName,
        subtitle: p.type,
        preview: p.description.slice(0, 90) + "…",
        category: "website",
        categoryLabel: "Website",
        domId: `project-${p.id}`,
        href: `/portfolio?focus=project-${p.id}`,
      }),
    );
  if (websiteHits.length) grouped.website = websiteHits;

  const mobileHits = mobileProjects
    .filter((p) => match(p.projectName, p.title, p.description, p.languages))
    .map(
      (p): SearchResult => ({
        id: `m-${p.id}`,
        title: p.projectName,
        subtitle: p.type,
        preview: p.description.slice(0, 90) + "…",
        category: "mobile",
        categoryLabel: "Mobile",
        domId: `project-m-${p.id}`,
        href: `/portfolio?focus=project-m-${p.id}`,
      }),
    );
  if (mobileHits.length) grouped.mobile = mobileHits;

  const gameHits = gameProjects
    .filter((p) => match(p.projectName, p.title, p.description))
    .map(
      (p): SearchResult => ({
        id: `g-${p.id}`,
        title: p.projectName,
        subtitle: p.type,
        preview: p.description.slice(0, 90) + "…",
        category: "game",
        categoryLabel: "Game",
        domId: `project-g-${p.id}`,
        href: `/portfolio?focus=project-g-${p.id}`,
      }),
    );
  if (gameHits.length) grouped.game = gameHits;

  const cmsHits = cmsProjects
    .filter((p) => match(p.projectName, p.title, p.description))
    .map(
      (p): SearchResult => ({
        id: `c-${p.id}`,
        title: p.projectName,
        subtitle: p.type,
        preview: p.description.slice(0, 90) + "…",
        category: "cms",
        categoryLabel: "CMS",
        domId: `project-c-${p.id}`,
        href: `/portfolio?focus=project-c-${p.id}`,
      }),
    );
  if (cmsHits.length) grouped.cms = cmsHits;

  const blogHits = blogData
    .filter((b) => match(b.title, b.excerpt, b.category))
    .map(
      (b): SearchResult => ({
        id: b.id,
        title: b.title,
        subtitle: b.category,
        preview: b.excerpt?.slice(0, 90) + "…",
        category: "blog",
        categoryLabel: "Blog",
        href: `/blog/${b.id}/${b.slug}`,
      }),
    );
  if (blogHits.length) grouped.blog = blogHits;

  const expHits = experiences
    .filter((e) => match(e.companyName, e.position, e.location, e.skills))
    .map(
      (e): SearchResult => ({
        id: e.id,
        title: e.position,
        subtitle: `${e.companyName} · ${e.location}`,
        preview: e.employmentType,
        category: "experience",
        categoryLabel: "Experience",
        domId: `exp-${e.id}`,
        href: `/about?focus=exp-${e.id}`,
      }),
    );
  if (expHits.length) grouped.experience = expHits;

  const qualHits = qualifications
    .filter((q2) => match(q2.schoolName, q2.qualification, q2.course))
    .map(
      (q2): SearchResult => ({
        id: q2.id,
        title: `${q2.qualification} in ${q2.course}`,
        subtitle: q2.schoolName,
        preview: q2.duties.slice(0, 90) + "…",
        category: "qualification",
        categoryLabel: "Education",
        domId: `qual-${q2.id}`,
        href: `/about?focus=qual-${q2.id}`,
      }),
    );
  if (qualHits.length) grouped.qualification = qualHits;

  return grouped;
};

const totalCount = (grouped: GroupedResults) =>
  Object.values(grouped).reduce((acc, arr) => acc + arr.length, 0);

const GlobalSearchComponent: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GroupedResults>({});
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const flatResults = Object.values(results).flat();

  useEffect(() => {
    setResults(searchAll(query));
    setActiveIdx(-1);
  }, [query]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults({});
      setActiveIdx(-1);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, flatResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && activeIdx >= 0) {
        e.preventDefault();
        const hit = flatResults[activeIdx];
        if (hit) navigateTo(hit.href);
      }
    },
    [flatResults, activeIdx],
  );

  useEffect(() => {
    if (activeIdx < 0 || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${activeIdx}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  const navigateTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  const count = totalCount(results);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open global search (Ctrl+K)"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm"
      >
        <Search className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">Search…</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-white/40 font-mono">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[580px] p-0 overflow-hidden"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogDescription className="sr-only">
            Search across projects, blog posts, work experience, and education.
            Use arrow keys to navigate results and Enter to open a result.
          </DialogDescription>

          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
            <Search
              className="w-4 h-4 text-white/40 shrink-0"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              role="combobox"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, blog posts, experience…"
              className="flex-1 bg-transparent text-white placeholder-white/30 text-sm focus:outline-none"
              aria-label="Global search"
              aria-autocomplete="list"
              aria-expanded={count > 0}
              aria-controls="global-search-listbox"
              aria-haspopup="listbox"
              aria-activedescendant={
                activeIdx >= 0
                  ? `search-option-${activeIdx}`
                  : undefined
              }
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-white/30 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div
            ref={listRef}
            id="global-search-listbox"
            className="max-h-[420px] overflow-y-auto"
            role="listbox"
            aria-label="Search results"
          >
            {!query && (
              <div className="flex flex-col items-center justify-center py-12 text-white/30 gap-2">
                <Search className="w-8 h-8" aria-hidden="true" />
                <p className="text-sm">Start typing to search everything</p>
              </div>
            )}

            {query && count === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-white/30 gap-2">
                <p className="text-sm">
                  No results for{" "}
                  <span className="text-white/60 font-medium">"{query}"</span>
                </p>
              </div>
            )}

            {count > 0 && (
              <>
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                  <span className="text-xs text-white/40">
                    {count} result{count !== 1 ? "s" : ""} for{" "}
                    <span className="text-gold font-medium">"{query}"</span>
                  </span>
                  <span className="text-[10px] text-white/25">
                    ↑↓ navigate · ↵ open
                  </span>
                </div>

                {Object.entries(results).map(([cat, items]) => {
                  const meta = CATEGORY_META[cat];
                  return (
                    <div
                      key={cat}
                      role="group"
                      aria-label={meta.label}
                      className="py-1"
                    >
                      {/* Group header — presentational, hidden from listbox ARIA tree */}
                      <div
                        className="flex items-center gap-2 px-4 py-1.5"
                        aria-hidden="true"
                      >
                        <span className="text-white/30">
                          {meta.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                          {meta.label}
                        </span>
                        <span className="ml-auto text-[10px] text-white/25 tabular-nums">
                          {items.length}
                        </span>
                      </div>

                      {items.map((result) => {
                        const flatIdx = flatResults.findIndex(
                          (r) =>
                            r.id === result.id &&
                            r.category === result.category,
                        );
                        const isActive = flatIdx === activeIdx;
                        return (
                          <button
                            key={`${result.category}-${result.id}`}
                            id={`search-option-${flatIdx}`}
                            data-idx={flatIdx}
                            role="option"
                            aria-selected={isActive}
                            onClick={() => navigateTo(result.href)}
                            onMouseEnter={() => setActiveIdx(flatIdx)}
                            className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors duration-100 group ${
                              isActive ? "bg-gold/10" : "hover:bg-white/5"
                            }`}
                          >
                            <span
                              className={`mt-0.5 shrink-0 ${isActive ? "text-gold" : "text-white/30"}`}
                            >
                              {CATEGORY_META[result.category]?.icon}
                            </span>

                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm font-medium truncate ${isActive ? "text-white" : "text-white/80"}`}
                              >
                                <HighlightText
                                  text={result.title}
                                  term={query}
                                />
                              </p>
                              {result.subtitle && (
                                <p className="text-xs text-white/40 truncate mt-0.5">
                                  <HighlightText
                                    text={result.subtitle}
                                    term={query}
                                  />
                                </p>
                              )}
                              {result.preview && (
                                <p className="text-[11px] text-white/25 line-clamp-1 mt-0.5">
                                  <HighlightText
                                    text={result.preview}
                                    term={query}
                                  />
                                </p>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <Badge
                                variant="outline"
                                className="text-[9px] py-0 h-4 hidden sm:inline-flex border-white/15 text-white/30"
                              >
                                {result.categoryLabel}
                              </Badge>
                              <ArrowRight
                                className={`w-3 h-3 transition-colors ${isActive ? "text-gold" : "text-white/20"}`}
                                aria-hidden="true"
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/5 text-[10px] text-white/25">
            <span>
              <kbd className="font-mono">ESC</kbd> close
            </span>
            <span>
              <kbd className="font-mono">↑↓</kbd> navigate
            </span>
            <span>
              <kbd className="font-mono">↵</kbd> open
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalSearchComponent;
