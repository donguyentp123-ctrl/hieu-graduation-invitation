"use client";

import { useState } from "react";

import Hero from "@/components/Hero/Hero";
import RevealSection from "@/components/Layout/RevealSection";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import FloatingMedicalIcons from "@/components/Layout/FloatingMedicalIcons";
import LuxuryCursor from "@/components/Layout/LuxuryCursor";
import LiveNotification from "@/components/Layout/LiveNotification";
import IntroEnvelope from "@/components/IntroEnvelope/IntroEnvelope";
import CalendarSection from "@/components/Calendar/CalendarSection";
import CountdownSection from "@/components/Countdown/CountdownSection";
import TimelineSection from "@/components/Timeline/TimelineSection";
import GallerySection from "@/components/Gallery/GallerySection";
import GuideSection from "@/components/Guide/GuideSection";
import RSVPSection from "@/components/RSVP/RSVPSection";
import GuestbookSection from "@/components/Guestbook/GuestbookSection";
import NotesSection from "@/components/Notes/NotesSection";
import ThankYouSection from "@/components/ThankYou/ThankYouSection";
export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showHero, setShowHero] = useState(false);

  const handleOpenComplete = () => {
    setShowEnvelope(false);
    setShowHero(true);
  };

  return (
    <main className="bg-[#FAF7F2]">
      {showEnvelope && <IntroEnvelope onOpen={handleOpenComplete} />}

{showHero && (
  <SmoothScroll>
    <FloatingMedicalIcons />
    <LiveNotification />
    
    <RevealSection>
      <Hero />
    </RevealSection>

    <RevealSection>
      <CalendarSection />
    </RevealSection>

    <RevealSection>
      <CountdownSection />
    </RevealSection>

    <RevealSection>
      <TimelineSection />
    </RevealSection>

    <RevealSection>
      <GallerySection />
    </RevealSection>

    <RevealSection>
      <GuideSection />
    </RevealSection>

    
    <RevealSection>
      <RSVPSection />
    </RevealSection>

    <RevealSection>
      <GuestbookSection />
    </RevealSection>

    <RevealSection>
      <NotesSection />
    </RevealSection>

    <RevealSection>
      <ThankYouSection />
    </RevealSection>
  </SmoothScroll>
)}
    </main>
  );
}