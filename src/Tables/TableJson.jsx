import MUIDataTable from "mui-datatables";
import users from "./users.json"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})


export class TableJson extends React.Component {
    render() {

        const columns = [
            {
                name: "id",
                label: "ID",
                options: { filter: true, sort: true }
            },
            {
                name: "name",
                label: "NAME"
            },
            {
                name: "gender",
                label: "GENDER",
                options: { filter: true, sort: true }
            },
            {
                name: "price",
                label: "PRICE"
            }
        ]
        return (
            <ThemeProvider theme={darkTheme}>
                <MUIDataTable
                    title={"Lista de usuarios"}
                    data={users}
                    columns={columns}
                />
            </ThemeProvider>

        )
    }

}
