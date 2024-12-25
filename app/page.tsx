import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import { providerOptions } from "./api/auth/[...nextauth]/route";
import tree from "@/public/images/trees.jpg";

export default async function Home() {
  const session = await getServerSession(providerOptions);

  return (
    <main>
      <div className="relative h-screen">
        <div>
          <Image
            src="https://shorturl.at/zjFZW"
            alt="lake"
            className="object-cover"
            sizes="100vw"
            quality={100}
            fill
          />
        </div>
      </div>
    </main>
  );
}
