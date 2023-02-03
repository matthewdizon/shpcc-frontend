import Announcements from "../../announcements/index";
import { getAnnouncements } from "../../../../lib/api";

const AnnouncementsAdmin = ({ announcements }) => {
  return <Announcements announcements={announcements}></Announcements>;
};

export default AnnouncementsAdmin;

export async function getServerSideProps() {
  const announcements = (await getAnnouncements()) ?? [];

  return {
    props: {
      announcements,
    },
  };
}
