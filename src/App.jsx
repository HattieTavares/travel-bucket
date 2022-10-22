import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(each => {
    return (
        <Card 
          key={each.id}
          each={each}
        />
    )
  })

  return (
    <div>
      <Header />
      <section>
        {cards}
      </section>
    </div>
  )
}
