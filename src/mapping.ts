import { BigInt } from "@graphprotocol/graph-ts"
import {
  SubGraph,
  Approval,
  Minted,
  OwnershipTransferred,
  Paused,
  Transfer,
  Unpaused
} from "../generated/SubGraph/SubGraph"
import { Mint } from "../generated/schema"
export function handleApproval(event: Approval): void {
}

export function handleMinted(event: Minted): void {
  const mint = Mint.load(event.params.user.toHex());

}

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handlePaused(event: Paused): void { }

export function handleTransfer(event: Transfer): void { }

export function handleUnpaused(event: Unpaused): void { }
