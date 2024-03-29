import React from 'react';
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline';
import Image from 'next/image';

function Post({ name, message , postImage, image}) {

  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl  shadow-5m'> 
        <div className='flex items-center space-x-2'>
          <Image alt="Image" className='rounded-full' src='https://links.papareact.com/zof' width={40} height={40}/>
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs text-gray-400'>
              {Date.now().toLocaleString()}
            </p>
          </div>
        </div>
        <p className='pt-4 font-bold text-base'>{message}</p>
      </div>
      
      {
        postImage?
        <div className='relative h-56 md:h-96 bg-white'>
        <Image alt='image' src={postImage} objectFit="cover" layout="fill"/>
        </div>:<></>
        
      }

      {/* footer of post */}
        <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
          <div className='inputIcon rounded-none rounded-bl-2xl'>
            <ThumbUpIcon className='h-4' />
            <p className='text-xs sm-text-base'>Like</p>
          </div>

          <div className='inputIcon rounded-none'>
            <ChatAltIcon className='h-4' />
            <p className='text-xs sm-text-base'>Comment</p> 
          </div>

          <div className='inputIcon rounded-none rounded-br-2xl'>
            <ShareIcon className='h-4' />
            <p className='text-xs sm-text-base'>Share</p>
          </div>
        </div>

    </div>
  )
}

export default Post







