import React from 'react';

import { Skeleton } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton variant="rect" width={300} height={450} />
      <Skeleton variant="text" />
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiSkeleton-rect': {
        background: '#292929',
      },
      '& .MuiSkeleton-text': {
        background: '#292929',
        padding: '7px 0px',
        width: '50%',
        marginTop: '5px',
      },
    },
  }),
);
