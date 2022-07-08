
import { render, screen } from '@test/framework';
import App from './App';

describe('App', () => {
  it('should render component', async () => {
    render(<App />);
    expect(await screen.findByTestId('app')).toBeInTheDocument();
  })
})
