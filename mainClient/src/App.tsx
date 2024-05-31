import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from '@/components/general/Navbar';
import Sidebar from './components/general/Sidebar';
import { ThemeProvider } from './components/ui/theme-provider';
import dashboards from './lib/Sidebar-links';
// import { ScrollArea } from './components/ui/scroll-area';
import ModalProvider from './components/provider/modal-provider';


function App() {

  const pages = Object.entries(dashboards).flatMap(([, dashboardData]) =>
    dashboardData.pages.map((page) => ({ element: page.element, link: page.link }))
  );

  return (
    <ThemeProvider defaultTheme="light" storageKey="bocc-theme">
      <BrowserRouter>
        <main className='w-full h-full bg-gradient-to-tr from-black to-white backdrop-blur-sm'>
          <section className="w-full h-full relative bg-white/50 shadow-lg shadow-green-300 ring-slate-500 ring-1 overflow-hidden rounded-md">
            {/* <Navbar /> */}
            <div className="h-full flex dark:bg-[#1F1F1F] relative">
                <Sidebar />
                <main className="flex-1 p-5">
                  <Routes>
                    {pages.map((page, key) => (
                      <Route key={key} path={page.link} element={<page.element />}  />
                    ))}
                  </Routes>
                </main>
            </div>
          </section>
        </main>
      </BrowserRouter>
        <ModalProvider />
    </ThemeProvider>
  )
}


export default App
