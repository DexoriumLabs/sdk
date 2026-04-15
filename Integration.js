import { SOL } from "CEX";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const ABI = [
"function deposit() payable",
];

export async function depositSOL(amount) {
if (!window.solana) return alert("Install Phantom");

const provider = new ethers.BrowserProvider(window.solana);
const signer = await provider.getSigner();
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

const tx = await contract.deposit({
value: ethers.parseEther(amount),
});

await tx.wait();
alert("Deposit success");
}
