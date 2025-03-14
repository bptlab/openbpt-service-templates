# OpenBPT Service Template

This Javascript template facilitates the development of services for OpenBPT, providing essential scaffolding to get started quickly.

## Setup

Follow these steps to set up the environment:

1. Clone this repository.
2. Install dependencies: `npm install`
3. (Optional) Create a `.env.production` file (used for `npm start`) or adapt the `.env.development` config (used for `npm run dev`).

## Writing Your Service

Develop your service by focusing on two primary components: the manifest and the run function.

- **Manifest**: Defined in `src/manifest.js`, this file contains a template which you can customize based on your service's requirements. **Important**: If the service accepts inputs or outputs of type `PayloadType.MODEL` or `PayloadType.CURRENT_MODEL`, please assign the `modelType` property accordingly. Furthermore, if a model output should be saved in the backend, this can be specified by setting the property `saveModel: true`.
- **Run Function**: Located in `src/service.js`, this function utilizes helper methods from the `openbpt-services-core` package to safely access input values. Use `getInputValue(input, manifest, "input_id")` for mandatory inputs and `getOptionalInputValue(input, manifest, "input_id")` for optional inputs. Ensure that `input_id` matches the input ID in the manifest. Your service must generate an output for each output defined in the manifest, formatted as an object with keys corresponding to the output IDs.

## Starting the Service

- **Development**: Run `npm run dev` to start the service in development mode.
- **Production**: Run `npm start` to launch the service in production.

The service automatically interfaces with the backend through the `openbpt-services-core` package, which manages data exchange.

## Testing and Linting

The service is preconfigured with Eslint for linting and Jest for testing.

- **Eslint Configuration**: Edit settings in `eslint.config.mjs` as needed.
- **Jest Configuration**: Customize settings in `jest.config.js` if necessary.

To perform linting, execute:

```bash
npm run lint
```

To run tests, use:

```bash
npm test
```
