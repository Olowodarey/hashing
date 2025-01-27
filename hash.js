import crypto from "crypto";
import sha256 from "sha256";

function createSHA256Hash(first, last) {
  const hash = crypto.createHash("sha256");
  hash.update(first, last);
  return hash.digest("hex");
}

const hashValue = createSHA256Hash("Darey", "olowo");
console.log("name hashed:", hashValue);



// to stimulate a block harsh using crypto method

function createBlock(transcation, BlockHeader, Hashes, nonce) {
  const timestamp = Math.floor(Date.now() / 1000);
  const blockContents = `${transcation}${timestamp}${BlockHeader}${Hashes}${nonce}`;
  return blockContents;
}


function hashBlock(blockContents) {
  const hashBlock = crypto.createHash("sha256");
  hashBlock.update(blockContents);
  return hashBlock.digest("hex");
}

const transcation = 5333;
const BlockHeader = "044542221";
const Hashes = "555";
let nonce = 0;


const blockContents = createBlock(transcation, BlockHeader, Hashes, nonce);


const blockHash = hashBlock(blockContents);

console.log("Block Hash:", blockHash);














// to stimulate a block using Sha256 method


const even_block = {
  t1: "txn-even-0x001",
  t2: "txn-even-0x002",
  t3: "txn-even-0x003",
  t4: "txn-even-0x004",
  t5: "txn-even-0x005",
  t6: "txn-even-0x006",
  t7: "txn-even-0x007",
  t8: "txn-even-0x008",
};

const odd_block = {
  t1: "txn-odd-0x001",
  t2: "txn-odd-0x002",
  t3: "txn-odd-0x003",
  t4: "txn-odd-0x004",
  t5: "txn-odd-0x005",
};


function block_hashing_simulation(block) {
 
  let hashes = Object.values(block);
  let counter = 1;
  console.log("Block Transactions Data:", hashes);
  let hashes_processing = [];

  for (let i = 0; i < hashes.length; i += 2) {
    // check if the length of our block is even or odd
    if (i + 1 < hashes.length) {
      hashes_processing.push(hash_transaction_values(hashes[i], hashes[i + 1]));
    } else {
      hashes_processing.push(hash_transaction_values(hashes[i], hashes[i]));
    }
  }

  console.log(`Layer ${counter} Pair Hashes:`, hashes_processing);
  while (hashes_processing.length > 1) {
    let new_hashes = [];
    for (let i = 0; i < hashes_processing.length - 1; i++) {
      new_hashes.push(
        hash_transaction_values(hashes_processing[i], hashes_processing[i + 1])
      );
    }
    hashes_processing = new_hashes;
    counter++;
    console.log(`Layer ${counter} Hashes:`, hashes_processing);
  }

  console.log(`Final root has value for the block: ${hashes_processing[0]}`)
}

function hash_transaction_values(value1, value2) {
  return sha256(value1, value2);
}

function two_value_hashing(x, y) {
    let hash = hash_transaction_values(x, y);
    console.log(`The hash value for the giving names, ${x} and ${y} is: ${hash}`)
}

block_hashing_simulation(even_block);
two_value_hashing("Darey", "olowo")