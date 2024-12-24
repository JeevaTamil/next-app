import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import { providerOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(providerOptions);

  return (
    <main>
      <h1>Hello {session ? session.user?.name : "World!"}</h1>
      <ProductCart />
    </main>
  );
}
