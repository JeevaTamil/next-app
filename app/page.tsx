import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";
import { getServerSession } from "next-auth";
import tree from "@/public/images/trees.jpg";
import { providerOptions } from "./api/auth/providerOptions";

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
