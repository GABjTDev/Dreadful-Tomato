import React from 'react';
import Home from '../../../Components/Home';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('test home page', () => {

    test('Snapshot home', () => {
        const history = createMemoryHistory();
        history.push('/');
        const wrapper = render(
            <BrowserRouter history={history}>
                <Home />
            </BrowserRouter>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Obtain img series and movies, format png', () => {
        const history = createMemoryHistory();
        history.push('/');
        const wrapper = render(
            <BrowserRouter history={history}>
                <Home />
            </BrowserRouter>
        );

        const srcImgSeries = wrapper.getByAltText('cover series');
        expect(srcImgSeries).toHaveAttribute('src', 'series.png');

        const srcImgMovies = wrapper.getByAltText('cover movies');
        expect(srcImgMovies).toHaveAttribute('src', 'movies.png');
    });

});