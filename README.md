# Running the app
```shell
npm install
npm run dev
```

# Deploying the contract
```shell
npm hardhat run --network <yournetwork, localhost/matic> scripts/deploy-and-seed.js
```
Copy the contract address that outputs, then replace the existing address in pages/index.tsx with that address

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
