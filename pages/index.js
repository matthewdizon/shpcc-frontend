import Layout from "../components/Layout";
import MemberStories from "../components/MemberStories";
import { getMemberStories } from "../lib/api";
import Link from "next/link";
import Image from "next/image";

export default function Home({ members }) {
  return (
    <Layout>
      <div className="grid text-white -mx-6 md:-mx-12 lg:-mx-24 p-6 md:p-12 lg:p-24 gap-4 relative bg-gray-600">
        <div className="absolute w-full h-full inset-0">
          <Image
            src={"/images/hero.JPG"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="brightness-50"
          />
        </div>
        <p className="text-5xl lg:text-6xl font-bold lg:max-w-sm lg:leading-snug z-20">
          Together we fulfill our dreams
        </p>
        <Link
          href={`/signup`}
          className="flex bg-shpccDarkRed max-w-max py-4 px-4 lg:px-6 rounded-full uppercase font-bold gap-2 hover:opacity-80 duration-200 transition z-20"
        >
          Become a Member{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 text-black py-12 gap-8" id="history">
        <div className="grid gap-4">
          <h2 className="text-shpccDarkRed font-bold text-3xl text-center max-w-xl mx-auto mb-8">
            History of the Sacred Heart Parish Credit Cooperative
          </h2>
          <p>
            Sacred Heart Parish Credit Cooperative (SHPCC) started out from
            humble beginnings. With a capital of P560.00 and the optimistic help
            of the Parish Priest, Fr. Fernando de Pedro, SVD, and the Legion of
            Mary and some fifteen (15) incorporators and ten (10) charter
            members, the cooperative was registered as Sacred Heart Parish
            Cooperative Credit Union with the Cooperatives Administration Office
            on August 2, 1967. It was in the early 70’s, during the incumbency
            of Fr. Restituto Lumanlan, SVD, that the SHPCC became part of the
            Parish Social Services.
          </p>
          <p>
            The cooperative was re-registered on February 24, 1975 as Sacred
            Heart Parish Kilusang Bayan for Credit, Inc. at the Bureau of
            Cooperatives Development. When all the cooperatives were put under
            the authority of the Cooperative Development Authority (CDA), the
            cooperative obtained its confirmation of registration as Sacred
            Heart Parish Development Cooperative (SHPDC) on February 20, 1991.
            It amended its Articles of Cooperation and by-laws last January 7,
            2022 with the name Sacred Heart Parish Credit Cooperative (SHPCC).
            It is an active member of its accredited federation, Philippine
            Federation of Credit Cooperatives - National Capital Region
            (PFCCO-NCR) and the Asian Confederation of Credit Unions (ACCU).
          </p>
          <p>
            SHPCC aims to promote not only the growth of its members but also
            its organization with the tagline “together we fulfill our dreams”.
            It aims to promote members’ growth through the development of its
            products and services by teaching them learnings in cooperativism,
            proper management of financial resources and cooperative values.
          </p>
          <p>
            After 55 years of service, SHPCC is proud to have more than 3700
            members including the associate and regular and more than P116
            million assets including a three-storey building aptly called,
            “Tahanang Koop.” A big part of the success of SHPCC is the spirit of
            volunteerism. With the perseverance, dedication and active
            participation of its leaders and members, the SHPCC ascended from
            its humble beginnings to be one of the pillars of Cooperatives in
            Quezon City.
          </p>
        </div>
        <div className="bg-cover !bg-[url('/images/history.JPG')] bg-center rounded-3xl text-white relative h-96 lg:h-auto bg-gray-600">
          <div className="absolute w-full h-full inset-0">
            <Image
              src={"/images/history.jpg"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="brightness-75 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div
        className="bg-shpccDarkRed grid lg:grid-cols-2 text-center -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 py-12 divide-y-4 lg:divide-y-0 lg:divide-x-4 gap-8 text-white"
        id="vision-mission"
      >
        <div className="grid gap-4 lg:px-12">
          <h2 className="font-bold text-3xl">Vision</h2>
          <p className="text-center font-thin">
            A member in every home and business where the cooperative operates.
          </p>
        </div>
        <div className="grid gap-4 lg:px-12 pt-8 lg:pt-0">
          <h2 className="font-bold text-3xl">Mission</h2>
          <p className="text-center font-thin">
            The Sacred Heart Parish Credit Cooperative sets its mission to have
            a holistic approach and growth with its products and services that
            aim to improve, educate, and empower its members in dealing with
            finances.
          </p>
        </div>
      </div>
      <div
        className="text-black py-8 -mx-6 md:-mx-12 lg:-mx-24"
        id="member-stories"
      >
        <div className="text-center py-4">
          <h2 className="font-bold text-3xl">Member Stories</h2>
          <p className="font-thin">Get to know our members.</p>
        </div>
        <MemberStories members={members} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const members = (await getMemberStories()) ?? [];

  return {
    props: {
      members,
    },
  };
}
