import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchSearchMovie, setPage } from '../../redux/actions/movies';
import { Movie } from '../MovieInfo/Movie';
import './searchMovie.css';
import { Pagination } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export const SearchMovie: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useTypedSelector(({ movies }) => movies.movies);
  const { query } = useParams<{ query: string }>();
  const page = useTypedSelector(({ movies }) => movies.page);
  const totalPages = useTypedSelector(({ movies }) => movies.totalPages);

  React.useEffect(() => {
    dispatch(fetchSearchMovie(query, page));
  }, [query, page]);

  return (
    <div className="search">
      <div className="container">
        <div className={totalPages > 1 ? 'movies__content' : 'movies__content__less'}>
          {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
        <div className={classes.root}>
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            page={page}
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
