import React from 'react'

// import nav here
import MainNavigation from './MainNavigation';
const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div>
        <MainNavigation />
        <main>{props.children}</main>
    </div>
  )
}

export default Layout