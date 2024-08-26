import BooksProvider from './BooksProvider';
import BooksList from './BooksList';

function App() {
  return (
    <>
      <h1>Books management</h1>
      <BooksProvider>
        <BooksList />
      </BooksProvider>
    </>
  );
}

export default App;
