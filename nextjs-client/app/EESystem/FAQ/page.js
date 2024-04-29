import Header from "@/components/Header";
import Footer from "@/components/Footer";

import faqs from "@/utils/mockData/faq";
import FAQList from "@/components/FAQ/FAQList";

export default function FAQ(){

  return (
    <>
    <Header />
    <main>
      <FAQList faqArr={ faqs }/>
    </main>
    <Footer />
    </>
  )
}