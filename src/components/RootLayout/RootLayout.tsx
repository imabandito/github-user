import { Outlet } from 'react-router-dom'

export  function RootLayout() {
  return (
    <div className='app'>
        <div className='container'>
            <Outlet/>
        </div>
    </div>
  )
}
