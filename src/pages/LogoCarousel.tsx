import React from 'react';
import Image1 from "../assets/logos/1.png";
import Image2 from "../assets/logos/2.png";
import Image3 from "../assets/logos/3.png";
import Image4 from "../assets/logos/4.png";
import Image5 from "../assets/logos/5.png";
import Image6 from "../assets/logos/6.png";
import Image7 from "../assets/logos/7.png";
import Image8 from "../assets/logos/8.png";
import Image9 from "../assets/logos/9.png";
import Image10 from "../assets/logos/10.png";
import Image11 from "../assets/logos/11.png";
import Image12 from "../assets/logos/12.png";
import Image13 from "../assets/logos/13.png";


const LogoCarousel = () => {
  // Sample client logos - replace with your actual logo URLs
  const clientLogos = [
    {
      id: 1,
      // src: "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=Client+1",
      src: Image1,
      alt: "Client 1"
    },
    {
      id: 2,
      src: Image2,
      alt: "Client 2"
    },
    {
      id: 3,
      src: Image3,
      alt: "Client 3"
    },
    {
      id: 4,
      src: Image4,
      alt: "Client 4"
    },
    {
      id: 5,
      src: Image5,
      alt: "Client 5"
    },
    {
      id: 6,
      src: Image6,
      alt: "Client 6"
    },
    {
      id: 7,
      src: Image7,
      alt: "Client 7"
    },
    {
      id: 8,
      src: Image8,
      alt: "Client 8"
    },
    {
      id: 9,
      src: Image9,
      alt: "Client 9"
    },
    {
      id: 10,
      src: Image10,
      alt: "Client 10"
    },
    {
      id: 11,
      src: Image11,
      alt: "Client 11"
    },
    {
      id: 12,
      src: Image12,
      alt: "Client 12"
    },
    {
      id: 13,
      src: Image13,
      alt: "Client 13"
    }
  ];

  // Duplicate the logos to create seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;