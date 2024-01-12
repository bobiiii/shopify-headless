import NavMenu from '@/components/NavMenu';
import Footer2 from '@/components/layout/footer2';
import Maxwidthwrapper from '@/components/max-Width-Wrapper';
import { ensureStartsWith } from '@/lib/utils';
import Navbar from 'components/layout/navbar';
import { ThemeProvider } from "components/theme-provider";
import { GeistSans } from 'geist/font';
import { getCollections, getMenu } from 'lib/shopify';
import { ReactNode, Suspense } from 'react';
import './globals.css';


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;


export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
    twitter: {
      card: 'summary_large_image',
      creator: twitterCreator,
      site: twitterSite
    }
  })
};

export default async function RootLayout({ children }: { children: ReactNode }) {

  const menu = await getMenu('next-js-frontend-header-menu');
  const col = await getCollections();
  const updatedMenu = menu.map((item, i) => {
    const { path, tags } = item;
    const handleName = path.replace("/search/", "").replace(`/${[...tags]}`, "");

    // Check if handleName is in col
    const matchingColItems = col.filter((colItem) => colItem.handle === handleName);
    const matchingColImages = matchingColItems.map((colItem) => colItem.image).filter(Boolean);

    // If there are matching images, insert them into the item
    if (matchingColImages.length > 0) {
      return { ...item, images: matchingColImages };
    }

    return item;
  });
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Maxwidthwrapper>
            <Suspense>
              <Navbar />
              <NavMenu menu={updatedMenu} />
            </Suspense>

            <main>{children}</main>
            <Suspense>
              <Footer2 />
            </Suspense>
          </Maxwidthwrapper>

        </ThemeProvider>
      </body>
    </html>
  );
}
