"use client";

import { useRef, useState } from "react";

import CalendarSection from "@/components/Calendar/CalendarSection";
import CountdownSection from "@/components/Countdown/CountdownSection";
import GallerySection from "@/components/Gallery/GallerySection";
import GuestbookSection from "@/components/Guestbook/GuestbookSection";
import GuideSection from "@/components/Guide/GuideSection";
import Hero from "@/components/Hero/Hero";
import IntroEnvelope from "@/components/IntroEnvelope/IntroEnvelope";
import FloatingMedicalIcons from "@/components/Layout/FloatingMedicalIcons";
import RevealSection from "@/components/Layout/RevealSection";
import SmoothScroll from "@/components/Layout/SmoothScroll";
import NotesSection from "@/components/Notes/NotesSection";
import PartyInvitationSection from "@/components/Party/PartyInvitationSection";
import PartySurprise from "@/components/Party/PartySurprise";
import RSVPSection from "@/components/RSVP/RSVPSection";
import ThankYouSection from "@/components/ThankYou/ThankYouSection";
import TimelineSection from "@/components/Timeline/TimelineSection";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);
  const [showAfterParty, setShowAfterParty] = useState(false);

  const handleOpenComplete = async () => {
    setShowEnvelope(false);
    setShowWebsite(true);

    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.35;
        audioRef.current.loop = true;
        await audioRef.current.play();
      }
    } catch {
      // Nếu trình duyệt chặn, website vẫn mở bình thường
    }
  };

  const handleOpenPartyInvitation = () => {
  window.scrollTo({
    top: window.scrollY,
    behavior: "auto",
  });

  setTimeout(() => {
    setShowAfterParty(true);
  }, 300);
};

  return (
    <main className="bg-[#FAF7F2]">
      <audio ref={audioRef} src="/audio/background.mp3" preload="auto" />

      {showEnvelope && <IntroEnvelope onOpen={handleOpenComplete} />}

      {showWebsite && (
        <SmoothScroll refreshKey={showAfterParty}>
          <FloatingMedicalIcons />

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

          {!showAfterParty && (
            <RevealSection>
              <PartySurprise onOpen={handleOpenPartyInvitation} />
            </RevealSection>
          )}

          {showAfterParty && (
            <>
              <RevealSection>
                <PartyInvitationSection />
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
            </>
          )}
        </SmoothScroll>
      )}
    </main>
  );
}