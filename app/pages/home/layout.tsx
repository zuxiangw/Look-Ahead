import NavBar from "../../components/navbar";
import Footer from "@/app/components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className="h-fit">{children}</div>
      <Footer />
    </div>
  );
}