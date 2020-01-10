fdescribe('web worker tests', () => {
  it('web worker can be created', () => {
    const myWorker = new Worker('assets/worker.js');
    expect(myWorker).toBeTruthy();
  });

  it('can send messages to the web worker (done)', done => {
    const myWorker = new Worker('assets/worker.js');

    myWorker.onmessage = result => {
      expect(result.data).toBe('Result: 4');
      done();
    };

    myWorker.postMessage([2, 2]);
  });
});
