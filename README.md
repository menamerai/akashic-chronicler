# Akashic Chronicler

*First place winner* for The Graph@UC's 2023 Hackathon.

Astro with React integrations app to fetch data from The Graph's Akasha Subgraph.

The Akasha subgraph indexes [this custom smart contract](https://github.com/menamerai/akasha).
The smart contract was deployed with Thirdweb on the Goerli testnet, and can be interfaced directly at [this thirdweb endpoint](https://thirdweb.com/goerli/0x6a39F8b0eF0CAb4216734CdF86Feb4740Fd443ab).
Each user can add their own "Record", which represents a knowledge, and anyone can add a Flashcard to that knowledge.

The Akashic Chronicler has a default "Explore" mode, which displays all current blocks on the network.
A "Personal" mode is also possible with Thirdweb's wallet connect, which displays all user-owned records and flashcards only.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## Notes

The project requires Node v20.0.4.

## License

The project is licensed under the MIT license.
