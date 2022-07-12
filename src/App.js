import React from "react"
import Header from "./Components/Header"
import Trip from "./Components/Trip"
import data from "./data"

export default function App() {
    const triplist = data.map(obj => {
        return(
            <Trip {...obj}/>
        )
    })
    
    return (
        <div>
            <Header />
            <section>
                {triplist}
            </section>
        </div>

    )
}