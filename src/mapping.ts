import { BigInt, ByteArray, Address, BigDecimal } from "@graphprotocol/graph-ts"
import {
  Ethercards,
  ALPHA_Ordered,
  Approval,
  ApprovalForAll,
  COMMON_Ordered,
  ControllerSet,
  HashesSet,
  OG_Ordered,
  OracleSet,
  OwnershipTransferred,
  Paused,
  PresaleClosed,
  ProcessRandom,
  RandomSet,
  Refund,
  Resolution,
  SaleSet,
  TraitSet,
  TraitsAlreadyClaimed,
  TraitsClaimed,
  Transfer,
  Unpaused,
  Upgrade,
  UpgradeToAlpha,
  UpgradeToOG,
  WheresWallet
} from "../generated/Ethercards/Ethercards"
import {
   Account,
   Nft,
   Contract,
   Trait,
   UpgradeEvent,
   SaleEvent,
   RefundEvent,
   Alpha,
   OG,
   Founder,
   TransferEvent,
   Transaction
} from "../generated/schema"

export function handleALPHA_Ordered(event: ALPHA_Ordered): void {
  let alpha = Alpha.load(event.params.tokenID.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let account = Account.load(event.params.buyer.toHexString())
  let nft = Nft.load(event.params.tokenID.toString())
  let ethercards = Ethercards.bind(event.address)
  let saleEvent = SaleEvent.load(event.params.tokenID.toString())



  if(alpha == null){
    alpha = new Alpha(event.params.tokenID.toString())
  }
  if(account == null){
    account = new Account(event.params.buyer.toHexString())
  }
  if(nft == null){
    nft = new Nft(event.params.tokenID.toString())
  }
  if(saleEvent == null){
    saleEvent = new SaleEvent(event.params.tokenID.toString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }


  //nft.cardType = ethercards.cardType(BigInt.fromString(event.params.tokenID.toI32()))
  nft.deployer = account.id
  nft.currentOwner = ethercards.ownerOf(event.params.tokenID)
  nft.alphaCards = alpha.id



  saleEvent.buyer = account.id
  saleEvent.amount = event.params.price_paid


  alpha.currentOwner = ethercards.ownerOf(event.params.tokenID)
  alpha.tokenURI = ethercards.tokenURI(event.params.tokenID)
  alpha.account = account.id
  alpha.transaction = transaction.id


  transaction.hash = event.transaction.hash
  transaction.timestamp = event.block.timestamp
  transaction.block = event.block.number
  transaction.account = account.id
  transaction.alphaCards = alpha.id
  transaction.nft = nft.id
  transaction.saleEvent = saleEvent.id




  alpha.save()
  saleEvent.save()
  account.save()
  transaction.save()
  nft.save()
}


export function handleOG_Ordered(event: OG_Ordered): void {
  let account = Account.load(event.params.buyer.toHexString())
  let nft = Nft.load(event.params.tokenID.toString())
  let ethercards = Ethercards.bind(event.address)
  let og = OG.load(event.params.tokenID.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let saleEvent = SaleEvent.load(event.params.tokenID.toString())

  if(account == null){
    account = new Account(event.params.buyer.toHexString())
  }
  if(nft == null){
    nft = new Nft(event.params.tokenID.toString())
  }
  if(og == null){
    og = new OG(event.params.tokenID.toString())
  }
  if(saleEvent == null){
    saleEvent = new SaleEvent(event.params.tokenID.toString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }

  nft.deployer = account.id
  nft.currentOwner = ethercards.ownerOf(event.params.tokenID)
  nft.ogCards = og.id


  saleEvent.buyer = account.id
  saleEvent.amount = event.params.price_paid


  transaction.hash = event.transaction.hash
  transaction.timestamp = event.block.timestamp
  transaction.block = event.block.number
  transaction.account = account.id
  transaction.ogCards = og.id
  transaction.nft = nft.id
  transaction.saleEvent = saleEvent.id


  og.currentOwner = ethercards.ownerOf(event.params.tokenID)
  og.tokenURI = ethercards.tokenURI(event.params.tokenID)
  og.nft = nft.id
  og.transaction = transaction.id
  og.account = account.id


  og.save()
  saleEvent.save()
  nft.save()
  account.save()
  transaction.save()
}


export function handleCOMMON_Ordered(event: COMMON_Ordered): void {
  let account = Account.load(event.params.buyer.toHexString())
  let nft = Nft.load(event.params.tokenID.toString())
  let ethercards = Ethercards.bind(event.address)
  let contract = Contract.load(ethercards._address.toHexString())
  let founder = Founder.load(event.params.tokenID.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let saleEvent = SaleEvent.load(event.params.tokenID.toString())


  if(account == null){
    account = new Account(event.params.buyer.toHexString())
  }
  if(nft == null){
    nft = new Nft(event.params.tokenID.toString())
  }
  if(founder == null){
    founder = new Founder(event.params.tokenID.toString())
  }
  if(saleEvent == null){
    saleEvent = new SaleEvent(event.params.tokenID.toString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if(contract == null){
    contract = new Contract(ethercards._address.toHexString())
  }

  
  saleEvent.buyer = account.id
  saleEvent.amount = event.params.price_paid

  founder.currentOwner = ethercards.ownerOf(event.params.tokenID)
  founder.tokenURI = ethercards.tokenURI(event.params.tokenID)
  founder.nft = nft.id
  founder.transaction = transaction.id
  founder.account = account.id


  transaction.hash = event.transaction.hash
  transaction.timestamp = event.block.timestamp
  transaction.block = event.block.number
  transaction.account = account.id
  transaction.founderCards = founder.id
  transaction.nft = nft.id
  transaction.saleEvent = saleEvent.id
  
  
  contract.symbol = ethercards.symbol()
  contract.name = ethercards.name()
  contract.totalSupply = ethercards.totalSupply()


  nft.deployer = account.id
  nft.currentOwner = ethercards.ownerOf(event.params.tokenID)
  nft.founderCards = founder.id



  saleEvent.buyer = account.id
  saleEvent.amount = event.params.price_paid


  account.save()
  founder.save()
  nft.save()
  saleEvent.save()
  contract.save()
  transaction.save()
}


export function handleRefund(event: Refund): void {
  let refundEvent = RefundEvent.load(event.params.buyer.toString())
  let account = Account.load(event.params.buyer.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())


  if(refundEvent == null){
    refundEvent = new RefundEvent(event.params.buyer.toString())
  }
  if(account == null){
    account = new Account(event.params.buyer.toHexString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }

  refundEvent.buyer = account.id
  refundEvent.purchased = event.params.purchased
  refundEvent.refund = event.params.refund
  refundEvent.sent = event.params.sent


  transaction.hash = event.transaction.hash
  transaction.timestamp = event.block.timestamp
  transaction.block = event.block.number
  transaction.refundEvent = refundEvent.id


  account.save()
  transaction.save()
  refundEvent.save()
}

export function handleTraitSet(event: TraitSet): void {}

export function handleUpgrade(event: Upgrade): void {
  let upgradeEvent = UpgradeEvent.load(event.transaction.hash.toHexString())

  if(upgradeEvent == null){
    upgradeEvent = new UpgradeEvent(event.transaction.hash.toHexString())
  }

  upgradeEvent.save()
}

export function handleUpgradeToAlpha(event: UpgradeToAlpha): void {
}

export function handleUpgradeToOG(event: UpgradeToOG): void {}

export function handleTraitsAlreadyClaimed(event: TraitsAlreadyClaimed): void {}

export function handleTraitsClaimed(event: TraitsClaimed): void {
  let trait = Trait.load(event.params.tokenID.toString())
  let nft = Nft.load(event.params.tokenID.toString())


  if(trait == null){
    trait = new Trait(event.params.tokenID.toString())
  }
  if(nft == null){
    nft = new Nft(event.params.tokenID.toString())
  }

  trait.traitsClaimed = event.params.traits



  
  nft.save()
  trait.save()
}

export function handleTransfer(event: Transfer): void {
  let transferEvent = TransferEvent.load(event.params.tokenId.toString())
  let nft = Nft.load(event.params.tokenId.toString())
  let account = Account.load(event.params.from.toHexString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())


  if(account == null){
    account = new Account(event.params.from.toHexString())
  }
  if(nft == null){
    nft = new Nft(event.params.tokenId.toString())
  }
  if(transferEvent == null){
    transferEvent = new TransferEvent(event.params.tokenId.toString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }


  transferEvent.account = account.id
  transferEvent.sender = event.params.from
  transferEvent.sender = event.params.to
  transferEvent.nftTransfered = nft.id




  transaction.hash = event.transaction.hash
  transaction.timestamp = event.block.timestamp
  transaction.block = event.block.number
  transaction.transferEvent = transferEvent.id

  transferEvent.save()
  nft.save()
  account.save()
  transaction.save()

}



export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleControllerSet(event: ControllerSet): void {}

export function handleHashesSet(event: HashesSet): void {}

export function handleOracleSet(event: OracleSet): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handlePresaleClosed(event: PresaleClosed): void {}

export function handleProcessRandom(event: ProcessRandom): void {}

export function handleRandomSet(event: RandomSet): void {}

export function handleResolution(event: Resolution): void {}

export function handleSaleSet(event: SaleSet): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleWheresWallet(event: WheresWallet): void {}
