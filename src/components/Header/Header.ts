interface IHeader {
  title: string
}
function Header({ title }: IHeader) {
  /* Header stuff here */
  console.log('title', title)
}
export default Header
