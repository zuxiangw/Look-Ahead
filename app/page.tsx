import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/home/search");
  } else {
    redirect("/welcome");
  }
}
