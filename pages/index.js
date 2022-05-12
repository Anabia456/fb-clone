import { getSession } from "next-auth/react"
import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import LogIn from '../components/LogIn '
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'

export default function Home({ session }) {

    //in case of not logged in return LogIn component 
    if(!session) return (<LogIn />);

    //else this
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Facebook</title>
        </Head>

      {/* HEADER */}
      <Header />

      <main className="flex">
        <SideBar />
        <Feed />
        <Widgets />
      </main>

      </div>
    );
}

export async function getServerSideProps(context){
  
  //Get the user
  const session = await getSession(context);

  return{
    props: {
      session,
    }
  }
}
