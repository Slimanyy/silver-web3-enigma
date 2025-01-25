const { MerkleTree } = require("merkletreejs"); // Import merkle.js library
const SHA256 = require("crypto-js/sha256"); // Import sha256(hashing function from crypto.js library)

const addresses = [
    "address1",
    "address2",
    "address3",
    "address4",
    "address5"
];

const hashAddresses = addresses.map(addr => SHA256(addr).toString()); // create an array of the addresses
const merkleTree = new MerkleTree(hashAddresses, SHA256); // To create Merkle Tree use the merkletree library and pass the array of hashed addresses and hash function

const merkleRoot = merkleTree.getRoot().toString("hex"); // get the root of the tree
console.log("Merkle Root:", merkleRoot);

const leaf = SHA256("address3").toString(); // Generate a proof for "any random address"
const proof = merkleTree.getProof(leaf);

const isValid = merkleTree.verify(proof, leaf, merkleTree.getRoot()); // Verify the proof
console.log("Verification Result for 'address3':", isValid); // logs the results and shows if the address is from the tree. Returns yes if valid
