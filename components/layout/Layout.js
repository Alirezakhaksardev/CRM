import Link from 'next/link'
import React from 'react'

function Layout({children}) {
  return (
    <>
        <header className='header'>
            <h2>Botostart CRM</h2>
            <Link href={'/add-customer'}>Add Customer</Link>
        </header>
        <div className='main'>
            {children}
        </div> 
        <footer className='footer'>
            <a href='https://github.com/Alirezakhaksardev' target='_blank' rel='noreferrer'>
                Alireza Khaksar GITHUB
            </a> 
            Next.js | CRM Projext &copy;
        </footer>
    </>
)
}

export default Layout