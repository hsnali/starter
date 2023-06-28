import { Button, CatFact, DarkMode, Footer, Header } from '@/components'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-stone-50 p-4 font-sans transition-colors dark:bg-slate-800 dark:text-white md:p-6">
      <DarkMode />
      <Header />
      <Button />
      <Footer />
      <CatFact />
    </div>
  )
}

export default App
