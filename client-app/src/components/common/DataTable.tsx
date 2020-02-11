import moment from "moment";
import React, { ReactNode, useState, Fragment } from 'react'
import { Table, Icon } from 'semantic-ui-react';
import { PagedList } from './types';

interface IProps<T> {
    rowContent?: (item: T) => ReactNode;
    source: PagedList<T> | T[];
    header: IDataTableHeaderItem<T>[];
    color?: "red" | "green" | "blue";
}

export interface IDataTableHeaderItem<T> {
    header: string;
    field: string;
    type?: "date";
    format?: (item: T) => ReactNode;
}

const DataTable: React.FC<IProps<any>> = ({ color, rowContent, source, header }) => {

    const [openedStateDetails, setOpenCloseDetails] = useState(new Array<number>());

    const renderTd = (item: any, headerItem: IDataTableHeaderItem<any>) => {

        let fieldValue = null;

        if (headerItem.format)
            fieldValue = headerItem.format(item);
        else if (headerItem.type) {
            switch(headerItem.type) {
                case "date":
                    fieldValue = moment(item[headerItem.field]).format("DD.MM.YYYY");
                    break;
                default:
                    fieldValue = item[headerItem.field];
            }
        } else
            fieldValue = item[headerItem.field];

        return <Table.Cell key={headerItem.field}>{fieldValue}</Table.Cell>
    }

    const openCloseDetails = (item: any) => {
        const openedDetails = [...openedStateDetails];

        const itemIndex = openedDetails.indexOf(item.id);
        if (itemIndex > -1) {
            openedDetails.splice(itemIndex, 1);
        } else {
            openedDetails.push(item.id);
        }
        setOpenCloseDetails([...openedDetails]);
    }

    const isOpened = (item: any) => openedStateDetails.indexOf(item.id) > -1;

    return (
        <div>
            <Table celled color={color}>
                <Table.Header>
                    <Table.Row>
                        {rowContent && <Table.HeaderCell style={{width: "10px"}}></Table.HeaderCell>}
                        {header.map((headerItem, index) => (
                            <Table.HeaderCell key={index}>{headerItem.header}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {(Array.isArray(source) ? source : source.items).map((item, index) => (
                        <Fragment key={index}>
                            <Table.Row positive={isOpened(item)}>
                                {rowContent && 
                                    <Table.Cell>
                                        <Icon onClick={() => openCloseDetails(item)} link name={(isOpened(item) ? "minus square" : "plus square")} />
                                    </Table.Cell>}
                                {header.map((headerItem, index) => (
                                    renderTd(item, headerItem)
                                ))}
                            </Table.Row>
                            {isOpened(item) && 
                                <Table.Row>
                                    <Table.Cell positive colSpan={header.length + 1}>
                                        {rowContent && rowContent(item)}
                                    </Table.Cell>
                                </Table.Row>
                            }
                        </Fragment>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default DataTable;
