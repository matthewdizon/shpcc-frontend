import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function SideNav({ isOpen, reference, handleClick }) {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("accessToken");
    Router.push("/login");
  };

  let svgSize = 24;

  const ProfileSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const HomeSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const MembershipSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
          fill="currentColor"
        />
        <path
          d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
          fill="currentColor"
        />
        <path
          d="M15 15C16.1046 15 17 14.1046 17 13C17 11.8954 16.1046 11 15 11C13.8954 11 13 11.8954 13 13C13 14.1046 13.8954 15 15 15Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const LoanSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const AnnouncementSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const UserSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
          fill="currentColor"
        />
        <path
          d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
          fill="currentColor"
        />
        <path d="M22 11H16V13H22V11Z" fill="currentColor" />
        <path d="M16 15H22V17H16V15Z" fill="currentColor" />
        <path d="M22 7H16V9H22V7Z" fill="currentColor" />
      </svg>
    );
  };

  const RequestSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 18H17V16H7V18Z" fill="currentColor" />
        <path d="M17 14H7V12H17V14Z" fill="currentColor" />
        <path d="M7 10H11V8H7V10Z" fill="currentColor" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const QuestionSVG = () => {
    return (
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const links = [
    {
      link: "Account",
      svg: <ProfileSVG />,
    },
    {
      link: "Home",
      svg: <HomeSVG />,
    },
    {
      link: "Membership",
      svg: <MembershipSVG />,
    },
    {
      link: "Loan",
      svg: <LoanSVG />,
    },
    {
      link: "Announcements",
      svg: <AnnouncementSVG />,
    },
    {
      link: "Users",
      svg: <UserSVG />,
    },
    // {
    //   link: "Request",
    //   svg: <RequestSVG />,
    // },
    // {
    //   link: "Question",
    //   svg: <QuestionSVG />,
    // },
  ];

  return (
    <div
      className={`w-full h-full fixed left-0 top-0 bg-[rgba(0,0,0,.5)] z-30 overflow-hidden grid items-center transition-opacity duration-1000 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      ref={reference}
      onClick={handleClick}
    >
      <nav
        className={`bg-[#BE121A] w-64 flex flex-col items-center justify-between py-6 fixed h-full text-white z-40 transform transition-all ease-in-out duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image src={Logo} alt="Logo" width={100} height={100} />
        <div className="grid gap-4">
          {links.map((link, index) => {
            if (!user.isAdmin && link.link === "Users") return null;
            return (
              <Link
                className={`flex items-center gap-2 hover:text-shpccYellow hover:cursor-pointer hover:bg-black p-4 rounded-lg font-semibold uppercase transition duration-200 ${
                  router.pathname.includes(
                    `/dashboard/${link.link.toLowerCase()}`
                  ) ||
                  router.pathname.includes(
                    `/dashboard/admin/${link.link.toLowerCase()}`
                  )
                    ? "text-shpccYellow cursor-pointer bg-black"
                    : ""
                }`}
                key={index}
                href={`/dashboard/${
                  user.isAdmin ? "admin/" : ""
                }${link.link.toLowerCase()}`}
              >
                {link.svg}
                <p>{link.link}</p>
              </Link>
            );
          })}
          <div
            className="flex items-center gap-2 hover:text-shpccYellow hover:cursor-pointer hover:bg-black p-4 rounded-lg font-semibold uppercase"
            onClick={() => logout()}
          >
            <svg
              width={svgSize}
              height={svgSize}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                fill="currentColor"
              />
              <path
                d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                fill="currentColor"
              />
            </svg>
            <p>Logout</p>
          </div>
          <div className="p-4 bg-black rounded-lg text-shpccYellow text-xs font-light text-center">
            {user.email}
          </div>
          {user.isAdmin && (
            <div className="p-4 bg-shpccYellow rounded-lg text-black text-xs font-black text-center uppercase">
              Administrator
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
