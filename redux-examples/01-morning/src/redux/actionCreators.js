import { INCREMENT, DECREMENT } from "./actionTypes";

export const createIncrement = () => {
  return { type: INCREMENT };
};

export const createDecrement = () => {
  return { type: DECREMENT };
};

export const createDeposit = (amount) => {
  return { type: "DEPOSIT", amount };
};

export const createWithdrawal = (amount) => {
  return { type: "WITHDRAW", amount };
};
