import { useState } from 'react';

export default function PhotographyGallerySite() {
  const [activeCategory, setActiveCategory] = useState('All');

  const photos = [
    {
      title: 'Experimental/GIF/Over & Under Photogrpahy',
      category: 'Term 3 Photography',
      cover: true,
      image: 'https://i.imgur.com/IcIVDBk.jpeg',
    },
    {
      title: 'Ex 1',
      category: 'Term 3 Photography',
      cover: false,
      image:
        'https://i.imgur.com/ERbuLPw.jpeg',
    },
    {
      title: 'Ex 2',
      category: 'Term 3 Photography',
      cover: false,
      image:
        'https://i.imgur.com/UiPvHUI.jpeg',
    },
    {
      title: 'Ex 3',
      category: 'Term 3 Photography',
      cover: false,
      image:
        'https://i.imgur.com/KWf5PAY.jpeg',
    },
    {
      title: 'Over and Under',
      category: 'Term 3 Photography',
      cover: false,
      image:
        'https://i.imgur.com/YdddX42.jpeg',
    },
    {
      title: 'Abstract/New Years Photography',
      category: 'Some Photography',
      cover: true,
      image: 'https://i.imgur.com/jiz456H.jpeg',
    },
    {
      title: 'Abs 1',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/eTyt6Ca.jpeg',
    },
     {
      title: 'Abs 2',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/1KM3NKZ.jpeg',
    },
     {
      title: 'Abs 3',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/1XCOqO6.jpeg',
    },
     {
      title: 'News 1',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/iv7lpvg.jpeg',
    },
     {
      title: 'News 2',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/ccAHQw6.jpeg',
    },
     {
      title: 'News 3',
      category: 'Some Photography',
      cover: false,
      image:
        'https://i.imgur.com/iPeXeQX.jpeg',
    },
    {
      title: 'Aperture/Shutter/Double Exposure Photography',
      category: 'More Photography',
      cover: true,
      image: 'https://i.imgur.com/J6uQLoF.jpeg',
    },
    {
      title: 'Double Exposure',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/GK5SO7r.jpeg',
    },
    {
      title: 'Shutter 1',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/uzhVaFL.jpeg',
    },
    {
      title: 'Shutter 2',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/U5hCYE5.jpeg',
    },
    {
      title: 'Ap 1',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/RN9tvIU.jpeg',
    },
    {
      title: 'Ap 2',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/XU9aVln.jpeg',
    },
    {
      title: 'Ap 3',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/ysQbRO6.jpeg',
    },
    {
      title: 'Ap 4',
      category: 'More Photography',
      cover: false,
      image:
        'https://i.imgur.com/Vj5bsdp.jpeg',
    },
    {
      title: 'Portrait Photography',
      category: 'Portrait Photography',
      cover: true,
      image: 'https://i.imgur.com/cokZzNS.jpeg',
    },
     {
      title: 'Port 1',
      category: 'Portrait Photography',
      cover: false,
      image:
        'https://i.imgur.com/CejRSRv.png',
    },
     {
      title: 'Port 2',
      category: 'Portrait Photography',
      cover: false,
      image:
        'https://i.imgur.com/lcvGc0s.jpeg',
    },
     {
      title: 'Port 3',
      category: 'Portrait Photography',
      cover: false,
      image:
        'https://i.imgur.com/23Q9DhT.jpeg',
    },
    {
      title: 'Independent Project',
      category: 'Childhood Photography',
      cover: true,
      image: 'https://i.imgur.com/wwehDok.jpeg',
    },
    {
      title: 'Playground',
      category: 'Childhood Photography',
      cover: false,
      image: 'https://i.imgur.com/tpC1IhT.jpeg',
    },
    {
      title: 'Bunny',
      category: 'Childhood Photography',
      cover: false,
      image: 'https://i.imgur.com/2gqwUzG.jpeg',
    },
     {
      title: 'Barbies',
      category: 'Childhood Photography',
      cover: false,
      image: 'https://i.imgur.com/q7FvhwQ.jpeg',
    },
    {
      title: 'Weekly Challenge',
      category: 'Other Photography',
      cover: true,
      image: 'https://i.imgur.com/RoW3Xzm.jpeg',
    },
    {
      title: 'Fall 1',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/K6fWcOS.jpeg',
    },
      {
      title: 'Fall 2',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/sH25DG7.jpeg',
    },
    {
      title: 'Shadow 1',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/4fl3jTn.jpeg',
    },
    {
      title: 'Shadow 2',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/f6xwkv3.jpeg',
    },
    {
      title: 'Shadow 3',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/FA3ELQl.jpeg',
    },
    {
      title: 'Pets 1',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/QcAm90A.jpeg',
    },
    {
      title: 'Pets 2',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/dz9zXba.jpeg',
    },
    {
      title: 'Pets 3',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/YJe2WNb.jpeg',
    },
    {
      title: 'Colour 1',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/ngxDRB6.png',
    },
    {
      title: 'Colour 2',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/mBpVZ8s.png',
    },
    {
      title: 'Earth Day',
      category: 'Other Photography',
      cover: false,
      image:
        'https://i.imgur.com/ndoFa4l.jpeg',
    },
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? photos.filter((p) => p.cover)
      : photos.filter((p) => p.category === activeCategory);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
            Abigail Sumal Photography
          </p>

          <h1 className="max-w-3xl text-5xl md:text-7xl font-bold">
            Capturing moments through my lens.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            A curated photography portfolio for class work.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => scrollToSection('gallery')}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              View Gallery
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm"
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Abigail Sumal Photography — Block C
            </h2>
            <p className="mt-6 text-neutral-300">
              This portfolio showcases my photography work for Block C photography class.
              My work explores portrait, street, landscape, experimental, and documentary-style photography.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://i.imgur.com/xK0AHHp.jpeg"
              alt="Photographer"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold">Gallery</h2>

          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-sm border border-white/10 bg-white/5 px-4 py-2 rounded-full"
            >
              Show All
            </button>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(photo.category)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-80 w-full object-contain bg-black transition group-hover:scale-105"
                />

                {photo.cover && (
                  <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(photo.category);
                      }}
                      className="self-start mb-2 rounded-full bg-white/15 px-3 py-1 text-xs uppercase"
                    >
                      {photo.category}
                    </button>

                    <h3 className="text-xl font-semibold">
                      {photo.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto max-w-6xl flex justify-between items-center">
          <p>Photography Portfolio • Block C</p>

          <div className="flex gap-6 text-sm">
            <a
              href="https://www.instagram.com/abisumal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-neutral-300"
            >
              Instagram
            </a>

            <a
              href="mailto:abigails959@deltalearns.ca"
              className="hover:text-white text-neutral-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
