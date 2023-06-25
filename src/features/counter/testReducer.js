import { createReducer } from '@reduxjs/toolkit'

export const testReducer = createReducer(0, (builder) => {
  builder
    .addCase('increment', (state) => state + 1)
})





