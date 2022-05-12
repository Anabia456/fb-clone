import {SearchIcon} from '@heroicons/react/outline';
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/outline';
import Contact from './Contact.js'

const contacts = [
    { id: 1, src: "https://links.papareact.com/kxk", name:"Bill Gates" },
    { id: 2, src: "https://links.papareact.com/snf", name:"Elon Musk" },
    { id: 3, src: "https://links.papareact.com/kxk", name:"Mark Zuckerberg" },
    { id: 4, src: "https://links.papareact.com/snf", name:"Spider Man" },
    { id: 5, src: "https://links.papareact.com/kxk", name:"Alexa Gabriel" },
]
// hidden lg:flex felx-col w-60 p-2 mt-5

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6'/>
                <SearchIcon className='h-6'/>
                <DotsHorizontalIcon className='h-6'/>
            </div>
        </div>
        {contacts.map(contact =>(
            <Contact key={contact.id} src={contact.src} name={contact.name}/>
        ))}
    </div>
  )
}

export default Widgets