import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  console.log(router);
  const { location, startDate, endDate, noOfGuests } = router.query;
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const updateSize = () => setWidth(window.innerWidth);

  const isXlBreakpoint = () => {
    if (width > 1280) {
      setIsXl(true);
    } else {
      setIsXl(false);
    }
  };

  useEffect(() => {
    window.onresize = updateSize;
    isXlBreakpoint();
  }, [width]);
  const [isXl, setIsXl] = useState(false);

  console.log(width, isXl);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className="">
      <Header />

      <main className="flex flex-col xl:flex-row">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ stays - {range} - {noOfGuests} - guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3
          text-gray-800 whitespace-nowrap"
          >
            <p className="tagButtons">Cancellation Flexibility</p>
            <p className="tagButtons"> Type of Place</p>
            <p className="tagButtons">Price</p>
            <p className="tagButtons">Rooms and Beds</p>
          </div>
          <div className="flex flex-col ">
            {searchResults.map((item, i) => (
              <InfoCard
                key={i}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className=" xl:inline min-w-[600px] ">
          <Map searchResults={searchResults} height={isXl ? "100%" : "400px"} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
