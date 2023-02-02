import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Member = ({ name, description, image, slug }) => {
  return (
    <div
      className={`bg-cover text-white bg-gray-600 py-72 relative backdrop-blur-lg`}
    >
      <div>
        <Image
          src={image?.url}
          alt={`Image of ${name}`}
          fill
          objectFit="cover"
          className="opacity-60"
        />
      </div>
      <div className="absolute top-12 left-12 max-w-xl flex flex-col gap-4">
        <h3 className="font-black text-3xl">{name}</h3>
        <p>{description}</p>
        <Link
          className="bg-white text-black px-4 py-2 rounded-full max-w-max"
          href={`/member-stories/${slug}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default function MemberStories({ members }) {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "#000",
          padding: "48px 120px",
          paddingBottom: "48px",
        }}
      >
        {members.map((member, index) => {
          const { memberName, description, slug, image } = member;
          return (
            <SwiperSlide key={index}>
              <Member
                name={memberName}
                description={description}
                image={image}
                slug={slug}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
