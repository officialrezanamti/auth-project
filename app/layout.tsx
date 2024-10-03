import './globals.css'
export default function Layout({children} : {children : React.ReactNode}){
  return(

    <html>
      <body className='w-[100vw] h-[100vh] bg-main text-dark-blue '>
        {children}
      </body>
    </html>
  )
}