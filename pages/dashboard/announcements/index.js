import Layout from "../../../components/dashboard/Layout";
import { getAnnouncements } from "../../../lib/api";
import Link from "next/link";

function Announcements({ announcements, isAdmin }) {
  return (
    <Layout>
      <div className="p-24">
        {isAdmin && (
          <p className="py-4 italic">
            To add announcements, login to{" "}
            <a
              href="https://app.contentful.com/spaces/wyf9kavyrcs5/entries?id=J60NXKd4c6b2qb5X&order.fieldId=updatedAt&order.direction=descending&contentTypeId=announcement&displayedFieldIds=contentType&displayedFieldIds=updatedAt&displayedFieldIds=author&folderId=PCcaaZW0xFqMdwwG&page=0"
              rel="noreferrer"
              target="_blank"
              className="underline"
            >
              Contentful
            </a>
          </p>
        )}
        <div className="bg-shpccDarkRed p-8 text-white rounded-xl shadow-lg flex justify-between items-center">
          <p className="font-bold text-3xl">Announcements</p>
          <input
            type="text"
            placeholder="Search..."
            className="p-4 py-2 rounded-lg"
          />
        </div>
        <div className="grid gap-8 mt-8">
          {announcements.map((announcement, index) => {
            const { title, dateAndTime, description, slug } = announcement;
            return (
              <Link
                key={index}
                href={`/dashboard/announcements/${slug}`}
                className="grid grid-cols-[2fr_1fr] gap-2 bg-white rounded-xl shadow-xl hover:shadow-2xl p-12 pl-16 relative"
              >
                <div className="grid gap-4">
                  <h2 className="font-bold text-2xl text-shpccDarkRed">
                    {title}
                  </h2>
                  <p className="font-thin">{description}</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-bold">Posted on:</p>
                  <span className="font-thin">
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }).format(new Date(dateAndTime))}
                  </span>
                </div>
                <div className="absolute h-2/3 bottom-0 top-0 my-auto left-8 w-2 bg-shpccDarkRed"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Announcements;

export async function getServerSideProps() {
  const announcements = (await getAnnouncements()) ?? [];

  return {
    props: {
      announcements,
    },
  };
}
