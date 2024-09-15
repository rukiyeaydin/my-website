import Image from "next/image";
import { Metadata } from "next";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { Slide } from "../animation/Slide";
import { userProfile } from "../data/data";
import cdevelopers from './cdevelopers.png'

export const metadata: Metadata = {
  title: "About | Rukiye Aydin",
  metadataBase: new URL("https://rukiyeaydindev.netlify.app/about"),
  description: "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Rukiye Aydin",
    url: "https://rukiyeaydindev.netlify.app/about",
    description: "Learn more about my skills, experience and technical background",
  },
};

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div key={userProfile.id}>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m {userProfile.fullName}.
              </h1>
              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                I&apos;m currently a computer engineering student at 4th grade.
                <br /><br />
                I began my coding journey with C.
                <br /><br />
                Later, my interest in Javascript guided me towards web developing, and I built some projects that I use regularly. As I ventured further into the web ecosystem, I developed MERN projects.
                <br /><br />
                And later, after taking AI lectures, i wanted to improve my skills in data science. 
                <br /><br />
                I&apos;m still studying in the fields of web and AI.
                <br /><br />
                <h1 className="text-2xl font-bold">Hobbies</h1>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Movies</li>
                  <li className="mb-1">Coding</li>
                  <li className="mb-1">Sports</li>
                </ul>
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src={cdevelopers}
                  width={400}
                  height={400}
                  quality={100}
                  alt={userProfile.profileImage.alt}
                  priority
                />

                <div className="flex flex-col text-center gap-y-4">
                  {/* <div className="flex items-center gap-x-3">
                    <a
                      href={`${userProfile.resumeURL}?dl=${userProfile.fullName}-resume`}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Résumé <BiLinkExternal className="text-base" />
                    </a>
                    <a
                      href={`${userProfile.resumeURL}?dl=${userProfile.fullName}-resume`}
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div> */}

                  <a
                    href={`mailto:${userProfile.email}`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {userProfile.email}
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
      </div>
    </main>
  );
}
