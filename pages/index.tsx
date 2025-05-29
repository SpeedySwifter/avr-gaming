import React from "react";
import HeroSection from "../components/HeroSection";
import SponsorBar from "@/components/SponsorBar";
import BlogCarouselAutoplay from "@/components/BlogCarouselAutoplay";
import HeaderDecent from "@/components/HeaderDezent";
import TeamHexGrid from "@/components/TeamHexGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <HeaderDecent />
      <main>
        <section>
          <HeroSection />
        </section>
        <section>
          <SponsorBar />
        </section>

        <section className="py-16 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6">
            <BlogCarouselAutoplay />
          </div>
        </section>

        <section>
          <TeamHexGrid />
        </section>
        
        <section>
          <Footer />
        </section>

      </main>
    </div>
  );
}
