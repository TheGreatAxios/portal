import { type interfaces } from '@skalenetwork/metaport'

export const METAPORT_CONFIG: interfaces.MetaportConfig = {
  theme: {
    mode: 'dark',
    vibrant: true
  },
  mainnetEndpoint: 'https://cloudflare-eth.com/',
  skaleNetwork: "mainnet",
  openButton: true,
  openOnLoad: true,
  chains: [
    "mainnet",
    "elated-tan-skat", // europa hub
    "honorable-steel-rasalhague", // calypso hub
    "green-giddy-denebola", // nebula hub
    // "frayed-decent-antares", // brawlers
    "affectionate-immediate-pollux", // cryptoblades
    "wan-red-ain", // human protocol
    "turbulent-unique-scheat", // razor
    "adorable-quaint-bellatrix" // streammyscreen
  ],
  "tokens": {
    eth: {
      symbol: 'ETH'
    },
    skl: {
      decimals: '18',
      name: 'SKALE',
      symbol: 'SKL'
    },
    usdc: {
      decimals: '6',
      symbol: 'USDC',
      name: 'USD Coin'
    },
    usdt: {
      decimals: '6',
      symbol: 'USDT',
      name: 'Tether USD'
    },
    wbtc: {
      decimals: '18',
      symbol: 'WBTC',
      name: 'WBTC'
    },
    ruby: {
      name: 'Ruby Token',
      iconUrl: 'https://ruby.exchange/images/tokens/ruby-square.png',
      symbol: 'RUBY'
    },
    dai: {
      name: 'DAI Stablecoin',
      symbol: 'DAI'
    },
    usdp: {
      name: 'Pax Dollar',
      symbol: 'USDP',
      iconUrl: 'https://ruby.exchange/images/tokens/usdp-square.png'
    },
    hmt: {
      name: 'Human Token',
      symbol: 'HMT',
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10347.png'
    },
    ubxs: {
      name: 'UBXS Token',
      symbol: 'UBXS',
      decimals: '6',
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17242.png'
    },
    razor: {
      "decimals": "18",
      "name": "RAZOR Network",
      "symbol": "RAZOR",
      "iconUrl": "https://assets.coingecko.com/coins/images/13797/small/icon.png"
    },
  },
  "connections": {
    mainnet: {
      eth: {
        eth: {
          chains: {
            "elated-tan-skat": {},
            "adorable-quaint-bellatrix": {},
            "honorable-steel-rasalhague": {
              hub: "elated-tan-skat"
            }
          }
        }
      },
      erc20: {
        skl: {
          address: "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
          chains: {
            "elated-tan-skat": {},
            "honorable-steel-rasalhague": {
              hub: "elated-tan-skat"
            },
            "green-giddy-denebola": {
              hub: "elated-tan-skat"
            }
          }
        },
        wbtc: {
          address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
          chains: {
            "elated-tan-skat": {},
            "green-giddy-denebola": {
              hub: "elated-tan-skat"
            }
          }
        },
        usdt: {
          address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
          chains: {
            "elated-tan-skat": {},
            "honorable-steel-rasalhague": {
              hub: "elated-tan-skat"
            },
            "green-giddy-denebola": {
              hub: "elated-tan-skat"
            }
          }
        },
        usdp: {
          address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
          chains: {
            "elated-tan-skat": {}
          }
        },
        ruby: {
          address: '0x918D8F3670c67f14Ff3fEB025D46B9C165d12a23',
          chains: {
            "elated-tan-skat": {}
          }
        },
        dai: {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          chains: {
            "elated-tan-skat": {},
            "honorable-steel-rasalhague": {
              hub: "elated-tan-skat"
            }
          }
        },
        razor: {
          address: '0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd',
          chains: {
            "turbulent-unique-scheat": {}
          }
        },
        usdc: {
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          chains: {
            "elated-tan-skat": {},
            "honorable-steel-rasalhague": {
              hub: "elated-tan-skat"
            },
            "green-giddy-denebola": {
              hub: "elated-tan-skat"
            }
          }
        },
        hmt: {
          address: "0xd1ba9BAC957322D6e8c07a160a3A8dA11A0d2867",
          chains: {
            "elated-tan-skat": {},
            "wan-red-ain": {
              "hub": "elated-tan-skat"
            }
          }
        }
      }
    },
    "elated-tan-skat": { // europa connections
      eth: {
        eth: {
          address: '0xD2Aaa00700000000000000000000000000000000',
          chains: {
            mainnet: {
              clone: true
            },
            'honorable-steel-rasalhague': {
              wrapper: '0xa5274efA35EbeFF47C1510529D9a8812F95F5735'
            }
          }
        }
      },
      erc20: {
        skl: {
          address: "0xE0595a049d02b7674572b0d59cd4880Db60EDC50",
          chains: {
            "mainnet": {
              clone: true
            },
            "honorable-steel-rasalhague": {
              wrapper: "0xD162bB5c75FE99144295b03510bAb2DF99617440"
            },
            "green-giddy-denebola": {
              wrapper: "0xD162bB5c75FE99144295b03510bAb2DF99617440"
            }
          }
        },
        wbtc: {
          address: '0xcb011E86DF014a46F4e3AC3F3cbB114A4EB80870',
          chains: {
            "mainnet": {
              clone: true
            },
            'green-giddy-denebola': {
              wrapper: '0x497C476bcABB2F7D50afF99ca3Ae9354451Ff7d0'
            }
          }
        },
        usdt: {
          address: '0x1c0491E3396AD6a35f061c62387a95d7218FC515',
          chains: {
            "mainnet": {
              clone: true
            },
            'honorable-steel-rasalhague': {
              wrapper: '0x42dDeBDa2195FaEDAEC1cf24c19B42da1c881feB'
            },
            'green-giddy-denebola': {
              wrapper: '0x42dDeBDa2195FaEDAEC1cf24c19B42da1c881feB'
            }
          }
        },
        usdp: {
          address: '0x73d22d8a2D1f59Bf5Bcf62cA382481a2073FAF58',
          chains: {
            "mainnet": {
              clone: true
            }
          }
        },
        ruby: {
          address: '0x2B4e4899b53E8b7958c4591a6d02f9C0b5c50F8f',
          chains: {
            "mainnet": {
              clone: true
            }
          }
        },
        dai: {
          address: '0xD05C4be5f3be302d376518c9492EC0147Fa5A718',
          chains: {
            "mainnet": {
              clone: true
            },
            'honorable-steel-rasalhague': {
              wrapper: '0x9E7563B0D51F9B6dFB1917F97D29D50804300d28'
            }
          }
        },
        usdc: {
          address: "0x5F795bb52dAC3085f578f4877D450e2929D2F13d",
          chains: {
            "mainnet": {
              clone: true
            },
            "honorable-steel-rasalhague": {
              wrapper: "0x1c566a47e1baC535Ca616373146e3BE024F88Aa4"
            },
            "green-giddy-denebola": {
              wrapper: "0x1c566a47e1baC535Ca616373146e3BE024F88Aa4"
            }
          }
        },
        hmt: {
          address: "0xBE3530a3eDf9472693065041B8c9155C7FeCB8e5",
          chains: {
            "mainnet": {
              clone: true
            },
            "wan-red-ain": {
              wrapper: "0xA0f4D4db1457E442b83555cb92aaBB8DE959Aa75"
            }
          }
        }
      }
    },
    "honorable-steel-rasalhague": { // calypso connections
      eth: {
        eth: {
          address: '0x59ab97Ee239e02112652587F9Ef86CB6F762983b',
          chains: {
            'elated-tan-skat': {
              clone: true
            },
            mainnet: {
              clone: true,
              hub: 'elated-tan-skat'
            }
          }
        }
      },
      erc20: {
        skl: {
          address: "0x4048C4dd6eccF1Dc23b068211fDf20AD19602e50",
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        usdt: {
          address: '0xf9B5736E74b37Ec2EDd37B1B3c8e1aF9fa426F2A',
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        dai: {
          address: '0x941C0Dd6055787aE9D417620E8F4F540d8B9D9E5',
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        usdc: {
          address: "0x7Cf76E740Cb23b99337b21F392F22c47Ad910c67",
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        }
      }
    },
    "green-giddy-denebola": { // nebula connections
      erc20: {
        skl: {
          address: "0x7F73B66d4e6e67bCdeaF277b9962addcDabBFC4d",
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        usdc: {
          address: "0xCC205196288B7A26f6D43bBD68AaA98dde97276d",
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        usdt: {
          address: '0x932427E1f1Ea096e2bb05C7dE937d083ddb8Ff83',
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        },
        wbtc: {
          address: '0x64d2EebA8B02f2aB19e2238f1655A8409dB64817',
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        }
      }
    },
    "affectionate-immediate-pollux": { // cryptoblades connections
      erc20: {

      }
    },
    "wan-red-ain": { // human connections
      erc20: {
        hmt: {
          address: "0x6E5FF61Ea88270F6142E0E0eC8cbe9d67476CbCd",
          chains: {
            "elated-tan-skat": {
              clone: true
            },
            "mainnet": {
              clone: true,
              hub: "elated-tan-skat"
            }
          }
        }
      }
    },
    "turbulent-unique-scheat": { // razor connections
      erc20: {
        razor: {
          address: '0xcbf70914Fae03B3acB91E953De60CfDAaCA8145f',
          chains: {
            "mainnet": {}
          }
        },
      }
    },
    "adorable-quaint-bellatrix": { // streammyscreen connections
      eth: {
        eth: {
          address: '0xD2Aaa00700000000000000000000000000000000',
          chains: {
            mainnet: {
              clone: true
            }
          }
        }
      }
    }
  }
}