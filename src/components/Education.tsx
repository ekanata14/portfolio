import Link from 'next/link'
export default function Edu() {
  return (
    <>
      <div className="overflow-hidden text-center">
        <Link
          href="https://dreamerdream.my.id"
          target="_blank"
          className="text-white font-semibold"
        >
          <h3>Eka Nata</h3>
        </Link>
        <div className="flex justify-center mt-2 mb-6">
          <div className="flex space-x-2 divide-x-2 divide-gray 300 text-white items-center">
            <div className="flex space-x-2 flex-shrink-0 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-opacity-25 text-center">2023 - Now</span>
            </div>
            <div className="pl-2 truncate text-opacity-20">
              ITB STIKOM Bali - Information Systems
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
