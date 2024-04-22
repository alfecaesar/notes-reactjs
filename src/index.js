import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('tco-note-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

