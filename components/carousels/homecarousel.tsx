"use client"


import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Link from "next/link";

function Homecarousel({data}:{data:any}) {
  console.log(data[0].featuredImage?.url);
  

  const images = [
    {
      url: 'https://mtjonline.com/cdn/shop/files/Mob-Fragrance.jpg?v=1704114024'
    },
    {
      url: 'https://mtjonline.com/cdn/shop/files/Web-Fragrance.jpg?v=1704114010'
    },
    {
      url: 'https://mtjonline.com/cdn/shop/files/unstitched-banner_1.jpg?v=1704108138'
    },
    {
      url: 'https://mtjonline.com/cdn/shop/files/men-web_1.jpg?v=1704107944'
    },
    {
      url: 'https://mtjonline.com/cdn/shop/files/rtw_13.jpg?v=1703910826'
    },
    {
      url: 'https://mtjonline.com/cdn/shop/files/Web-Fragrance.jpg?v=1704114010'
    },
  ]

  // const [current, setCurrent] = useState(0)


  // const prevButton = () => {
  //   console.log(current);

  //   if (current === 0) {
  //     setCurrent(images.length - 1)
  //     console.log(current);
  //   } else {
  //     setCurrent(current - 1)
  //     // console.log(current);
  //   }
  // }
  // const nextButton = () => {
  //   console.log(current);
  //   if (current === images.length - 1) {
  //     setCurrent(0)
  //     console.log(current);
  //   } else {
  //     setCurrent(current + 1)
  //     // console.log(current);
  //   }
  // }

  return (
    <>
      {/* <div className="w-full " >
        <div className=" overflow-hidden relative">
          <div className="flex transition ease-out duration-500" 
          style={{
            transform:`translateX(-${current * 100}%)`
          }}
          >
            {
              images.map((item, i) => {
                return (
                  <img className="w-screen object-cover" key={i} src={item.url} alt="carousel" />
                )
              })
            }
          </div>
          <div className="flex w-full justify-between items-center absolute top-0 bottom-0 z-50">
            <button onClick={prevButton}>
              prev
            </button>
            <button onClick={nextButton}>
              next
            </button>
          </div>
        </div>
      </div> */}
      
      
      <Carousel className="w-full cursor-pointer  ">
        <CarouselContent className='pl-0 w-full pt-0  md:h-[70vh] h-screen '>
          {
            data.map((item: any, index: number) => {
              return (
                <CarouselItem key={index}>
                  <div className="p-1 w-full" >
                    <Card className='border w-full'>
                      <Image
                        className="  "
                        src={item?.featuredImage?.url}
                        fill={true}
                        // width={7000}
                        // height={500}
                        alt='carousel'
                      />
                      {/* <img src={item?.url} alt=""  className="h-[100vw]  w-full md:h-full"/> */}
                    </Card>
                  </div>
                </CarouselItem>
              )
            })
          }

        </CarouselContent>
      </Carousel>
    </>
  )
}

export default Homecarousel;