import { MimicrySDK, sum } from '../dist/index.js';
import { ethers } from "ethers";
import 'dotenv/config';

const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.PROVIDER_URL;
if (!privateKey || !providerUrl) {
    throw new Error('Please set PRIVATE_KEY and PROVIDER_URL in the .env file');
}

const provider = new ethers.JsonRpcProvider(providerUrl);
const signer = new ethers.Wallet(privateKey, provider);
const mimicry = new MimicrySDK(signer, 80001);

console.log(sum(1, 2));
