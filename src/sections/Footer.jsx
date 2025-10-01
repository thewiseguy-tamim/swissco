export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="flex justify-center max-w-7xl mx-auto px-6 py-6 text-sm text-white/60">
        © {new Date().getFullYear()} Swissco. All rights reserved.
      </div>
    </footer>
  );
}