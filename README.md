# NFT Marketplace

## Requirements for Initial Setup

- Install NodeJS 
- Install Hardhat

## Getting Started

1. **Clone/Download the Repository**

    ```bash
    git clone https://github.com/your-username/Nft-Marketplce.git
    ```

2. **Install Dependencies**

    ```bash
    cd Nft_Mrketplce
    npm install
    ```

3. **Boot up the Local Development Blockchain**

    ```bash
    npx hardhat node
    ```

4. **Connect Development Blockchain Accounts to Metamask**

    - Copy private keys of the addresses and import them into Metamask.
    - Connect Metamask to the Hardhat blockchain, network `127.0.0.1:8545`.
    - If Hardhat is not added to the list of networks on Metamask:
        - Open your browser, click the fox icon.
        - Click the top center dropdown button listing available networks and click "Add Network."
        - Fill in the form with the following details:
            - Network Name: Hardhat
            - New RPC URL: http://127.0.0.1:8545
            - Chain ID: 31337
        - Click save.

5. **Migrate Smart Contracts**

    ```bash
    npx hardhat run src/backend/scripts/deploy.js --network localhost
    ```

6. **Run Tests**

    ```bash
    npx hardhat test
    ```

7. **Launch Frontend**

    ```bash
    npm run start
    ```

## License

This project is licensed under the [MIT License](LICENSE).
