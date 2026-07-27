import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Tracks } from "@/components/sections/tracks";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ScrollFab } from "@/components/sections/scroll-fab";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        - UBAH DESIGN SUPAYA X NAMPAK MCM AI SLOP
        <br />
        <br />
        - first layer: 2 bahagian: kiri utk codedojo: hack-a-thon bla bla bla + theme + btn register, kanan utk logo
        <br />
        - 2nd layer: count down besar.
        <br />
        - 3rd layer: tarikh + venue
        <br />
        - ubah "500+ hacker" bla bla bla tu ke bwh "everything you need to build"
        <br />
        <Benefits />
        - ubah content supaya relate dgn hack-a-thon infos
        <br />
        <HowItWorks />
        - buang how it works, ganti design schedule dgn timeline hack-a-thon + design drpd dribbble
        <br />
        - letak info ttg sponsors, kasi dia bergerak kanan ke kiri.
        <br />
        - prizes dekat bwh, guna design dlm dribble.
        <br />
        <Tracks />
        - buang bnde2 yg x berkaitan. seidakan hanya 2 card: kiri utk FAQ, kanan utk Rules.
        <br />
        - FAQ guna design style "Questions, answered" punya.
        <br />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollFab />
      - ejas2 design dkt footer, bagi x nmpk mcm kosong sgt
      <br />
      - dkt design "last call" tu, ubah statement dia supaya relate dgn hack-a-thon + tema hackathon ni.
    </div>
  );
}
