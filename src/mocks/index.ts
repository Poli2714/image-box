const IS_BROWSER = typeof window === 'undefined';

export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { worker } = await import('./browser');
    worker.start();
  } else {
    const { server } = await import('./node');
    server.listen();
  }
};
