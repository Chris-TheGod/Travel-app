import { useEffect } from 'react'

const url = 'https://course-api.com/react-tours-project'
export const Card = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
      result.json().then((data) => {
        console.log(data)
      })
    }
    fetchData()
  }, [])

  return (
    <div>
      <img src='' alt='' />
      <div>Best of Paris in 7 days</div>
      <div>$1,995</div>
      <div>
        Paris is synonymous with the finest things that culture can offer — in
        art, fashion, food, literature, and ideas. On this tour, your
        Paris-savvy Rick Steves guide will immerse you in the very best of the
        City of Light: the masterpiece-packed Louvre and Orsay museums,
        resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and
        extravagant Palace of Versailles. You'll also enjoy guided neighborhood
        walks through the city's historic heart as well as quieter moments to
        slow down and savor the city's intimate cafés, colorful markets, and
        joie de vivre. Join us for the Best of Paris in 7 Days!
      </div>
      <button>Show Less</button>
      <button>Not interested</button>
    </div>
  )
}
