import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Exchange</p>

      <div className="flex mt-4 mb-2 ml-500px">
        <Link href="/">
          <a className="mr-6 text-blue-500">Home</a>
        </Link>

        <Link href="/create-item">
          <a className="mr-6 text-blue-500">Create NFT</a>
        </Link>

        <Link href="/my-assets">
          <a className="mr-6 text-blue-500">My asset</a>
        </Link>

        <Link href="/creator-dashboard">
          <a className="mr-6 text-blue-500">Creator Dashboard</a>
        </Link>

                    {/* 1.14.5 */}
      </div>

      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp