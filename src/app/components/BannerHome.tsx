"use client"

import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef } from "react"

const imageFilenames = [
	"slide1.jpg", "slide2.png", "slide3.png", "slide4.png", "slide5.png",
	"slide6.png", "slide7.png", "slide8.jpg", "slide9.png", "slide10.png",
	"slide11.png", "slide12.png"
]

const BannerHome = () => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slideChanged(s) {
		},
	})

	useEffect(() => {
		const interval = setInterval(() => {
			if (slider.current) {
				slider.current.next()
			}
		}, 5000)
		return () => clearInterval(interval)
	}, [slider])

	return (
		<div className="flex justify-center items-center p-8 w-screen">
			<div className="relative w-full md:w-[50%] h-[200px] overflow-hidden rounded-xl shadow-lg">
				<div ref={sliderInstanceRef} className="keen-slider h-full">
					{imageFilenames.map((filename, index) => (
						<div key={index} className="keen-slider__slide relative h-full">
							<Image
								src={`/bannerHome/${filename}`}
								alt={`Slide ${index + 1}`}
								fill
								className="object-fill w-full h-full"
							/>
						</div>
					))}
				</div>

				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
					<button
						className="btn btn-circle"
						onClick={() => slider.current?.prev()}
					>
						❮
					</button>
					<button
						className="btn btn-circle"
						onClick={() => slider.current?.next()}
					>
						❯
					</button>
				</div>
			</div>
		</div>
	)
}

export default BannerHome
