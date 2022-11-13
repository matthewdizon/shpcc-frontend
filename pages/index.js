import Layout from "../components/Layout";
import MemberStories from "../components/MemberStories";

export default function Home() {
  return (
    <Layout>
      <div className="grid bg-cover !bg-[url('/images/hero.svg')] text-white -mx-24 px-24 py-24 gap-4">
        <p className="text-6xl font-bold max-w-sm leading-snug">
          Together we fulfill our dreams
        </p>
        <button className="flex bg-shpccDarkRed max-w-max py-4 px-6 rounded-full uppercase font-bold gap-2">
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
        </button>
      </div>
      <div className="grid grid-cols-2 text-black py-12 gap-8">
        <div className="grid gap-4">
          <h2 className="text-shpccDarkRed font-bold text-3xl text-center max-w-xl mx-auto mb-8">
            History Of The Sacred Heart Of Parish Credit Cooperative
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mollis ultrices mauris quis tempor. Sed gravida porttitor nunc, a
            placerat lacus tincidunt nec. Suspendisse viverra tellus eget orci
            dapibus, a varius ipsum aliquam. Suspendisse enim sem, egestas sit
            amet eleifend nec, accumsan eu sapien. Aliquam non turpis quis mi
            gravida mattis fringilla ut magna. Praesent interdum odio purus, et
            mollis purus euismod ac. Fusce ac neque vitae urna sagittis
            pharetra.
          </p>
          <p>
            Integer vel fringilla tellus. Ut pulvinar ipsum nec libero auctor
            egestas. Duis mattis dolor metus, convallis fermentum elit varius
            in. Cras maximus nulla in nibh blandit, id laoreet augue porta.
            Proin fermentum elit neque, sit amet vestibulum ipsum scelerisque
            ac. Mauris non neque lectus. Sed eget augue tortor. Etiam ac sodales
            ligula. Curabitur bibendum faucibus lorem porta sollicitudin.
            Vestibulum eleifend, lorem id pretium semper, lorem mi posuere nibh,
            eget tempor massa massa et lacus.
          </p>
          <p>
            Aliquam vitae porta eros. Sed sagittis dictum augue, non rhoncus
            massa laoreet ut. Nullam ac ultricies arcu. Suspendisse potenti. Sed
            sollicitudin quam sed metus tincidunt iaculis in vitae augue. Ut
            purus risus, tristique eget odio ut, fermentum rhoncus urna.
            Curabitur malesuada ex vitae leo feugiat mollis. Phasellus
            tincidunt, libero hendrerit blandit fringilla, risus magna maximus
            tortor, a hendrerit turpis sapien sed lectus. Pellentesque
            ullamcorper purus nec enim molestie imperdiet.
          </p>
        </div>
        <div className="bg-cover !bg-[url('/images/cogs.svg')] bg-center rounded-3xl text-white relative">
          <div className="absolute bottom-12 left-12">
            <p>Image Title</p>
            <p>Image Description</p>
          </div>
        </div>
      </div>
      <div className="bg-shpccDarkRed grid grid-cols-2 text-center -mx-24 px-24 py-12 divide-x-4 text-white">
        <div className="grid gap-4 px-24">
          <h2 className="font-bold text-3xl">Vision</h2>
          <p className="text-left font-thin">
            The Sacred Heart Parish Credit Cooperative envisions itself that
            every household member is part of the credit cooperative and forms a
            community that aims to educate, empower, and improve the quality of
            life.
          </p>
        </div>
        <div className="grid gap-4 px-24">
          <h2 className="font-bold text-3xl">Mission</h2>
          <p className="text-left font-thin">
            The Sacred Heart Parish Credit Cooperative sets its mission to have
            a holistic approach and growth with its products and services that
            aim to improve, educate, and empower its members in dealing with
            finances.
          </p>
        </div>
      </div>
      <div className="text-black py-8 -mx-24">
        <div className="text-center py-4">
          <h2 className="font-bold text-3xl">Member Stories</h2>
          <p className="font-thin">Get to know our members.</p>
        </div>
        <MemberStories></MemberStories>
      </div>
    </Layout>
  );
}