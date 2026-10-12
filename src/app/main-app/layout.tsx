import HeaderNav from "@/shared/ui/navigation"
import { ReactNode } from "react"

interface PropType {
    children:ReactNode
}

const Layout = ({children}:PropType) =>{
    return <main id="main-app-layout" className="flex flex-col self-stretch w-full overflow-hidden">
        <HeaderNav />
      
           {children}
    </main>
}

export default Layout