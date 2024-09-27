import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
  number : 0,
  increase : () => set((state)=>({
    number : state.number + 1
  })),
  decrease : () => set((state)=>({
    number : state.number -1
  }))
})

const useCountStore = create(devtools(store))

export default useCountStore;