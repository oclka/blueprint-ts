import { runCli } from '@/cli';

describe('cli', () => {
  it('should log a Hello World message', () => {
    const mockConsoleLog = vi.spyOn(console, 'log');

    runCli();

    expect(mockConsoleLog).toHaveBeenCalledWith('Hello World!');
  });
});
