import { useSession } from 'next-auth/react'
import { ChevronDownIcon, ShoppingCartIcon, UserGroupIcon } from "@heroicons/react/outline";
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon, ShoppingBagIcon } from "@heroicons/react/solid";
import SidebarRow  from "./SidebarRow"

function SideBar() {
  const session = useSession();

    return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow src={session.data.user.image} title={session.data.user.name}/>

        <SidebarRow Icon={UsersIcon} title="Friends"/>
        <SidebarRow Icon={UserGroupIcon} title="Groups"/>
        <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
        <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
        <SidebarRow Icon={CalendarIcon} title="Events"/>
        <SidebarRow Icon={ClockIcon} title="Memories"/>
        <SidebarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  );
}

export default SideBar