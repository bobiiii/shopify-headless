import { getCollectionProducts } from '@/lib/shopify';

async function Banner() {
    const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });
    
    
    return (
        <div className="w-full bg-customColor p-4 overflow-hidden whitespace-nowrap">
            <div className="lg:px-6 inline-block w-full animate-scrolling-text">Flat Shipping Rate Rs. 150/-</div>
        </div>
    )
}

export default Banner;