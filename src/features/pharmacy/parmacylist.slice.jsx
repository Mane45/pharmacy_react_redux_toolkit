import { createSlice } from '@reduxjs/toolkit'

const DrugSlice = createSlice({
    name: "drugs",
    initialState: {
        drugs: [
            { id: 101, name: 'Vitamin D3', img: "https://cdn2.iconfinder.com/data/icons/vitamins-flaticon/64/knee-vitamin-maintain-health-drug-healthy-512.png", review: 5 },
            { id: 102, name: 'Vitamin C', img: "https://cdn2.iconfinder.com/data/icons/vitamins-flaticon/64/vitamin_c-vitamin-maintain-health-drug-healthy-512.png", review: 3 },
            { id: 103, name: 'Vitamin B2', img: "https://cdn2.iconfinder.com/data/icons/vitamins-filloutline/64/vitamin_b-vitamin-maintain-health-drug-healthy-512.png", review: 4 },
            { id: 104, name: 'Vitamin A', img: "https://cdn2.iconfinder.com/data/icons/vitamins-flaticon/64/vitamin_a-vitamin-maintain-health-drug-healthy-512.png", review: 4 },
            { id: 105, name: 'Vitamin O3', img: "https://cdn2.iconfinder.com/data/icons/vitamins-flaticon/64/fish_oil-vitamin-maintain-health-drug-healthy-512.png", review: 5 }

        ]
    },
    reducers: {
        findeDrug: (state, action) => {
            state.drugs = state.drugs.filter(drug => drug.name.includes(action.payload))
        },
        increment: (state, action) => {
            return {
                ...state,
                drugs: state.drugs.map(drug => {
                    if (drug.id === action.payload) {
                        return {
                            ...drug,
                            review: drug.review + 1
                        }
                    }
                    return drug;
                })
            }
        },
        decrement: (state, action) => {
            return {
                ...state,
                drugs: state.drugs.map(drug => {
                    if (drug.id === action.payload) {
                        return {
                            ...drug,
                            review: drug.review - 1
                        }
                    }
                    return drug;
                })
            };
        }
    }

})

export const userReducer = DrugSlice.reducer
export const { findeDrug } = DrugSlice.actions
export const { increment } = DrugSlice.actions
export const { decrement } = DrugSlice.actions