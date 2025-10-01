import { color } from "framer-motion";
import React from "react";
import { motion } from 'framer-motion'

export default function AboutPie() {
	return (
		<section className="py-16 px-4 bg-white" id="about-pie">
			<div className="max-w-6xl mx-auto">
				{/* <h3 className="text-4xl md:text-5xl font-extrabold mb-10 text-center tracking-tight" style={{ fontFamily: 'Montserrat' }}>
					About IEEE PIE Kerala Section
				</h3> */}
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
					{/* Image first on mobile, second on desktop */}
					
					 <div className="bg-gray-900 rounded-2xl p-8 shadow-lg text-md text-white-800 font-medium flex flex-col md:flex-row gap-6" style={{ fontFamily: 'Montserrat', color:'white' }} id="aboutPieCard">
						<div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
							<img
								src="assets/img/pielogo.png"
								alt="PIE Kerala Section"
								className="rounded-2xl shadow-xl object-contain w-full max-w-md h-64 md:h-72"
								style={{ minHeight: 220, maxHeight: '100%', width: '100%' }}
							/>
						</div>
						<div className="w-full md:w-1/2 order-2 md:order-1">
						
							<div className="bg-none rounded-2xl p-8  text-md text--800 font-medium" style={{ fontFamily: 'Montserrat' }}>
								<h3 className="text-4xl md:text-3xl font-extrabold mb-10 text-center tracking-tight" style={{ fontFamily: 'Montserrat'}}>
									About IEEE PIE KERALA SECTION
								</h3>
								<p>
									Promotion of Innovation and Entrepreneurship intends to support engineers in pursuing entrepreneurship, have a better understanding of Startups and supports them by giving them access to the right platforms and resources.
								</p>
							</div>
						</div>
					</div>

				</div>
					
			</div>
		</section>
	);
}
