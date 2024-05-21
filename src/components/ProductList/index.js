import {useState, useEffect} from 'react'

import '../../Styles/productlist.css'

const ProductList = () => {
  const [productdata, setProductdata] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [pageNumber, setPagenumber] = useState(1)
  const [resobj, setResobj] = useState({})

  useEffect(() => {
    setIsloading(true)
    const payload = {
      input: {
        page: 1,
        pageSize: 10,
        filters: [],
        id: '#HomeHunts',
        entity: 'vibe',
      },
    }

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }

    const fetchdata = async () => {
      const response = await fetch(
        'https://api.furrl.in/api/v2/listing/getListingProducts',
        options,
      )
      console.log(response)
      const responseData = await response.json()

      const {data} = responseData
      const {getListingProducts} = data
      console.log(getListingProducts)
      setResobj(getListingProducts)
    }

    fetchdata()
  }, [pageNumber])

  console.log(resobj)
  const {products, totalProducts} = resobj
  console.log(products)

  return (
    <div className="productlistContainer">
      <div className="headAndCountContainer">
        <h1 className="productsheading">Shop Products</h1>
        <p className="productsCount">•{totalProducts} products</p>
      </div>
    </div>
  )
}

export default ProductList
