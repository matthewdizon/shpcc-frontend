import Layout from "../../../components/dashboard/Layout";
import { getAnnouncements } from "../../../lib/api";
import Link from "next/link";
import { useState } from "react";

function Announcements({ announcements, isAdmin }) {
  const [filteredData, setFilteredData] = useState(announcements);
  const [search, setSearch] = useState("");

  function handleSearchCriteriaChange(search) {
    setSearch(search);

    const filteredData = announcements?.filter((data) => {
      const searchContext = `${data.title} ${data.description}`.toLowerCase();
      const hasSearchMatch = searchContext.includes(search.toLowerCase());

      return hasSearchMatch;
    });

    setFilteredData(filteredData);
  }

  return (
    <Layout>
      <div className="p-4 sm:p-6 md:p-12 lg:p-16">
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
        <div className="bg-shpccDarkRed p-8 text-white rounded-xl shadow-lg flex flex-col gap-4 md:flex-row justify-between items-center">
          <p className="font-bold text-3xl">Announcements</p>
          <input
            type="text"
            placeholder="Search..."
            className="border-gray-400 border rounded-full px-2 py-2 my-2 lg:p-2 text-black w-full md:max-w-max"
            value={search}
            onChange={(e) => handleSearchCriteriaChange(e.target.value)}
          />
        </div>
        <div className="grid gap-8 mt-8">
          {filteredData.map((announcement, index) => {
            const { title, dateAndTime, description, slug } = announcement;
            return (
              <Link
                key={index}
                href={`/dashboard/announcements/${slug}`}
                className="grid lg:grid-cols-[2fr_1fr] gap-8 bg-white rounded-xl shadow-xl hover:shadow-2xl p-12 pl-16 relative"
              >
                <div className="grid gap-4">
                  <h2 className="font-bold text-2xl text-shpccDarkRed">
                    {title}
                  </h2>
                  <p className="font-thin">{description}</p>
                </div>
                <div className="flex flex-col lg:justify-end lg:items-end lg:text-right">
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
                <div className="absolute h-full lg:h-2/3 bottom-0 top-0 my-auto left-8 w-2 bg-shpccDarkRed"></div>
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
