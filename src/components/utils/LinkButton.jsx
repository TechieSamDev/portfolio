export default function LinkButton({ children, href = '', variant, ...props }) {
  const variants = {
    'slate-200': 'bg-slate-300',
    'slate-300': 'bg-slate-300',
    'slate-400': 'bg-slate-300',
    'slate-500': 'bg-slate-300',
    'slate-600': 'bg-slate-300',
    accent: 'bg-accent',
  };
  return (
    <a
      href={href}
      className={`${variants[variant]} text-primary p-3 rounded-lg hover:bg-${variant}/80 transition duration`}
      {...props}
    >
      {children}
    </a>
  );
}
