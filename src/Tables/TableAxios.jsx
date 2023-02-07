import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Avatar } from "@mui/material";

export const TableAxios = () => {

    const [products, setProducts] = useState([])

    const endpoint = 'https://fakestoreapi.com/products'

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data;
            console.log(data)
            setProducts(data)
        })
    }

    const columns = [
        {
            name: "id",
            label: "ID"
        },
        {
            name: "title",
            label: "TITLE"
        },
        {
            name: "category",
            label: "CATEGORY"
        },
        {
            name: "image",
            label: "Image",
            options: {
                customBodyRender: (params) => {
                    return (
                        <Avatar variant="rounded" src={params}  sx={{ width: 80, height: 80}}>
                        </Avatar>
                    )
                }
            }
        },
    ]

useEffect(() => {
    getData()
}, [])

return (
    <MUIDataTable
        title={"Búsqueda de productos"}
        data={products}
        columns={columns}
        
    />
)
}
