const proofsABI = {
  "contractName": "StableProofs",
  "abi": [
    {
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "sender",
          "indexed": true
        },
        {
          "type": "address",
          "name": "receiver",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true
        },
        {
          "type": "address",
          "name": "spender",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "name": "Mint",
      "inputs": [
        {
          "type": "address",
          "name": "minter",
          "indexed": true
        },
        {
          "type": "address",
          "name": "receiver",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false
        },
        {
          "type": "uint256",
          "name": "mint",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "name": "ContractPaused",
      "inputs": [
        {
          "type": "bool",
          "name": "isPaused",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "outputs": [],
      "inputs": [
        {
          "type": "string",
          "name": "_name"
        },
        {
          "type": "string",
          "name": "_symbol"
        },
        {
          "type": "uint256",
          "name": "_decimals"
        },
        {
          "type": "uint256",
          "name": "_supply"
        },
        {
          "type": "address",
          "name": "_oracle"
        },
        {
          "type": "address",
          "name": "_admin"
        },
        {
          "type": "uint256",
          "name": "_admin_fee"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "constructor"
    },
    {
      "name": "totalSupply",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1151
    },
    {
      "name": "allowance",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_owner"
        },
        {
          "type": "address",
          "name": "_spender"
        }
      ],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1489
    },
    {
      "name": "transfer",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_to"
        },
        {
          "type": "uint256",
          "name": "_value"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 74772
    },
    {
      "name": "transferFrom",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_from"
        },
        {
          "type": "address",
          "name": "_to"
        },
        {
          "type": "uint256",
          "name": "_value"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 111066
    },
    {
      "name": "approve",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_spender"
        },
        {
          "type": "uint256",
          "name": "_value"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 37853
    },
    {
      "name": "updateAdminFee",
      "outputs": [],
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 36499
    },
    {
      "name": "updateAdminAddress",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_admin"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 36568
    },
    {
      "name": "pauseContract",
      "outputs": [],
      "inputs": [],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 38703
    },
    {
      "name": "unpauseContract",
      "outputs": [],
      "inputs": [],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 23733
    },
    {
      "name": "mint",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_to"
        }
      ],
      "constant": false,
      "payable": true,
      "type": "function",
      "gas": 152464
    },
    {
      "name": "withdrawFees",
      "outputs": [],
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount"
        },
        {
          "type": "address",
          "name": "_to"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 36491
    },
    {
      "constant": false,
      "payable": true,
      "type": "fallback"
    },
    {
      "name": "name",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 6906
    },
    {
      "name": "symbol",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 6936
    },
    {
      "name": "decimals",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1541
    },
    {
      "name": "balanceOf",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "arg0"
        }
      ],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1725
    },
    {
      "name": "minter",
      "outputs": [
        {
          "type": "address",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1601
    },
    {
      "name": "oracle",
      "outputs": [
        {
          "type": "address",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1631
    },
    {
      "name": "price",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1661
    },
    {
      "name": "admin",
      "outputs": [
        {
          "type": "address",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1691
    },
    {
      "name": "adminFee",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1721
    },
    {
      "name": "isPaused",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1751
    }
  ],
  "bytecode": "0x740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a05260e06111ad6101403934156100a157600080fd5b602c60206111ad60c03960c0516111ad0161022039600c60206111ad60c03960c0516004013511156100d257600080fd5b6023602060206111ad0160c03960c0516111ad01610280396003602060206111ad0160c03960c05160040135111561010957600080fd5b602060806111ad0160c03960c051602051811061012557600080fd5b50602060a06111ad0160c03960c051602051811061014257600080fd5b506101a051600a6101805180820a8210811560018314171761016357600080fd5b80820a90509050808202821582848304141761017e57600080fd5b809050905090506102e05261022080600060c052602060c020602082510161012060006002818352015b826101205160200211156101bb576101dd565b61012051602002850151610120518501555b81516001018083528114156101a8575b50505050505061028080600160c052602060c020602082510161012060006002818352015b8261012051602002111561021557610237565b61012051602002850151610120518501555b8151600101808352811415610202575b505050505050610180516002556102e05160033360e05260c052604060c020556102e051600555336006556101c0516007556101e05160095561020051600a556102e051610300523360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610300a361119556600436101561000d57610ee6565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a0526318160ddd60005114156100c85734156100ba57600080fd5b60055460005260206000f350005b63dd62ed3e600051141561012f5734156100e157600080fd5b60043560205181106100f257600080fd5b50602435602051811061010457600080fd5b50600460043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f350005b63a9059cbb60005114156101f157341561014857600080fd5b600435602051811061015957600080fd5b5060033360e05260c052604060c02080546024358082101561017a57600080fd5b80820390509050815550600360043560e05260c052604060c02080546024358181830110156101a857600080fd5b8082019050905081555060243561014052600435337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b6323b872dd600051141561030157341561020a57600080fd5b600435602051811061021b57600080fd5b50602435602051811061022d57600080fd5b50600360043560e05260c052604060c02080546044358082101561025057600080fd5b80820390509050815550600360243560e05260c052604060c020805460443581818301101561027e57600080fd5b80820190509050815550600460043560e05260c052604060c0203360e05260c052604060c0208054604435808210156102b657600080fd5b80820390509050815550604435610140526024356004357fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b63095ea7b3600051141561038b57341561031a57600080fd5b600435602051811061032b57600080fd5b5060243560043360e05260c052604060c02060043560e05260c052604060c0205560243561014052600435337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610140a3600160005260206000f350005b63cff1b6ef600051141561044d5734156103a457600080fd5b60095433141515610445576308c379a061014052602061016052604f610180527f4572726f722072756e6e696e672075706461746541646d696e466565202d204f6101a0527f6e6c792074686520636f6e74726163742061646d696e2063616e2075706461746101c0527f65207468652061646d696e2066656500000000000000000000000000000000006101e0526101805060006104445760c461015cfd5b5b600435600a55005b6385e2381c600051141561052157341561046657600080fd5b600435602051811061047757600080fd5b5060095433141515610519576308c379a0610140526020610160526057610180527f4572726f722072756e6e696e672075706461746541646d696e616464726573736101a0527f202d204f6e6c792074686520636f6e74726163742061646d696e2063616e20756101c0527f7064617465207468652061646d696e20616464726573730000000000000000006101e0526101805060006105185760c461015cfd5b5b600435600955005b63439766ce600051141561061057341561053a57600080fd5b600954331415156105db576308c379a061014052602061016052604d610180527f4572726f722072756e6e696e67207061757365436f6e7472616374202d204f6e6101a0527f6c792074686520636f6e74726163742061646d696e2063616e207061757365206101c0527f7468697320636f6e7472616374000000000000000000000000000000000000006101e0526101805060006105da5760c461015cfd5b5b6001600b55600b54610220527f752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a6020610220a1005b63b33712c560005114156106ff57341561062957600080fd5b600954331415156106ca576308c379a061014052602061016052604f610180527f4572726f722072756e6e696e67207061757365436f6e7472616374202d204f6e6101a0527f6c792074686520636f6e74726163742061646d696e2063616e20756e706175736101c0527f65207468697320636f6e747261637400000000000000000000000000000000006101e0526101805060006106c95760c461015cfd5b5b6000600b55600b54610220527f752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a6020610220a1005b636a6278426000511415610b3d57600435602051811061071e57600080fd5b5060003411151561079a576308c379a0610140526020610160526035610180527f4572726f722072756e6e696e67206d696e74202d206d73672e76616c7565206d6101a0527f7573742062652067726561746572207468616e203000000000000000000000006101c0526101805060006107995760a461015cfd5b5b600b54151515610815576308c379a061020052602061022052602b610240527f4572726f722072756e6e696e67206d696e74202d2054686520636f6e74726163610260527f7420697320706175736564000000000000000000000000000000000000000000610280526102405060006108145760a461021cfd5b5b6007543b61082257600080fd5b600754301861083057600080fd5b6020610320600463a035b1fe6102c0526102dc60006007545af161085357600080fd5b600050610320516008556402540be4006402540be4006008540260805181111561087c57600080fd5b64e8d4a5100060a051818061089057600080fd5b6402540be400840205806080519013156108a957600080fd5b80919012156108b757600080fd5b905090506402540be400600854606480806108d157600080fd5b820490509050026080518111156108e757600080fd5b60a051818303806080519013156108fd57600080fd5b809190121561090b57600080fd5b9050905064e8d4a5100060a051818302831583858305141761092c57600080fd5b6402540be400810590508060805190131561094657600080fd5b809190121561095457600080fd5b90509050600081121561096657600080fd5b04610340526008546064808061097b57600080fd5b820490509050610360526402540be4006402540be400600a543480820282158284830414176109a957600080fd5b8090509050905068056bc75e2d6310000080806109c557600080fd5b820490509050026080518111156109db57600080fd5b60008112156109e957600080fd5b0461038052346103805180821015610a0057600080fd5b808203905090506103a0526103a051610360518082028215828483041417610a2757600080fd5b809050905090506103c0526103a05160648080610a4357600080fd5b820490509050610340518082028215828483041417610a6157600080fd5b809050905090506103e0526103c0516103e051818183011015610a8357600080fd5b80820190509050610400526005805461040051818183011015610aa557600080fd5b80820190509050815550600360043560e05260c052604060c020805461040051818183011015610ad457600080fd5b808201905090508155506103a0516104205261042051610440526104005161046052600435337f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee6040610440a360006000600060006103a05160006000f1610b3b57600080fd5b005b63dd2cc3f36000511415610c25573415610b5657600080fd5b6024356020518110610b6757600080fd5b5060095433141515610c09576308c379a0610140526020610160526046610180527f4572726f722072756e6e696e6720776974686472617746656573202d204f6e6c6101a0527f792074686520636f6e74726163742061646d696e2063616e20776974686472616101c0527f77206665657300000000000000000000000000000000000000000000000000006101e052610180506000610c085760c461015cfd5b5b60006000600060006004356024356000f1610c2357600080fd5b005b6306fdde036000511415610cd9573415610c3e57600080fd5b60008060c052602060c020610180602082540161012060006002818352015b82610120516020021115610c7057610c92565b61012051850154610120516020028501525b8151600101808352811415610c5d575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6395d89b416000511415610d8d573415610cf257600080fd5b60018060c052602060c020610180602082540161012060006002818352015b82610120516020021115610d2457610d46565b61012051850154610120516020028501525b8151600101808352811415610d11575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63313ce5676000511415610db4573415610da657600080fd5b60025460005260206000f350005b6370a082316000511415610dfb573415610dcd57600080fd5b6004356020518110610dde57600080fd5b50600360043560e05260c052604060c0205460005260206000f350005b63075461726000511415610e22573415610e1457600080fd5b60065460005260206000f350005b637dc0d1d06000511415610e49573415610e3b57600080fd5b60075460005260206000f350005b63a035b1fe6000511415610e70573415610e6257600080fd5b60085460005260206000f350005b63f851a4406000511415610e97573415610e8957600080fd5b60095460005260206000f350005b63a0be06f96000511415610ebe573415610eb057600080fd5b600a5460005260206000f350005b63b187bd266000511415610ee5573415610ed757600080fd5b600b5460005260206000f350005b5b5b6102ae611195036102ae6000396102ae611195036000f3",
  "deployedBytecode": "0x600436101561000d57610ee6565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a0526318160ddd60005114156100c85734156100ba57600080fd5b60055460005260206000f350005b63dd62ed3e600051141561012f5734156100e157600080fd5b60043560205181106100f257600080fd5b50602435602051811061010457600080fd5b50600460043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f350005b63a9059cbb60005114156101f157341561014857600080fd5b600435602051811061015957600080fd5b5060033360e05260c052604060c02080546024358082101561017a57600080fd5b80820390509050815550600360043560e05260c052604060c02080546024358181830110156101a857600080fd5b8082019050905081555060243561014052600435337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b6323b872dd600051141561030157341561020a57600080fd5b600435602051811061021b57600080fd5b50602435602051811061022d57600080fd5b50600360043560e05260c052604060c02080546044358082101561025057600080fd5b80820390509050815550600360243560e05260c052604060c020805460443581818301101561027e57600080fd5b80820190509050815550600460043560e05260c052604060c0203360e05260c052604060c0208054604435808210156102b657600080fd5b80820390509050815550604435610140526024356004357fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b63095ea7b3600051141561038b57341561031a57600080fd5b600435602051811061032b57600080fd5b5060243560043360e05260c052604060c02060043560e05260c052604060c0205560243561014052600435337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610140a3600160005260206000f350005b63cff1b6ef600051141561044d5734156103a457600080fd5b60095433141515610445576308c379a061014052602061016052604f610180527f4572726f722072756e6e696e672075706461746541646d696e466565202d204f6101a0527f6e6c792074686520636f6e74726163742061646d696e2063616e2075706461746101c0527f65207468652061646d696e2066656500000000000000000000000000000000006101e0526101805060006104445760c461015cfd5b5b600435600a55005b6385e2381c600051141561052157341561046657600080fd5b600435602051811061047757600080fd5b5060095433141515610519576308c379a0610140526020610160526057610180527f4572726f722072756e6e696e672075706461746541646d696e616464726573736101a0527f202d204f6e6c792074686520636f6e74726163742061646d696e2063616e20756101c0527f7064617465207468652061646d696e20616464726573730000000000000000006101e0526101805060006105185760c461015cfd5b5b600435600955005b63439766ce600051141561061057341561053a57600080fd5b600954331415156105db576308c379a061014052602061016052604d610180527f4572726f722072756e6e696e67207061757365436f6e7472616374202d204f6e6101a0527f6c792074686520636f6e74726163742061646d696e2063616e207061757365206101c0527f7468697320636f6e7472616374000000000000000000000000000000000000006101e0526101805060006105da5760c461015cfd5b5b6001600b55600b54610220527f752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a6020610220a1005b63b33712c560005114156106ff57341561062957600080fd5b600954331415156106ca576308c379a061014052602061016052604f610180527f4572726f722072756e6e696e67207061757365436f6e7472616374202d204f6e6101a0527f6c792074686520636f6e74726163742061646d696e2063616e20756e706175736101c0527f65207468697320636f6e747261637400000000000000000000000000000000006101e0526101805060006106c95760c461015cfd5b5b6000600b55600b54610220527f752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a6020610220a1005b636a6278426000511415610b3d57600435602051811061071e57600080fd5b5060003411151561079a576308c379a0610140526020610160526035610180527f4572726f722072756e6e696e67206d696e74202d206d73672e76616c7565206d6101a0527f7573742062652067726561746572207468616e203000000000000000000000006101c0526101805060006107995760a461015cfd5b5b600b54151515610815576308c379a061020052602061022052602b610240527f4572726f722072756e6e696e67206d696e74202d2054686520636f6e74726163610260527f7420697320706175736564000000000000000000000000000000000000000000610280526102405060006108145760a461021cfd5b5b6007543b61082257600080fd5b600754301861083057600080fd5b6020610320600463a035b1fe6102c0526102dc60006007545af161085357600080fd5b600050610320516008556402540be4006402540be4006008540260805181111561087c57600080fd5b64e8d4a5100060a051818061089057600080fd5b6402540be400840205806080519013156108a957600080fd5b80919012156108b757600080fd5b905090506402540be400600854606480806108d157600080fd5b820490509050026080518111156108e757600080fd5b60a051818303806080519013156108fd57600080fd5b809190121561090b57600080fd5b9050905064e8d4a5100060a051818302831583858305141761092c57600080fd5b6402540be400810590508060805190131561094657600080fd5b809190121561095457600080fd5b90509050600081121561096657600080fd5b04610340526008546064808061097b57600080fd5b820490509050610360526402540be4006402540be400600a543480820282158284830414176109a957600080fd5b8090509050905068056bc75e2d6310000080806109c557600080fd5b820490509050026080518111156109db57600080fd5b60008112156109e957600080fd5b0461038052346103805180821015610a0057600080fd5b808203905090506103a0526103a051610360518082028215828483041417610a2757600080fd5b809050905090506103c0526103a05160648080610a4357600080fd5b820490509050610340518082028215828483041417610a6157600080fd5b809050905090506103e0526103c0516103e051818183011015610a8357600080fd5b80820190509050610400526005805461040051818183011015610aa557600080fd5b80820190509050815550600360043560e05260c052604060c020805461040051818183011015610ad457600080fd5b808201905090508155506103a0516104205261042051610440526104005161046052600435337f2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee6040610440a360006000600060006103a05160006000f1610b3b57600080fd5b005b63dd2cc3f36000511415610c25573415610b5657600080fd5b6024356020518110610b6757600080fd5b5060095433141515610c09576308c379a0610140526020610160526046610180527f4572726f722072756e6e696e6720776974686472617746656573202d204f6e6c6101a0527f792074686520636f6e74726163742061646d696e2063616e20776974686472616101c0527f77206665657300000000000000000000000000000000000000000000000000006101e052610180506000610c085760c461015cfd5b5b60006000600060006004356024356000f1610c2357600080fd5b005b6306fdde036000511415610cd9573415610c3e57600080fd5b60008060c052602060c020610180602082540161012060006002818352015b82610120516020021115610c7057610c92565b61012051850154610120516020028501525b8151600101808352811415610c5d575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6395d89b416000511415610d8d573415610cf257600080fd5b60018060c052602060c020610180602082540161012060006002818352015b82610120516020021115610d2457610d46565b61012051850154610120516020028501525b8151600101808352811415610d11575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63313ce5676000511415610db4573415610da657600080fd5b60025460005260206000f350005b6370a082316000511415610dfb573415610dcd57600080fd5b6004356020518110610dde57600080fd5b50600360043560e05260c052604060c0205460005260206000f350005b63075461726000511415610e22573415610e1457600080fd5b60065460005260206000f350005b637dc0d1d06000511415610e49573415610e3b57600080fd5b60075460005260206000f350005b63a035b1fe6000511415610e70573415610e6257600080fd5b60085460005260206000f350005b63f851a4406000511415610e97573415610e8957600080fd5b60095460005260206000f350005b63a0be06f96000511415610ebe573415610eb057600080fd5b600a5460005260206000f350005b63b187bd266000511415610ee5573415610ed757600080fd5b600b5460005260206000f350005b5b",
  "source": "# (c) 2020 Brandon McFarland\n\n# @title StableProofs\n# @author Brandon McFarland\n# @notice A proof of burn stablecoin\n\nfrom vyper.interfaces import ERC20\n\ncontract ORACLE:\n    def price() -> uint256: modifying\n\nimplements: ERC20\n\nTransfer: event({\n    sender: indexed(address)\n    , receiver: indexed(address)\n    , value: uint256\n})\n\nApproval: event({ \n    owner: indexed(address)\n    , spender: indexed(address)\n    , value: uint256\n})\n\nMint: event({\n    minter: indexed(address)\n    , receiver: indexed(address)\n    , value: uint256\n    , mint: uint256\n})\n\nContractPaused: event({\n    isPaused: bool\n})\n\nname: public(string[12])\nsymbol: public(string[3])\ndecimals: public(uint256)\nbalanceOf: public(map(address, uint256))\nallowances: map(address, map(address, uint256))\ntotal_supply: uint256\nminter: public(address)\noracle: public(address)\nprice: public(uint256)\nadmin: public(address)\nadminFee: public(uint256)\nisPaused: public(bool)\nPRECISION: constant(uint256) = 10**18\n\n@public\ndef __init__(_name: string[12], _symbol: string[3], _decimals: uint256, _supply: uint256, _oracle: address, _admin: address, _admin_fee: uint256):\n    init_supply: uint256 = _supply * 10 ** _decimals\n    self.name = _name\n    self.symbol = _symbol\n    self.decimals = _decimals\n    self.balanceOf[msg.sender] = init_supply\n    self.total_supply = init_supply\n    self.minter = msg.sender\n    self.oracle = _oracle   \n    self.admin = _admin\n    self.adminFee = _admin_fee\n    log.Transfer(ZERO_ADDRESS, msg.sender, init_supply)\n\n@public\n@constant\ndef totalSupply() -> uint256:\n    return self.total_supply\n\n@public\n@constant\ndef allowance(_owner : address, _spender : address) -> uint256:\n    return self.allowances[_owner][_spender]\n\n@public\ndef transfer(_to : address, _value : uint256) -> bool:\n    self.balanceOf[msg.sender] -= _value\n    self.balanceOf[_to] += _value\n    log.Transfer(msg.sender, _to, _value)\n    return True\n\n@public\ndef transferFrom(_from : address, _to : address, _value : uint256) -> bool:\n    self.balanceOf[_from] -= _value\n    self.balanceOf[_to] += _value\n    self.allowances[_from][msg.sender] -= _value\n    log.Transfer(_from, _to, _value)\n    return True\n\n@public\ndef approve(_spender : address, _value : uint256) -> bool:\n    self.allowances[msg.sender][_spender] = _value\n    log.Approval(msg.sender, _spender, _value)\n    return True\n\n@public\ndef updateAdminFee(_amount: uint256):\n    if not msg.sender == self.admin:\n        raise \"Error running updateAdminFee - Only the contract admin can update the admin fee\"\n    self.adminFee = _amount\n\n@public\ndef updateAdminAddress(_admin: address):\n    if not msg.sender == self.admin:\n        raise \"Error running updateAdminaddress - Only the contract admin can update the admin address\"\n    self.admin = _admin\n\n@public\ndef pauseContract():\n    if not msg.sender == self.admin:\n        raise \"Error running pauseContract - Only the contract admin can pause this contract\"\n    self.isPaused = True\n    log.ContractPaused(self.isPaused)\n\n@public\ndef unpauseContract():\n    if not msg.sender == self.admin:\n        raise \"Error running pauseContract - Only the contract admin can unpause this contract\"\n    self.isPaused = False\n    log.ContractPaused(self.isPaused)\n\n@public\n@payable\ndef mint(_to: address):\n    if not msg.value > 0:\n        raise \"Error running mint - msg.value must be greater than 0\"\n    if not self.isPaused == False:\n        raise \"Error running mint - The contract is paused\"\n\n    self.price = ORACLE(self.oracle).price()\n    price_decimals: uint256 = convert( (((convert(self.price,decimal)/convert(100,decimal)) - convert(self.price/100, decimal)) * convert(100,decimal)), uint256)\n    price_integer: uint256 = self.price/100\n    fee: uint256 = convert( convert( ((self.adminFee * as_unitless_number(msg.value) ) / (100 * (PRECISION))), decimal ), uint256 )\n    value_after_fee: uint256 = as_unitless_number(msg.value) - fee\n    mint_left: uint256 = as_unitless_number(value_after_fee)*price_integer\n    mint_right: uint256 = (as_unitless_number(value_after_fee)/100)*price_decimals\n    mint_value: uint256 = mint_left + mint_right\n    self.total_supply += mint_value\n    self.balanceOf[_to] += mint_value\n\n    log.Mint(msg.sender, _to, as_unitless_number(value_after_fee), mint_value)\n    send(ZERO_ADDRESS, value_after_fee)\n\n@public\ndef withdrawFees(_amount: uint256, _to: address):\n    if not msg.sender == self.admin:\n        raise \"Error running withdrawFees - Only the contract admin can withdraw fees\"\n\n    send(_to, _amount)\n\n\n@public\n@payable\ndef __default__():\n    pass\n",
  "sourcePath": "/Users/brandonmcfaraland/Desktop/contract_dev/dev/truffle/contracts/StableProofs.vy",
  "compiler": {
    "name": "vyper",
    "version": "0.1.0b16+commit.df97c9c"
  },
  "networks": {
    "1": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "name": "Transfer",
          "inputs": [
            {
              "type": "address",
              "name": "sender",
              "indexed": true
            },
            {
              "type": "address",
              "name": "receiver",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "name": "Approval",
          "inputs": [
            {
              "type": "address",
              "name": "owner",
              "indexed": true
            },
            {
              "type": "address",
              "name": "spender",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee": {
          "name": "Mint",
          "inputs": [
            {
              "type": "address",
              "name": "minter",
              "indexed": true
            },
            {
              "type": "address",
              "name": "receiver",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            },
            {
              "type": "uint256",
              "name": "mint",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a": {
          "name": "ContractPaused",
          "inputs": [
            {
              "type": "bool",
              "name": "isPaused",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        }
      },
      "links": {},
      "address": "0xec72Fe7CeB26f6Bee3094925AC17C66A24C9e72B",
      "transactionHash": "0x84e2bb78c78a48aa800d703ed382cb66a30b7ff18028f25dd4ddc4442b3b1d00"
    },
    "42": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "name": "Transfer",
          "inputs": [
            {
              "type": "address",
              "name": "sender",
              "indexed": true
            },
            {
              "type": "address",
              "name": "receiver",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "name": "Approval",
          "inputs": [
            {
              "type": "address",
              "name": "owner",
              "indexed": true
            },
            {
              "type": "address",
              "name": "spender",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x2f00e3cdd69a77be7ed215ec7b2a36784dd158f921fca79ac29deffa353fe6ee": {
          "name": "Mint",
          "inputs": [
            {
              "type": "address",
              "name": "minter",
              "indexed": true
            },
            {
              "type": "address",
              "name": "receiver",
              "indexed": true
            },
            {
              "type": "uint256",
              "name": "value",
              "indexed": false
            },
            {
              "type": "uint256",
              "name": "mint",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        },
        "0x752d7e161ff5146f80e3820893176eb40532811e5e20400dfdde57455213706a": {
          "name": "ContractPaused",
          "inputs": [
            {
              "type": "bool",
              "name": "isPaused",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        }
      },
      "links": {},
      "address": "0xb547B61b67b68256439Acdbe9cEef483bca247D4",
      "transactionHash": "0x5af948027e1bf9f522b2f552b615bd73885f7755c39dec621f67e93e1eaf06c5"
    }
  },
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-07-10T19:25:30.347Z",
  "networkType": "ethereum"
}

module.exports = proofsABI;