import Link from 'next/link'
import Firebase from '../../assets/img/firebase.png'
import Laravel from '../../assets/img/laravel.png'
export default function Repo() {
  return (
    <>
      <section>
        <h2 className="font-semibold text-3xl text-white text-center">
          My GitHub Repositories
        </h2>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
            <Link
              href="https://github.com/ekanata14/chat-app-react-firebase"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    Chat App with React and Firebase
                  </span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🎉 Chat App based on React and connected with firebase and
                  login with Google Account
                </p>
                <div className="mt-1 flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#EFD81D"
                    className="flex-shrink-0 h-7 w-7"
                  >
                    <path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path>
                  </svg>
                  <img
                    className="flex-shrink-0 h-7 w-7"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  />
                  <img className="flex-shrink-0 h-7 w-7" src={Firebase.src} />
                </div>
              </div>
            </Link>
          </div>
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
            <Link
              href="https://github.com/ekanata14/dreamy-company"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    Web Design Competition at Infinity Event
                  </span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  🎉 I join a web design competition in infinity event on my
                  campus
                </p>
                <div className="mt-1 flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#dd4b25"
                    className="flex-shrink-0 h-7 w-7"
                  >
                    <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon flex-shrink-0 h-7 w-7"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#1572B6"
                      d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                    />
                    <path
                      fill="#33A9DC"
                      d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                    />
                    <path
                      fill="#fff"
                      d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"
                    />
                    <path
                      fill="#EBEBEB"
                      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                    />
                    <path
                      fill="#fff"
                      d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"
                    />
                    <path
                      fill="#EBEBEB"
                      d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#EFD81D"
                    className="flex-shrink-0 h-7 w-7"
                  >
                    <path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
            <Link
              href="https://github.com/ekanata14/dreamy-company"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    Front End POS System with React for community bazzar
                  </span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  This is the Front End for POS System that connected with the
                  Laravel backend
                </p>
                <div className="mt-1 flex gap-4">
                  <div className="flex space-x-2 text-white items-center overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#EFD81D"
                      className="flex-shrink-0 h-7 w-7"
                    >
                      <path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path>
                    </svg>
                    <img
                      className="flex-shrink-0 h-7 w-7"
                      src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="cursor-pointer shadow-lg border rounded-md border-opacity-25">
            <Link
              href="https://github.com/ekanata14/pos-hrm-admin-lte"
              className="no-underline"
            >
              <div className="flex flex-col justify-between p-2 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">
                    Backend POS System for community bazzar
                  </span>
                </div>
                <p className="text-white overflow-hidden font-sans">
                  This is the API for POS System that consumed by the frontend
                </p>
                <div className="mt-1 flex gap-4">
                  <img src={Laravel.src} alt="laravel-logo" className="w-28" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
