## Task for getting n random numbers from 1 to M

You can test by deploying the contract on rinkeby network and use rinkeby chainlink VRF service to get the random seed.

Currently `reqRand` function accepts `userProvidedSeed` and `m`, `n` and fulfills all n random numbers by ChainLink Oracle but it should be ok to get the random seed only and generate `n` random numbers offchain to save gas fee.