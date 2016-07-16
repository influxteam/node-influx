module.exports = {
  /* == Blockchain == */
  getBestBlockHash: "getbestblockhash",
  getBlock: "getblock",
  getBlockchainInfo: "getblockchaininfo",
  getBlockCount: "getblockcount",
  getBlockHash: "getblockhash",
  getBlockHeader: "getblockheader",
  getChainTips: "getchaintips",
  getDifficulty: "getdifficulty",
  getMemPoolInfo: "getmempoolinfo",
  getRawMemPool: "getrawmempool",
  getTxOut: "gettxout",
  getTxOutProof: "gettxoutproof",
  getTxOutSetInfo: "gettxoutsetinfo",
  verifyChain: "verifychain",
  verifyTxOutProof: "verifytxoutproof",

  /* == Control == */
  getInfo: "getinfo",
  help: "help",
  stop: "stop",

  /* == Generating == */
  generate: "generate",
  getGenerate: "getgenerate",
  setGenerate: "setgenerate",

  /* == Mining == */
  getAuxBlock: "getauxblock",
  getBlockTemplate: "getblocktemplate",
  getMiningInfo: "getmininginfo",
  getNetworkHashPs: "getnetworkhashps",
  prioritiseTransaction: "prioritisetransaction",
  submitBlock: "submitblock",

  /* == Network == */
  addNode: "addnode",
  clearBanner: "clearbanned",
  disconnectNode: "disconnectnode",
  getAddedNodeInfo: "getaddednodeinfo",
  getConnectionCount: "getconnectioncount",
  getNetTotals: "getnettotals",
  getNetworkInfo: "getnetworkinfo",
  getPeerInfo: "getpeerinfo",
  listBanned: "listbanned",
  ping: "ping",
  setBan: "setban",

  /*  == Rawtransactions == */
  createRawTransaction: "createrawtransaction",
  decodeRawTransaction: "decoderawtransaction",
  decodeScript: "decodescript",
  fundRawTransaction: "fundrawtransaction",
  getRawTransaction: "getrawtransaction",
  sendRawTransaction: "sendrawtransaction",
  signRawTransaction: "signrawtransaction",

  /* == Util == */
  createMultiSig: "createmultisig",
  estimateFee: "estimatefee",
  estimatePriority: "estimatepriority",
  estimateSmartFee: "estimatesmartfee",
  estimateSmartPriority: "estimatesmartpriority",
  validateAddress: "validateaddress",
  verifyMessage: "verifymessage",

  /* == Wallet == */
  addMultiSigAddress: "addmultisigaddress",
  aliasAffiliates: "aliasaffiliates",
  aliasFilter: "aliasfilter",
  aliasHistory: "aliashistory",
  aliasInfo: "aliasinfo",
  aliasList: "aliaslist",
  aliasNew: "aliasnew",
  aliasScan: "aliasscan",
  aliasUpdate: "aliasupdate",
  backupWallet: "backupwallet",
  certFilter: "certfilter",
  certHistory: "certhistory",
  certInfo: "certinfo",
  certList: "certlist",
  certNew: "certnew",
  certScan: "certscan",
  certTransfer: "certtransfer",
  certUpdate: "certupdate",
  dumpPrivKey: "dumpprivkey",
  dumpWallet: "dumpwallet",
  encryptWallet: "encryptwallet",
  escrowClaimRefund: "escrowclaimrefund",
  escrowClaimRelease: "escrowclaimrelease",
  escrowComplete: "escrowcomplete",
  escrowFilter: "escrowfilter",
  escrowHistory: "escrowhistory",
  escrowInfo: "escrowinfo",
  escrowList: "escrowlist",
  escrowNew: "escrownew",
  escrowRefund: "escrowrefund",
  escrowRelease: "escrowrelease",
  escrowScan: "escrowscan",
  getAccount: "getaccount",
  getAccountAddress: "getaccountaddress",
  getAddressesByAccount: "getaddressesbyaccount",
  getBalance: "getbalance",
  getNewAddress: "getnewaddress",
  getRawChangeAddress: "getrawchangeaddress",
  getReceivedByAccount: "getreceivedbyaccount",
  getReceivedByAddress: "getreceivedbyaddress",
  getTransaction: "gettransaction",
  getUnconfirmedBalance: "getunconfirmedbalance",
  getV2Address: "getv2address",
  getWalletInfo: "getwalletinfo",
  importAddress: "importaddress",
  importPrivKey: "importprivkey",
  importPubKey: "importpubkey",
  importWallet: "importwallet",
  keypoolRefill: "keypoolrefill",
  listAccounts: "listaccounts",
  listAddressGroupings: "listaddressgroupings",
  listLockUnspent: "listlockunspent",
  listReceivedByAccount: "listreceivedbyaccount",
  listReceivedByAddress: "listreceivedbyaddress",
  listSinceBlock: "listsinceblock",
  listTransactions: "listtransactions",
  listUnspent: "listunspent",
  lockUnspent: "lockunspent",
  messageHistory: "messagehistory",
  messageInfo: "messageinfo",
  messageList: "messagelist",
  messageNew: "messagenew",
  messageSentList: "messagesentlist",
  move: "move",
  offerAccept: "offeraccept",
  offerAcceptList: "offeracceptlist",
  offerAddWhitelist: "offeraddwhitelist",
  offerClearWhitelist: "offerclearwhitelist",
  offerFilter: "offerfilter",
  offerHistory: "offerhistory",
  offerInfo: "offerinfo",
  offerLink: "offerlink",
  offerList: "offerlist",
  offerNew: "offernew",
  offerRemoveWhitelist: "offerremovewhitelist",
  offerScan: "offerscan",
  offerUpdate: "offerupdate",
  offerWhitelist: "offerwhitelist",
  sendFrom: "sendfrom",
  sendMany: "sendmany",
  sendToAddress: "sendtoaddress",
  setAccount: "setaccount",
  setTxFee: "settxfee",
  signMessage: "signmessage",

  /* not listed in help output */
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange'
};