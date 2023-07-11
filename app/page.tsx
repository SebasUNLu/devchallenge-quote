import Image from "next/image";
import QuotePage from "./utils/components/QuotePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
        <QuotePage />
    </main>
  );
}
