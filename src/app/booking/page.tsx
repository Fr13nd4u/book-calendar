import { Header } from "@/shared/header";
import { BookingWidget, CoolSession } from "./components";

export default function Home() {
  return (
      <>
         <Header />
         <main className="flex flex-col relative items-center overflow-hidden">
            <CoolSession />
            <BookingWidget />
        </main>
      </>
  );
}
