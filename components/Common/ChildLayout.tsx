export default function ChildLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>;
  }
  