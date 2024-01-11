"use client"
import Image from "next/image";
import { Card } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
function Homecarousel() {
  const images = [
    {
      url: 'https://mtjonline.com/cdn/shop/files/Web-Banner_3.jpg?v=1697608024'
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
      <Carousel className="w-full  ">
        <CarouselContent className='pl-0 pt-0 md:h-[80vh] lg:h-[50vh]'>
          {
            images.map((item: object, index: number) => {
              return (
                <CarouselItem key={index}>
                  <div className="p-1 w-full" >
                    <Card className='border w-full   border-blue-800 '>
                      <Image
                        className="object-scale-down"
                        src={item?.url}
                        // width={100}

                        fill={true}
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