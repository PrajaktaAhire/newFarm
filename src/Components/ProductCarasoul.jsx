import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import CardExpndable from "./CardExpndable"


const ProductCarasoul = () => {
    useEffect(() => {
        const slider = new Glide('.glide-01', {
            type: 'carousel',
            focusAt: 'center',
            perView: 3,
            autoplay: 5000,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: '[&>*]: bg-wuiSlate-700' //& represent current element, > child ele apply, background apply
                }
            },
            breakpoints: {
                1300: {
                    perView: 3,
                },
                980: {
                    perView: 2,
                },
                700: {
                    perView: 1
                }
            }
        }).mount();
        return () => {
            slider.destroy();
        }
    }, [])
    return (
        <>
            <div className='glide-01 relative w-full'>
                <div className='overflow-x-hidden h-fit py-5 flex items-center' data-glide-el='track'>
                    <ul className='h-fit whitespace-nowrap flex-nowrap 
                    [backspace-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full ps-0'>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable1" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable2" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable3" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable4" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable5" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                        <li>
                            <CardExpndable img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2V7a6zXODCPRVPD8P0EZdTLCgjIz56xqw&s"
                            title="Vegetable6" tableData={{
                                "color": "brown",
                                "fat": "0.12gms",
                                "protein": "20gms",
                                "carbohydrate": "95.20kg",
                                "energy": "383.32kcal",
                                "sugar": "97.32gms",
                                "moisture": "5.47gms",
                                "sizes": "250gms 1kg",
                                "healthvalues": "glutenfree highin protein",
                                "productioncapacity": "25000kg",
                                "self life": "18 months",
                                "devliverytime": "India 4-7 days",
                                "othercountry": "Other country 10-20 Days"
                            }} />
                        </li>
                    </ul>
                </div>
                {/* controls */}
                <div className="flex items-center w-full justify-center gap-5 px-4" data-glide-el="track">
                    <button className="inline-flex w-28 font-bold p-2 bg-secondary items-center justify-center rounded-full border 
                    border-[#38383820] text-slate-700 transition-300 hover:border-slate-900 hover:text-slate-900 
                    focus-visible:outline-none" data-glide-dir="<" aria-label="prev slide">
                        <FaArrowLeft/>
                    </button>
                    <button className="inline-flex w-28 font-bold p-2 bg-secondary items-center justify-center rounded-full border 
                    border-[#38383820] text-slate-700 transition-300 hover:border-slate-900 hover:text-slate-900 
                    focus-visible:outline-none" data-glide-dir=">" aria-label="next slide">
                        <FaArrowRight/>
                    </button>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
        </>
    )
}

export default ProductCarasoul