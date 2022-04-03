import { ethers, Signer, BigNumber } from "ethers"
const ABI = require('../ABI.json')
const ABI_TKN = require('../TOKEN.json') 

interface State {
  contract: object,
  wallet: string,
  balance: string
  inputValue: number,
  errorInput: boolean,
}

const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')
const address = "0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C"
const token_address = '0x275E113c3cd4f80133F99932aAaFaC4A4BA06524'

export const connectModule = {
    state: ():State => ({
        contract: {},
        wallet: "",
        balance: "",
        inputValue: 0,
        errorInput: false,
    }),
    getters: {
        getInputValue(state:State):number {
          return state.inputValue
        },
        getError(state:State):boolean {
          return state.errorInput
        }
    },
    mutations: {
        setInput(state:State, value: number) {
          

        },
      },
    actions: {
      async fetchAccount({state, dispatch}: any):Promise<void> {
        if ((window as any).ethereum) {
          try {
            await dispatch("getWallet")

            const metamask = new ethers.providers.Web3Provider((window as any).ethereum)
            const signer = metamask.getSigner()
            state.wallet
            //С помощью провайдера мы подключаемся к сети Blockcain
            const contract = new ethers.Contract(address, ABI, provider)
            state.contract = contract

            const tokenContract = new ethers.Contract(token_address, ABI_TKN, signer)
            const wallet = await signer.getAddress(); 
            state.wallet = wallet

            let tx
            try {
              tx = await tokenContract.approve(address, BigNumber.from('1').mul(10).pow(18))
            }
            catch (err) {
              console.log(err)
            }
            tx.wait
            
            
            console.log(tx);
            
            
            //Нужен для подтверждения транзакций
            
         
            // Получить кошелек
            const balance = await provider.getBalance(wallet)
            state.balance = balance
            
            // Получить баланс кошелька
            
            // Получить адрес кошелька
            const contractSigner = contract.connect(signer)
            // Дают возможность выполнять транзакции 
          } catch (error) {
            console.log(error);
          }
          
        } else {
          alert("Please install metamask")
        }
      },


      async getWallet({state}: any):Promise<void> {
			  try {
          const accounts = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          state.wallet = accounts[0]
          console.log(accounts[0]);
          
        }  catch (error) {
          console.log(error);
        }
			
      },
    },
    namespaced: true
}