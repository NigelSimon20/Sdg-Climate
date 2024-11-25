'use client';

import { useEffect } from 'react';

const TwitterEmbeds: React.FC = () => {
  useEffect(() => {
    // Dynamically load Twitter widgets
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="md:flex md:flex-wrap md:justify-between mt-5 px-5 md:px-[80px]">
      {/* Twitter Embed 1 */}
      <div className="w-[100%] md:w-[30%] p-2 md:flex md:justify-center md:items-center">
        <h2 className='text-[34px] font-poppins-bold mb-[15px] md:mb-[20px] text-[#597C61]'>Join Conversations around the world</h2>
      </div>

      {/* Twitter Embed 2 */}
      <div className="w-[100%] md:w-[30%] p-2">
        <a
          className="twitter-timeline"
          href="https://twitter.com/UNFCCC?ref_src=twsrc%5Etfw"
          data-width="300"
          data-height="400"
        >
          Tweets by UNFCCC
        </a>
      </div>


      {/* Twitter Embed 3 */}
      <div className="w-[100%] md:w-[30%] p-2">
        <a
          className="twitter-timeline"
          href="https://twitter.com/350?ref_src=twsrc%5Etfw"
          data-width="300"
          data-height="400"
        >
          Tweets by GretaThunberg
        </a>
      </div>
    </div>
  );
};

export default TwitterEmbeds;
