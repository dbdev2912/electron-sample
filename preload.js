const { contextBridge } = require("electron")

const getData = () => {
    const data = [
        { id: 1, data: "Data" }
    ]
    return data
}

contextBridge.exposeInMainWorld("api", { getData })