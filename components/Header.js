export default function Header({ title }) {
  return <h1 className="title" style={{
    fontSize: '3rem',
    color: 'white',
    textShadow: '0 0 10px black',
    zIndex: 1,
    position: 'relative',
  }}>{title}</h1>
}
