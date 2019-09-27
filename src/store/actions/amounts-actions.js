import {HANDLE_AMOUNTS} from "../constants";

export const handleAmounts = (amounts) => ({
    type: HANDLE_AMOUNTS,
    amounts
});
