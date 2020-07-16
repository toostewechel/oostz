import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import CardSmall from "../components/CardSmall";
import HoverCard from "../components/HoverCard";
import Image from "../components/ThumbnailImage";
import TabGallery from "../components/TabGallery";
import TestimonialSlide from "../components/TestimonialSlide";
import HomeSlider from "../components/HomeSlider";

//Import pure-react-carousel
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function Home() {
  return (
    <body className="bg-background ">
      <div className="mx-auto">
        <Head>
          <meta name="description" content="Oostz Ontwerp" />
          <title>Oostz Ontwerp</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Layout>
            <Header></Header>
            <section className="mt-20">
              <HomeSlider></HomeSlider>
            </section>
            <section className="mt-24 mb-24">
              <div
                style={{
                  maxWidth: "592px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="text-left md:text-center"
              >
                <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                  Van ontwerp tot oplevering
                </h2>
                <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                  {" "}
                  Oostz Ontwerp is een vakkundige en betrouwbare partner voor
                  realisatie van uw project van ontwerp tot oplevering. Wij zijn
                  sterk in het klantgericht meedenken en hebben veel ervaring in
                  de bouwsector{" "}
                </p>
              </div>
              <div className="flex flex-row flex-wrap mb-8">
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-start">
                  <CardSmall
                    src="/concept-icon.svg"
                    title="Concept"
                    item1="Oriënterend gesprek"
                    item2="Vergunning check"
                    item3="Bestemmingsplan check"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                  <CardSmall
                    src="/ontwerp-icon.svg"
                    title="Ontwerp"
                    item1="Bouwkundig schetsontwerp"
                    item2="3D impressies"
                    item3="Kostenraming"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-center">
                  <CardSmall
                    src="/vergunning-icon.svg"
                    title="Vergunning"
                    item1="Bouwkundig tekenwerk"
                    item2="Toetsing bouwbesluit"
                    item3="Constructieberekening"
                  ></CardSmall>
                </div>
                <div className="flex w-full md:w-1/2 md:justify-center lg:w-1/4 lg:justify-end">
                  <CardSmall
                    src="/uitvoering-icon.svg"
                    title="Uitvoering"
                    item1="Technische omschrijvingen"
                    item2="Werktekeningen"
                    item3="Bouwbegeleiding"
                  ></CardSmall>
                </div>
              </div>
              <div className="flex md:justify-center">
                <button className="flex flex-row items-center px-3 py-2 bg-yellow-500 text-heading text-sm font-body font-medium rounded hover:bg-yellow-300 mt-4 lg:mt-0">
                  Onze werkwijze{" "}
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8047 7.51054L12.6193 4.2027C12.5261 4.10591 12.4073 4.04 12.278 4.01329C12.1487 3.98659 12.0147 4.0003 11.8929 4.05269C11.7711 4.10508 11.667 4.19379 11.5937 4.30761C11.5205 4.42143 11.4814 4.55526 11.4813 4.69216V6.78846C11.4813 6.83437 11.4638 6.87839 11.4325 6.91085C11.4013 6.94331 11.3589 6.96154 11.3147 6.96154H1C0.734784 6.96154 0.48043 7.07095 0.292893 7.2657C0.105357 7.46045 0 7.72458 0 8C0 8.27542 0.105357 8.53955 0.292893 8.7343C0.48043 8.92905 0.734784 9.03846 1 9.03846H11.3147C11.3589 9.03846 11.4013 9.05669 11.4325 9.08915C11.4638 9.12161 11.4813 9.16563 11.4813 9.21154V11.3078C11.4814 11.4447 11.5205 11.5786 11.5937 11.6924C11.667 11.8062 11.7711 11.8949 11.8929 11.9473C12.0147 11.9997 12.1487 12.0134 12.278 11.9867C12.4073 11.96 12.5261 11.8941 12.6193 11.7973L15.8047 8.48946C15.9296 8.35963 15.9999 8.18358 15.9999 8C15.9999 7.81643 15.9296 7.64037 15.8047 7.51054Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </button>
              </div>
            </section>
            <section className="mb-24">
              <div
                style={{
                  maxWidth: "592px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="text-left md:text-center"
              >
                <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                  Onze ontwerpen
                </h2>
                <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                  {" "}
                  Fusce commodo aliquam arcu. Ut id nisl quis enim dignissim
                  sagittis. Nullam vel sem. Etiam feugiat lorem non metus.
                  Suspendisse eu ligula.{" "}
                </p>
              </div>
              <TabGallery></TabGallery>
            </section>
            <section className="mb-24">
              <div
                style={{
                  maxWidth: "592px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="text-left md:text-center"
              >
                <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                  Waar wij voor staan
                </h2>
                <p className="text-base font-body text-gray-200 font-normal mb-10 antialiased">
                  {" "}
                  Fusce commodo aliquam arcu. Ut id nisl quis enim dignissim
                  sagittis. Nullam vel sem. Etiam feugiat lorem non metus.
                  Suspendisse eu ligula.{" "}
                </p>
              </div>
              <div className="flex flex-row flex-wrap">
                <div className="w-full md:w-1/3">
                  <HoverCard
                    title="Innovatief & Duurzaam"
                    description="Een innovatief ontwerp betekent een uniek huis oftewel een duurzame woning met toekomst"
                  ></HoverCard>
                </div>
                <div className="w-full md:w-1/3">
                  <HoverCard
                    title="Creatief & bevlogen"
                    description="Wij vertalen op een creatieve en bevlogen wijze uw dromen en plannen in tastbare ontwerpen"
                  ></HoverCard>
                </div>
                <div className="w-full md:w-1/3">
                  <HoverCard
                    title="Professioneel advies"
                    description="Wij begeleiden u op klantgerichte wijze en geven betrouwbaar advies tijdens de realisatie"
                  ></HoverCard>
                </div>
              </div>
            </section>
          </Layout>
          <section className="mb-24">
            <div
              className="h-auto w-full bg-cover pt-16 pb-12"
              style={{
                backgroundImage: "url(/background-testimonial-2k.png)",
              }}
            >
              <Layout>
                <div className="text-left md:text-center">
                  <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
                    Wat mensen over ons zeggen
                  </h2>
                </div>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={18}
                  totalSlides={2}
                >
                  <div className="mr-auto ml-auto">
                    <Slider>
                      <Slide index={0}>
                        <TestimonialSlide
                          testimonial="Fusce commodo aliquam arcu. Ut id nisl quis enim dignissim sagittis. Nullam vel sem. Etiam feugiat lorem non metus. Suspendisse eu ligula. Etiam feugiat lorem non metus. Suspendisse eu ligula."
                          author="Familie de Wit"
                        ></TestimonialSlide>
                      </Slide>
                      <Slide index={1}>
                        <TestimonialSlide
                          testimonial="Fusce commodo aliquam arcu. Ut id nisl quis enim dignissim sagittis. Nullam vel sem. Etiam feugiat lorem non metus. Suspendisse eu ligula. Etiam feugiat lorem non metus. Suspendisse eu ligula."
                          author="Gezin de Jong"
                        ></TestimonialSlide>
                      </Slide>
                    </Slider>
                  </div>
                  <div className="flex justify-center mt-4">
                    <ButtonBack className="p-2 rounded mr-2 hover:border-yellow-100">
                      <svg
                        className="fill-current text-yellow-300"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.195 8.49l3.186 3.307a.644.644 0 00.726.15.673.673 0 00.3-.255.711.711 0 00.112-.384V9.212c0-.046.017-.09.048-.123a.164.164 0 01.118-.05H15c.265 0 .52-.11.707-.305A1.06 1.06 0 0016 8c0-.275-.105-.54-.293-.734A.982.982 0 0015 6.962H4.685a.164.164 0 01-.118-.051.177.177 0 01-.048-.123V4.692c0-.137-.04-.27-.113-.384a.673.673 0 00-.299-.255.644.644 0 00-.726.15L.195 7.51A.706.706 0 000 8c0 .184.07.36.195.49z" />
                      </svg>
                    </ButtonBack>
                    <ButtonNext className="p-2 rounded mr-2 hover:border-yellow-100">
                      <svg
                        className="fill-current text-yellow-300"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8l-3-4h-1l-1 1v2H1 0a1 1 0 000 2h11v2l1 1a1 1 0 001 0l3-4z" />
                      </svg>
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </Layout>
            </div>
          </section>
          <Layout>
            <div className="flex flex-row flex-wrap">
              <div className="w-full md:w-1/3">
                <HoverCard
                  title="Innovatief & Duurzaam"
                  description="Een innovatief ontwerp betekent een uniek huis oftewel een duurzame woning met toekomst"
                ></HoverCard>
              </div>
              <div className="w-full md:w-1/3">
                <HoverCard
                  title="Creatief & bevlogen"
                  description="Wij vertalen op een creatieve en bevlogen wijze uw dromen en plannen in tastbare ontwerpen"
                ></HoverCard>
              </div>
              <div className="w-full md:w-1/3">
                <HoverCard
                  title="Professioneel advies"
                  description="Wij begeleiden u op klantgerichte wijze en geven betrouwbaar advies tijdens de realisatie"
                ></HoverCard>
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </body>
  );
}
