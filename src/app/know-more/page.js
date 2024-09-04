import Articles from "@/components/Know-more/Articles";
import FirstSec from "@/components/Know-more/FirstSec";
import Hero from "@/components/Know-more/Hero";
import SecondSec from "@/components/Know-more/SecondSec";
import ThirdSec from "@/components/Know-more/ThirdSec";
import React from "react";

function knowMore() {
  return (
    <div>
      <Hero />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <Articles />
    </div>
  );
}

export default knowMore;
