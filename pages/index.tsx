import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context)
  if (!session){
    return{
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return{
    props: {}
  }
}

export default function Home() {
  const {data: user } = useCurrentUser();

  return (
      <>
          <h1 className="text-4xl text-primary">
            Pinkflix clone
          </h1>
          <p className="text-primary">Logged in as : {user?.name}</p>
          <button className="h-10 w-full bg-primary"
           onClick={()=> signOut()}>Logout</button>
      </>
  )
}
