import Image from "next/image";
import HeaderIcon from "./HeaderIcon"
import { BellIcon, ChatIcon, ChevronDownIcon, FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { signOut, useSession } from "next-auth/react"

function Header() {
    const session = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2
    lg:px-5 shadow-md">

        {/* HEADER LEFT */}
        <div className="flex items-center">
            <Image src="https://links.papareact.com/5me" 
            width={40}
            alt="Image"
            height={40}
            layout="fixed"
            />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600"/>
                <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                type="text" placeholder="Search facebook"/>
            </div>
        </div>


        {/* HEADER CENTER */}
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
               <HeaderIcon active Icon={HomeIcon} />
               <HeaderIcon Icon={FlagIcon} />
               <HeaderIcon Icon={ShoppingCartIcon} />
               <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>

        {/* HEADER RIGHT */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* profile picture */}

          <Image 
          alt="image"
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src="https://links.papareact.com/zof"
            height="40"
            width="40"
            layout="fixed"
          />
          {/* <Image 
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.data.user.image}
            height="40"
            width="40"
            layout="fixed"
          /> */}

          <p className="whitespace-nowrap font-semibold" pr-3>{session.data.user.name}</p>
          <ViewGridIcon className="icon"/>
          <ChatIcon className="icon"/>
          <BellIcon className="icon"/>
          <ChevronDownIcon className="icon"/>
        </div>
    </div>
  )
}

export default Header