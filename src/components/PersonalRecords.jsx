import { useEffect, useState } from "react";
import Card from "./Card.jsx";

export default function PersonalRecords() {
    const [address, setAddress] = useState(null);
    const [records, setRecords] = useState(null);


    function onWalletConnected(inAddr) {
        fetch("https://api.studio.thegraph.com/query/55572/akasha/version/latest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            query GetAllRecords {
                recordAddeds(where: { _from: "${inAddr}"}) {
                    id
                    _recordId
                    _title
                    _description
                    _from
                }
            }
            `,
        })
        }).then((response) => response.json()).then((result) => { setRecords(result.data.recordAddeds) });
    }

    useEffect(() => {
        window.addEventListener("walletConnected", (event) => {
            setAddress(event.detail.wallet);
        });
    }, []);

    useEffect(() => {
        if (address) {
            onWalletConnected(address);
            console.log("Address: ", address);
            console.log("Records: ", records);
        }
    }, [address]);

    if (!records) {
        return (
            <div className="w-full h-[70vh] flex justify-center items-center">
                <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap justify-start items-center">
            {records.map((record) => {
                console.log(record);
                return (
                    <Card title={record._title} content={record._description} id={record._from} routePrefix={`record/${record._recordId}/`} />
                )
            })}
        </div>
    )
}