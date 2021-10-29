import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts";
import {
  logStore,
  test,
  clearStore,
  newMockEvent,
  assert,
} from "matchstick-as/assembly/index";
import { Founder } from "../generated/schema";
import { COMMON_Ordered } from "../generated/Ethercards/Ethercards";
import { handleCOMMON_Ordered } from "../src/mapping";

//You must import runTest() to mapping.test.ts

let testAddress = Address.fromString(
  "0xCe2F6F6a51F725049d7D56aB11C09A096360398a"
);

export function runTests(): void {
  test("Can call mappings with custom events", () => {
    // Initialise
    let founderEvent = newMockEvent() as COMMON_Ordered;

    founderEvent.parameters = [];

    let idParam = new ethereum.EventParam(
      "id",
      ethereum.Value.fromAddress(testAddress)
    );

    founderEvent.parameters.push(idParam);

    handleCOMMON_Ordered(founderEvent);
  });
}
