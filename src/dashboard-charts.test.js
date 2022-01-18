import { render, screen } from '@testing-library/react';
import DashboardCharts from './dashboard-charts';

it('deve renderizar o cvomponente sem erros', () => {
  render(<DashboardCharts />);
  const linkElement = screen.getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
