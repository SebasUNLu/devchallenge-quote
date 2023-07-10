import Image from "next/image";
import TestQuote from "./utils/components/TestQuote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <TestQuote />
    </main>
  );
}
