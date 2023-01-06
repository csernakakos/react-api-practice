import { useContext } from "react";
import ApiContext from "../context/api";

export default function useApiContext() {
    return useContext(ApiContext);
}