import {Detail, LaunchProps} from '@raycast/api'
import {useState, useEffect} from "react";
import {fetchChatResponse} from "./api";

interface PromptText {
    prompt: string;
}

export default function askGPT(props: LaunchProps<{ arguments: PromptText }>) {
    const [response, setResponse] = useState("");
    // const prompt = "Write a quick sort using JavaScript";
    const { prompt } = props.arguments;

    useEffect(() => {
        async function callApi() {
            try {
                const strResponse = await fetchChatResponse(prompt);
                setResponse(strResponse);
            } catch (err) {
                console.log(err)
            }
        }
        callApi();
    }, [])
    return <Detail markdown={response ? response : "Loading..."}/>
}