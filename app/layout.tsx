import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display, Montserrat, Dancing_Script, } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
});

const signatureFont = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-signature",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hieu-graduation-invitation.vercel.app"),

  title: "Thư Mời Tốt Nghiệp | Phạm Trung Hiếu",

  description:
    "Trân trọng kính mời tham dự lễ tốt nghiệp Bác sĩ Đa khoa của Phạm Trung Hiếu tại Đại học Y Dược Cần Thơ.",

  openGraph: {
    title: "Thư Mời Tốt Nghiệp | Phạm Trung Hiếu",
    description:
      "Trân trọng kính mời tham dự lễ tốt nghiệp Bác sĩ Đa khoa của Phạm Trung Hiếu.",
    url: "https://hieu-graduation-invitation.vercel.app",
    siteName: "Graduation Invitation",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lễ tốt nghiệp Phạm Trung Hiếu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thư Mời Tốt Nghiệp | Phạm Trung Hiếu",
    description:
      "Trân trọng kính mời tham dự lễ tốt nghiệp Bác sĩ Đa khoa của Phạm Trung Hiếu.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
  className={`${headingFont.variable} 
              ${bodyFont.variable} 
              ${signatureFont.variable}`}
>
  {children}
</body>
    </html>
  );
}


