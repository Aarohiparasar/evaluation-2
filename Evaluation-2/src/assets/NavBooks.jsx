import './styles.css'
function NavBooks() {
  return (
    <div className="nav">
      <Link path='./books'>All</Link>
      <Link path='./book/Fantasy'>Fantasy</Link>
      <Link  path='./book/Fiction'>Fiction</Link>
      <Link path='./book/Adventure'>Adventure</Link>
      <Link path='./book/Science'>Science</Link>
    </div>
  );
}
export default NavBooks