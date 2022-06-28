import { useState, useEffect } from 'react'
import React, { Component }  from 'react';
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Section from "./Section";
import Hero from './hero';


const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
    let data = null;
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri)
        const metadata = await response.json()
          data = metadata;
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
      }
    }
    setLoading(false)
    setItems(items)
  }

  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }
    const [searchInput, setSearchInput] = useState('');
    const [setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {

        setSearchInput(searchValue)
        if (searchInput !== '') {
          // items.sort((a, b) => b[name] - a[name]);
            const filteredData = items.sort((a, b) =>
                {
                    if (a.name.startsWith(searchValue) && b.name.startsWith(searchValue)) return a.name.localeCompare(b.name);
                    else if (a.name.startsWith(searchValue)) return -1;
                    else if (b.name.startsWith(searchValue)) return 1;

                    return a.name.localeCompare(b.name);;
                }
            )
            console.log(items)

            setItems(filteredData)
        }
    else{
            setItems(items)
        }

    }


    useEffect(() => {
    loadMarketplaceItems()
  }, [])
  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2 style={{ color: 'white'}}>Loading...</h2>
    </main>
  )
  return (


    <div>
      <Hero/>

    <div className="flex justify-center">


    <Col lg="12" className="mb-5">

              <h1 style={{ color: 'white',marginTop: 130,marginBottom:10}}> Hot Drops !!</h1>

        <div className="container">
            <div className="row">
                <input className="form-control w-50 offset-3"
                       placeholder='Search...' aria-label="Search"
                       onChange={(e) => searchItems(e.target.value)}
                />
            </div>
        </div>




          </Col>
      {items.length > 0 ?
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} >
                <Card  style={{ width: '13rem'}}>
                  <Card.Img variant="top"  src={item.image} style={{ maxHeight: '206px'}}   />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>
                      <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
                        Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2 style={{ color: 'white'}}>No listed assets</h2>
          </main>
        )}
        <Section/>
    </div>
    </div>
  );
}
export default Home