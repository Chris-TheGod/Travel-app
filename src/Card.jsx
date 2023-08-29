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
        <div className='main-container'>
          <div className='title'>Our Tours</div>
          {tourData.map(({ image, name, id, info, price }) => (
            <div key={id}>
              {' '}
              <img className='image' src={image} alt='' />
              <div className='name'>{name}</div>
              <div className='price'>{price}</div>
              <div className='info'>{info}</div>
              <button className='show-less'>Show Less</button>
              <button className='not-interested'>Not interested</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
