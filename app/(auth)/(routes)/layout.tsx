export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex justify-center items-center bg-slate-300">
      {children}
    </div>
  );
}
