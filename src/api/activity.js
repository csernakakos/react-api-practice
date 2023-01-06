import axios from "axios";

export async function getData(URL, setState) {
    const response = await axios.get(URL);
    setState(response.data);
}