export const PLATFORM_FEE_WALLET = "0x0000000000000000000000000000000000000000"; // TODO: replace with your fee wallet

export const NETWORKS = {
  base: {
    label: "Base Network",
    chainIdHex: "0x2105",
    evm: true,
    params: {
      chainId: "0x2105",
      chainName: "Base",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://mainnet.base.org"],
      blockExplorerUrls: ["https://basescan.org"],
    },
    tokens: {
      USDC: { address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6 },
      USDT: { address: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2", decimals: 6 },
    },
  },
  arbitrum: {
    label: "Arbitrum",
    chainIdHex: "0xa4b1",
    evm: true,
    params: {
      chainId: "0xa4b1",
      chainName: "Arbitrum One",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://arbiscan.io"],
    },
    tokens: {
      USDC: { address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6 },
      USDT: { address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", decimals: 6 },
    },
  },
  ethereum: {
    label: "Ethereum Mainnet",
    chainIdHex: "0x1",
    evm: true,
    params: {
      chainId: "0x1",
      chainName: "Ethereum Mainnet",
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      rpcUrls: ["https://cloudflare-eth.com"],
      blockExplorerUrls: ["https://etherscan.io"],
    },
    tokens: {
      USDC: { address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6 },
      USDT: { address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6 },
    },
  },
  solana: {
    label: "Solana",
    evm: false,
    tokens: {
      USDC: { address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", decimals: 6 },
      USDT: { address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", decimals: 6 },
    },
  },
};

export const TOKENS = ["USDC", "USDT"];

// PUBLIC, VERIFIABLE FEE MATH — anyone inspecting this file can audit the split.
// Total "Amount Due" is split into exactly two transfers and nothing goes anywhere else:
//   - 99%  → recipient's wallet (payout)
//   -  1%  → platform's hardcoded fee wallet (fee)
//   -  0%  → any other address
export function splitAmount(amount) {
  const total = Number(amount) || 0;        // the full Amount Due from the URL
  const fee = Math.round(total * 0.01 * 1e6) / 1e6;   // exactly 1% of the total
  const payout = Math.round((total - fee) * 1e6) / 1e6; // the remaining 99% (total − fee)
  return { total, fee, payout };
}

export function toUnits(amount, decimals) {
  const [whole, frac = ""] = String(amount).split(".");
  const padded = (frac + "0".repeat(decimals)).slice(0, decimals);
  return BigInt((whole || "0") + padded);
}

// ERC-20 transfer(address,uint256) calldata
export function encodeTransfer(to, units) {
  const addr = to.toLowerCase().replace("0x", "").padStart(64, "0");
  const amt = units.toString(16).padStart(64, "0");
  return "0xa9059cbb" + addr + amt;
}

export function formatAmount(value) {
  const n = Number(value);
  if (!isFinite(n)) return "0";
  return n.toLocaleString("en-US", { maximumFractionDigits: 6 });
}

export function shortAddress(addr = "") {
  if (addr.length < 14) return addr;
  return `${addr.slice(0, 8)}…${addr.slice(-6)}`;
}
