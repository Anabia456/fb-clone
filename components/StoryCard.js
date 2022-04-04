import Image from "next/image"
//https://images.pexels.com/photos/4346305/pexels-photo-4346305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
//https://images.pexels.com/photos/6954514/pexels-photo-6954514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md::w-20
    lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200transfrom ease-in hover:scale-105
    hover-animate-pulse">
        <Image 
            className="absolute opacity-0 lg:opacity-100
            rounded-full z-50 top-10"
            src={profile}
            width={40}
            height={40}
            layout="fixed"
            objectFit="cover"
        />
        <Image 
            className="object-cover filter brightness-75 rounded-full
            lg:rounded-3xl"
            src={src}
            layout="fill"
        />
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        {/* <p className="text-center text-base">{name}</p> */}
    </div>
  )
}

export default StoryCard