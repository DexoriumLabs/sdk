import { useState } from "react";
import { depositETH } from "../utils/web3";

export default function TradeBox() {
const [amount, setAmount] = useState("");

const handleDeposit = async () => {
await depositETH(amount);
};

return ( <div>
<input
placeholder="Amount in ETH"
value={amount}
onChange={(e) => setAmount(e.target.value)}
/> <button onClick={handleDeposit}>Deposit</button> </div>
);
}
