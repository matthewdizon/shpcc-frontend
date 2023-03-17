import { getMemberStories, getSingleMemberStory } from "../../lib/api";
import Layout from "../../components/Layout";
import Image from "next/image";
import WriteUp from "../../components/WriteUp";
import Link from "next/link";

function MemberStory({ memberStory, allMemberStories }) {
  const { memberName, description, image, writeUp } = memberStory[0];
  const otherMemberStories = allMemberStories.filter((stories) => {
    return stories.memberName !== memberStory[0].memberName;
  });

  return (
    <Layout>
      <div className="min-h-screen pt-24 max-w mx-2 sm:mx-12 md:mx-24 lg:mx-36">
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
        <p className="font-bold text-2xl py-4">Check Out Other Stories</p>
        <div className="pb-12 rounded-lg grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMemberStories.map((otherMemberStory, index) => {
            const { memberName, description, image, slug } = otherMemberStory;
            return (
              <div key={index} className=" grid gap-4">
                <Link
                  className="relative h-64"
                  href={`/member-stories/${slug}`}
                >
                  <Image
                    src={image?.url}
                    alt={`Image of ${memberName}`}
                    fill
                    objectFit="cover"
                    className="rounded-xl shadow-xl hover:shadow-2xl"
                  />
                </Link>
                <div>
                  <p className="font-bold text-lg">
                    {otherMemberStory.memberName}
                  </p>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
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
  const allMemberStories = (await getMemberStories()) ?? [];

  return { props: { memberStory, allMemberStories } };
}
