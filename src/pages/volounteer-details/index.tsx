import PageHeader from "@/components/pageHeader";
import VolounteerArtical from "./volounteerArtical";
import VolounteerExperience from "./volounteerExperience";

const VolounteerDetails = () => {
  return (
    <>
      <PageHeader currentPage="Volunteers Details" title="Volunteers Details" />
      <VolounteerArtical />
      <VolounteerExperience />
    </>
  );
};

export default VolounteerDetails;
