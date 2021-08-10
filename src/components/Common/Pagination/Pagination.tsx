import React from 'react';

import { Pagination } from '@material-ui/lab';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { setPage } from '../../../redux/actions/movies';
import { useDispatch } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/core/styles';

type PaginatorProps = {
  page: number;
};

export const Paginator: React.FC<PaginatorProps> = ({ page }) => {
  const classes = useStyles();
  const totalPages = useTypedSelector(({ movies }) => movies.totalPages);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        page={page}
        defaultPage={1}
        onChange={(e, value) => dispatch(setPage(value))}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        padding: '48px 0',
      },
      '& .MuiPagination-ul': {
        justifyContent: 'center',
      },
      '& .Mui-selected': {
        color: '#000',
        borderColor: '#fff',
        backgroundColor: '#444',
      },
      '& .MuiPaginationItem-page': {
        borderColor: '#c1c1c1',
        color: '#c1c1c1',
      },
      '& .MuiPaginationItem-ellipsis': {
        borderColor: '#c1c1c1',
        color: '#c1c1c1',
      },
    },
  }),
);
