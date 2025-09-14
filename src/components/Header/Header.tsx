import reactLogo from '@/assets/react.svg'
import { Logo } from '@/components'

export const Header = () => {
  return (
    <div className="mb-8">
      <div className="mb-8 flex justify-center gap-8 ">
        <Logo
          src={reactLogo}
          url="https://react.dev"
          alt="React Logo"
          label="Visit React"
          classNames="animate-spin-slow hover:drop-shadow-[0_0_32px_#61dafbaa]"
        />
      </div>
      <h1 className="text-5xl font-bold">Introduction to Starter</h1>
    </div>
  )
}
