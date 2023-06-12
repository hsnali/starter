import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'

export const Header = () => {
  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-between gap-8">
        <a href="https://vitejs.dev" target="_ blank">
          <img
            src={viteLogo}
            className="h-24 transition-all duration-300 hover:drop-shadow-2xl"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 animate-spin-slow transition-all duration-300 hover:drop-shadow-2xl"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React!</h1>
    </div>
  )
}
