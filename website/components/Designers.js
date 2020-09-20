import React, { useState } from "react";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const jochemtepperik = {
  avatar: "/images/home/jochem-avatar.png",
  photo: "/images/home/jochem.png",
  name: "Jochem Tepperik",
  linkedin: "https://www.linkedin.com/in/jochem-tepperik-b0bbba141/",
  email: "jochem@oostz-ontwerp.nl",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "Ik maak graag samen met u de vertaling van een esthetisch ontwerp naar een technisch ontwerp dat geheel aansluit op uw wensen en ideeën. Ik vind het fantastisch om hierin als creatieve schakel te fungeren en uw droom om te zetten in een tastbaar resultaat.",
};

const koenklijnvelderman = {
  avatar: "/images/home/koen-avatar.png",
  photo: "/images/home/koen.png",
  name: "Koen Klijn Velderman",
  linkedin: "https://www.linkedin.com/in/koen-klijn-velderman-8b59357a/",
  email: "koen@oostz-ontwerp.nl",
  jobtitle: "Bouwkundig ontwerper",
  description:
    "'Make it simple, but significant.' Ontwerpen is voor mij eigenzinnig, uniek en functioneel. Uw wensen staan hierin centraal, met een persoonlijk en uniek ontwerp als gevolg. Het is een prachtig proces van schets tot eindresultaat, waarbij ik u graag begeleid.",
};

function Designers() {
  const [toggleDesigner, setToggleDesigner] = useState(true);

  const avatar = toggleDesigner
    ? jochemtepperik.photo
    : koenklijnvelderman.photo;

  const fullname = toggleDesigner
    ? jochemtepperik.name
    : koenklijnvelderman.name;

  const jobtitle = toggleDesigner
    ? jochemtepperik.jobtitle
    : koenklijnvelderman.jobtitle;

  const description = toggleDesigner
    ? jochemtepperik.description
    : koenklijnvelderman.description;

  const linkedin = toggleDesigner
    ? jochemtepperik.linkedin
    : koenklijnvelderman.linkedin;

  const email = toggleDesigner
    ? jochemtepperik.email
    : koenklijnvelderman.email;

  return (
    <div className="flex flex-row">
      <div className="hidden md:flex md:w-1/3 md:justify-center mr-4">
        <img src={avatar}></img>
      </div>
      <div className="flex flex-col w-full md:w-2/3 justify-center">
        <div className="inline-flex mb-6">
          <button
            className={`${
              toggleDesigner
                ? `h-12 w-12 mr-3 rounded bg-yellow-100`
                : `h-12 w-12 mr-3 rounded`
            }`}
            onClick={() => setToggleDesigner(true)}
          >
            <img src={jochemtepperik.avatar}></img>
          </button>
          <button
            className={`${
              !toggleDesigner
                ? `h-12 w-12 mr-3 rounded bg-yellow-100`
                : `h-12 w-12 mr-3 rounded`
            }`}
            onClick={() => setToggleDesigner(false)}
          >
            <img src={koenklijnvelderman.avatar}></img>
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-heading text-white font-extrabold mb-2 antialiased">
            {fullname}
          </h2>
          <h4 className="text-sm font-body text-gray-200 font-light antialiased mb-4">
            {jobtitle}
          </h4>
          <p className="text-base font-body text-gray-200 font-normal antialiased mb-4">
            {description}
          </p>
          <div className="flex flex-row items-center">
            <a href={linkedin} target="_blank">
              <svg
                className="fill-current text-white mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.333 9.667H5.667a.333.333 0 00-.334.333v8.667c0 .184.15.333.334.333h2.666c.184 0 .334-.15.334-.333V10a.333.333 0 00-.334-.333zM6.987 8.333A1.66 1.66 0 008.64 6.667C8.64 5.747 7.9 5 6.987 5a1.66 1.66 0 00-1.654 1.667c0 .92.74 1.666 1.654 1.666zM16.333 19h2a.333.333 0 00.334-.333v-5.6c0-2.514-1.42-3.734-3.407-3.734a2.807 2.807 0 00-2.113.847.274.274 0 01-.48-.18.333.333 0 00-.334-.333h-2A.333.333 0 0010 10v8.667a.334.334 0 00.333.333h2a.333.333 0 00.334-.333v-5a1.667 1.667 0 013.333 0v5a.334.334 0 00.333.333z" />
              </svg>
            </a>
            <a href={`mailto:${email}`} target="_blank">
              <svg
                className="fill-current text-white mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.925 7.888a.121.121 0 00-.133.026l-6.498 6.497a1.833 1.833 0 01-2.592 0L4.207 7.914a.12.12 0 00-.187.019A.121.121 0 004 8v8a1.333 1.333 0 001.333 1.333h13.334A1.334 1.334 0 0020 16V8a.12.12 0 00-.075-.112z" />
                <path d="M11.41 13.704a.835.835 0 001.179 0l6.457-6.457a.333.333 0 00.08-.341c-.073-.22-.277-.24-.46-.24H5.334c-.183 0-.388.02-.46.24a.333.333 0 00.08.34l6.457 6.458z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designers;
