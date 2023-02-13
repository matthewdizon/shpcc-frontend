import { getMemberStories, getSingleMemberStory } from "../../lib/api";
import Layout from "../../components/Layout";
import Image from "next/image";
import WriteUp from "../../components/WriteUp";

function MemberStory({ memberStory }) {
  const { memberName, description, image, writeUp } = memberStory[0];
  console.log(writeUp);
  return (
    <Layout>
      <div className="min-h-screen py-24 max-w mx-2 sm:mx-12 md:mx-24 lg:mx-36">
        <div className="grid xl:grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="relative h-64 order-2">
            <Image
              src={image?.url}
              alt={`Image of ${memberName}`}
              fill
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="grid gap-4 xl:order-2">
            <p className="font-bold text-3xl md:text-5xl">{memberName}</p>
            <p className="font-thin">{description}</p>
          </div>
        </div>
        <WriteUp content={writeUp} />
      </div>
    </Layout>
  );
}

export default MemberStory;

export async function getStaticPaths() {
  const allMemberStories = (await getMemberStories()) ?? [];

  const paths = allMemberStories.map((memberStory) => ({
    params: { slug: memberStory.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const memberStory = (await getSingleMemberStory(params.slug)) ?? [];

  return { props: { memberStory } };
}
