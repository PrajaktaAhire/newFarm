import React, { useState } from 'react'
import {Card, Carousel} from "antd"
import ReactPaginate from 'react-paginate' 
import ScrollToTop from 'react-scroll-to-top'
import products from "../data/products.json"
import videos from "../data/videos.json"
import plant from "../assets/plant.png"
import Fade from "react-awesome-reveal"
import ProductCarasoul from '../Components/ProductCarasoul'

const Home = () => {
  const [showMore, setShowMore] = useState(false)
  const[currentPage, setCurrentPage] = useState(0)

  const handlePageChange=({selected})=>{
    setCurrentPage(selected);
  }
  const offset = currentPage * 1;
  const paginateData = videos.slice(offset, offset + 1); 
  return (
    <>
        <div>
        {/* content wrapping */}
          <Fade className='flex flex-col items-center scroll-smooth'>
            <div style={{backgroundImage: "url('https://c8.alamy.com/comp/2BJ1YFA/fresh-vegetables-and-fruits-background-2BJ1YFA.jpg')"}}
            className='bg-fixed bg-right transition-all rounded-t-3xl overflow-hidden w-full'>
              <div className='relative bg-[#000] bg-opacity-50 h-[40vh]'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl text-center text-[#f6f6f6] font-bold absolute z-50 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>ABC Farmer Producer Company</h1>
                <h1 className='text-xl md:text-3xl text-center text-[#f6f6f6] font-semibold absolute z-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Nurturing Farms, Nourishing Futures</h1>
              </div>
              {/* global quality food export */}
              <div className='bg-[#000] bg-opacity-50'>
                <div className='flex px-5 bg-white py-10 md:py-20 lg:py-32 rounded-t-3xl flex-col items-center relative'>
                  <img className='object-cover top-1/2 md:top-1/3 w-[80vw] md:w-[40vw] absolute opacity-20 md:opacity-20 z-0 right-0' src={plant}></img>
                  <div className='flex flex-col items-center z-10'>
                    <h1 className='text-2xl md:text-4xl text-center font-semibold'>Global food Importers and Exporters</h1>
                    <div className='m-5 h-[2px] w-[100px] md:w-[200px] bg-primary'></div>
                  </div>
                  <div className='flex w-full items-center justify-center flex-col md:flex-row'>
                    <div className='w-full lg:w-[70%] p-5 z-10 flex flex-col gap-5'>
                      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ad perspiciatis 
                        numquam, minus dolore maiores eligendi, fugit, iure accusamus illo nisi dignissimos! Provident ut 
                        odio eius iure magni ipsa.</p>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum ad perspiciatis 
                        numquam, minus dolore maiores eligendi, fugit, iure accusamus illo nisi dignissimos! Provident ut 
                        odio eius iure magni ipsa.</p>
                        <h1 className='font-extrabold text-primary text-lg '>Free sampling available <span className='font-normal'>Logistic charges applicable</span></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular products */}
            <div className='flex p-5 md:pb-10 w-full flex-col items-center md:gap-10'> 
              <div className='flex flex-col items-center z-10'>
                <h1 className='text-2xl md:text-4xl text-center font-semibold'>Popular Products</h1>
                <div className='m-5 h-[2px] w-[100px] md:w-[200px] bg-primary'></div>
              </div>
              <ProductCarasoul/>
            </div>
            {/* Why choose us */}
            <div className='bg-secondary rounded-3xl p-10 h-fit'>
              <div className='flex flex-col gap-5 mx-auto pt-12 pb-20'>
                <h1 className='text-4xl font-bold text-gray-800 text-center mb-8'>Why Choose Us?</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                  <div className='bg-white rounded-3xl shadow-lg p-8'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Farming empowerment</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis culpa non atque placeat labore aperiam maiores rem numquam sapiente iste repudiandae ipsum iusto eos blanditiis provident quod perferendis, ducimus consectetur!</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Range */}
            <div className='py-10 md:py-29 lg:py-32 gap-5 items-center flex flex-col'>
              <div className='flex flex-col items-center z-10 pb-5'>
                <h1 className='text-2xl md:text-4xl text-center font-semibold'>Our Product Range</h1>
                <div className='m-5 h-[2px] w-[100px] md:w-[200px] bg-primary'></div>
              </div>
              <div style={showMore ? {} : {height: "50vh", overflowX: "scroll"}} className='shadow-inner drop-shadow-xl transition-all delay-500 ease-in-out p-5 lg:px-32 flex items-center justify-evenly gap-5 w-full flex-wrap'>
                {
                  products.map((product)=>(
                    <Card key={product.id} hoverable className='w-[300px] h-[400px]' cover={
                      <img className='object-contain h-[300px]' alt={product.name} src={product.image} />
                    }>
                      <h1 className='text-lg font-bold text-center'>{product.name}</h1>
                    </Card>
                  ))
                }  
              </div>
              <button className='bg-secondary border border-gray w-fit px-4 p-2 rounded-3xl'
              onClick={()=>{showMore ? setShowMore(false) : setShowMore(true)}}>
                {
                  showMore ? (<h1 className='text-xl font-extrabold'>Show Less</h1>) : (<h1 className='text-xl font-extrabold'>Show More</h1>)
                }
              </button>
            </div>
            {/* Video */}
            <div className='w-full flex flex-col items-center '>
              <div className='w-full flex flex-col items-center gap-10 md:p-10'>
                {
                  paginateData.map((video, index) => (
                    <iframe src={video.url} frameborder="0" key={index} className='w-[80%] h-[200px] md:h-[600px]'
                    title='abc farmer quality food expoerter from India services private limited' 
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
                    referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>
                  ))
                }
              </div>
              <ReactPaginate className='m-5 px-5 w-fit py-3 rounded-full bg-secondary flex gap-5 border border-[#38383820]'
              pageCount={Math.ceil(videos.length/1)} pageRangeDisplayed={5} marginPagesDisplayed={2} onPageChange={handlePageChange}
              containerClassName={'pagination'} activeClassName={'active'} initialPage={currentPage} />
              <style>
                {
                  `.active {
                    background-color : #383838;
                    padding : 0px 10px 0px 10px;
                    border-radius: 100px;
                    color: white;
                  }`
                }
              </style>
            </div>
          </Fade> 
        </div>
    </>
  )
}

export default Home
