"use client"
import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";

const Carrusel = () => {

  const images = [
    {

      original: '/eventos/1.jpeg',
      thumbnail: '/eventos/1.jpeg'
    },
    {

      original: '/eventos/2.jpeg',
      thumbnail: '/eventos/2.jpeg'
    },
    {

      original: '/eventos/3.jpeg',
      thumbnail: '/eventos/3.jpeg'
    },
    {

      original: '/eventos/4.jpeg',
      thumbnail: '/eventos/4.jpeg'
    },
    {

      original: '/eventos/5.jpeg',
      thumbnail: '/eventos/5.jpeg'
    },
    {

      original: '/eventos/6.jpeg',
      thumbnail: '/eventos/6.jpeg'
    },
    {

      original: '/eventos/7.jpeg',
      thumbnail: '/eventos/7.jpeg'
    },
  ];

  return (
    <div className="bg-[#368158] p-5 h-[500px] sm:h-[800px] md:h-[900px] lg:h-[1000px] xl:h-[1100px] 2xl:h-[1200px]">
    <div className="bg-[#c795cb] max-w-3/4 mx-auto mt-5 mb-5" style={{ backgroundImage: "url('/multimedia/JIMA.jpg')"}}>
      <ReactImageGallery
        autoPlay
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={false}
        thumbnailPosition="bottom"
        renderItem={(item) => (
          <img
            className="mx-auto my-auto w-full h-full max-w-[60vh] max-h-[60vh] sm:max-w-[70vh] sm:max-h-[70vh] md:max-w-[80vh] md:max-h-[80vh] lg:max-w-[90vh] lg:max-h-[90vh] xl:max-w-[100vh] xl:max-h-[100vh]"
            src={item.original}
            alt={item.original}
          />
        )}
      />
    </div>
  </div>
);
  
}

export default Carrusel