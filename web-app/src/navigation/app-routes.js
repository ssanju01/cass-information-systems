import { useRoutes } from 'react-router-dom';
import { lazyLoadRoutes } from '../utils/lazy-loader';
import routes from '../constants/routes';

export function AppRoutes() {
    const appRoutes = [
        {
            path: '/',
            children: [
                {
                    index: true,
                    path: routes.home,
                    element: lazyLoadRoutes('quotes/random'),
                },
                {
                    path: routes.author,
                    element: lazyLoadRoutes('quotes/author'),
                },
                {
                    path: routes.shipper,
                    element: lazyLoadRoutes('shipper/list'),
                },
                {
                    path: `${routes.shipper}/:id`,
                    element: lazyLoadRoutes('shipper/details'),
                },
            ]
        },
        {
            path: '*',
            element: lazyLoadRoutes('not-found')
        }
    ];

    return useRoutes(appRoutes);
}