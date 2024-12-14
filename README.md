# ❇ Solana Web3.js - A final Project that interacts with WBA Solana program on devnet 
A typescript program that generates keypairs, requests airdrop, transfer sol and interacts with a PDA program.
> **Onchain Transaction Link:** 
[`https://explorer.solana.com/`](https://explorer.solana.com/tx/2azmp1PbeoPFVZjA9crsvem6FtuJuwRDtwWqDvYYMmMWCCL1nXHm1yZ7RyZcmQpz5n2T2vuYKvWVLYRu22jnRFoH?cluster=devnet)

## Prerequisites
1. Node JS Installed
2. Solana CLI installed (Optional if using devnet)
3. NPM Installed and Yarn Installed

## Tech stack used
- uses TypeScript and NodeJS
- yarn (as the package manager)


## Setup
- Clone the repo by running `git clone https://github.com/HermanCeaser/airdrop.git`
- Change the directory to `airdop` folder on your machine `cd airdrop`
- Install the depencies by running `yarn install`
- start your local validator by running `solana-test-validator`

## RUN
- Create a file called `dev-wallet.json`
- Run `yarn keygen`
- Copy the secret key from the output and paste it in the `dev-wallet.json` then save the save 
  The contents should be a binary array similar to 
  ```json
  [15,71,221,67,2,87,32,15,251,184,9,12,215,157,200,94,85,5,191,215,157,230,152,73,107,215,129,92,109,175,117,102,120,119,241,244,89]
  ```
- Then run the airdop command by typing  `yarn airdop`
- Check the transaction hash on the explorer by clicking the link to see your account balance
- Run `yarn transfer` to transfer some SOL to a randomly generated keypair and view the transaction on blockchain
- Finally run `yarn enroll` to interact with an onchain program that WBA created. Change the github username in line 9 of [`enroll.ts`](./enroll.ts) to your username if you want to sign this transaction

### About the Files in the project

#### `keygen.ts`

A script that has code to generate a new keypair using web3.js and prints it's  public and secretkey to the console.
transactions to the blockchain

#### `airdrop.ts`

A script that requests airdrop to the generated wallet that is saved to `dev-wallet.json` file 

#### `transfer.ts`

Demonstrates how to generate a new wallet and transfer SOL(Lamports) to the generated wallet

#### `enroll.ts`

Demonstrates how to create a PDA address and use it to interact with another program
