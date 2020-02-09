import React, { ReactNode } from 'react'
import { Table } from 'semantic-ui-react'
import { PagedList } from './types';

interface IProps<T> {
    source: PagedList<T>;
    header: IDataTableHeaderItem<T>[]
}

export interface IDataTableHeaderItem<T> {
    header: string;
    field: string;
    format?: (item: T) => ReactNode;
}

const DataTable: React.FC<IProps<any>> = ({ source, header }) => {

    const renderTd = (item: any, headerItem: IDataTableHeaderItem<any>) =>
        <Table.Cell key={headerItem.field}>{headerItem.format ? headerItem.format(item) : item[headerItem.field]}</Table.Cell>

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
                    {source.items.map((item, index) => (
                        <Table.Row key={index}>
                            {header.map((headerItem, index) => (
                                renderTd(item, headerItem)
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DataTable;
