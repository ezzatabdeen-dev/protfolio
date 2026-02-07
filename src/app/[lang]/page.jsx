import "../globals.css";
import { getDictionary } from "@/lib/getDictionary";
import {
  Hero,
  About,
  Education,
  Skills,
  Experience,
  Interests,
  Contact,
  Footer,
} from "@/components/index";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero data={dict.hero} />
      <About data={dict.about} />
      <Education data={dict.education} />
      <Skills data={dict.skills} />
      <Experience data={dict.experience} />
      <Interests data={dict.interests} />
      <Contact data={dict.contact} />
      <Footer data={dict.footer} />
    </>
  );
}
