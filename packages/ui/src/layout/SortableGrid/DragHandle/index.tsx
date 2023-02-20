import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import cx from 'classnames';

import styles from './index.module.scss';

interface OwnProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const DragHandle = ({ children, className = '', id }: OwnProps) => {
    const { attributes, listeners } = useSortable({ id });

    return (
        <div className={cx(styles.dragHandle, className)} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

export default DragHandle;
