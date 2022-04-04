import { ethers, BigNumber } from "ethers"
const ABI = require('../ABI.json')

interface State {
  contract: object,
  wallet: string,
  balance: string
  inputValue: number,
  errorInput: boolean,
  connectAccount: boolean,
  approveWallet: boolean,
  hideFrom: boolean
}

const address = "0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C"

export const connectModule = {
    state: ():State => ({
        contract: {},
        wallet: "",
        balance: "",
        inputValue: 0,
        errorInput: false,
        connectAccount: false,
        approveWallet: false,
        hideFrom: false,
    }),
    getters: {
        getInputValue(state:State):number {
          return state.inputValue
        },
        getError(state:State):boolean {
          return state.errorInput
        },
        getConnectAccount(state:State):boolean {
          return state.connectAccount
        },
        getApproveWallet(state:State):boolean {
          return state.approveWallet
        },
        getHideFrom(state:State):boolean {
          return state.hideFrom
        }
    },
    mutations: {
        setInput(state:State, value: number) {
          state.inputValue = value
        },
        setWallet(state:State, value: string){
          state.wallet = value
        },
        setBalance(state:State, value: string) {
          state.balance = value
        },
        setConnect(state:State) {
          state.connectAccount = true
          state.approveWallet = true
        },
        setApproveWallet(state:State) {
          state.approveWallet = true
        },
        setHideFrom(state:State) {
          state.hideFrom = true
        }
      },
    actions: {
      async fetchAccount({state, commit, dispatch}: any):Promise<void> {
        if ((window as any).ethereum) {
          try {
            await dispatch("getWallet")
            const provider = new ethers.providers.Web3Provider((window as any).ethereum)
            //С помощью провайдера мы подключаемся к сети Blockcain
            const contract = new ethers.Contract(address, ABI, provider)
            state.contract = contract
            //Дает нам возможность читать view методы контракта
            const signer = provider.getSigner()
            //Нужен для подтверждения транзакций
            const wallet = await signer.getAddress(); 
            commit("setWallet", wallet)
            
             // Получить адрес кошелька
         
            // Получить кошелек
            const balance = await provider.getBalance(wallet)
            // state.balance = "ffdg"
            commit("setBalance", balance._hex)
            commit("setConnect")
            // Получить баланс кошелька
            
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