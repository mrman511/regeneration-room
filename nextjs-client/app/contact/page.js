import Header from "@/components/Header";
import ContactInfo from "@/components/contact/ContactInfo";

import apiRequest from "@/utils/api-requests/apiRequests";

export default function Contact(){

  return (
    <>
    <Header />
    <main className="w-full bg-white">
      <div className="w-full flex flex-wrap justify-center bg-primary-light-1/10">
        <article className="w-full  px-4 py-8 sm:px-8 py-4 mb-4 text-center bg-white shadow-card">
          <h1 className="mb-4 font-cursive sm:text-4xl text-5xl font-semibold">Contact Us Today</h1>
          <h3 className="text-xl sm:text-2xl font-semibold">Get in Touch with Regeneration Room: Reach Out to Harness the Power of the Energy Enhancement System</h3>
        </article>
        <ContactInfo />
      </div>
    </main>
    </>
  );
}