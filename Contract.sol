// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Dexorium {
mapping(address => uint256) public balances;

```
event Deposit(address indexed user, uint amount);
event Withdraw(address indexed user, uint amount);

function deposit() external payable {
    balances[msg.sender] += msg.value;
    emit Deposit(msg.sender, msg.value);
}

function withdraw(uint amount) external {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
    emit Withdraw(msg.sender, amount);
}
```

}
