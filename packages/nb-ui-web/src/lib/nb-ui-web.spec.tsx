import { render } from '@testing-library/react';

import NbUiWeb from './nb-ui-web';

describe('NbUiWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NbUiWeb />);
    expect(baseElement).toBeTruthy();
  });
});
