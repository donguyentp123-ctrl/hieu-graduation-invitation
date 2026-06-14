export default function LuxuryBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#d8c29a]/10 blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#1f3a2e]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,138,78,0.05),transparent_70%)]" />

      </div>
    </>
  );
}