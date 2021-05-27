// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.7.0;

import "@chainlink/contracts/src/v0.7/dev/VRFConsumerBase.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";

contract Task is VRFConsumerBase {

    using SafeMath for uint;

    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 nonce;

    struct Data {
        uint256 m;
        uint256 n;
        uint256[] selected;
    }

    mapping(bytes32 => Data) public dataMap;

    event RequestRandomness(
        bytes32 indexed requestId,
        bytes32 keyHash,
        uint256 seed
    );

    event RequestRandomnessFulfilled(
        bytes32 indexed requestId,
        uint256 randomness
    );

    /**
     * @notice Constructor inherits VRFConsumerBase
     * @dev Ropsten deployment params:
     * @dev   _vrfCoordinator: 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B
     * @dev   _link:           0x01be23585060835e02b77ef475b0cc51aa1e0709
     */
    constructor(address _vrfCoordinator, address _link)
        VRFConsumerBase(_vrfCoordinator, _link) public
    {
        keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311; // hard-coded for Rinkeby
        fee = 10 ** 17; // 0.1 LINK hard-coded for Rinkeby
    }

    /** 
     * @notice Requests randomness from a user-provided seed
     * @dev The user-provided seed is hashed w ith the current blockhash as an additional precaution.
     * @dev   1. In case of block re-orgs, the revealed answers will not be re-used again.
     * @dev   2. In case of predictable user-provided seeds, the seed is mixed with the less predictable blockhash.
     * @dev This is only an example implementation and not necessarily suitable for mainnet.
     * @dev You must review your implementation details with extreme care.
     */
    function reqRand(uint256 userProvidedSeed, uint256 m, uint256 n) external returns (bytes32 requestId, uint256 seed) {
        require(m >= n, "m is smaller than n");
        require(LINK.balanceOf(address(this)) > fee, "Not enough LINK - fill contract with faucet");
        uint256 seed = uint256(keccak256(abi.encode(userProvidedSeed, blockhash(block.number)))); // Hash user seed and blockhash
        bytes32 _requestId = requestRandomness(keyHash, fee, seed);

        uint256[] memory _selected;
        dataMap[_requestId] = Data(m, n, _selected);
        emit RequestRandomness(_requestId, keyHash, seed);
        return (_requestId, seed);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        Data storage _data = dataMap[requestId];
        uint256[] memory tempArray = new uint256[](_data.m);
        uint256[] memory _selected = new uint256[](_data.n);
        uint256 length = _data.m;

        for (uint8 i = 0; i < _data.n; i++) {
            uint256 dResult = random(randomness).mod(length);
            _selected[i] = dResult + tempArray[dResult];
            tempArray[dResult] = length - dResult - 1;
            length--;
        }
        _data.selected = _selected;
        emit RequestRandomnessFulfilled(requestId, randomness);
    }

    function random(uint256 randomness) internal returns (uint256) {
        uint256 randomnumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, randomness, nonce)));
        nonce++;        
        return randomnumber;
    }
}