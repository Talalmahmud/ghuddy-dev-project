"use client";
import Card from "@/components/card/Card";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";

const hotelType: string[] = [
  "Hotel",
  "Hostel",
  "Villa",
  "Base House",
  "Flat",
  "Cottage",
  "Bungallow",
  "Tour Package",
];
const mobilityList: string[] = [
  "Wheelchair friendly",
  "Baby Stroller friendly",
];

export default function Home() {
  const [showHotel, setShowHotel] = useState(true);
  const [showSpace, setShowSpace] = useState(true);
  const [showMobility, setShowMobility] = useState(true);
  const [showAmenities, setShowAmenities] = useState(true);
  const [showServices, setShowServices] = useState(true);
  const [content, setContent] = useState([]);

  const hotelShowChange = () => [setShowHotel(!showHotel)];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dev.ghuddy.link/api/v1/open/hotels");
      const resData = await res.json();
      console.log(resData);
      setContent(resData.esHotelCardList);
    };
    fetchData();
  }, []);

  return (
    <main className=" px-[170px]">
      <Header />
      {/* main body */}

      <div className=" py-6 flex flex-row bg-bg-semiwhite">
        <div className="w-[365px]">
          <p className=" text-base14 text-txt-primary_light px-4">
            12 USD - 1987 USD Per Night
          </p>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
            className="h-[200px] w-[95%]"
          />
          {/* type */}
          <div className=" flex justify-between items-center border-b-[1px] bg-bg-semiwhite pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">Type</p>
            <button onClick={hotelShowChange}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </button>
          </div>
          {/* type list */}
          {showHotel && (
            <div className=" pl-4 py-2">
              {hotelType.map((item: string, index: number) => (
                <div className=" flex items-center pl-2">
                  <input type="checkbox" name={item} className="" />
                  <p className=" pl-2 text-base16 font-normal">{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* space */}
          <div className=" flex justify-between items-center border-b-[1px] border-btn-primary pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">Space:</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </div>
          </div>
          <div className=" mt-2 pl-4 text-base16">
            <p className=" text-base16">Rooms:</p>
            <div className=" flex gap-x-2 pl-2">
              <input type="checkbox" name="2" />
              <p className=" text-base16">{"2 >"}</p>
            </div>
            <div className=" flex gap-x-2 pl-2">
              <input type="checkbox" name="5" />

              <p className=" text-base16">{"5 >"}</p>
            </div>
          </div>
          <div className=" mt-2 pl-4 text-base16">
            <p className=" text-base16">Bathrooms:</p>
            <div className=" flex gap-x-2 pl-2">
              <input type="checkbox" name="2" />
              <p className=" text-base16">{"2 >"}</p>
            </div>
          </div>
          <div className=" mt-2 pl-4 text-base16">
            <p className=" text-base16">Bedrooms:</p>
            <div className=" flex gap-x-2 pl-2">
              <input type="checkbox" name="5" />

              <p className=" text-base16">{"5 >"}</p>
            </div>
          </div>

          {/* mobility */}
          <div className=" flex justify-between items-center border-b-[1px] border-btn-primary pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">
              Mobility
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </div>
          </div>
          {/* mobility list */}
          <div className=" pl-4 py-2">
            {mobilityList.map((item: string, index: number) => (
              <div className=" flex items-center pl-2">
                <input type="checkbox" name={item} />
                <p className=" pl-2 text-base16 font-normal">{item}</p>
              </div>
            ))}
          </div>

          {/* mobility */}
          <div className=" flex justify-between items-center border-b-[1px] border-btn-primary pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">
              Reviews
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </div>
          </div>
          {/* Reviews list */}
          <div className=" pl-2">
            <div className=" pl-4 flex gap-x-2 py-2">
              {mobilityList.map((item: string, index: number) => (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                      fill="#F6D731"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className=" pl-4 flex gap-x-2 py-2">
              {mobilityList.map((item: string, index: number) => (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                      fill="#F6D731"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className=" pl-4 flex gap-x-2 py-2">
              {mobilityList.map((item: string, index: number) => (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                      fill="#F6D731"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Amneties */}
          <div className=" flex justify-between items-center border-b-[1px] border-btn-primary pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">
              Amneties
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </div>
          </div>
          {/* amnities list */}
          <div className=" pl-4 py-2">
            {mobilityList.map((item: string, index: number) => (
              <div className=" flex items-center pl-2">
                <input type="checkbox" name={item} />
                <p className=" pl-2 text-base16 font-normal">{item}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className=" flex justify-between items-center border-b-[1px] border-btn-primary pl-4 pr-[11px] py-2">
            <p className=" text-base18 font-medium text-txt-primary ">
              Services
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14.1192 16.1247L18.7092 11.5347C18.8955 11.3473 19 11.0938 19 10.8297C19 10.5655 18.8955 10.312 18.7092 10.1247C18.6162 10.0309 18.5056 9.95653 18.3838 9.90576C18.2619 9.855 18.1312 9.82886 17.9992 9.82886C17.8672 9.82886 17.7365 9.855 17.6146 9.90576C17.4928 9.95653 17.3822 10.0309 17.2892 10.1247L12.7092 14.7247C12.6162 14.8184 12.5056 14.8928 12.3838 14.9435C12.2619 14.9943 12.1312 15.0205 11.9992 15.0205C11.8672 15.0205 11.7365 14.9943 11.6146 14.9435C11.4928 14.8928 11.3822 14.8184 11.2892 14.7247L6.7092 10.1247C6.52223 9.93635 6.26811 9.83004 6.00274 9.8291C5.73738 9.82816 5.48251 9.93268 5.29421 10.1197C5.1059 10.3066 4.99959 10.5608 4.99865 10.8261C4.99771 11.0915 5.10223 11.3464 5.28921 11.5347L9.87921 16.1247C10.4417 16.6865 11.2042 17.002 11.9992 17.002C12.7942 17.002 13.5567 16.6865 14.1192 16.1247Z"
                  fill="#879FA8"
                />
              </svg>
            </div>
          </div>
          {/* services list */}
          <div className=" pl-4 py-2">
            {mobilityList.map((item: string, index: number) => (
              <div className=" pl-2 flex items-center">
                <input type="checkbox" name={item} />
                <p className=" pl-2 text-base16 font-normal">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" pl-12">
          {content.length !== 0 ? (
            content.map((item, index) => <Card key={index} {...item} />)
          ) : (
            <h2 className=" h-[200px] text-lg font-semibold w-full flex justify-center items-center">
              ..........Nothing to find..........
            </h2>
          )}
        </div>
      </div>
    </main>
  );
}
