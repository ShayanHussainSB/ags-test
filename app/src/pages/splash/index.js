import './style.scss'

export default function Splash(props) {
  return (
    <>
      <div className="screen">
        <h1>{props?.title || "LOADING   "}</h1>
        <div className="main mt-4">
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
        </div>
      </div>
    </>
  )
}
