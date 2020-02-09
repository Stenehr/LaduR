import React, { ReactNode } from 'react'
import { Table, Icon } from 'semantic-ui-react';
import { PagedList } from './types';

interface IProps<T> {
    toggler?: boolean; 
    source: PagedList<T>;
    header: IDataTableHeaderItem<T>[]
}

export interface IDataTableHeaderItem<T> {
    header: string;
    field: string;
    format?: (item: T) => ReactNode;
}

const DataTable: React.FC<IProps<any>> = ({ toggler, source, header }) => {

    const renderTd = (item: any, headerItem: IDataTableHeaderItem<any>) =>
        <Table.Cell key={headerItem.field}>{headerItem.format ? headerItem.format(item) : item[headerItem.field]}</Table.Cell>

    const openedDetails: number[] = [];

    const openCloseDetails = (item: any) => {
        const itemIndex = openedDetails.indexOf(item.id);
        if (itemIndex > -1) {
            openedDetails.splice(itemIndex, 1);
        } else {
            openedDetails.push(item.id);
        }
        console.log(openedDetails);
    }

    const isOpened = (item: any) => openedDetails.indexOf(item.id) > -1;

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {toggler && <Table.HeaderCell style={{width: "10px"}}></Table.HeaderCell>}
                        {header.map((headerItem, index) => (
                            <Table.HeaderCell key={index}>{headerItem.header}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {source.items.map((item, index) => (
                        <Table.Row key={index}>
                            {toggler && 
                                <Table.Cell>
                                    <Icon onClick={() => openCloseDetails(item)} link name={(isOpened(item) ? "minus square" : "plus square")} />
                                </Table.Cell>}
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
