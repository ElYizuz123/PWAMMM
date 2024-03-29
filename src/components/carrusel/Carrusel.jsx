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
    <div className="bg-[#330e36] p-5 h-[600px]  ">
      <div className="bg-[#c795cb]  max-w-3/4 mx-auto mt-5 mb-5 ">
        <ReactImageGallery
          autoPlay
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          showFullscreenButton={false}
          thumbnailPosition="left"
          renderItem={(item) => (
            <img className="mx-auto my-auto max-w-60vh max-h-60vh"
              src={item.original}
              alt={item.original}
              style={{
                maxWidth: "40%",
                maxHeight: "40%",


              }}
            />
          )}

        />
      </div>

    </div>
  );
}

export default Carrusel