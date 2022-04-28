import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import * as assert from "assert";
import { Ags } from "../target/types/ags";
import key from "../key.json";

describe("ags", () => {
  const connection = new anchor.web3.Connection(
    anchor.web3.clusterApiUrl("devnet")
  );
  const wallet = new anchor.Wallet(
    anchor.web3.Keypair.fromSecretKey(Uint8Array.from(key))
  );
  const provider = new anchor.Provider(connection, wallet, {
    preflightCommitment: "confirmed",
  });

  // Configure the client to use the local cluster.
  anchor.setProvider(provider);
  const program = anchor.workspace.Ags as Program<Ags>;
  const endpoint = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    // Add your test here.
    await program.rpc.initialize({
      accounts: {
        endpoint: endpoint.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [endpoint],
    });

    const account = await program.account.endPoint.fetch(endpoint.publicKey);
    console.log(account.data.toNumber());
    assert.ok(account.data.toNumber() === 0);
  });

  it("is updating", async () => {
    const data = new anchor.BN(1);
    await program.rpc.update(data, {
      accounts: {
        endpoint: endpoint.publicKey,
        author: provider.wallet.publicKey,
      },
    });

    const updated_account = await program.account.endPoint.fetch(
      endpoint.publicKey
    );
    assert.ok(updated_account.data.toNumber() === data.toNumber());
  });

  it("is updating with wrong author", async () => {
    const data = new anchor.BN(1);
    try {
      await program.rpc.update(data, {
        accounts: {
          endpoint: endpoint.publicKey,
          author: anchor.web3.Keypair.generate().publicKey,
        },
      });
      assert.fail("Should have failed");
    } catch (e) {
      assert.ok("Wrong Authir");
    }
  });
});
