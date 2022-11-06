// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const members = [
  {
    name: "Member 1 Name",
    description:
      "Quis voluptate commodo voluptate nostrud pariatur ipsum ex aliqua eu commodo nulla. Laboris incididunt excepteur nulla duis irure officia sit exercitation nostrud sit minim. Culpa occaecat veniam officia laborum et esse in deserunt aute labore. Ad culpa ipsum velit ea sint tempor consequat aliqua sint laborum. Nisi ad est est nisi non ad pariatur consectetur consequat. Esse in anim anim sint excepteur ipsum qui fugiat ea veniam esse.",
  },
  {
    name: "Member 2 Name",
    description:
      "Quis voluptate commodo voluptate nostrud pariatur ipsum ex aliqua eu commodo nulla. Laboris incididunt excepteur nulla duis irure officia sit exercitation nostrud sit minim. Culpa occaecat veniam officia laborum et esse in deserunt aute labore. Ad culpa ipsum velit ea sint tempor consequat aliqua sint laborum. Nisi ad est est nisi non ad pariatur consectetur consequat. Esse in anim anim sint excepteur ipsum qui fugiat ea veniam esse.",
  },
  {
    name: "Member 3 Name",
    description:
      "Quis voluptate commodo voluptate nostrud pariatur ipsum ex aliqua eu commodo nulla. Laboris incididunt excepteur nulla duis irure officia sit exercitation nostrud sit minim. Culpa occaecat veniam officia laborum et esse in deserunt aute labore. Ad culpa ipsum velit ea sint tempor consequat aliqua sint laborum. Nisi ad est est nisi non ad pariatur consectetur consequat. Esse in anim anim sint excepteur ipsum qui fugiat ea veniam esse.",
  },
  {
    name: "Member 4 Name",
    description:
      "Quis voluptate commodo voluptate nostrud pariatur ipsum ex aliqua eu commodo nulla. Laboris incididunt excepteur nulla duis irure officia sit exercitation nostrud sit minim. Culpa occaecat veniam officia laborum et esse in deserunt aute labore. Ad culpa ipsum velit ea sint tempor consequat aliqua sint laborum. Nisi ad est est nisi non ad pariatur consectetur consequat. Esse in anim anim sint excepteur ipsum qui fugiat ea veniam esse.",
  },
  {
    name: "Member 5 Name",
    description:
      "Quis voluptate commodo voluptate nostrud pariatur ipsum ex aliqua eu commodo nulla. Laboris incididunt excepteur nulla duis irure officia sit exercitation nostrud sit minim. Culpa occaecat veniam officia laborum et esse in deserunt aute labore. Ad culpa ipsum velit ea sint tempor consequat aliqua sint laborum. Nisi ad est est nisi non ad pariatur consectetur consequat. Esse in anim anim sint excepteur ipsum qui fugiat ea veniam esse.",
  },
];

const Member = ({ name, description, image }) => {
  return (
    <div className="bg-black text-white py-72 relative">
      <div className="absolute top-12 left-12 max-w-xl">
        <h3 className="font-black text-3xl">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function MemberStories() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "#000",
          padding: "48px",
          paddingBottom: "48px",
        }}
      >
        {members.map((member, index) => {
          const { name, description } = member;
          return (
            <SwiperSlide key={index}>
              <Member name={name} description={description} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
