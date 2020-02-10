import React, { ReactNode, useState, Fragment } from 'react'
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

    const [openedStateDetails, setOpenCloseDetails] = useState(new Array<number>());

    const renderTd = (item: any, headerItem: IDataTableHeaderItem<any>) =>
        <Table.Cell key={headerItem.field}>{headerItem.format ? headerItem.format(item) : item[headerItem.field]}</Table.Cell>

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
                        <Fragment key={index}>
                            <Table.Row>
                                {toggler && 
                                    <Table.Cell>
                                        <Icon onClick={() => openCloseDetails(item)} link name={(isOpened(item) ? "minus square" : "plus square")} />
                                    </Table.Cell>}
                                {header.map((headerItem, index) => (
                                    renderTd(item, headerItem)
                                ))}
                            </Table.Row>
                            {isOpened(item) && 
                                <Table.Row>
                                    <Table.Cell positive colSpan={toggler ? header.length + 1 : header.length}>
                                    TEST
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
