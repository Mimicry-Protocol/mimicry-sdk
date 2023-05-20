import { Contract } from 'ethers';
import { Market } from './market';
const MIMICRY_ABI = require('./abi/mimicry.json');
export class MimicrySDK {
    signer;
    factory;
    addressBook = {
        137: {
            mimicry: '0x123',
            factory: '0x123',
        },
        80001: {
            mimicry: '0x123',
            factory: '0x123',
        },
    };
    constructor(_signer) {
        this.signer = _signer;
        const network = await this.signer.provider.getNetwork();
        const chainId = network.chainId;
        this.factory = new Contract(this.addressBook[chainId].mimicry, MIMICRY_ABI, this.signer);
    }
    async createMarket(_info) {
        return new Market(this.signer, _info);
    }
    async getMarkets() { }
    async getMarket(_address) {
        return new Market();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltaWNyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWltaWNyeS9taW1pY3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQW1CLE1BQU0sUUFBUSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbEQsTUFBTSxPQUFPLFVBQVU7SUFDYixNQUFNLENBQVM7SUFDZixPQUFPLENBQVc7SUFDbEIsV0FBVyxHQUFHO1FBQ3BCLEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1NBQ25CO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87U0FDbkI7S0FDRixDQUFDO0lBRUYsWUFBWSxPQUFlO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE1BQU0sT0FBTyxHQUFZLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakUsTUFBTSxPQUFPLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFDakMsV0FBVyxFQUNYLElBQUksQ0FBQyxNQUFNLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFFTSxLQUFLLENBQUMsWUFBWSxDQUN2QixLQUFpQjtRQUVqQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNNLEtBQUssQ0FBQyxVQUFVLEtBQUksQ0FBQztJQUNyQixLQUFLLENBQUMsU0FBUyxDQUFDLFFBQWdCO1FBQ3JDLE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0YifQ==