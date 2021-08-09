import React from 'react';
import './movies.css';
import { useDispatch } from 'react-redux';
import { fetchMovies, setPage } from '../../redux/actions/movies';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Movie } from '../MovieInfo/Movie';
import { Pagination } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const Movies: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useTypedSelector(({ movies }) => movies.movies);
  const page = useTypedSelector(({ movies }) => movies.page);
  const totalPages = useTypedSelector(({ movies }) => movies.totalPages);

  React.useEffect(() => {
    dispatch(fetchMovies(page));
  }, [page]);

  return (
    <div className="movies">
      <div className="container">
        <div className="movies__content">
          {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
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
      </div>
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
