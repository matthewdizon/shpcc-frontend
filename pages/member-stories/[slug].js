import { getMemberStories, getSingleMemberStory } from "../../lib/api";
import Layout from "../../components/Layout";
import Image from "next/image";

function MemberStory({ memberStory }) {
  const { memberName, description, image, writeUp } = memberStory[0];
  return (
    <Layout>
      <div className="min-h-screen -mx-24 px-24 py-24">
        <div className="grid grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="relative h-64">
            <Image
              src={image?.url}
              alt={`Image of ${memberName}`}
              fill
              objectFit="cover"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <p className="font-bold text-3xl">{memberName}</p>
            <p>{description}</p>
          </div>
        </div>
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
