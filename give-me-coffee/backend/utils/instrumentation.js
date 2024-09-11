/*instrumentation.ts*/
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const {
  PeriodicExportingMetricReader,
} = require('@opentelemetry/sdk-metrics');

const sdk = new NodeSDK({
  // traceExporter: new ConsoleSpanExporter(),
  // metricReader: new PeriodicExportingMetricReader(),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
