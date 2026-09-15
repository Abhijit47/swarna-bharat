import DonationTwo from "@/components/donation/donationTwo";
import PageHeader from "@/components/pageHeader";
import PricingGrid from "@/components/pricingGrid";
import { donationDataTwo } from "@/data/donationData";
import Cta from "./cta";
import Feature from "./feature";

const DonationNow = () => {
  return (
    <>
      <PageHeader currentPage="Donation Now" title="Donation Now" />
      <DonationTwo
        data={donationDataTwo.slice(0, 3)}
        isTitleShow={false}
        cardClass="mt-0"
        rowClass="g-4"
      />
      <Feature />
      <PricingGrid />
      <Cta />
    </>
  );
};

export default DonationNow;
