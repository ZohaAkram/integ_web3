import Web3 from 'web3';
import TokenContract from './token.json';
let selectedAccount;
let tokenContract;
let isInitialized = false;
export const init = async () => {
  let provider = window.ethereum; //
  if (typeof provider !== 'undefined') {
    //metamask is installed
    provider
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  tokenContract = new web3.eth.Contract(
    TokenContract.abi,
    TokenContract.networks[networkId].address
  );
  isInitialized = true;
};
export const itembyS = async () => {
  if (!isInitialized) {
    await init();
  }
  // console.log(nftContract.methods.name.call());
  return tokenContract.methods
    .itemBySupplier(1, 1, 1, 1)
    .send({ from: selectedAccount });
};
export const set_price = async () => {
  if (!isInitialized) {
    await init();
  }
  // console.log(nftContract.methods.name.call());
  return tokenContract.methods
    .itemForSale(
      4116505640912284550723191986264393474293570820512791522119157812802259305428,
      0
    )
    .send({ from: selectedAccount });
};
// const number = nftContract.methods.myFunction().call();
// console.log(number);
// return tokenContract.methods.enternum(1).send({ from: selectedAccount });
