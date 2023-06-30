import NavBar from "../../components/navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className="h-screen">{children}</div>
    </div>
  );
}
