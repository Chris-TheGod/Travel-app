import { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tours-project'
export const Card = () => {
  const [tourData, setTourData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setTourData(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data')
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {tourData ? (
        <>
          <div>Our Tours</div>
          {tourData.map(({ image, name, id, info, price }) => (
            <div key={id}>
              {' '}
              <img src={image} alt='' />
              <div>{name}</div>
              <div>{price}</div>
              <div>{info}</div>
              <button>Show Less</button>
              <button>Not interested</button>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
