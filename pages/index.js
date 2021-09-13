import Head from 'next/head'
import Image from 'next/image'
import pic1 from './assets/icon-luxury.svg'
import pic2 from './assets/icon-sedans.svg'
import pic3 from './assets/icon-suvs.svg'

export default function Home() {
	return (
		<div className="h-screen w-screen">
			<Head>
				<title>Test</title>
				<link rel="icon" href="/fav.png" />
			</Head>

			<div className="grid grid-cols-3 grid-flow-row relative lg:static grid-flow-col-reverse h-full ">

				<div className="w-full col-span-3 lg:col-span-1 absolute h-full lg:static bg-bright_oragne rounded-b-3xl z-50 lg:rounded-none">

					<div className="h-full flex flex-col space-y-4 mx-16 justify-center">
						<div>
							<Image src={pic2}/>
						</div>
						<h1 className="text-white text-4xl ">Sedans</h1>
						<h3 className="text-white text-2xl ">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</h3>
						<button className="bg-gray-200 rounded-full py-2 text-center w-1/2 mt-8">Learn More</button>
					</div>
				</div>
				<div className="w-full pt-24 col-span-3 lg:col-span-1 lg:static absolute top-90 lg:top-0 h-full bg-dark_cyan rounded-b-3xl z-40 lg:rounded-none">

					<div className="h-full flex flex-col space-y-4 mx-16 justify-center">
						<div>
							<Image src={pic3}/>
						</div>
						<h1 className="text-white text-4xl ">Suvs</h1>
						<h3 className="text-white text-2xl ">
							Nulla varius
							aliquet. Aliquam erat volutpat. Praesent feugiat
							vehicula pede. Suspendisse pulvinar, orci in
							sollicitudin venenatis, nibh libero hendrerit sem, eu
						</h3>
						<button className="bg-gray-200 rounded-full py-2 text-center w-1/2 mt-8">Learn More</button>
					</div>
				</div>
				<div className="w-full pt-24 lg:col-span-1 col-span-3 absolute lg:static top-180 lg:top-0 h-full bg-v_dard_cyan  ">

					<div className="h-full flex flex-col space-y-4 mx-16 justify-center">
						<div>
							<Image src={pic1}/>
						</div>
						<h1 className="text-white text-4xl ">Luxury</h1>
						<h3 className="text-white text-2xl ">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</h3>
						<button className="bg-gray-200 rounded-full py-2 text-center w-1/2 mt-8">Learn More</button>
					</div>
				</div>
			</div>
		</div>
	)
}
