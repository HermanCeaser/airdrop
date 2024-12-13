import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import wallet from "./dev-wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
console.log(keypair.publicKey.toBase58());
const connection = new Connection("https://api.devnet.solana.com");
// const connection = new Connection("http://127.0.0.1:8899");
(
    async () => {
        try {
            const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
            // console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=custom&customUrl=http://localhost:8899`);
            console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
        } catch (e) {
            console.error(`Oops, something went wrong: ${e}`)
        }
    }
)()