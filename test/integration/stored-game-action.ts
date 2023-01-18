import { toHex } from "@cosmjs/encoding"
import { OfflineDirectSigner } from "@cosmjs/proto-signing"
import { Account, DeliverTxResponse, GasPrice } from "@cosmjs/stargate"
import { Log } from "@cosmjs/stargate/build/logs"
import { BroadcastTxSyncResponse } from "@cosmjs/tendermint-rpc"
import { expect } from "chai"
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx"
import { config } from "dotenv"
import Long from "long"
import _ from "../../environment"
import { CheckersSigningStargateClient } from "../../src/checkers_signingstargateclient"
import { CheckersExtension } from "../../src/modules/checkers/queries"
// import {
//     getCapturedPos,
//     getCreatedGameId,
//     getCreateGameEvent,
//     getMovePlayedEvent,
//     getWinner,
// } from "../../src/types/checkers/events"
import { typeUrlMsgPlayMove } from "../../src/types/checkers/messages"
//import { completeGame, GameMove, GamePiece, Player } from "../../src/types/checkers/player"
import { StoredGame } from "../../src/types/generated/checkers/stored_game"
//import { askFaucet } from "../../src/util/faucet"
import { getSignerFromMnemonic } from "../../src/util/signer"
import { CheckersStargateClient } from "../../src/checkers_stargateclient"

config()

describe("StoredGame Action", function () {
    const { RPC_URL, ADDRESS_TEST_ALICE: alice, ADDRESS_TEST_BOB: bob } = process.env
let aliceSigner: OfflineDirectSigner, bobSigner: OfflineDirectSigner

before("create signers", async function () {
    aliceSigner = await getSignerFromMnemonic(process.env.MNEMONIC_TEST_ALICE)
    bobSigner = await getSignerFromMnemonic(process.env.MNEMONIC_TEST_BOB)
    expect((await aliceSigner.getAccounts())[0].address).to.equal(alice)
    expect((await bobSigner.getAccounts())[0].address).to.equal(bob)
})
})