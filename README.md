# Solana Web3.js Keypair and airdrop
A typescript program that generates keypairs and requests airdrop

## Prerequisites
1. Node JS Installed
2. Solana CLI installed
3. NPM Installed and Yarn Installed

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

