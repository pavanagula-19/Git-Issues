import { useEffect, useState } from "react"
import Create from "./Create";


export default function GitIssue() {
    function getData(page) {
        return fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
            .then(data => data.json());
    }
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getData(page)
            .then(data => setData(data))
    }, [page])
    return <div>
        <h1>Git Issuses Page</h1>
        <div>
            <ol>
                {
                    data.map((data, index) => (
                        <Create props={data} key={index} />
                    ))
                }
            </ol>
        </div>
        <div id="buttonHolder">
            <button id="load_prev" onClick={() => { setPage(page => (page !== 1 ? page-1 : page)); }}>
                Prev
            </button>
            <button id="load_next" onClick={() => { setPage(page => page + 1); }}>
                Next
            </button>
        </div>
        <div id="pageNo">
            PageNo : {page}
        </div>
    </div>
}