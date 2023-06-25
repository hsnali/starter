import reactLogo from '@/assets/react.svg'
import { Logo } from '@/components'

export const Header = () => {
  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-between gap-8 ">
        <Logo
          src="/images/vite.svg"
          url="https://vitejs.dev"
          alt="Vite Logo"
          label="Visit Vite"
          classNames="hover:drop-shadow-[0_0_32px_#646cffaa]"
        />

        <Logo
          src={reactLogo}
          url="https://react.dev"
          alt="React Logo"
          label="Visit React"
          classNames="animate-spin-slow hover:drop-shadow-[0_0_32px_#61dafbaa]"
        />
      </div>
      <h1 className="text-5xl font-bold">Vite + React!</h1>
    </div>
  )
}
