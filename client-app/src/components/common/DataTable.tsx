import React from 'react'
import { Table } from 'semantic-ui-react'

interface IProps {
    items: any[];
    pageNum: number;
    totalPages: number;
    header: IDataTableHeaderItem[]
}

export interface IDataTableHeaderItem {
    header: string;
    field: string;
}

const DataTable: React.FC<IProps> = ({ items, pageNum, totalPages, header }) => {

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {header.map((headerItem, index) => (
                            <Table.HeaderCell key={index}>{headerItem.header}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.map((item, index) => (
                        <Table.Row key={index}>
                            {header.map((headerItem) => (
                                <Table.Cell>{item[headerItem.field]}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DataTable;
