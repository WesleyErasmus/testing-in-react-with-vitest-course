// import { describe, expect, it } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { App, WrappedApp } from '../src/App';
// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';

// describe('App', () => {
//   it('Renders hello world', () => {
//     render(<WrappedApp />);

//     expect(
//       screen.getByRole('heading', {
//         level: 1,
//       })
//     ).toHaveTextContent('Hello World');
//   });

//   it('Renders not found if path is invalid', () => {
//     render(
//       <MemoryRouter initialEntries={['/j']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(
//       screen.getByRole('heading', {
//         level: 1,
//       })
//     ).toHaveTextContent(
//       'Sorry the page you are looking for cannot be found, head Home and try again'
//     );
//   });
// });
