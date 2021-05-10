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
   Transaction
} from "../generated/schema"

export function handleALPHA_Ordered(event: ALPHA_Ordered): void {
  let alpha = Alpha.load(event.params.tokenID.toString())

  if(alpha == null){
    alpha = new Alpha(event.params.tokenID.toString())
  }

  alpha.save()
}



export function handleCOMMON_Ordered(event: COMMON_Ordered): void {
  let account = Account.load(event.params.buyer.toHexString())
  let nft = Nft.load(event.params.tokenID.toString())
  let ethercards = Ethercards.bind(event.address)
  let contract = Contract.load(ethercards._address.toHexString())
  let founder = Founder.load(event.params.tokenID.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let saleEvent = SaleEvent.load(event.transaction.hash.toHexString())

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
    saleEvent = new SaleEvent(event.transaction.hash.toHexString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }
  if(contract == null){
    contract = new Contract(ethercards._address.toHexString())
  }
  
  
  
  contract.symbol = ethercards.symbol()
  contract.name = ethercards.name()
  contract.totalSupply = ethercards.totalSupply()


  nft.account = account.id


  account.save()
  founder.save()
  nft.save()
  saleEvent.save()
  contract.save()
  transaction.save()



}

export function handleRefund(event: Refund): void {
  let refundEvent = RefundEvent.load(event.transaction.hash.toHexString())
  let account = Account.load(event.params.buyer.toHexString())

  if(refundEvent == null){
    refundEvent = new RefundEvent(event.transaction.hash.toHexString())
  }
  if(account == null){
    account = new Account(event.params.buyer.toHexString())
  }
  refundEvent.buyer = account.id

  account.save()
  refundEvent.save()
}


export function handleOG_Ordered(event: OG_Ordered): void {
  let account = Account.load(event.params.buyer.toHexString())
  let nft = Nft.load(event.params.tokenID.toString())
  let ethercards = Ethercards.bind(event.address)
  let og = OG.load(event.params.tokenID.toString())
  let transaction = Transaction.load(event.transaction.hash.toHexString())
  let saleEvent = SaleEvent.load(event.transaction.hash.toHexString())

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
    saleEvent = new SaleEvent(event.transaction.hash.toHexString())
  }
  if(transaction == null){
    transaction = new Transaction(event.transaction.hash.toHexString())
  }


  og.currentOwner = ethercards.ownerOf(event.params.tokenID)
  og.nft = nft.id

  og.save()
  saleEvent.save()
  nft.save()
  account.save()
  transaction.save()
}



export function handleTraitSet(event: TraitSet): void {
  let trait = Trait.load(event.params.traits.toHexString())

  if(trait == null){
    trait = new Trait(event.params.traits.toHexString())
  }
  

  trait.save()
}

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


export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}


export function handleControllerSet(event: ControllerSet): void {
}

export function handleHashesSet(event: HashesSet): void {
  
}


export function handleOracleSet(event: OracleSet): void {
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handlePresaleClosed(event: PresaleClosed): void {
  
}

export function handleProcessRandom(event: ProcessRandom): void {

}

export function handleRandomSet(event: RandomSet): void {}



export function handleResolution(event: Resolution): void {
}

export function handleSaleSet(event: SaleSet): void {
}

export function handleTraitsAlreadyClaimed(event: TraitsAlreadyClaimed): void {
  
}

export function handleTraitsClaimed(event: TraitsClaimed): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleWheresWallet(event: WheresWallet): void {}
