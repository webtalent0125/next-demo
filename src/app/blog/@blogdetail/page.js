import styels from "./style.module.css";
export default function Blogdetail({ params }) {
  console.log(params);
  return (
    <h1 className={styels.dashboard}>
      {"this is blog detail page " + params.blogdetail}
    </h1>
  );
}
