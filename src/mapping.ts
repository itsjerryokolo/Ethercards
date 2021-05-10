import { BigInt } from "@graphprotocol/graph-ts"
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
import { ExampleEntity } from "../generated/schema"

export function handleALPHA_Ordered(event: ALPHA_Ordered): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.buyer = event.params.buyer
  entity.price_paid = event.params.price_paid

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ALPHA_next(...)
  // - contract.ALPHA_price(...)
  // - contract.ALPHA_remaining(...)
  // - contract.COMMON_price(...)
  // - contract.COMMON_remaining(...)
  // - contract.OG_next(...)
  // - contract.OG_price(...)
  // - contract.OG_remaining(...)
  // - contract.RANDOM_next(...)
  // - contract.TokenExists(...)
  // - contract.aPending(...)
  // - contract.aSold(...)
  // - contract.allTokenIDHashes(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.cPending(...)
  // - contract.cSold(...)
  // - contract.cardType(...)
  // - contract.checkSimpleHash200(...)
  // - contract.fullTokenIDHash(...)
  // - contract.fullTrait(...)
  // - contract.getApproved(...)
  // - contract.getTokenIDPosition(...)
  // - contract.hash10k(...)
  // - contract.hash200(...)
  // - contract.how_long_more(...)
  // - contract.isApprovedForAll(...)
  // - contract.isCardResolved(...)
  // - contract.is_sale_on(...)
  // - contract.lastRandomProcessed(...)
  // - contract.lastRandomRequested(...)
  // - contract.name(...)
  // - contract.needProcessing(...)
  // - contract.nextTokenId(...)
  // - contract.numberPending(...)
  // - contract.oPending(...)
  // - contract.oSold(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.paused(...)
  // - contract.randomAvailable(...)
  // - contract.randomOneOfEight(...)
  // - contract.randomRequests(...)
  // - contract.sale_is_over(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.traitAssignment(...)
  // - contract.traitHashes(...)
  // - contract.verifyTokenAt(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleCOMMON_Ordered(event: COMMON_Ordered): void {
}

export function handleControllerSet(event: ControllerSet): void {
}

export function handleHashesSet(event: HashesSet): void {
  
}

export function handleOG_Ordered(event: OG_Ordered): void {}

export function handleOracleSet(event: OracleSet): void {
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handlePresaleClosed(event: PresaleClosed): void {
  
}

export function handleProcessRandom(event: ProcessRandom): void {

}

export function handleRandomSet(event: RandomSet): void {
  event.params.
}

export function handleRefund(event: Refund): void {
  event.params.
}

export function handleResolution(event: Resolution): void {
}

export function handleSaleSet(event: SaleSet): void {
  event.params.
}

export function handleTraitSet(event: TraitSet): void {
  event.params.
}

export function handleTraitsAlreadyClaimed(event: TraitsAlreadyClaimed): void {
  
}

export function handleTraitsClaimed(event: TraitsClaimed): void {
  event.params.
}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleUpgrade(event: Upgrade): void {
}

export function handleUpgradeToAlpha(event: UpgradeToAlpha): void {
}

export function handleUpgradeToOG(event: UpgradeToOG): void {}

export function handleWheresWallet(event: WheresWallet): void {}
