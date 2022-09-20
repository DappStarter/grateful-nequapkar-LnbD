require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember smile imitate prison foster stuff'; 
let testAccounts = [
"0x96981e54ac5d5d613e8f40e40b198c6051ee4ffba1f6cca8fe37256562dac634",
"0xf79b204dbdbfa41cdcc7046092344810005db94d1e12b6407d175b48db345702",
"0x756965329e80b1aca31a97a6df12249a77043e93e24dfd26d9feef4fc8c697b5",
"0x1913c4554667f99a7c97c6631f9946d12f3940ea5ca66cc33d9a97beaddd5df7",
"0xf16658810be686999b780085053f547fdc6002cb87515493fc4cde077eb4a235",
"0x6e0b9914e39089ac6eb478533db538cf292a21b9f18014f91852843bade40fa6",
"0x0f00df51dd0b7f8ff3b46c8d2aaf4570c90660bf303162b50fce80bea70d2553",
"0x28eb66ccd4eaf8f3199a5bde7680fdb9e59dede9cf927503ac0f94605fcc5b7d",
"0x085866b3d9b5c1ee124515d7a0c65865bea896b99a57ea34d418aa969e35a1af",
"0x6a364eee0a1c44330312fe5b96c245224570ee8001a2efeeeae79c00b429e929"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

