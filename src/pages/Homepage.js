import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <React.Fragment>
      <Navigation
        content={{
          brand: {
            text: "Dhanai Fruits Mart",
            image:
              "https://res.cloudinary.com/rps-technologies/image/upload/v1613821135/logo/logo-pied-piper-white.png",
            width: "120"
          },
          "brand-small": {
            text: "Dhanai Fruits Mart",
            image:
              "https://res.cloudinary.com/rps-technologies/image/upload/v1613821135/logo/logo-pied-piper-white.png",
            width: "120"
          },
          link1: "Home",
          link2: "Product",
          link4: "Contact"
        }}
        bucketMain={[<Header content={null} />]}
      />
    </React.Fragment>
  );
}
