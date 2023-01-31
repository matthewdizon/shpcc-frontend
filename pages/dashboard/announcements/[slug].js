import Layout from "../../../components/dashboard/Layout";
import { getAnnouncements, getSingleAnnouncement } from "../../../lib/api";

function AnnouncementSlug({ announcement }) {
  const { title, dateAndTime, description, writeUp } = announcement[0];

  return (
    <Layout>
      <div className="p-24 h-screen">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid gap-2">
            <p className="text-shpccDarkRed font-bold text-3xl">{title}</p>
            <p>
              <span className="font-bold">Posted on: </span>
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }).format(new Date(dateAndTime))}
            </p>
          </div>
          <hr className="bg-shpccDarkRed h-[3px] my-2" />
          <p>{description}</p>
        </div>
      </div>
    </Layout>
  );
}

export default AnnouncementSlug;

export async function getStaticPaths() {
  const allAnnouncements = (await getAnnouncements()) ?? [];

  const paths = allAnnouncements.map((announcement) => ({
    params: { slug: announcement.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const announcement = (await getSingleAnnouncement(params.slug)) ?? [];

  return { props: { announcement } };
}
