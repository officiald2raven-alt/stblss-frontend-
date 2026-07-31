# STBLSS.COM - The One-Click Stablecoin Invoice Terminal

Welcome to the official open-source repository for **STBLSS.com**! 

STBLSS is a completely stateless, anonymous frontend user-interface utility designed to eliminate manual input friction, client confusion, and network configuration mistakes from global peer-to-peer stablecoin transactions.

## ⚡Eliminating Manual P2P Friction

According to International Labour Organization (ILO) data, there are now over **1.57 billion independent workers worldwide**, making up roughly 46.6% of the global workforce. Millions of direct, off-platform freelancers outside the US actively choose to get paid in stablecoins (USDC/USDT) to preserve their purchasing power against fluctuating local currency inflation. 

However, getting paid is broken. Traditional Web3 invoicing forces independent global creators to paste raw 42-character wallet strings into direct messages and pray that their clients manually configure their custom network, select the correct asset contract, and type the price accurately. Every single manual step is a broken UX friction point that causes transaction anxiety and delays paydays.

STBLSS bridges this exact communication gap by completely automating the configuration step before the wallet application is even approved. 

* **Zero-Friction Invoicing:** Generate a one-click, automated stablecoin invoice link in 10 seconds.
* **Zero Manual Payer Input:** STBLSS instantly autofills the network, token, and invoice amount inside the payer's wallet extension upon opening. The client doesn't have to copy, paste, or type a single parameter.
* **100% Stateless Infrastructure:** No server databases, no user accounts, no tracking cookies, and no recurring software subscriptions. Your data lives strictly inside your browser-generated URL string text parameters.
* **Local Receipt Architecture:** Includes a local `window.print()` module allowing both parties to save clean PDF records for personal accounting. Receipt generation executes entirely client-side, ensuring your business records stay strictly private to your local hard drive.

## 🥷 Our Open Philosophy: "Don't Trust, Verify"

We know that in the Web3 ecosystem, trust isn't built on corporate logos—it is built on transparent code execution. This public repository exists so that any independent contractor, client, or security auditor can audit our frontend layout line-by-line to verify its absolute safety.

### 🛠️ Transparency & The On-Chain Fee Split

When the payer lands on the checkout path and clicks **"Connect Wallet & Pay Now"**, the frontend JavaScript directly interacts with the browser extension wallet (window.ethereum) and bundles two simultaneous commands into a single, atomic transaction payload:

1. **99% of the transaction value** routes immediately and directly peer-to-peer to the Recipient's Address.
2. **Exactly 1% of the value** routes automatically to our hardcoded platform fee wallet to keep this terminal running as a global convenience service.

Our code is completely open-source so you can verify that 0% of your funds ever route through any hidden intermediaries, corporate backend databases, or custodial smart contracts managed by this project.

## 🛡️ Security & Legal Guardrails

Because all financial operations are executed strictly client-side via your independent wallet application directly on public blockchain ledgers, STBLSS is legally classified as a software publisher and user-interface layer. We do not act as an intermediate payment processor, broker, or financial custodian. 

Use this software at your own risk. Always verify your network status indicators inside your connected browser wallet app before signing any transaction confirmations.

---
[Visit the Live Application at STBLSS.com](https://stblss.com)


