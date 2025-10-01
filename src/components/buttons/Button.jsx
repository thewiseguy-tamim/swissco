/* Reusable button component */
export default function Button({
  children,
  variant = "primary", // "primary" | "outline" | "ghost"
  size = "md",         // "sm" | "md" | "lg"
  className = "",
  href,
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/30";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    primary: "bg-white text-gray-900 ring-1 ring-white/20 shadow hover:bg-white/90",
    outline: "bg-transparent text-white border border-white/60 hover:bg-white/10",
    ghost: "bg-transparent text-white/85 hover:text-white hover:bg-white/10",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}