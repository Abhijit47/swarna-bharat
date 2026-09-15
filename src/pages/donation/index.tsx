import DonationTwo from "@/components/donation/donationTwo";
import PageHeader from "@/components/pageHeader";
import { donationDataTwo } from "@/data/donationData";

const Donation = () => {
  return (
    <>
      <PageHeader currentPage="Donation" title="Donation" />
      <DonationTwo
        data={donationDataTwo}
        isTitleShow={false}
        cardClass="mt-0"
        rowClass="g-4"
      />
    </>
  );
};

export default Donation;
