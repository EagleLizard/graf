# graf

Baseline graph implementation for asynchronous Graph Walkers. Made to model pedestrian (individual, car, and metro) simulation, as well and driving an asynchronous backend workflow manager.

## Getting Started

Built with Node JS `v12.0.0`.

To run:

```shell
$ node main.js
```

This will run an example graf traversal comparing heuristic vs. brute force pathfinding of a bi-directional cyclic graph, modelled after a real world example. This only shows parity, not performance.

## To Test
Default command for running tests:
```shell
$ npm run test
```

This will run the tests, including the brute force vs. heuristic performance tests with performance output comparison (by percentage improvement).

### Test Coverage
There are two ways to output test coverage. Via the CLI only:
```shell
$ npm run test:coverage
```
will produce instanbul/nyc output in a table.

The second method will produce html assets to provide a UI for viewing coverage (Only compatibility tested with MacOS). This will automatically open a browser window with top level results:
```shell
$ npm run test:html
```