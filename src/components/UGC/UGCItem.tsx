import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Player, BigPlayButton } from 'video-react';

interface UGCItemProps {
  media: any;
  isFirst: boolean;
}

const UGCItem: React.FC<UGCItemProps> = ({ media, isFirst = false }) => {
  const mediaType = typeof media.media_link.url !== 'undefined' ? 'video' : 'image';
  if (mediaType == 'video') {
    const [open, setOpen] = useState(false);
    return (
      <div id={slice.slice_type}> 
      <>
        {/* <ModalVideo
          channel="custom"
          url={media.media_link.url}
          isOpen={open}
          onClose={() => setOpen(false)}
          ratio="9:16">
          <video
            className="h-screen w-full"
            autoPlay={true}
            controls={true}
            src={media.media_link.url}
          />
        </ModalVideo> */}
        <div
          onClick={() => setOpen(true)}
          className="col-span-2 row-span-2 md:col-span-1 object-cover cursor-pointer h-96 md:h-auto">
          <div className="flex h-full items-center justify-center relative">
            {/* <button onClick={() => setOpen(true)} className="z-10">
              <img src="/play-icon.svg" />
            </button> */}
            <Player preload="auto" loop={true}>
              <BigPlayButton position="center" />
              <source src={media.media_link.url} />
            </Player>
          </div>
        </div>
        
      </>
      </div>
    );
  } else {
    return (
      <div id={slice.slice_type}> 
      <div
        className={
          isFirst
            ? 'col-span-2 row-span-2 md:col-span-1 object-cover object-top cursor-pointer h-full md:h-auto'
            : ''
        }>
        <img
          src={media.image.url}
          alt={media.image.alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      </div>
    );
  }
};

export default UGCItem;
