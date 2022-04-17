import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import Catalog from '../../../Components/Catalog';
import Contain from '../../../Components/Catalog/Contain';
import GridItem from '../../../Components/Catalog/GridItem';
import data from '../../../data/data.json';

describe('test catalog page', () => {

    test('Snapshot Catalog', () => {
        const history = createMemoryHistory();
        history.push('/catalog/movies');
        const wrapper = render(
            <BrowserRouter history={history}>
                <Catalog />
            </BrowserRouter>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Title Popular Movies', () => {
        const wrapper = render(
            <Contain type='movie' />
        );

        const titleMovies = wrapper.getByText(/popular movies/i);
        expect(titleMovies).toBeInTheDocument();
    });

    test('Title Popular Series', () => {
        const wrapper = render(
            <Contain type='series' />
        );

        const titleSeries = wrapper.getByText(/popular series/i);
        expect(titleSeries).toBeInTheDocument();
    });

    test('Draw gridItem with dats', () => {
        const wrapper = render(
            <GridItem data={data.entries[0]}/>
        );

        const titleSerie = wrapper.getByText('Wolf Creek').innerHTML;
        const yearMovie = parseInt(wrapper.getByText('2016').innerHTML);

        expect(titleSerie).toBe(data.entries[0].title);
        expect(yearMovie).toBe(data.entries[0].releaseYear);

    });

});