require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember snake idea problem bubble general'; 
let testAccounts = [
"0x79e176b034115934395af27dffdfc1839fda8148b7825f807787065d124783ea",
"0x184e0822328b1bd18168cf6148699766326640894891de8f7bf23ac0ffbc52ed",
"0xc482a2bb15fbe8f0934633e093773b27c47b383c79a786ede7fbf9b8e8ab62dc",
"0x91b8e2f70c946dc912037a0822946d65437e32cff859ac77a15204c5887fca90",
"0x8fede9e34bca330ef1f77e20b82796924e9234ff10b4acda6309a736f1979b4c",
"0xe1dd021ee7e25842ca4a782f291cd5bb716894f32d5a35db78794e3ef8d13f97",
"0x07e595dfcab86e98dc94ae74afbae16eaf1ea2b618079bb4c4c51d57d1f0ecb8",
"0xa4ec6763f6ed9b01e0c54ef0e908159de420b3e541752ce0cf83f56607e93346",
"0x075358cc3f2f922ba04f61cecc2c1a7809bda332c9baa399ad6d75f57db8fd4c",
"0xb1e8ae3a7896b70e6ede04d34028a572e7daad1230de3718d08daf57b80b40d0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

