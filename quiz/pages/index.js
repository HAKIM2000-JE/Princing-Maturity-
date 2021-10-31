import Head from 'next/head'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className=" overflow-x-hidden grid  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

      <div className="   ">
          <Banner/>
      </div>
       
 
     
    </div>
  )
}
