import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/pricing/Pricing';
import RatesList from '@/components/pricing/RateList';
import BulletList from '@/components/BulletList';
import Payments from '@/components/pricing/Payments';

import promotionsBg from '@/public/images/monitors.jpeg';

import { rateGroups } from '@/utils/mockData/rates';
import promotionData from '@/utils/mockData/promotions';

export default function PricingPage(){

  return(
    <>
    <Header />
    <main className="relative flex flex-col items-center font-base bg-background-light">
      <Pricing />
      <RatesList rateGroups={ rateGroups.slice(0,3) }/>
      <BulletList arr={ promotionData } title={ 'Our Current Promotions' }/>
      <RatesList rateGroups={ rateGroups.slice(3) } reverseStart={ true }/>
      <Payments />
    </main>
    <Footer />
    </>
  );
};