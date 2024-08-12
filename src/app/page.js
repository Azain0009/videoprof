'use client';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import AOS from "aos";
import "aos/dist/aos.css";
import { SiAdobeaftereffects, SiAdobepremierepro, SiDavinciresolve, SiAdobephotoshop, SiAdobelightroom } from 'react-icons/si';

export default function Home() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          font-family: 'Helvetica', 'Arial', sans-serif;
        }
        @keyframes slideToCenter {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .scroll-slide {
          transform: translateX(-100%);
          opacity: 0;
          transition: transform 1s ease-out, opacity 1s ease-out;
        }
        .scroll-slide.show {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
      <div className="bg-[#020410] text-white">
        <header className="py-32 h-screen flex items-center px-4 relative" data-aos="fade-up">
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial"></div>
          </div>
          <div className="w-full max-w-screen-xl mx-auto text-center relative">
            <div className="w-full px-2 md:text-left">
              <h1 className={`text-3xl md:text-9xl text-white scroll-slide ${headerInView ? 'show' : ''}`} ref={headerRef}>
                Azain Akil
              </h1>
              <p className={`text-3xl mb-8 md:text-3xl mt-4 text-white scroll-slide ${headerInView ? 'show' : ''}`}>
                I craft bespoke video edits for individuals and brands
              </p>
              <a href="mailto:azainxc@gmail.com" className="mt-6 inline-block rounded-lg bg-white text-black p-3 transition-transform duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-110" data-aos="fade-up" data-aos-delay="400">
                Let&apos;s Collaborate
              </a>
            </div>
          </div>
        </header>

        <section className="py-32" data-aos="fade-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8 text-white" data-aos="fade-up">My Creative Arsenal</h2>
            <p className="text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">
              I use a variety of tools to get the edits just right, ensuring each project meets the highest standards of quality.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center" data-aos="fade-up" data-aos-delay="200">
                <SiAdobepremierepro className="text-4xl sm:text-6xl" />
              </div>
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center" data-aos="fade-up" data-aos-delay="300">
                <SiAdobeaftereffects className="text-4xl sm:text-6xl" />
              </div>
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                <SiDavinciresolve className="text-4xl sm:text-6xl" />
              </div>
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center" data-aos="fade-up" data-aos-delay="500">
                <SiAdobephotoshop className="text-4xl sm:text-6xl" />
              </div>
              <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center" data-aos="fade-up" data-aos-delay="600">
                <SiAdobelightroom className="text-4xl sm:text-6xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-8 text-center">Work Visuals</h2>
            <p className="text-lg text-gray-300 mb-8 w-1/2 mx-auto text-center py-4">
              Explore some of my recent video projects that showcase my expertise in video editing. From cinematic storytelling to precise editing, each piece reflects my commitment to creating compelling and high-quality visual content. Whether it&apos;s a brand promotion, a creative short film, or a personal project, I bring creativity and technical skill to every edit to ensure a captivating final product.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2 row-span-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/8DFUTH7LWhM"
                  title="Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover"
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4N6V3Z76CTc"
                  title="Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover"
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/n-jXmEi42qc"
                  title="Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover"
                ></iframe>
              </div>
              <div className="col-span-1 lg:col-span-2 row-span-2">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/rVVIeVCnYk0"
    title="Video 4"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="object-cover"
  ></iframe>
</div>

<div className="col-span-1">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/q4gZ6JDn4-E"
    title="Video 5"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="object-cover"
  ></iframe>
</div>

              <div className="col-span-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BwPEU9BE644"
                  title="Video 6"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32" data-aos="fade-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mt-2 mb-8">My Philosophy</h2>
            <p className="mt-4 w-full sm:w-1/2 mx-auto text-gray-300">
              At the heart of my work lies a deep passion for storytelling through visuals. My approach combines creativity with technical expertise to produce engaging content that resonates with audiences. I believe in a collaborative process where client vision meets artistic innovation, resulting in unique and impactful video edits.
            </p>
          </div>
        </section>

        <section className="py-32" data-aos="fade-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Client Testimonials</h2>
            <div className="relative flex flex-wrap justify-center gap-8 py-4">
              <div className="w-full max-w-sm p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 testimonial-card" data-aos="fade-up" data-aos-delay="100">
                <p className="text-gray-300 mb-4">
                  &quot;Azain Akil&apos;s work is exceptional. His attention to detail and creative vision brought our project to life in ways we never imagined. Highly recommend!&quot;
                </p>
                <p className="font-semibold text-white">Nikhil Naik</p>
              </div>
              <div className="w-full max-w-sm p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 testimonial-card" data-aos="fade-up" data-aos-delay="200">
                <p className="text-gray-300 mb-4">
                  &quot;Working with Azain has been a game-changer for our brand. His video edits are not only high quality but also perfectly align with our vision and goals.&quot;
                </p>
                <p className="font-semibold text-white">Shreesh</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32" data-aos="fade-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mt-2 mb-8">Interested in working together? Drop me a line.</h2>
            <a href="mailto:azainxc@gmail.com" className="text-lg text-vibrant-teal underline">azainxc@gmail.com</a>
          </div>
        </section>

        <footer className="bg-gray-700 py-4" data-aos="fade-up">
          <div className="container mx-auto text-center">
            <p className="text-gray-500">&copy; 2024 Azain Akil. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
