import React, { useState } from "react";

import img1 from '../assets/wd1.jpg';
import img2 from '../assets/wd2.jpg';
import img3 from '../assets/wd3.jpg';
import img4 from '../assets/md1.jpg';
import img5 from '../assets/md2.jpg';
import img6 from '../assets/carlogo.png'

const driversData = [
  {
    id: 1,
    name: "Olivia Grace",
    role: "SR. Driver",
    years: "05",
    img: img1,
  },
  {
    id: 2,
    name: "Olivia Smith",
    role: "Premium Driver",
    years: "08",
    img: img2,
  },
  {
    id: 3,
    name: "James Olivia",
    role: "JR. Driver",
    years: "04",
    img: img3,
  },
  {
    id: 4,
    name: "Jason Ray",
    role: "SR. Driver",
    years: "07",
    img: img4,
  },
  {
    id: 5,
    name: "James Vince",
    role: "Customer Service Coordinator",
    years: "03",
    img: img5,
  },
];

export default function Section5() {
  const [selected, setSelected] = useState(driversData[2]); 
  

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className='py-15 container mx-auto text-center'>
        <div className='text-lg uppercase font-semibold font-jalano text-[#EDC305]  flex gap-3 items-center justify-center'>
          <div><img src={img6} alt=""  className='w-20'/></div>
            <h1>Our drivers</h1>
          </div>
          <h1 className='text-5xl font-bold font-jalano  uppercase'>Meet Our Premium Drivers</h1>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* LEFT LIST */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              {driversData.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelected(d)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left
                    ${selected.id === d.id
                      ? "bg-yellow-500 text-white shadow-md border-yellow-500"
                      : "bg-white text-gray-800 border-gray-200"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full overflow-hidden border-2 p-1
                      ${selected.id === d.id ? "border-white" : "border-yellow-400"}`}
                    >
                      <img
                        src={d.img}
                        alt={d.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div>
                      <div className="font-semibold text-sm md:text-base">{d.name}</div>
                      <div
                        className={`text-xs ${
                          selected.id === d.id ? "text-yellow-100" : "text-gray-500"
                        }`}
                      >
                        {d.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`text-2xl font-extrabold ${
                        selected.id === d.id ? "text-white" : "text-yellow-500"
                      }`}
                    >
                      {d.years}
                    </div>
                    <div
                      className={`text-xs ${
                        selected.id === d.id ? "text-yellow-100" : "text-gray-500"
                      }`}
                    >
                      Years <br />
                      <span className="font-medium">Experience</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 md:hidden" />
          </div>

          {/* RIGHT BIG HERO IMAGE */}
          <div className="md:col-span-2">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-[460px] md:h-[580px] object-cover"
              />

              {/* Social Icons */}
              <div className="absolute left-6 bottom-6 flex items-center gap-4">
                {["facebook", "x", "instagram", "linkedin"].map((icon) => (
                  <div
                    key={icon}
                    className="bg-black/40 text-white rounded-full p-2 shadow backdrop-blur-sm"
                  >
                    {socialIcon(icon)}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function socialIcon(kind) {
  switch (kind) {
    case "facebook":
      return (
        <svg xmlns="" className="w-5 h-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
        </svg>
      );
    case "x":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M17.5 6.5h.01" />
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-2-2 2 2 0 00-2 2v6h-4v-12h4v2" />
          <rect x="2" y="9" width="4" height="12" rx="1" ry="1" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    default:
      return null;
  }
}
