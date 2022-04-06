import { ethers, BigNumber } from "ethers"
const ABI = require('../ABI.json')

interface State {
  contract: object,
  wallet: any,
  balance: string,
  TKN: string,
  inputValue: number,
  errorInput: boolean,
  maxAmount: number,
  minAmount: number,
  apy: string,
  stakeFrom: string,
  stakeTo: string,
  connectAccount: boolean,
  approveWallet: boolean,
  hideFrom: boolean,
  transition: boolean
}

const address = "0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C"

export const connectModule = {
    state: ():State => ({
        contract: {},
        wallet: "",
        balance: "",
        TKN: "",
        inputValue: 10000,
        maxAmount: 12499,
        minAmount: 10000,
        apy: "103.23",
        stakeFrom: "",
        stakeTo: "",
        errorInput: false,
        connectAccount: false,
        approveWallet: false,
        hideFrom: false,
        transition: false
    }),
    getters: {
        getInputValue(state:State):number {
          return state.inputValue
        },
        getMaxAmount(state:State):number {
          return state.maxAmount
        },
        getApy(state:State): string {
            return state.apy
        },
        getError(state:State):boolean {
          return state.errorInput
        },
        getConnectAccount(state:State):boolean {
          return state.connectAccount
        },
        getWallet(state:State):string {
          // const walletRight = state.wallet.splice(6);
          const last = state.wallet.length - 1
          return `${state.wallet[0]}${state.wallet[1]}${state.wallet[2]}${state.wallet[3]}${state.wallet[4]}${state.wallet[5]}...${state.wallet[last-3]}${state.wallet[last-2]}${state.wallet[last-1]}${state.wallet[last]}`
        },
        getApproveWallet(state:State):boolean {
          return state.approveWallet
        },
        getHideFrom(state:State):boolean {
          return state.hideFrom
        },
        getStakeFrom(state:State):string {
          return state.stakeFrom
        },
        getStakeTo(state:State):string {
          return state.stakeTo
        },
        getTransition(state:State):boolean {
          return state.transition
        }
    },
    mutations: {
        setInput(state:State, value: number) {
          state.inputValue = value
          if (value < state.minAmount) {
            state.errorInput = true
          } else if(value > state.maxAmount){
            state.errorInput = true
          } else {
            state.errorInput = false
          }
        },
        setApy(state:State, value: string) {
          state.apy = value
        },
        setError(state: any) {
          if(state.inputValue < state.minAmount) {
            state.errorInput = true
          } else if(state.inputValue > state.maxAmount){
            state.errorInput = true
          } else {
            state.errorInput = false
          }
        },
        minRangeAmount(state: any, min: number):void {
          state.minAmount = min;
        },
         maxRangeAmount(state: any, max: number):void {
          state.maxAmount = max;
        },
        setWallet(state:State, value: string){
          state.wallet = value
        },
        setBalance(state:State, value: string) {
          state.balance = value
        },
        setTKN(state:State, value: string) {
          state.TKN = value
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
        },
        setStakeFrom(state:State) {
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                "July", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
          let date = new Date()
          const dateNow = `${date.getDate()} ${ monthNames[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`
          state.stakeFrom = dateNow
        },
        setStakeTo(state:State) {
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                "July", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
          let date = new Date()
          const dateNow = `${date.getDate()} ${ monthNames[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`
          state.stakeTo = dateNow
          state.transition = true
        }
      },
    actions: {
      async fetchAccount({state, commit, dispatch}: any) {
        if ((window as any).ethereum) {
          try {
            await dispatch("getWallet")
            const provider = new ethers.providers.Web3Provider((window as any).ethereum)
            //С помощью провайдера мы подключаемся к сети Blockcain
            const contract = new ethers.Contract(address, ABI, provider)
            state.contract = contract
            const TKN = await contract.TKN()
            commit("setTKN", TKN)
            
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
      async getWallet({state}: any) {
			  try {
          const accounts = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          state.wallet = accounts[0]
        }  catch (error) {
          console.log(error);
        }
			
      },
      async approveWallet({state, commit}: any) {
        if ((window as any).ethereum) {
          try {
            const provider = await new ethers.providers.Web3Provider((window as any).ethereum)
            const contract = await new ethers.Contract(state.TKN, ABI, provider)
            
            await commit("setHideFrom");
            
          } catch (error) {
            
          }
        }
      }
    },
    namespaced: true
}