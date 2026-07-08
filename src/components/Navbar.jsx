import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, NAV } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group">
          <img src={BRAND.logo} alt="Pacfully" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.path}
              to={n.path}
              data-testid={`nav-link-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm tracking-wide rounded-full transition ${
                  isActive ? "text-brand bg-white/5" : "text-white/70 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/get-quote"
            data-testid="navbar-get-quote-button"
            className="group inline-flex items-center gap-2 bg-brand text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-brand-600 transition shadow-[0_8px_24px_rgba(244,90,42,0.35)]"
          >
            Get Quote <ArrowUpRight className="w-4 h-4 transition group-hover:rotate-45" />
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-ink-900/95 backdrop-blur-xl border-t border-white/5"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {NAV.map((n) => (
                <Link
                  key={n.path}
                  to={n.path}
                  className="py-3 text-base text-white/80 border-b border-white/5"
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/get-quote"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-brand text-white rounded-full px-5 py-3 text-sm font-medium"
                data-testid="mobile-get-quote-button"
              >
                Get Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="mt-3 flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
