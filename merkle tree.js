const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

// Sample addresses
const addresses = [
    "address1",
    "address2",
    "address3",
    "address4",
    "address5"
];

// Hash the addresses using SHA256
const hashedAddresses = addresses.map(addr => SHA256(addr).toString());

// Create the Merkle Tree
const merkleTree = new MerkleTree(hashedAddresses, SHA256);

// Get the Merkle Root
const merkleRoot = merkleTree.getRoot().toString("hex");
console.log("Merkle Root:", merkleRoot);

// Generate a proof for "address3"
const leaf = SHA256("address3").toString();
const proof = merkleTree.getProof(leaf);

// Verify the proof
const isValid = merkleTree.verify(proof, leaf, merkleTree.getRoot());
console.log("Verification Result for 'address3':", isValid);
