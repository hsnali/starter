import { Button, CatFact, DarkMode, Footer, Header } from '@/components'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-stone-50 p-6 font-sans transition-colors dark:bg-slate-800 dark:text-white">
      <DarkMode />
      <Header />
      <Button />
      <Footer />
      <CatFact />
    </div>
  )
}

export default App
