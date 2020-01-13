import React from 'react'
import { Icon } from 'semantic-ui-react'

interface IProps {
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DeleteIconButton: React.FC<IProps> = ({ onClick }) => {
    return (
        <Icon onClick={onClick} link color="red" size="large" name="delete" />
    )
}
