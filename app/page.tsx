import Image from "next/image";
import QuotePage from "./utils/components/QuotePage";
import Footer from "./utils/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col justify-between items-center">
      <QuotePage />
      <Footer />
    </main>
  );
}
