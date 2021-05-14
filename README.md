# Ethercards
Ether Cards is a platform that provides tools for gamifying and supercharging your NFTs.

## Example Query
### Query Owner data
```graphql

{
  accounts(where: {id: "0x0000000060f4c67d48a6ea61f500f13f7c8a9bd4"}) {
    id
    nftsOwned {
      id
    }
    ogCardsOwned {
      id
    }
    founderCardsOwned {
      id
    }
    alphaCardsOwned {
      id
    }
  }
}


```
### Query Single NFT Data
```graphql
{
  nfts(where:{id:"2013"}){
    id
   deployer{
    id
  }
    currentOwner
}
}
```

